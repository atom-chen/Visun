#!/usr/bin/python
# -*- coding: UTF-8 -*- 

#Date: 2018/10/11
#Author: dylan
#Desc: 客户定制打包脚本
import io
import os
import json
from xml.dom import minidom
import shutil
import codecs
import urllib
import urllib2
import sys

#工作目录
PRJ_WORK_PATH = 'C:\\Users\\Admin\\Desktop\\dylan_hh\\FuGou'
#COCOS引擎目录
COCOS_ENGINE_PATH = 'C:\\CocosCreator'
#打包参数
BUILD_PARAM = 'platform=android;debug=false'
#COCOS打包命令
COCOS_BUILD_CMD = 'CocosCreator.exe --path {0} --build \"{1}\"'
#COCOS编译命令
COCOS_COMPILE_CMD = 'CocosCreator.exe --path {0} --compile \"{1}\"'
#客户配置文件目录
CUSTOMER_CONFIG_PATH = 'customer_config'
#服务器配置文件
SERVER_CONFIG_PATH = 'customer_config\\server_config.json'
#cocos BUILDER
COCOS_BUILDER_PATH = 'settings\\builder.json'
#项目 uuid 配置
PRJ_UUID_CONFIG = 'library\\uuid-to-mtime.json'
#安卓studio项目RES配置
ANDROID_RES_CONFIG = 'build\\jsb-binary\\frameworks\\runtime-src\\proj.android-studio\\app\\res'
#安卓studio项目build.gradle配置
ANDROID_BUILD_GRADLE = 'build\\jsb-binary\\frameworks\\runtime-src\\proj.android-studio\\app\\build.gradle'
#启动场景
START_FIRE = 'start'
#loading场景
LOADING_FIRE = 'Loading_{0}'


#工程游戏目录
PRJ_GAME_PATH = "assets/Games"

#打包原生资源目录
BUILD_RAW_ASSETS_PATH = "build\\jsb-binary\\res\\raw-assets"
#打包资源目录
BUILD_RES_ASSETS_PATH = "build\\jsb-binary\\res"
#打包脚本目录
BUILD_SRC_ASSETS_PATH = "build\\jsb-binary\\src"
#打包引用关系目录
BUILD_IMPORT_ASSETS_PATH = "build\\jsb-binary\\res\\import"
#自动构建脚本所在目录
AUTO_BUILD_PATH = "ly_build_tools\\auto_build_customer"
#本地热更新文件夹目录
LOCAL_HOT_PATH = "ly_build_tools/auto_build_customer/HotUpdate"
#热更新文件夹前缀
HOT_FOLDER_PREFIX = 'remote-assets-'
#热更新文件夹格式
HOT_FOLDER_FORMAT = '{0}/{1}{2}'
#热更新version_mainfest地址格式
HOT_VERSION_MAINFEST_FORMAT = '{0}/{1}{2}/version.manifest'
#热更新project_mainfest地址格式
HOT_PRJ_MAINFEST_FORMAT = '{0}/{1}{2}/project.manifest'
#构建大厅manifiset路径
BUILD_HALL_VERSION_MANIFEST = 'build/jsb-binary/res/raw-assets/version.manifest'
#构建客户配置文件
BUILD_CUSTOMER_CONFIG_PATH = 'build/jsb-binary/res/raw-assets/CustomMade/customer_config.json'
#构建游戏manifiset路径
BUILD_GAME_VERSION_MANIFEST = 'build/jsb-binary/res/raw-assets/resources/Versions'

#node命令
NODE_CMD_FORMAT = 'node version_generator.js -v 1.0.1 -u {1}/remote-assets-{0}/ -s remote-assets-{0}/ -d remote-assets-{0}/'


def getDataFromFile(filePath):
	fo = open(filePath , 'r')
	if(fo): 
		return fo.read()

def getJsonDataFromFile(filePath):
	fileStr = getDataFromFile(filePath)
	fileData = None
	if(fileStr):
		fileData = json.loads(fileStr)
	return fileData

def saveDataToFile(filePath ,data):
	fo = open(filePath , 'w')
	bRet = False
	if(fo):
		fo.write(data)
		fo.close()        
		bRet = True
	else:
		bRet = False
	return bRet

def saveJsonDataToFile(filePath , data):
	dataStr = json.dumps(data)
	bRet = saveDataToFile(filePath , dataStr)
	if(not bRet):
		print filePath + ' load failed!'

def getCustomerConfigData(customerMark):
	customerPath = os.path.join(CUSTOMER_CONFIG_PATH , customerMark)
	configPath = os.path.join(customerPath , 'config.json')
	info = getJsonDataFromFile(configPath )
	if not info:
		packageName = "org.cocos2d." + customerMark
		info = {  
				"customerMark": customerMark,
				"appName": customerMark,
				"packageName": packageName
		}
	return info

#找到所有的场景UUID信息
def findAllFireInfo(uuidFile):
	fireInfoList = []
	infos = getJsonDataFromFile(uuidFile)
	if(infos):
		for k , v in infos.items():
			relativePath = v['relativePath']
			if(relativePath.find('.fire') != -1):
				fireInfoList.append({'uuid':k , 'path' : relativePath})
	return fireInfoList

def getNoNeedFireInfosByCustomerMark(fireInfos, customerMark):
	global LOADING_FIRE
	result = []
	for fireInfo in fireInfos:
		findKey = LOADING_FIRE.format(customerMark)
		if(fireInfo['path'].find(findKey) == -1):
			result.append(fireInfo['uuid'])
	return result

def getCustomerStartFire(fireInfos , customerMark):
	global START_FIRE
	result = None
	for fireInfo in fireInfos:
		findKey = START_FIRE
		if(fireInfo['path'].find(findKey) != -1):
			result = fireInfo['uuid']
	return result
	
def addBuildParam(buildParam , param):
	buildParam += ';' + param 
	return buildParam

def getBuildCMD(workPath , buildParam):
	return COCOS_BUILD_CMD.format(workPath , buildParam)
def getCompileCMD(workPath , buildParam):
	return COCOS_COMPILE_CMD.format(workPath , buildParam)

def updateBuilderFile(customerMark):
    '''
	global PRJ_UUID_CONFIG
	fireInfos =  findAllFireInfo(PRJ_UUID_CONFIG)
	noNeedFireInfos = getNoNeedFireInfosByCustomerMark(fireInfos , customerMark)
	startFireInfo = getCustomerStartFire(fireInfos , customerMark)
	assert(startFireInfo)
	data = getJsonDataFromFile(COCOS_BUILDER_PATH)
	#data['excludeScenes'] = noNeedFireInfos
	data['startScene'] = startFireInfo
	#data['optimizeHotUpdate'] = False
	data['title'] = customerMark
	customerConfig = getCustomerConfigData(customerMark)
	data['packageName'] = customerConfig['packageName']
	saveJsonDataToFile(COCOS_BUILDER_PATH , data)
	'''
def setAppName(appName , platform = 'android'):
	if platform == 'android':
		global ANDROID_RES_CONFIG
		nameConfig = os.path.join(ANDROID_RES_CONFIG , 'values\\strings.xml')
		doc = minidom.parse(nameConfig)
		root = doc.documentElement
		target = root.getElementsByTagName("string")
		node = target[0].childNodes[0] 
		node.data = appName
		f= open(nameConfig, 'w')
		writer = codecs.lookup('utf-8')[3](f)
		root.writexml(writer)
		writer.close()    
def setPackageName(packageName , platform = 'android'):
		if platform == 'android':
				global ANDROID_BUILD_GRADLE
				data = ''
				with open(ANDROID_BUILD_GRADLE, 'r+') as f:
						for line in f.readlines():
								if(line.find('applicationId') != -1):
										line = '\t\tapplicationId ' + '\"' + packageName + '\"\n'
								data += line
				with open(ANDROID_BUILD_GRADLE, 'r+') as f:
						f.writelines(data)
def copyAppIcon(customerMark , platform = 'android'):
	customerPath = os.path.join(CUSTOMER_CONFIG_PATH , customerMark)
	templateIconPath = os.path.join(os.path.join(customerPath, 'icon') , platform)
	if platform == 'android':
		global ANDROID_RES_CONFIG
		for dirTemp in os.listdir(ANDROID_RES_CONFIG):
			if dirTemp != 'values':
				shutil.rmtree(os.path.join(ANDROID_RES_CONFIG ,dirTemp))
		for dirTemp in os.listdir(templateIconPath):
			shutil.copytree(os.path.join(templateIconPath ,dirTemp), os.path.join(ANDROID_RES_CONFIG ,dirTemp))

def deleteBuildAsserts(customerMark):
	tree1 = os.path.join(BUILD_RAW_ASSETS_PATH , 'Games')
	tree2 = os.path.join(BUILD_RAW_ASSETS_PATH , 'Hall//Texture//Login')
	tree3 = os.path.join(BUILD_RAW_ASSETS_PATH , 'Hall//Texture//NewMenuScene')
	tree4 = os.path.join(BUILD_RAW_ASSETS_PATH , 'resources')
	shutil.rmtree(tree1)
	shutil.rmtree(tree2)
	shutil.rmtree(tree3)
	shutil.rmtree(tree4)
	#移除其他客户的资源
	tree5 = os.path.join(BUILD_RAW_ASSETS_PATH , 'CustomMade')
	for dirName in os.listdir(tree5):
		if os.path.isdir(dirName) and customerMark != dirName and customerMark != 'master':
				shutil.rmtree(dirName)
	
#执行平台CMD命令
def excuteCmd(cmdStr):
	os.system(cmdStr)

def getAllCustomers():
	cList = []
	for sPath in os.listdir(CUSTOMER_CONFIG_PATH):
		realPath = os.path.join(CUSTOMER_CONFIG_PATH , sPath)
		if os.path.isdir(realPath):
			cList.append(sPath) 
	return cList

def getAllGame():
	cList = []
	for sPath in os.listdir(PRJ_GAME_PATH):
		realPath = os.path.join(PRJ_GAME_PATH , sPath)
		if os.path.isdir(realPath):
			cList.append(sPath) 
	return cList    	 


def getJsonDataFromUrl(url):
		req = urllib2.Request(url)
		res_data = urllib2.urlopen(req)
		res = res_data.read()
		return json.loads(res)

def addVersion(versionStr):
		versionStr = versionStr.encode('utf-8')
		vList = str.split(versionStr , '.') 
		vList[2] = str(int(vList[2]) + 1)
		versionStr = '.'.join(vList)
		return versionStr

def addVersionToFile(url , folder):
		global HOT_VERSION_MAINFEST_FORMAT
		global HOT_FOLDER_PREFIX
		global AUTO_BUILD_PATH
		mainfestUrl =  HOT_VERSION_MAINFEST_FORMAT.format(url , HOT_FOLDER_PREFIX , folder)
		print mainfestUrl
		urlData = None
		try:
				urlData =  getJsonDataFromUrl(mainfestUrl)
		except:
				print 'get version from url error'
		else:
				version =  urlData["version"]
				version = addVersion(version)
				urlData["version"] = version
				localHotFolder = HOT_VERSION_MAINFEST_FORMAT.format(LOCAL_HOT_PATH , HOT_FOLDER_PREFIX , folder)
				saveJsonDataToFile(localHotFolder , urlData)
def getCustomerFullConfig(customerMark , server = 'test'):
	global SERVER_CONFIG_PATH
	customerConfig = getCustomerConfigData(customerMark)
	print SERVER_CONFIG_PATH
	print server
	serverConfig = getJsonDataFromFile(SERVER_CONFIG_PATH)[server]
	print serverConfig
	serverConfig.update(customerConfig)
	HTTP_BASE_URL = os.environ["HTTP_BASE_URL"]
	WEBSOCKET_BASE_URL = os.environ["WEBSOCKET_BASE_URL"]
	hotUpdate = os.environ["hotUpdate"]
	if HTTP_BASE_URL:
		serverConfig['HTTP_BASE_URL'] = HTTP_BASE_URL
	if WEBSOCKET_BASE_URL:
		serverConfig['WEBSOCKET_BASE_URL'] = WEBSOCKET_BASE_URL
	if hotUpdate:
	   	serverConfig['hotUpdate'] = hotUpdate
	return  serverConfig   

def copyGameHotAssets(gameName):
		global HOT_FOLDER_FORMAT
		hotFolder = HOT_FOLDER_FORMAT.format(LOCAL_HOT_PATH , HOT_FOLDER_PREFIX , gameName)
		hotResFolder = os.path.join(hotFolder , 'res')
		hotSrcFolder = os.path.join(hotFolder , 'src')
		hotRawResFolder = os.path.join(hotResFolder , 'raw-assets')
		hotGameRawResFolder = os.path.join(hotRawResFolder , 'Games')
		print hotResFolder
		if not os.path.exists(hotFolder):
				os.makedirs(hotFolder)
		if not os.path.exists(hotResFolder):
				os.makedirs(hotResFolder)
		if not os.path.exists(hotSrcFolder):
				os.makedirs(hotSrcFolder)
		if not os.path.exists(hotRawResFolder):
				os.makedirs(hotRawResFolder)
		if  os.path.exists(hotGameRawResFolder):
				shutil.rmtree(hotGameRawResFolder)
		os.makedirs(hotGameRawResFolder)
		hotGameFolder = os.path.join(hotGameRawResFolder , gameName)
		buildGameFolder = os.path.join(os.path.join(BUILD_RES_ASSETS_PATH , 'raw-assets//Games') , gameName)
		if os.path.isdir(buildGameFolder):
			shutil.copytree(buildGameFolder , hotGameFolder)

def copyHallHotAssets(folder):
		global LOCAL_HOT_PATH
		global HOT_FOLDER_FORMAT
		hotFolder = HOT_FOLDER_FORMAT.format(LOCAL_HOT_PATH , HOT_FOLDER_PREFIX , folder)
		hotResFolder = os.path.join(hotFolder , 'res')
		hotSrcFolder = os.path.join(hotFolder , 'src')
		if os.path.exists(hotResFolder):
				shutil.rmtree(hotResFolder)
		if os.path.exists(hotSrcFolder):
				shutil.rmtree(hotSrcFolder)
		shutil.copytree(BUILD_RES_ASSETS_PATH , hotResFolder)
		shutil.copytree(BUILD_SRC_ASSETS_PATH , hotSrcFolder)
		hotRawResFolder = os.path.join(hotResFolder , 'raw-assets')
		hotGameRawResFolder = os.path.join(hotRawResFolder , 'Games')
		hotGameAudioFolder = os.path.join(hotRawResFolder , 'resources/Audios/Games')
		hallVersionManifest = os.path.join(hotRawResFolder , 'version.manifest')
		shutil.rmtree(hotGameRawResFolder)
		shutil.rmtree(hotGameAudioFolder)
		os.remove(hallVersionManifest)

def updateOneVersionManifest(filePath, customerMark):
		data = getJsonDataFromFile(filePath)
		customerConfig = getCustomerFullConfig(customerMark )
		url = customerConfig['hotUpdate']
		data['packageUrl'] = HOT_FOLDER_FORMAT.format(url , HOT_FOLDER_PREFIX , customerMark)
		data['remoteManifestUrl'] = HOT_PRJ_MAINFEST_FORMAT.format(url , HOT_FOLDER_PREFIX , customerMark)
		data['remoteVersionUrl'] = HOT_VERSION_MAINFEST_FORMAT.format(url , HOT_FOLDER_PREFIX , customerMark)
		saveJsonDataToFile(filePath , data)

def updateVersionManifest(customerMark):
		global HOT_FOLDER_FORMAT
		global HOT_VERSION_MAINFEST_FORMAT
		global HOT_PRJ_MAINFEST_FORMAT
		global BUILD_GAME_VERSION_MANIFEST
		#修改大厅配置文件
		updateOneVersionManifest(BUILD_HALL_VERSION_MANIFEST , customerMark)
		#修改游戏配置文件
		for fileTemp in os.listdir(BUILD_GAME_VERSION_MANIFEST):
				filePath = os.path.join(BUILD_GAME_VERSION_MANIFEST , fileTemp)
				updateOneVersionManifest(filePath , customerMark)
def buildHotAssets(url , folder , needUpdate = False):
		global PRJ_WORK_PATH
		global NODE_CMD_FORMAT
		global AUTO_BUILD_PATH
		nodeScriptDir = os.path.join(AUTO_BUILD_PATH , 'HotUpdate')
		os.chdir(nodeScriptDir)
		cmd = NODE_CMD_FORMAT.format(folder , url)
		print cmd
		excuteCmd(cmd)
		os.chdir(PRJ_WORK_PATH)
		if needUpdate:
			addVersionToFile(url , folder)
def autoBuild(customerMark , server):
	global BUILD_PARAM
	global PRJ_WORK_PATH
	buildParam = BUILD_PARAM
	#切换到工作目录
	os.chdir(PRJ_WORK_PATH)
	#选择客户
	customerConfig = getCustomerFullConfig(customerMark ,server)
	#修改构建文件
	updateBuilderFile(customerMark)
	#切换到引擎目录打包
	os.chdir(COCOS_ENGINE_PATH)
	#开始执行构建命令
	cmdBuild = getBuildCMD(PRJ_WORK_PATH , buildParam)
	excuteCmd(cmdBuild)
	print 'build mission well done'
	os.chdir(PRJ_WORK_PATH)
	#设置APP名字
	setAppName(customerConfig['appName'])
	#设置APP包名
	setPackageName(customerConfig['packageName'])
	#拷贝APP_ICON
	copyAppIcon(customerMark)
	#拷贝客户配置文件夹
	saveJsonDataToFile(BUILD_CUSTOMER_CONFIG_PATH , customerConfig)
	#修改版本文件
	updateVersionManifest(customerMark)
	#删除不要的打包资源
	deleteBuildAsserts(customerMark)
	os.chdir(COCOS_ENGINE_PATH)
	#开始编译
	cmdCompile = getCompileCMD(PRJ_WORK_PATH , buildParam)
	excuteCmd(cmdCompile)
	#切换到工作目录
	os.chdir(PRJ_WORK_PATH)

def autoHotUpdate(hotUpdateType, customerMark = 'master'):
		global COCOS_ENGINE_PATH
		global PRJ_WORK_PATH
		global BUILD_PARAM
		global BUILD_CUSTOMER_CONFIG_PATH
		global SERVER_CONFIG_PATH
		global LOCAL_HOT_PATH
		global HOT_FOLDER_PREFIX
		#删除热更新目录
		for hotdir in os.listdir(LOCAL_HOT_PATH):
			if os.path.isdir(hotdir):
				shutil.rmtree(os.path.join(LOCAL_HOT_PATH , hotdir))
		#切换到引擎目录构建
		os.chdir(COCOS_ENGINE_PATH)
		#开始执行构建命令
		cmdBuild = getBuildCMD(PRJ_WORK_PATH , BUILD_PARAM)
		excuteCmd(cmdBuild)
		print 'build mission well done'
		os.chdir(PRJ_WORK_PATH)  

		#拷贝所有游戏
		for game in getAllGame():
			copyGameHotAssets(game)
		#拷贝所有大厅
		for customer in getAllCustomers():
			#拷贝客户配置文件夹
			customerConfig = getCustomerFullConfig(customer)
			saveJsonDataToFile(BUILD_CUSTOMER_CONFIG_PATH , customerConfig)
			copyHallHotAssets(customer)

		#所有更新
		if hotUpdateType == 1:
			customerConfig = getCustomerFullConfig('master')
			for hotdir in os.listdir(LOCAL_HOT_PATH):
				realdir = os.path.join(LOCAL_HOT_PATH , hotdir)
				if os.path.isdir(realdir):
					prefixLength = len(HOT_FOLDER_PREFIX)
					folder = hotdir[prefixLength:]
					buildHotAssets(customerConfig['hotUpdate'] , folder , True)
		else:
			customerConfig = getCustomerFullConfig('master')
			for hotdir in os.listdir(LOCAL_HOT_PATH):
				realdir = os.path.join(LOCAL_HOT_PATH , hotdir)    				
				if os.path.isdir(realdir):
					prefixLength = len(HOT_FOLDER_PREFIX)
					folder = hotdir[prefixLength:]
					if hotdir == customerMark:
						buildHotAssets(customerConfig['hotUpdate'] , folder , True)
					else:
						buildHotAssets(customerConfig['hotUpdate'] , folder , False)
		#切换到工作目录
		os.chdir(PRJ_WORK_PATH)

#################################开始执行脚本#############################################

PRJ_WORK_PATH = os.path.abspath(os.path.join(os.getcwd(), "../.."))
#切换到工作目录
os.chdir(PRJ_WORK_PATH)

buildType = sys.argv[1]
if int(buildType) == 1:
	print '====================build package start===================='
	customerMark = os.environ['STATION_MARK']
	autoBuild(customerMark , 'test')
else:
	print '====================hot update start===================='
	hotUpdateType = sys.argv[2]
	if int(hotUpdateType) == 1:
		autoHotUpdate(1)
	else:
		customerMark = os.environ['STATION_MARK']
		autoHotUpdate(2 , customerMark)



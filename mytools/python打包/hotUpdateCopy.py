#!/usr/bin/python
# -*- coding: UTF-8 -*- 

#Date: 2018/10/25
#Author: dylan
#Desc: 热更新拷贝到远程目录
import io
import os
import json
import shutil
import sys

BUILD_PATH = 'HotUpdate'
REMOTE_PATH = 'C:/Users/Admin/Desktop/http_server/hotUpdate'
branch =  sys.argv[1]

REMOTE_PATH = os.path.join(REMOTE_PATH , branch)
print REMOTE_PATH
for dirTemp in os.listdir(REMOTE_PATH):
	realDir = os.path.join(REMOTE_PATH , dirTemp)
	if os.path.isdir(realDir):
		shutil.rmtree(realDir)

for dirTemp in os.listdir(BUILD_PATH):
	realDir = os.path.join(BUILD_PATH , dirTemp)
	if os.path.isdir(realDir):
		remoteDir = os.path.join(REMOTE_PATH , dirTemp)
		print 'copy: ' + realDir + ' to: ' + remoteDir  + ' success'
		shutil.copytree(realDir , remoteDir)

print 'all success!'
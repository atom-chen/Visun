# -*- coding:utf-8 -*-
import os
import sys
import getopt
import subprocess
import shutil
import platform
import os
import json
import hashlib
import subprocess
import zipfile
import sys

#系统检测 Windows Linux
sysstr = platform.system()

new_env = os.environ.copy()


#拷贝文件到指定目录
def copyfile(src, dst, bForce):
    if not os.path.exists(src):
        print("src not exist")
        return
    
    path = os.path.dirname(dst)
    if not os.path.exists(path):
        if bForce:
            os.makedirs(path)
        else:
            print("dest path not exist: "+path)
            return
    
    shutil.copyfile(src, dst)
    print("copy file success")

#执行打包
def run(branch, projectPath):
    print("branch: "+branch)
    print("projectPath: "+projectPath)
    print("---start config--------------")
    copyfile( branch+"/SerVerConfig.ts", projectPath + "/assets/common/scripts/definer/SerVerConfig.ts", False )
    print("---finish config--------------")

    print("---start build--------------")
    PATH_COCOSCREATOR = "C:/CocosCreator_2.1.3/CocosCreator.exe"
    BUILD_PARAM = "platform=web-mobile;debug=true;sourceMaps=true;mergeStartScene=true;md5Cache=true"
    os.system(PATH_COCOSCREATOR + " --path " + projectPath + " --build " + BUILD_PARAM)
    print("---finish build--------------")

    print("---start copy--------------")
    os.system("cd D:\jenkins")
    os.system("pscp -l dev -pw dev -r " + projectPath + "/build/web-mobile dev@172.18.11.254:/home/dev/")
    print("---finish copy--------------")


#----执行-------------------------------
if(len(sys.argv) < 2):
    print("branch name is empty")
elif(len(sys.argv) < 3):
    print("project path is empty")
else:
    branch = sys.argv[1]
    projectPath = sys.argv[2]
    run(branch, projectPath)

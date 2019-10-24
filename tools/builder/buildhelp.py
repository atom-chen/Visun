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

# Windows Linux
sysstr = platform.system()

new_env = os.environ.copy()


#拷贝文件到指定目录
def copyfile(src, dst):
    #不存在目录则创建
    path = os.path.dirname(dst)
    print("dest path: "+path)
    if not os.path.exists(path):
        os.makedirs(path)
    if not os.path.exists(src):
        print("src not exist")
        return
    shutil.copyfile(src, dst)
    print("copy file success")


#----执行-------------------------------
if(len(sys.argv) < 2):
    print("branch name is empty")
else:
    branch = sys.argv[1]
    copyfile(branch+"/ServerConfig.ts", "D:/client/H5Framework_cc/assets/common/scripts/definer/ServerConfig.ts")
    print("finish")
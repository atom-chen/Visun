#!/usr/bin/python
# -*- coding: UTF-8 -*- 

import io
import os
import json
from xml.dom import minidom
import shutil
import codecs
import urllib
#import urllib2
import sys
import time



def excuteCmd(cmdStr):
	os.system(cmdStr)

def gen_proto(Proto):
	print("=====Begin:" + Proto)
	print("gen " + Proto + ".js")
	excuteCmd("pbjs -t static-module -w commonjs -o ../../assets/common/scripts/proto/" + Proto + ".js in/" + Proto + ".proto")
	print("gen "+Proto+".ts")
	excuteCmd("pbts -o ../../" + Proto + ".d.ts ../../assets/common/scripts/proto/" + Proto + ".js")
	time.sleep(0.5)
	print("fix "+Proto+".js")
	excuteCmd("node fix.js " + Proto)
	#print("gen rpc " + Proto)
	#excuteCmd("node gen_request.js " + Proto)
	print("=====Finish: " + Proto + "\n")

gen_proto("GameProto")
gen_proto("SdkProto")
gen_proto("qhb")
gen_proto("kpqznn")

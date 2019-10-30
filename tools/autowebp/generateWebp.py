# -*- coding: UTF-8 -*-
#!/usr/bin/python

import io
import json
import os


def writrFire(fi_d, new_dict):
    f = open(fi_d, 'w')
    f.write(new_dict)
    f.close()


def gci(filepath):
    # 遍历filepath下所有文件，包括子目录
    files = os.listdir(filepath)
    for fi in files:
        fi_d = os.path.join(filepath, fi)
        if os.path.isdir(fi_d):
            gci(fi_d)
        else:
            if os.path.splitext(fi_d)[-1] == '.meta':
                f = open(fi_d)
                lines = f.read()
                new_dict = json.loads(lines)
                if new_dict.has_key('platformSettings'):
                    # print('path:'+fi_d)
                    # 过滤 pac文件，默认使用原有图片格式
                    name = os.path.splitext(os.path.splitext(fi_d)[0])[-1]
                    if name == ".pac":
                        name = ".png"
                    name = name[1:]
                    # 修改配置信息
                    del new_dict['platformSettings']
                    new_dict['platformSettings'] = {
                        'web': {
                            'formats': [
                                {'quality': 80, 'name': 'webp'},
                                {'quality': 80, 'name': name}
                            ]
                        }
                    }
                    # 序列化json
                    new_str = json.dumps(new_dict, sort_keys=True, indent=2)
                    f.close()
                    writrFire(fi_d, new_str)
                else:
                    f.close()


gci(
    os.path.join(
        os.path.abspath('..'),
        'assets'
    )
)

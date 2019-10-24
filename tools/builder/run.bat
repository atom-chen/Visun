echo "start config branch"
python buildhelp.py test
echo "end config branch"

echo "start build"
C:\CocosCreator_2.1.3\CocosCreator.exe --path D:\jenkins\workspace\test_cocos_pack_new\H5Framework_cc --build platform=web-mobile;debug=true;sourceMaps=true;mergeStartScene=true;md5Cache=true
echo "end build"

echo "start copy"
cd D:\jenkins
pscp -l dev -pw dev -r D:\jenkins\workspace\test_cocos_pack_new\H5Framework_cc\build\web-mobile dev@172.18.11.254:/home/dev/
echo "end copy"
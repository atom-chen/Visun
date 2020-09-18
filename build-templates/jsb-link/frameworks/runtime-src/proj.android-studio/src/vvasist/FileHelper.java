package vvasist;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.support.v4.content.FileProvider;
import android.util.Log;

import java.io.File;

public class FileHelper {
    private static String TAG = "FileHelper";


    public static String getFileProviderName(Context context){
        Log.d(TAG, context.getPackageName());
        return context.getPackageName()+".fileProvider";
    }

    public static String getExternalStoragePath() {
        Log.d(TAG, Environment.getExternalStorageDirectory().getPath());
        return Environment.getExternalStorageDirectory().getPath();
    }

    public static String getFileSuffix(String fname) {
        return fname.substring(fname.lastIndexOf(".")+1);
    }

    public static void creatFolder(String str1) {
        File myFolderPath = new File(str1);
        try {
            if (!myFolderPath.exists()) {
                myFolderPath.mkdir();
            }
        }
        catch (Exception e) {
            Log.d(TAG,"新建目录操作出错");
            e.printStackTrace();
        }
    }

    public static void createFile(String str1) {
        File myFilePath = new File(str1);
        try {
            if (!myFilePath.exists()) {
                myFilePath.createNewFile();
            }
        }
        catch (Exception e) {
            Log.d(TAG, "新建文件操作出错");
            e.printStackTrace();
        }
    }

}

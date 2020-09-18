package vvasist;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Base64;
import android.util.Log;
import android.widget.Toast;

import org.cocos2dx.javascript.AppActivity;
import org.cocos2dx.lib.Cocos2dxEditBox;
import org.cocos2dx.lib.Cocos2dxJavascriptJavaBridge;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;


public class VisunTool {
    private static VisunTool s_instance = null;
    private static Handler mHandler;
    private static AppActivity mActivity = null;
    private static Context mContext = null;


    public static VisunTool getInstance(){
        if(s_instance == null){
            s_instance = new VisunTool();
        }
        return s_instance;
    }

    //初始化
    public void init(AppActivity activity, Context context, Handler hand){
        mActivity = activity;
        mContext = context;
        mHandler = hand;
    }

    public void onDestroy() {

    }

    public void onActivityResult(int requestCode, int resultCode, Intent data) {

    }

    public static void handleMessage(Message msg) {
        switch (msg.what) {
            default:
                break;
        }
    }


    public static Context getContext() {
        return mContext;
    }

    public static AppActivity getActivity() {
        return mActivity;
    }

    public static void callJSfunc(final String evalStr){
        mActivity.runOnGLThread(new Runnable() {
            @Override
            public void run() {
                Cocos2dxJavascriptJavaBridge.evalString(evalStr);
            }
        });
    }

    public static void showToastLong(final String cont){
        mActivity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(mContext, cont, Toast.LENGTH_LONG).show();
            }
        });
    }

    public static void showToastShort(final String cont){
        mActivity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(mContext, cont, Toast.LENGTH_SHORT).show();
            }
        });
    }

}

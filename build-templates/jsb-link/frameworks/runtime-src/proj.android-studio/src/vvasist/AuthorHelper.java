package vvasist;

import android.Manifest;
import android.content.pm.PackageManager;
import android.support.v4.app.ActivityCompat;

import java.security.cert.X509Certificate;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;


public class AuthorHelper {

    //动态获取内存存储权限
    public static boolean verifyStoragePermissions() {
        int permission = ActivityCompat.checkSelfPermission(VisunTool.getContext(), Manifest.permission.WRITE_EXTERNAL_STORAGE);
        if (permission != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(VisunTool.getActivity(), new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE}, Constants.AUTH_CODE_WRITE_EXTERNAL_STORAGE);
            return false;
        }
        return true;
    }

    public static boolean verifyLoadPermissions() {
        int permission = ActivityCompat.checkSelfPermission(VisunTool.getContext(), Manifest.permission.READ_EXTERNAL_STORAGE);
        if (permission != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(VisunTool.getActivity(), new String[]{Manifest.permission.READ_EXTERNAL_STORAGE}, Constants.AUTH_CODE_READ_EXTERNAL_STORAGE);
            return false;
        }
        return true;
    }

    public static boolean verifyCameraPermission() {
        int permission = ActivityCompat.checkSelfPermission(VisunTool.getContext(), Manifest.permission.CAMERA);
        if (permission != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(VisunTool.getActivity(), new String[]{Manifest.permission.CAMERA}, Constants.AUTH_CODE_CAMERA);
            return false;
        }
        return true;
    }

    public static void applyAllSysAuth() {
        verifyCameraPermission();
        verifyLoadPermissions();
        verifyCameraPermission();
    }

    public static void trustAllHosts() {
        // Create a trust manager that does not validate certificate chains
        TrustManager[] trustAllCerts = new TrustManager[] { new X509TrustManager() {
            public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                return new java.security.cert.X509Certificate[] {};
            }

            public void checkClientTrusted(X509Certificate[] chain, String authType) {
            }

            public void checkServerTrusted(X509Certificate[] chain, String authType) {
            }
        } };
        // Install the all-trusting trust manager
        try {
            SSLContext sc = SSLContext.getInstance("TLS");
            sc.init(null, trustAllCerts, new java.security.SecureRandom());
            HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public final static HostnameVerifier DO_NOT_VERIFY = new HostnameVerifier() {
        public boolean verify(String hostname, SSLSession session) {
            return true;
        }
    };

}

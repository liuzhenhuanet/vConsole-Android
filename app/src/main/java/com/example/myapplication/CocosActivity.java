package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class CocosActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cocos);
        CocosWebView webView = findViewById(R.id.cocos_webview);
//        webView.loadUrl("http://10.1.68.149:8888/web-mobile/index.html");
//        webView.loadUrl("file:///android_asset/web-mobile/index.html");
//        webView.loadUrl("https://www.baidu.com");
    }
}

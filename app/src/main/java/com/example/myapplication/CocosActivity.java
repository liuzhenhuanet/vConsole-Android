package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;

public class CocosActivity extends AppCompatActivity {

    private int[] array = null;
    private WebView lastWebView;
    private ViewGroup container;
    private int webViewCount = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cocos);
        container = findViewById(R.id.container);
        CocosWebView webView = findViewById(R.id.cocos_webview);
//        webView.loadUrl("http://10.1.68.149:8888/web-mobile/index.html");
//        webView.loadUrl("file:///android_asset/web-mobile/index.html");
//        array = new int[Integer.MAX_VALUE / 25];
        webView.loadUrl("http://10.1.68.149:8080/");
        lastWebView = webView;
        webViewCount++;
        Log.e("liuzhenhua", "第" + webViewCount + "个WebView");
        addWebView();
    }

    private void addWebView() {
        container.postDelayed(new Runnable() {
            @Override
            public void run() {
                if (lastWebView != null) {
                    lastWebView.setVisibility(View.INVISIBLE);
                    lastWebView = new CocosWebView(CocosActivity.this);
                    container.addView(lastWebView);
                    webViewCount++;
                    Log.e("liuzhenhua", "第" + webViewCount + "个WebView");
                    lastWebView.loadUrl("http://10.1.68.149:8080");
                }
                addWebView();
            }
        }, 3000);
    }
}

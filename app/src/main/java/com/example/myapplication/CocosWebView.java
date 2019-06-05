package com.example.myapplication;

import android.annotation.SuppressLint;
import android.annotation.TargetApi;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.util.AttributeSet;
import android.util.Log;
import android.view.ViewGroup;
import android.webkit.ConsoleMessage;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.webkit.WebViewClientCompat;
import androidx.webkit.WebViewAssetLoader;

public class CocosWebView extends WebView {
    private static final String TAG = "CocosWebView";
    private WebViewAssetLoader mAssetLoader;
    private WebRequestRedirectorManager redirectorManager = new WebRequestRedirectorManager();

    private Context context;
    private AttributeSet attrs;
    private int defStyleAttr;

    public CocosWebView(Context context) {
        super(context);
        this.context = context;
        this.init();
    }

    public CocosWebView(Context context, AttributeSet attrs) {
        super(context, attrs);
        this.context = context;
        this.attrs = attrs;
        this.init();
    }

    public CocosWebView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        this.context = context;
        this.attrs = attrs;
        this.defStyleAttr = defStyleAttr;
        this.init();
    }

    private void init() {
        setBackgroundColor(Color.WHITE);
        WebRequestRedirector assetRedirector = new AssetWebRequestRedirector(this.getContext(), "https://liuzhenhua.net");
        redirectorManager.addWebRequestRedirector(assetRedirector);
//        redirectorManager.addWebRequestRedirector(new CommonAssetWebRequestRedirector(this.getContext(), "https://liuzhenhua.net"));
        this.initSettings();
        // resume/index.html
//        this.loadUrl("http://10.1.68.149:8888/web-mobile/index.html");
//        this.loadUrl("https://liuzhenhua.net/web-mobile/index.html");
//        this.loadUrl("file:///android_asset/web-mobile1/index.html");
        this.startLoadTime = System.currentTimeMillis();
//        this.startLoadUrl();
    }

    private ViewGroup originParent = null;

    private void releaseMemory() {
        originParent.postDelayed(new Runnable() {
            @Override
            public void run() {
                // 方案一：从View树中移除后再加载
//                ViewGroup parent = ((ViewGroup)getParent());
//                if (parent == null) {
//                    originParent.addView(CocosWebView.this);
//                } else {
//                    parent.removeView(CocosWebView.this);
//                }
//                originParent.removeView(CocosWebView.this);
//                originParent.addView(CocosWebView.this);

                // 方案二： 调用freeMemory等方法
//                clearCache(true);
//                //removeView(wv);
//                clearView();
//                freeMemory();

//                destroy();
//                destroyDrawingCache();

//                releaseMemory();
            }
        }, 1000);
    }

    private void startLoadUrl() {
        this.loadUrl("file:///android_asset/time-test/index.html?#count=" + (++count));
//        this.loadUrl("file:///android_asset/time-test/index.html");
    }

    private void injectVConsole() {
        StringBuilder builder = new StringBuilder();
        builder.append("javascript:(function() { ");

        builder.append("var cocos2d = document.createElement('script');");
        builder.append("cocos2d.async = true;");
        builder.append("cocos2d.src = 'file:///android_asset/time-test/src/vconsole.min.js';");


        builder.append("var loaded = function() {");
        builder.append("document.body.removeChild(cocos2d);");
        builder.append("cocos2d.removeEventListener('load', loaded, false);");

        builder.append("if (typeof VConsole !== 'undefined') {");
        builder.append("window.vConsole = new VConsole();");
        builder.append("}");

        builder.append("};");


        builder.append("cocos2d.addEventListener('load', loaded, false);");
        builder.append("document.body.appendChild(cocos2d);");

        builder.append("})()");

        builder.append("");

        this.loadUrl(builder.toString());

    }

    private int count = 0;

    private long startLoadTime;

    @SuppressLint("SetJavaScriptEnabled")
    private void initSettings() {
        WebSettings settings = this.getSettings();
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setJavaScriptEnabled(true);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
            settings.setAllowFileAccessFromFileURLs(true);
            settings.setAllowUniversalAccessFromFileURLs(true);
        }

        settings.setAppCacheEnabled(true);
        setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
                Log.e(TAG, "console: " + consoleMessage.message());
                return super.onConsoleMessage(consoleMessage);
            }
        });
        Log.e(TAG, "CocosWebView initSettings");
        setWebViewClient(new WebViewClientCompat() {
            @TargetApi(Build.VERSION_CODES.LOLLIPOP)
            @Override
            public boolean shouldOverrideUrlLoading(@NonNull WebView view, @NonNull WebResourceRequest request) {
//                Log.e(TAG, "3 override: " + request.getUrl());
                return super.shouldOverrideUrlLoading(view, request);
//                return true;
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                Log.e(TAG, "3 override: " + url);
                Log.e(TAG, "load cost times: " + (System.currentTimeMillis() - startLoadTime) + "   url: " + url);
//                return super.shouldOverrideUrlLoading(view, url);
                return true;
            }

            @TargetApi(Build.VERSION_CODES.LOLLIPOP)
            @Nullable
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                Log.e(TAG, "2 intercept: " + request.getUrl());
//                return mAssetLoader.shouldInterceptRequest(request);
//                return super.shouldInterceptRequest(view, request);
                return redirectorManager.shouldInterceptRequest(view, request);
            }

            @Nullable
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, String url) {
                Log.e(TAG, "1 intercept: " + url);
//                return mAssetLoader.shouldInterceptRequest(url);
//                return super.shouldInterceptRequest(view, url);
                return redirectorManager.shouldInterceptRequest(view, url);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                Log.e(TAG, "PageFinished: " + url);
                super.onPageFinished(view, url);
                originParent = (ViewGroup) getParent();
                releaseMemory();

                injectVConsole();

                if (secondLoaded) {
                    Log.e(TAG, "cost time: " + (System.currentTimeMillis() - secondStartTime));
                }

                if (!canLoadNext) return;

//                final CocosWebView webView = new CocosWebView(context, attrs, defStyleAttr);
//                webView.canLoadNext = false;
//                webView.setVisibility(INVISIBLE);
//                final ViewGroup parent = (ViewGroup) getParent();
//                parent.addView(webView, getLayoutParams());
////                webView.loadUrl("https://liuzhenhua.net/app.6.1/index.html#/?appId=6&appVersion=1&appConfigId=e9a855e3b74463343cb58953dbbbdb1a&env=test&mode=playback&firstStrokePageId=29&teamId=529866&withBiz=true&userRole=student&userId=158809861&roomId=120346607&roomType=lesson&keynotePageId=8");
//                webView.loadUrl("https://liuzhenhua.net/web-mobile/index.html");


//                postDelayed(new Runnable() {
//                    @Override
//                    public void run() {
//                        if (secondLoaded) return;
//                        secondLoaded = true;
//                        secondStartTime = System.currentTimeMillis();
//                        Log.e(TAG, "开始加载新的游戏。。。");
////                        loadUrl("https://liuzhenhua.net/web-mobile1/index.html");
////                        loadUrl("https://liuzhenhua.net/test.html");
////                        loadUrl("https://liuzhenhua.net/web-mobile/index.html");
//                loadUrl("https://liuzhenhua.net/app.6.1/index.html#/?appId=6&appVersion=1&appConfigId=e9a855e3b74463343cb58953dbbbdb1a&env=test&mode=playback&firstStrokePageId=29&teamId=529866&withBiz=true&userRole=student&userId=158809861&roomId=120346607&roomType=lesson&keynotePageId=8");
//
//
////                        parent.removeView(CocosWebView.this);
////                        destroy();
////                        webView.setVisibility(VISIBLE);
//                    }
//                }, 3000);

//                postDelayed(new Runnable() {
//                    @Override
//                    public void run() {
//                        startLoadUrl();
//                    }
//                }, 3000);
            }

            @Override
            public void onLoadResource(WebView view, String url) {
                Log.e(TAG, "LoadResource: " + url);
                super.onLoadResource(view, url);
            }

            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                Log.e(TAG, "PageStarted: " + url);
                super.onPageStarted(view, url, favicon);
            }


        });
    }

    boolean secondLoaded = false;
    boolean canLoadNext = true;
    long secondStartTime = 0;

}

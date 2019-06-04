package com.example.myapplication;

import android.annotation.TargetApi;
import android.net.Uri;
import android.os.Build;
import android.util.Log;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;

import java.util.LinkedList;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

public class WebRequestRedirectorManager {

    private static final String TAG = "WebRequestRedirector";

    private LinkedList<WebRequestRedirector> redirectors = new LinkedList<>();

    @Nullable
    private static Uri parseAndVerifyUrl(@Nullable String url) {
        if (url == null) {
            return null;
        }
        Uri uri = Uri.parse(url);
        if (uri == null) {
            Log.e(TAG, "Malformed URL: " + url);
            return null;
        }
        String path = uri.getPath();
        if (path == null || path.length() == 0) {
            Log.e(TAG, "URL does not have a path: " + url);
            return null;
        }
        return uri;
    }

    @TargetApi(Build.VERSION_CODES.LOLLIPOP)
    @Nullable
    public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
        return shouldInterceptRequestImpl(request.getUrl());
    }

    @Nullable
    public WebResourceResponse shouldInterceptRequest(WebView view, String url) {
        Uri uri = parseAndVerifyUrl(url);
        if (uri == null) {
            return null;
        }
        return shouldInterceptRequestImpl(uri);
    }

    private WebResourceResponse shouldInterceptRequestImpl(@NonNull Uri uri) {
        for (WebRequestRedirector r : this.redirectors) {
            if (r.forbidRedirect(uri)) {
                return null;
            }
            WebResourceResponse response = r.redirect(uri);
            if (response != null) {
                return response;
            }
        }
        return null;
    }

    public void addWebRequestRedirector(WebRequestRedirector redirector) {
        if (redirector == null) {
            return;
        }
        redirectors.addFirst(redirector);
    }
}

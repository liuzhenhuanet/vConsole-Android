package com.example.myapplication;

import android.content.Context;
import android.net.Uri;
import android.webkit.WebResourceResponse;

import java.io.InputStream;
import java.net.URLConnection;

import androidx.annotation.NonNull;
import androidx.webkit.internal.AssetHelper;

public class AssetWebRequestRedirector implements WebRequestRedirector {
    private AssetHelper assetHelper;
    private String urlPrefix;

    public AssetWebRequestRedirector(Context context, String urlPrefix) {
        this.assetHelper = new AssetHelper(context);
        this.urlPrefix = urlPrefix;
    }

    protected boolean match(@NonNull Uri uri) {
        return this.urlPrefix == null || uri.toString().startsWith(this.urlPrefix);
    }

    @Override
    public WebResourceResponse redirect(@NonNull Uri uri) {
        if (!this.match(uri)) {
            return null;
        }
        String path = uri.getPath();
        Uri.Builder assetUriBuilder = new Uri.Builder();
        assetUriBuilder.path(path);
        Uri assetUri = assetUriBuilder.build();

        InputStream is = assetHelper.openAsset(assetUri);
        String mimeType = URLConnection.guessContentTypeFromName(uri.getPath());

        return new WebResourceResponse(mimeType, null, is);
    }

    @Override
    public boolean forbidRedirect(@NonNull Uri uri) {
        return false;
    }
}

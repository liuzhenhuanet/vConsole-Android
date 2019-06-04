package com.example.myapplication;

import android.content.Context;
import android.net.Uri;
import android.webkit.WebResourceResponse;

import androidx.annotation.NonNull;

public class CommonAssetWebRequestRedirector extends AssetWebRequestRedirector {
    public CommonAssetWebRequestRedirector(Context context, String urlPrefix) {
        super(context, urlPrefix);
    }

    @Override
    public WebResourceResponse redirect(@NonNull Uri uri) {
        if (!this.match(uri)) {
            return null;
        }
        if (uri.getPathSegments().contains("cocos2d-js-min.js")) {
            Uri.Builder assetUriBuilder = new Uri.Builder();
            assetUriBuilder.scheme(uri.getScheme());
            assetUriBuilder.authority(uri.getAuthority());
            assetUriBuilder.appendPath("common");
            assetUriBuilder.appendPath("cocos2d-js-min.js");
            uri = assetUriBuilder.build();
        }
        return super.redirect(uri);
    }
}

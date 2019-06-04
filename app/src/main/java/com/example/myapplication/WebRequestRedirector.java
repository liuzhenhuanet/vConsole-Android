package com.example.myapplication;

import android.net.Uri;
import android.webkit.WebResourceResponse;

import androidx.annotation.NonNull;

public interface WebRequestRedirector {
    WebResourceResponse redirect(@NonNull Uri uri);
    boolean forbidRedirect(@NonNull Uri uri);
}

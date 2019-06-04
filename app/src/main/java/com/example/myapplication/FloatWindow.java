package com.example.myapplication;

import android.app.Activity;
import android.content.Context;
import android.graphics.PixelFormat;
import android.graphics.Rect;
import android.os.Build;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.WindowManager;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.TextView;

import static android.content.Context.LAYOUT_INFLATER_SERVICE;

/**
 * Created by liuzhenhua on 2019-06-03.
 */
public class FloatWindow {
    private WindowManager mWindowManager;
    private WindowManager.LayoutParams mParams;
    private View mFloatView;
    private WebView webView;
    private TextView textView;

    private float mRawX;
    private float mRawY;
    private float mStartX;
    private float mStartY;
    private int mTitleHeight;

    private static volatile FloatWindow floatWindow;

    private FloatWindow(Activity activity) {
        initView(activity);
        initfloat(activity);
        webView.loadUrl("file:///android_asset/time-test/index.html");
    }

    public static boolean isInited() {
        return floatWindow != null;
    }

    public static void init(Activity activity) {
        if (floatWindow == null) {
            floatWindow = new FloatWindow(activity);
        }
    }

    public static void open() {
        if (floatWindow == null) {
            throw new IllegalStateException("请先初始化");
        }
        floatWindow.webView.setVisibility(View.VISIBLE);
    }

    public static void close() {
        if (floatWindow == null) {
            throw new IllegalStateException("请先初始化");
        }
        floatWindow.webView.setVisibility(View.GONE);
    }

    public static void log(String log) {
        if (floatWindow != null) {
            floatWindow.webView.loadUrl("javascript:console.error('" + log + "');");
        }
    }


    private int getTitleHeight(Activity activity) {
        Rect frame = new Rect();
        activity.getWindow().getDecorView().getWindowVisibleDisplayFrame(frame);
        int statusBarHeight = frame.top;
        return statusBarHeight;
    }

    private void updateFloatWndPosition() {
        mParams.x = (int)(mRawX - mStartX);
        mParams.y = (int)(mRawY - mStartY);
        mParams.gravity = Gravity.LEFT | Gravity. TOP;
        mWindowManager.updateViewLayout(mFloatView, mParams);
    }

    private void initView(final Activity activity) {
        LayoutInflater lif = (LayoutInflater) (activity.getApplicationContext()).getSystemService(LAYOUT_INFLATER_SERVICE);
        mFloatView = lif.inflate(R.layout.float_view, null);

        webView = mFloatView.findViewById(R.id.webview);
        WebSettings settings = webView.getSettings();
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setJavaScriptEnabled(true);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
            settings.setAllowFileAccessFromFileURLs(true);
            settings.setAllowUniversalAccessFromFileURLs(true);
        }

        settings.setAppCacheEnabled(true);
        settings.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.SINGLE_COLUMN);
        settings.setLoadWithOverviewMode(true);

        textView = mFloatView.findViewById(R.id.textview);

        textView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (webView.getVisibility() != View.VISIBLE) {
                    webView.setVisibility(View.VISIBLE);
                } else {
                    webView.setVisibility(View.GONE);
                }
            }
        });

        mFloatView.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                if (mTitleHeight == 0) {
                    mTitleHeight = getTitleHeight(activity);
                }

                mRawX = event.getRawX();
                mRawY = event.getRawY() - mTitleHeight;

                final int action = event.getAction();

                switch (action) {
                    case MotionEvent.ACTION_DOWN:
                        mStartX = event.getX();
                        mStartY = event.getY();
                        break;
                    case MotionEvent.ACTION_MOVE:
                        updateFloatWndPosition();
                        break;
                    case MotionEvent.ACTION_UP:
                        updateFloatWndPosition();
                        break;
                }
                return true;
            }
        });
    }

    private void initfloat(Context context) {

        if (mWindowManager != null) {
            return;
        }
        mWindowManager = (WindowManager)context.getApplicationContext().getSystemService(Context.WINDOW_SERVICE);
        mParams = new WindowManager.LayoutParams();
        mParams.type = WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY;
        //  WindowManager.LayoutParams.TYPE_SYSTEM_OVERLAY
        //  WindowManager.LayoutParams.TYPE_SYSTEM_ALERT
        //  WindowManager.LayoutParams.TYPE_TOAST;
        mParams.flags = WindowManager.LayoutParams.FLAG_NOT_TOUCH_MODAL | WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE;
        mParams.width = WindowManager.LayoutParams.WRAP_CONTENT;
        mParams.height = WindowManager.LayoutParams.WRAP_CONTENT;
        mParams.format = PixelFormat.RGBA_8888;         // PixelFormat.TRANSLUCENT 半透明
        mParams.gravity = Gravity.CENTER;               // Gravity.LEFT | Gravity. TOP;
        // mParams.x = 100;
        // mParams.y = 100;

        mWindowManager.addView(mFloatView, mParams);
    }
}

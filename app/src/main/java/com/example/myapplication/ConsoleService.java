package com.example.myapplication;

import android.app.IntentService;
import android.app.Service;
import android.content.Intent;
import android.content.Context;
import android.os.IBinder;
import android.text.TextUtils;
import android.util.Log;

import androidx.annotation.Nullable;

public class ConsoleService extends Service {
    private static final String ACTION_BAZ = "com.example.myapplication.action.BAZ";
    private static final String ACTION_INIT = "com.example.myapplication.consoleservice.action.init";
    private static final String ACTION_SHOW_ENTRANCE = "com.example.myapplication.consoleservice.action.show_entrance";
    private static final String ACTION_HIDE_ENTRANCE = "com.example.myapplication.consoleservice.action.hide_entrance";

    // TODO: Rename parameters
    private static final String EXTRA_PARAM1 = "com.example.myapplication.extra.PARAM1";
    private static final String EXTRA_PARAM2 = "com.example.myapplication.extra.PARAM2";

    private static final String TAG = "ConsoleService";

    @Override
    public void onCreate() {
        Log.e(TAG, "onCreate");
        super.onCreate();
    }

    @Override
    public void onStart(@Nullable Intent intent, int startId) {
        Log.e(TAG, "onStart");
        super.onStart(intent, startId);
    }

    @Override
    public int onStartCommand(@Nullable Intent intent, int flags, int startId) {
        int result = super.onStartCommand(intent, flags, startId);
        Log.e(TAG, "onStartCommand");
        if (intent == null) {
            return result;
        }
        String action = intent.getAction();
        if (TextUtils.isEmpty(action)) {
            return result;
        }
        switch (action) {
            case ACTION_INIT:
                if (!FloatWindow.isInited()) {
                    FloatWindow.init(this, intent.getIntExtra(EXTRA_PARAM1, 30));
                }
                break;
            case ACTION_SHOW_ENTRANCE:
                FloatWindow.showEntrance();
                break;
            case ACTION_HIDE_ENTRANCE:
                FloatWindow.hideEntrance();
                break;
                default:
                    FloatWindow.toggle();
        }
        return result;
    }

    @Override
    public void onDestroy() {
        Log.e(TAG, "onDestroy");
        super.onDestroy();
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    /**
     * Starts this service to perform action Baz with the given parameters. If
     * the service is already performing a task this action will be queued.
     *
     * @see IntentService
     */
    // TODO: Customize helper method
    public static void startActionBaz(Context context, String param1, String param2) {
        Intent intent = new Intent(context, ConsoleService.class);
        intent.setAction(ACTION_BAZ);
        intent.putExtra(EXTRA_PARAM1, param1);
        intent.putExtra(EXTRA_PARAM2, param2);
        context.startService(intent);
    }

    public static void initIfNeed(Context context, int titleHeight) {
        Intent intent = new Intent(context, ConsoleService.class);
        intent.setAction(ACTION_INIT);
        intent.putExtra(EXTRA_PARAM1, titleHeight);
        context.startService(intent);
    }

    public static void showEntry(Context context) {
        Intent intent = new Intent(context, ConsoleService.class);
        intent.setAction(ACTION_SHOW_ENTRANCE);
        context.startService(intent);
    }

    public static void hideEntry(Context context) {
        Intent intent = new Intent(context, ConsoleService.class);
        intent.setAction(ACTION_HIDE_ENTRANCE);
        context.startService(intent);
    }

}

package com.example.myapplication;

import android.app.Application;

/**
 * Created by liuzhenhua on 2019-06-06.
 */
public class ConsoleApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        ApplicationBackgroundDetector.detect(this, new ApplicationBackgroundDetector.BackgroundListener() {
            @Override
            public void onBackground() {
                ConsoleService.hideEntry(ConsoleApplication.this);
            }

            @Override
            public void onForeground() {
                ConsoleService.showEntry(ConsoleApplication.this);
            }
        });
    }
}

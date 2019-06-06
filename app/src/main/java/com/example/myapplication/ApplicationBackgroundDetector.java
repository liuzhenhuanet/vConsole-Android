package com.example.myapplication;

import android.app.Activity;
import android.app.Application;

/**
 * Created by liuzhenhua on 2019-06-06.
 */
public class ApplicationBackgroundDetector {

    private static int resumeCount;
    private static BackgroundListener backgroundListener;

    private static Application.ActivityLifecycleCallbacks activityLifecycleCallbacks = new SimpleActivityLifecycleCallbacks() {
        @Override
        public void onActivityResumed(Activity activity) {
            if (resumeCount == 0) {
                if (backgroundListener != null) {
                    backgroundListener.onForeground();
                }
            }
            ++resumeCount;
        }

        @Override
        public void onActivityStopped(Activity activity) {
            --resumeCount;
            if (resumeCount == 0) {
                if (backgroundListener != null) {
                    backgroundListener.onBackground();
                }
            }
        }
    };

    public interface BackgroundListener {
        void onBackground();
        void onForeground();
    }

    public static void detect(Application application, BackgroundListener listener) {
        backgroundListener = listener;
        application.unregisterActivityLifecycleCallbacks(activityLifecycleCallbacks);
        application.registerActivityLifecycleCallbacks(activityLifecycleCallbacks);
    }

}

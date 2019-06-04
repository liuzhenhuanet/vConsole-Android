package com.example.myapplication;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.provider.Settings;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;

public class MainActivity extends AppCompatActivity {

    private boolean floatWindowOpened = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        final Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        toolbar.postDelayed(new Runnable() {
            @Override
            public void run() {
                throw new RuntimeException("发生了异常");
            }
        }, 6000);

        FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MainActivity.this, FloatWindowActivity.class));

//                if (floatWindowOpened) {
//                    startActivity(new Intent(MainActivity.this, CocosActivity.class));
//                    Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
//                            .setAction("Action", null).show();
//                } else {
//                    floatWindowOpened = true;
//                    // open float window
//                    if (Build.VERSION.SDK_INT >= 23) {
//                        if(!Settings.canDrawOverlays(MainActivity.this)) {
//                            Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION);
//                            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
//                            startActivityForResult(intent, 1);
//
//                            return;
//                        }
//
//                    }
//                    FloatWindow floatWindow = new FloatWindow(MainActivity.this);
//                    toolbar.postDelayed(new Runnable() {
//                        @Override
//                        public void run() {
//                            FloatWindow.log("hello");
//                            FloatWindow.log("test");
//                        }
//                    }, 3000);
//
//                }
            }
        });
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}

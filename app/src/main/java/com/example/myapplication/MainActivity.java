package com.example.myapplication;

import android.os.Bundle;
import android.view.View;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        final Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
//
//        toolbar.postDelayed(new Runnable() {
//            @Override
//            public void run() {
//                throw new RuntimeException("发生了异常");
//            }
//        }, 6000);

        FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
//                startActivity(new Intent(MainActivity.this, FloatWindowActivity.class));
                ConsoleService.startActionBaz(MainActivity.this, "liuzhenhua1", "liuzhenhua2");
            }
        });
    }
}

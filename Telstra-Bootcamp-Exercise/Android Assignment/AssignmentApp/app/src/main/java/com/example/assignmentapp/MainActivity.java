package com.example.assignmentapp;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private int mCount = 0;

    private TextView mShowCount;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    public void countUp(View view) {

        mCount++;

        if (mShowCount != null)

            mShowCount.setText(Integer.toString(mCount));

    }
    public void showToast(View view) {

        @SuppressLint("ResourceType") Toast toast = Toast.makeText(this, R.id.button, Toast.LENGTH_LONG);

        toast.show();

    }
}
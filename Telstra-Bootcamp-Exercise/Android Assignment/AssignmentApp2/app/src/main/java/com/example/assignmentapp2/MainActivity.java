package com.example.assignmentapp2;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = MainActivity.class.getSimpleName();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        EditText editText = (EditText) findViewById(R.id.editText_main);

        if (editText != null)

            editText.setOnEditorActionListener(new TextView.OnEditorActionListener() {

                @Override

                public boolean onEditorAction(TextView textView, int actionId, KeyEvent keyEvent) {

                    boolean mHandled = false;

                    if (actionId == EditorInfo.IME_ACTION_SEND) {
                        
                        dialNumber();

                        mHandled = true;

                    }

                    return mHandled;

                }

            });



    }





    private void dialNumber() {



        EditText editText = (EditText) findViewById(R.id.editText_main);



        String mPhoneNum = null;



        if (editText != null) mPhoneNum = "tel:" + editText.getText().toString();



        Log.d(TAG, "dialNumber: " + mPhoneNum);



        Intent intent = new Intent(Intent.ACTION_DIAL);



        intent.setData(Uri.parse(mPhoneNum));



        if (intent.resolveActivity(getPackageManager()) != null) {

            startActivity(intent);

        } else {

            Log.d(TAG, "ImplicitIntents: Can't handle this!");

        }

    }





    public void showText(View view) {

        EditText editText = (EditText) findViewById(R.id.editText_main);

        if (editText != null) {

            String showString = editText.getText().toString();

            Toast.makeText(this, showString, Toast.LENGTH_SHORT).show();

        }

    }
    }

import * as dotenv from 'dotenv';

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: process.env['FIREBASE_API_KEY'],
    authDomain: process.env['FIREBASE_AUTH_DOMAIN'],
    projectId: process.env['FIREBASE_PROJECT_ID'],
    storageBucket: process.env['YOUR_STORAGE_BUCKET'], // Replace 'YOUR_STORAGE_BUCKET' with the actual value
    messagingSenderId: process.env['FIREBASE_MESSAGING_SENDER_ID'],
    appId: process.env['FIREBASE_APP_ID']
  }
};

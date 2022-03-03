// import * as firebase from "firebase/app";
// // the below imports are option - comment out what you don't need
// import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/storage'
// import {getAnalytics} from 'firebase/analytics';
// import 'firebase/performance'
// import { initializeApp } from 'firebase/app'
// const clientCredentials = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// }
// export default function initFirebase() {

       
//        const app = firebase.initializeApp(clientCredentials);
//        const analytics = getAnalytics(app);
//         // Check that `window` is in scope for the analytics module!
//     }
import firebase from 'firebase/compat/app';
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyCIYV4t3vybU9-ufiuEVG2mKlnIxv3e5UU",
    authDomain: "ssclone.firebaseapp.com",
    projectId: "ssclone",
    storageBucket: "ssclone.appspot.com",
    messagingSenderId: "813487925367",
    appId: "1:813487925367:web:16b1c5d5ad7bda7296be72",
    measurementId: "G-P7YFMFP9VP"
  };
  const app = !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();
  const db = app.getFirestore();
  const stoeage = firebase.getStorage();
  const rdb = firebase.database();
  export { db,stoeage ,rdb };
/*import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQFsVNL7SSeyb8VZSkw6-TtWsPX34D2bw",
    authDomain: "chatapp-74ce0.firebaseapp.com",
    databaseURL: "https://chatapp-74ce0-default-rtdb.firebaseio.com",
    projectId: "chatapp-74ce0",
    storageBucket: "chatapp-74ce0.appspot.com",
    messagingSenderId: "452732246678",
    appId: "1:452732246678:web:0368d369e928cf362540b7",
    measurementId: "G-LKKPVHWFDK"
};



// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
export default firebaseConfig;
*/

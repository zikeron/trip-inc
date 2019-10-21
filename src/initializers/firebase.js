import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAWJ0Zvoceis9_KowxxbHMer21cRLuNCqQ',
  authDomain: 'tripinc-afae9.firebaseapp.com',
  databaseURL: 'https://tripinc-afae9.firebaseio.com',
  projectId: 'tripinc-afae9',
  storageBucket: 'tripinc-afae9.appspot.com',
  messagingSenderId: '662294506476',
  appId: '1:662294506476:web:77e6f5b999c829bbfaeec9',
  measurementId: 'G-YESKY43QVN',
};

const fireApp = firebase.initializeApp(firebaseConfig);

export default fireApp;

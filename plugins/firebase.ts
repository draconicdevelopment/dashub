import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBp95Odjc3I3WG7k4DGSSqb9LZC1FKExZQ',
  authDomain: 'dashub-ecfb7.firebaseapp.com',
  databaseURL: 'https://dashub-ecfb7.firebaseio.com',
  projectId: 'dashub-ecfb7',
  storageBucket: 'dashub-ecfb7.appspot.com',
  messagingSenderId: '874351010489',
  appId: '1:874351010489:web:e54fc45f23d51834923168',
  measurementId: 'G-3F2M69JSHM',
};

export const provideFirebase = () => {
  if (firebase.apps.some((app) => app?.name === 'default')) {
    firebase.initializeApp(firebaseConfig, 'client');
  } else if (!firebase.apps.some((app) => app?.name === 'client')) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const useFirebaseAuth = () => {
  return firebase.auth();
};

export const useFirestore = () => {
  return firebase.firestore();
};

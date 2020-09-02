import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {};

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

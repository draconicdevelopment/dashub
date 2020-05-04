import * as firebase from 'firebase/app';
import 'firebase/auth';

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
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  try {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};

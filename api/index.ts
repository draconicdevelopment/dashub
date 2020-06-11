import * as admin from 'firebase-admin';

export default async function(req: any, res: any, next: () => void) {
  const serviceAccount = require('../service-account.json');

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const idToken = getIdToken();

  try {
    const { uid, email } = await admin.auth().verifyIdToken(idToken);
    const dataResult = await admin
      .firestore()
      .collection('users')
      .doc(uid)
      .get();

    const userData = dataResult.data();

    res.locals.user = {
      uid,
      email,
      displayName: userData?.displayName,
      profilePicture: userData?.profilePicture,
      admin: userData?.admin,
    };
  } catch {}

  next();

  function getIdToken() {
    // Parse the injected ID token from the request header.
    const authorizationHeader = req.headers.authorization || '';
    const components = authorizationHeader.split(' ');
    return components.length > 1 ? components[1] : '';
  }
}

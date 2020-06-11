import * as admin from 'firebase-admin';

export default function(req: any, res: any, next: () => void) {
  const serviceAccount = require('../service-account.json');

  // The Firebase Admin SDK is used here to verify the ID token.
  console.log(admin.apps.length);

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const idToken = getIdToken(req);
  // Verify the ID token using the Firebase Admin SDK.
  // User already logged in. Redirect to profile page.
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedClaims: any) => {
      res.locals.user = decodedClaims;
    })
    .catch(() => {
      next();
    });

  next();

  function getIdToken(req: any) {
    // Parse the injected ID token from the request header.
    const authorizationHeader = req.headers.authorization || '';
    const components = authorizationHeader.split(' ');
    return components.length > 1 ? components[1] : '';
  }
}

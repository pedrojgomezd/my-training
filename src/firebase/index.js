import admin from "firebase-admin";
var serviceAccount = require("trainning-d7c57-firebase-adminsdk-7za55-ac9d75a24e.json");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  console.log("Initialized.");
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    console.error("Firebase admin initialization error", error.stack);
  }
}

const authAdmin = admin.auth();

export { admin, authAdmin };
export default admin;

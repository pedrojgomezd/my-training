export const serverConfig = {
  firebaseApiKey: process.env.FIREBASE_API_KEY!,
  serviceAccount: {
    projectId: process.env.FIREBASE_PROJECT_ID!,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
    privateKey: process.env.FIREBASE_PRIVATE_KEY!?.replace(/\\n/g, '\n')
  }
};

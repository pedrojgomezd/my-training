import { admin, authAdmin } from "src/firebase";

export const isAutenticated = async (session: string): Promise<any> => {
  if (!session) {
    return null;
  }

  return authAdmin
    .verifySessionCookie(session, true)
    .then((decodeClaims) => {
      return decodeClaims;
    })
    .catch((erro) => {
      return null;
    });
};

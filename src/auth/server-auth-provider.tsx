import { getTokens } from "next-firebase-auth-edge/lib/next/tokens";
import { cookies } from "next/headers";

import { Tokens } from "next-firebase-auth-edge/lib/auth";
import { Tenant } from "./types";
import { filterStandardClaims } from "next-firebase-auth-edge/lib/auth/tenant";
import { serverConfig } from "@/firebase/server-config";
import { AuthProvider } from "@/hooks/auth-provider";

const mapTokensToTenant = ({ decodedToken }: Tokens): Tenant => {
  const customClaims = filterStandardClaims(decodedToken);

  const {
    uid,
    email,
    email_verified: emailVerified,
    picture: photoURL,
    name: displayName,
  } = decodedToken;

  return {
    id: uid,
    email: email ?? null,
    customClaims,
    // isAnonymous: !emailVerified,
    emailVerified: emailVerified ?? false,
    name: displayName ?? null,
    photoUrl: photoURL ?? null,
  };
};

export async function ServerAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const tokens = await getTokens(cookies(), {
    serviceAccount: serverConfig.serviceAccount,
    apiKey: serverConfig.firebaseApiKey,
    cookieName: "mytrainnig",
    cookieSignatureKeys: [
      process.env.COOKIE_SECRET_CURRENT ?? "",
      process.env.COOKIE_SECRET_PREVIOUS ?? "",
    ],
  });

  const tenant = tokens ? mapTokensToTenant(tokens) : null;

  return <AuthProvider defaultTenant={tenant}>{children}</AuthProvider>;
}

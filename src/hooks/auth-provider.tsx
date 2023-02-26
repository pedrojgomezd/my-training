"use client";

import * as React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { Tenant } from "../auth/types";
import { AuthContext } from "../auth/context";
import { useFirebaseAuth } from "@/firebase/firebase-auth";
import { clientConfig } from "@/firebase/client-config";
import { clientAPI } from "@/utils/clientAPI";
import { useRouter, useSearchParams } from "next/navigation";

export interface AuthProviderProps {
  defaultTenant: Tenant | null;
  children: React.ReactNode;
}

const provider = new GoogleAuthProvider();

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({
  defaultTenant,
  children,
}) => {
  const { getFirebaseAuth } = useFirebaseAuth(clientConfig);
  const firstLoadRef = React.useRef(true);
  const [loading, setLoading] = React.useState(true);
  const [tenant, setTenant] = React.useState(defaultTenant);
  
  const route = useRouter();
  const searchParams = useSearchParams();
  const getProfile = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/auth/profile`);
    if (response.status === 401) {
      setLoading(false);
      return null;
    }
    const data = await response.json();

    setTenant(data);
    setLoading(false);
  };

  const login = async () => {
    const auth = await getFirebaseAuth();
    setLoading(false);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        user
          .getIdToken()
          .then((idToken) => {
            clientAPI("auth/login", JSON.stringify({ idToken })).then((r) => {
              auth.signOut();
              getProfile();
              route.push(searchParams.get("redirect"));
              setLoading(false);
            });
          })
          .catch(() => {
            console.log("Erro autenticando");
            setLoading(false);
          });

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        setLoading(false);
        // setError(ErrorMessagen[error.code]);
        // ...
      });
  };

  const logout = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/auth/logout`);
    route.refresh();
    setTenant(null);
  };

  React.useEffect(() => {
    getProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        tenant,
        logout,
        login,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

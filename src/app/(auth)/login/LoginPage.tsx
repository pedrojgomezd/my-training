"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useLoadingCallback } from "react-loading-hook";
import { getGoogleProvider, loginWithProvider } from "../firebase";
import { useAuth } from "@/auth/hooks";
import { useFirebaseAuth } from "@/firebase/firebase-auth";
import { clientConfig } from "@/firebase/client-config";

export function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const { tenant, login } = useAuth();

  React.useEffect(() => {
    const redirect = params?.get("redirect");
    if (tenant?.id) {
      router.push(redirect ?? "/feeding");
    }
  }, [tenant, router, params]);

  return (
    <div className="">
      <h2>Entra a tu cuenta</h2>
      <button className=""  onClick={login}>
        Google
      </button>
    </div>
  );
}

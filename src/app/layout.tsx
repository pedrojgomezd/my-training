import { NavBar } from "@/components/navbar";
import "./globals.css";
import { BottomBar } from "@/components/bottomBar";
import { getTokens } from "next-firebase-auth-edge/lib/next/tokens";
import { cookies } from "next/headers";

import { Tokens } from "next-firebase-auth-edge/lib/auth";
import { Tenant } from "../auth/types";
import { serverConfig } from "@/firebase/server-config";
import { AuthProvider } from "@/hooks/auth-provider";

const mapTokensToTenant = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/auth/profile`, {
    method: "POST",
    credentials: "include",
    headers: {
      cookie: `session=${cookies().get("session")?.value}`,
    },
  });

  if (response.status === 401) {
    return null;
  }

  const data = await response.json();
  return data;
};

export default async function RootLayout({ children }) {
  const tenant = (await mapTokensToTenant()) || null;

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="mx-auto bg-slate-200">
        <AuthProvider defaultTenant={tenant}>
          <NavBar />
          <div className="mx-auto min-h-screen">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}

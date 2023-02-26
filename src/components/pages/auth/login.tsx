"use client";
import { useAuth } from "@/hooks/useAuthentication";
import { Button } from "flowbite-react";

export const LoginComponent = () => {
  const { handleLoginWithGoogle, profile } = useAuth();

  return <Button onClick={handleLoginWithGoogle}>Login with Google {profile?.displayName}</Button>;
};

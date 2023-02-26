"use client";

import { createContext } from "react";
import { Tenant } from "./types";

export interface AuthContextValue {
  tenant: Tenant | null;
  logout: () => void;
  login: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextValue>({
  tenant: null,
  logout: () => false,
  login: () => false,
  loading: false,
});

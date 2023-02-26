import { useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  getAuth,
  signOut,
  User,
} from "firebase/auth";
import { ErrorMessagen } from "src/utils/erroMsgParser";
import { initializeApp } from "firebase/app";
import { clientAPI } from "@/utils/clientAPI";

//import {InitConfig: {auth}} from "next-firebase-auth"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
auth.languageCode = "es-419";
//auth.setPersistence(auth);

export type TProfile = {
  displayName: string;
  email: string;
  phoneNumber: string;
  birthday: string;
  cpf: string;
  address: string;
};

type TAuthContext = {
  loading: boolean;
  loadingProfile: boolean;
  error: any;
  profile: TProfile | User;
  login: (email: string, password: string) => void;
  updateUser: (value: TProfile) => Promise<void>;
  handleLoginWithGoogle: () => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
};

export const useAuth = (): TAuthContext => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [loadingProfile, setLoadingProfile] = useState<any>(true);
  const [profile, setProfile] = useState<User>(null);

  const fetchLogin = (idToken: string) => {
    clientAPI("auth/login", JSON.stringify({ idToken })).then((r) => {
      console.log({ r });
      auth.signOut();
      getProfile();
    });
  };

  const login = (email: string, password: string) => {
    setLoading(true);
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {})
      .catch((erro) => {
        setLoading(false);
        setError(ErrorMessagen[erro.code]);
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        user
          .getIdToken()
          .then(fetchLogin)
          .catch(() => setError("Erro autenticando"));

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
        setError(ErrorMessagen[error.code]);
        // ...
      });
  };

  const signup = (email: string, password: string) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {})
      .catch((error) => {
        setLoading(false);
        setLoading(false);
        setError(ErrorMessagen[error.code]);
      });
  };

  const updateUser = async (values: TProfile) => {
    setLoading(true);
    await auth.currentUser.getIdToken().then((token) => {
      fetch("/api/auth/updateprofile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then(async (data) => {
          await auth.currentUser.reload();

          setLoading(false);
        });
    });
  };

  const getProfile = useCallback(async () => {
    clientAPI(`/auth/profile`)
      .then((r) => r.json())
      .then((r) => setProfile(r.decodeClaims))
      .catch(() => setProfile(null));
  }, []);

  const logout = () => {
    clientAPI(`/auth/logout`).then((r) => {
      getProfile();
    });
  };

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return {
    login,
    handleLoginWithGoogle,
    signup,
    error,
    loading,
    updateUser,
    profile,
    loadingProfile,
    logout,
  };
};

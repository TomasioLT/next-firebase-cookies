"use client";

import {useRouter} from "next/navigation";
import {UserRecord} from "firebase-admin/auth";
import {signInWithEmail, signInWithGoogle, signOut} from "@/lib/firebase/auth";
import SignInPage from "@/app/_components/Signedin";
import DashboardPage from "@/app/_components/Unsigned";
import Navbar from "./Navbar";

export default function PageContent({
  variant,
  currentUser,
}: {
  variant: "sign-in" | "dashboard";
  currentUser?: UserRecord;
}) {
  const router = useRouter();

  const handleGoogleSignin = async () => {
    const isOk = await signInWithGoogle();

    if (isOk) router.push("/dashboard");
  };
  const handleSignIn = async () => {
    const isOk = await signInWithEmail();

    if (isOk) router.push("/dashboard");
  };

  const handleSignOut = async () => {
    const isOk = await signOut();

    if (isOk) router.push("/sign-in");
  };

  const buttonStyle = "bg-slate-500 mt-2 px-2 py-1 rounded-md text-slate-50";

  if (variant === "sign-in") {
    return (
      <SignInPage
        handleGoogleSignIn={handleGoogleSignin}
        buttonStyle={buttonStyle}
      />
    );
  } else if (variant === "dashboard") {
    return (
      <>
        <DashboardPage
          currentUser={currentUser}
          handleSignOut={handleSignOut}
          buttonStyle={buttonStyle}
        />
        <Navbar />
      </>
    );
  } else {
    return null;
  }
}

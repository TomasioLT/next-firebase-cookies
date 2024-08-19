import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  getAuth,
} from "firebase/auth";

import {APIResponse} from "@/types";
import {auth} from "./firebase";

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    const userCreds = await signInWithPopup(auth, provider);
    const idToken = await userCreds.user.getIdToken();

    const response = await fetch("/api/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({idToken}),
    });
    const resBody = (await response.json()) as unknown as APIResponse<string>;
    if (response.ok && resBody.success) {
      return true;
    } else return false;
  } catch (error) {
    console.error("Error signing in with Google", error);
    return false;
  }
}

export async function signInWithEmail(
  email: string,
  password: string
): Promise<boolean> {
  try {
    // Sign in the user with email and password
    const userCreds = await signInWithEmailAndPassword(auth, email, password);

    // Get the ID token of the authenticated user
    const idToken = await userCreds.user.getIdToken();

    // Send the ID token to your backend for further validation or session management
    const response = await fetch("/api/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({idToken}),
    });

    // Parse the response from the backend
    const resBody = (await response.json()) as unknown as APIResponse<string>;

    // Check if the response indicates success
    if (response.ok && resBody.success) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error signing in with email and password", error);
    return false;
  }
}

export async function createAccountWithEmail(email: string, password: string) {
  const auth = getAuth();

  try {
    const userCreds = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const idToken = await userCreds.user.getIdToken();

    const response = await fetch("/api/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({idToken}),
    });
    const resBody = (await response.json()) as unknown as APIResponse<string>;
    if (response.ok && resBody.success) {
      return true;
    } else return false;
  } catch (error) {
    console.error("Error creating account", error);
    return false;
  }
}

export async function signOut() {
  try {
    await auth.signOut();

    const response = await fetch("/api/auth/sign-out", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resBody = (await response.json()) as unknown as APIResponse<string>;
    if (response.ok && resBody.success) {
      return true;
    } else return false;
  } catch (error) {
    console.error("Error signing out with Google", error);
    return false;
  }
}

import {redirect} from "next/navigation";

import {isUserAuthenticated} from "@/lib/firebase/firebase-admin";
import PageContent from "../_components/PageContent";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function SignInPage() {
  if (await isUserAuthenticated()) redirect("/dashboard");

  return (
    <main className="container">
      <PageContent variant="sign-in" />
    </main>
  );
}

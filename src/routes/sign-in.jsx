import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <main className="h-screen grid place-items-center">
      <SignIn path="/sign-in" />
    </main>
  );
}

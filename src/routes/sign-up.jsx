import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <main className="h-screen grid place-items-center">
      <SignUp path="/sign-up" />
    </main>
  );
}

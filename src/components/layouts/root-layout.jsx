import { Outlet, useNavigate } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import Navbar from "../Navbar";

export default function RootLayout({ children }) {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={
        "pk_test_Z3JhdGVmdWwtYXBoaWQtMS5jbGVyay5hY2NvdW50cy5kZXYk"
      }
    >
      <Navbar />
      <main className=" ">
        <Outlet />
      </main>
    </ClerkProvider>
  );
}

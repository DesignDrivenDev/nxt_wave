import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const PUBLISHABLE_KEY = process.env.CLERK_PUBLISHABLE_KEY;
  console.log(PUBLISHABLE_KEY, "clerk key");
  return (
    <>
      <Navbar />
      <main className=" ">
        <Outlet />
      </main>
    </>
  );
}

export default App;

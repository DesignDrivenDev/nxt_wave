import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import AddResources from "../components/AddResources";
import About from "../components/About";
import SignInPage from "./sign-in";
import SignUpPage from "./sign-up";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-resources",
        element: <AddResources />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);
export default router;

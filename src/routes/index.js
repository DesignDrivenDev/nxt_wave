import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import AddResources from "../components/AddResources";
import About from "../components/About";
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
    ],
  },
]);
export default router;

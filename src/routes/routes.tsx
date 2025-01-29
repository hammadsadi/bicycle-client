import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/Layouts/MainLayouts";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
]);

export default route;

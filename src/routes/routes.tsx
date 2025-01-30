import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/Layouts/MainLayouts";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Home from "../pages/Home/Home";
import Bicycles from "../pages/Bicycles/Bicycles";
import BiCycleDetails from "../pages/BiCycleDetails/BiCycleDetails";
import About from "../pages/About/About";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bicycles",
        element: <Bicycles />,
      },
      {
        path: "/bicycle/:id",
        element: <BiCycleDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
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

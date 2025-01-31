import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/Layouts/MainLayouts";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Home from "../pages/Home/Home";
import Bicycles from "../pages/Bicycles/Bicycles";
import BiCycleDetails from "../pages/BiCycleDetails/BiCycleDetails";
import About from "../pages/About/About";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import Profile from "../pages/Dashboard/Profile/Profile";
import UserManage from "../pages/Dashboard/Admin/UserManage/UserManage";
import ProductManage from "../pages/Dashboard/Admin/ManageProduct/ManageProduct";
import OrderManage from "../pages/Dashboard/Admin/ManageOrder/ManageOrder";
import MyOrders from "../pages/Dashboard/User/MyOrders/MyOrders";

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
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // User
      {
        path: "my-orders",
        element: <MyOrders />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "user-manage",
        element: <UserManage />,
      },
      {
        path: "product-manage",
        element: <ProductManage />,
      },
      {
        path: "order-manage",
        element: <OrderManage />,
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

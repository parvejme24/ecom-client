import { createBrowserRouter } from "react-router-dom";
import Main from "./../layout/Main";
import Home from "../pages/Home/Home";
import Error from "./../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import FAQ from "../pages/FAQ/FAQ";
import Blogs from "../pages/Blogs/Blogs";
import Contacts from "../pages/Contacts/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

export default router;

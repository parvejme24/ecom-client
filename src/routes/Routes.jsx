import { createBrowserRouter } from "react-router-dom";
import Main from "./../layout/Main";
import Home from "../pages/Home/Home";
import Error from "./../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import FAQ from "../pages/FAQ/FAQ";
import Blogs from "../pages/Blogs/Blogs";
import Contacts from "../pages/Contacts/Contacts";
import Products from "../pages/Products/Products";
import Cart from "../pages/Cart/Cart";
import Checkout from "./../pages/Checkout/Checkout";
import ThankYouPage from "../pages/ThankYou/ThankYou";
import ReviewsPage from "../pages/Reviews/Reviews";
import SearchResultPage from "../pages/SearchResult/SearchResult";
import PrivacyPolicyPage from "../pages/PrivecyPolicy/PrivecyPolicy";

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
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "thankyou",
        element: <ThankYouPage />,
      },
      {
        path: "reviews",
        element: <ReviewsPage />,
      },
      {
        path: "searchResult",
        element: <SearchResultPage />,
      },
      {
        path: "privecyPolicy",
        element: <PrivacyPolicyPage />,
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

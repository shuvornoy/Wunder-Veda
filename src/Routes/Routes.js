import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import How from "../Component/How/How";
import Ingredients from "../Component/Ingredients/Ingredients";
import AddToCard from "../Component/Pages/AddToCard/AddToCard/AddToCard";
import Cart from "../Component/Pages/Checkout/Cart/Cart";
import Address from "../Component/Pages/Checkout/AddressPage/Address";
import Signup from "../Component/Signup/Signup";
import Login from "../Component/Login/Login";
import Forgot from "../Component/Forgot/Forgot";
import LoginNow from "../Component/LoginNow/LoginNow";
import Otp from "../Component/Otp/Otp";
import OrderDetails from "../Component/Pages/OrderDetails/OrderDetails";
import SelectAddress from "../Component/Pages/Checkout/SelectAddress/SelectAddress";
import AddressSelect from "../Component/Pages/Checkout/AddressSelect/AddressSelect";
import About from "../Component/About/About";
import Product from "../Component/Product/Product";
import MyOrder from "../Component/Pages/MyOrder/MyOrder";
import MySubscriptions from "../Component/Pages/MySubscriptions/MySubscriptions";
import Terms from "../Component/Pages/Terms/Terms";
import Feedback from "../Component/Pages/Feedback/Feedback";
import Contact from "../Component/Pages/Contact/Contact";
import AddFeedback from "../Component/Pages/AddFeedback/AddFeedback";
import Payment from "../Component/Pages/Checkout/Payment/Payment";


const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/how",
            element: <How />,
         },
         {
            path: "/ingredients",
            element: <Ingredients />,
         },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/product",
            element: <Product />,
         },

         {
            path: "/addtocard",
            element: <AddToCard />,
         },
         {
            path: "/address-select",
            element: <AddressSelect />,
         },
         {
            path: "/address",
            element: <Address />,
         },
         {
            path: "/order",
            element: <MyOrder />,
         },
         {
            path: "/subscriptions",
            element: <MySubscriptions />,
         },
         {
            path: "/select",
            element: <SelectAddress />,
         },
         {
            path: "/Payment",
            element: <Payment />,
         },
         {
            path: "/cart",
            element: <Cart />,
         },
         {
            path: "/signup",
            element: <Signup />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/loginnow",
            element: <LoginNow />,
         },
         {
            path: "/forgot",
            element: <Forgot />,
         },
         {
            path: "/otp",
            element: <Otp />,
         },
         {
            path: "/details",
            element: <OrderDetails />,
         },
         {
            path: "/contact",
            element: <Contact />,
         },
         {
            path: "/feedback",
            element: <Feedback />,
         },
         {
            path: "/addfeedback",
            element: <AddFeedback />,
         },
         {
            path: "/terms",
            element: <Terms />,
         },
      ],
   },
]);

export default router;
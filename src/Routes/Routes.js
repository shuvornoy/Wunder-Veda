import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import How from "../Component/How/How";
import Ingredients from "../Component/Ingredients/Ingredients";
import AddToCard from "../Component/Pages/AddToCard/AddToCard/AddToCard";
import Cart from "../Component/Pages/Checkout/Cart/Cart";
import Address from "../Component/Pages/Checkout/AddressPage/Address";


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
            path: "/addtocard",
            element: <AddToCard />,
         },
         {
            path: "/address",
            element: <Address />,
         },
         {
            path: "/cart",
            element: <Cart />,
         },
      ],
   },
]);

export default router;
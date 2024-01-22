import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Provider } from "react-redux";
import store from "./redux/store.js";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css";
import HomeScreen from "./pages/HomeScreen.jsx";
import ProductScreen from "./pages/ProductScreen.jsx";
import CartScreen from "./pages/CartScreen.jsx";
import LoginScreen from "./pages/LoginScreen.jsx";
import RegisterScreen from "./pages/RegisterScreen.jsx";
import ShippingScreen from "./pages/ShippingScreen.jsx";
import PaymentScreen from "./pages/PaymentScreen.jsx";
import PlaceOrderScreen from './pages/PlaceOrderScreen';
import OrderScreen from './pages/OrderScreen';
import ProfileScreen from "./pages/ProfileScreen.jsx";
import OrderListScreen from "./pages/admin/OrderListScreen.jsx";
import ProductListScreen from "./pages/admin/ProductListScreen.jsx";

import PrivateRoute from "./components/PrivateRoute.jsx";
import AdminRoute from './components/AdminRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/product/:id",
        element: <ProductScreen />,
      },
      {
        path: "/cart",
        element: <CartScreen />,
      },
      {
        path: "/login",
        element: <LoginScreen />,
      },
      {
        path: "/register",
        element: <RegisterScreen />,
      },
      // Private routes for logged in authenticated users
      {
        path: "/shipping",
        element: <PrivateRoute component={ShippingScreen} />,
      },
      {
        path: "/payment",
        element: <PrivateRoute component={PaymentScreen} />
      },
      {
        path: "/placeorder",
        element: <PrivateRoute component={PlaceOrderScreen} />
      },
      {
        path: '/order/:id',
        element: <PrivateRoute component={OrderScreen} />
      },
      {
        path: '/profile',
        element: <PrivateRoute component={ProfileScreen} />
      },
      // Admin routes for admin user only
      {
        path: '/admin/orderlist',
        element: <AdminRoute component={OrderListScreen} />
      },
      {
        path: '/admin/productlist',
        element: <AdminRoute component={ProductListScreen} />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

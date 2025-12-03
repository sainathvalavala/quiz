import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import QuizPage from "./pages/QuizPage.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import AdminSignup from "./components/AdminSignup.jsx";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./pages/Dashboard.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: `/quiz/:category`,
    element: <QuizPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/admin/signup",
    element: <AdminSignup />,
  },
  {
    path: `/dashboard/:id`,
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="994056393652-eplrknii2u277dak0if9bl28vokl74pb.apps.googleusercontent.com">
      <ToastContainer />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </Provider>
);

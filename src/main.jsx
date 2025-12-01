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
import { ToastContainer, toast } from 'react-toastify';
import ResultTable from "./pages/Dashboard.jsx";
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
  path:"/login",
  element:<Login/>
  },
  {
  path:"/signup",
  element:<Signup/>
  },
  {
  path:"/admin/signup",
  element:<AdminSignup/>
  },
  {
  path:"/dashboard",
  element:<ResultTable/>
  }
  
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer />
    <RouterProvider router={router} />
  </Provider>
);

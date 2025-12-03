import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../services/quizApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userlogin } from "../services/userSlice";
import LoginWithGoogle from "./GoogleLogin";

const Login = () => {
  const [userLogin] = useUserLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log("Login Details:", values);
      try {
        const res = await userLogin(values);
        if (res?.data?.msg == "Successful") {
          localStorage.setItem("token", res?.data?.token);
          localStorage.setItem("username", res?.data?.userDetails.username);
          localStorage.setItem("role", res?.data?.userDetails.role);
          localStorage.setItem("userId", res.data.userDetails.userId);


          dispatch(
            userlogin({
              username: res?.data?.userDetails,
              token: res?.data?.token,
            })
          );

          navigate("/");
          toast.success("Login Successfull!", {
            position: "top-right",
          });
        } else {
          console.log("Invalid Credentials");
        }
      } catch (error) {
        toast.error("Login Failed! Try Again.", {
          position: "top-right",
        });
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              required
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              required
              value={formik.values.password}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
          <LoginWithGoogle/>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition  cursor-pointer"
          >
            Login
          </button>
        </form>
        
        <p className="text-center mt-4 text-gray-600">
          New user?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { useFormik } from "formik";
import { useAddAdminMutation } from "../services/quizApi";
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {

    const [addAdmin] = useAddAdminMutation()
const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      role: "admin", 
    },

    onSubmit: ({confirmPassword,...values}) => {
      console.log("Admin Signup Data:", values);
      addAdmin(values)
      navigate("/login")
    },

    validate: (values) => {
      const errors = {};
      if (!values.username) errors.username = "Username is required";
      if (!values.password) errors.password = "Password is required";
      if (values.password !== values.confirmPassword)
        errors.confirmPassword = "Passwords do not match";
      return errors;
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Admin Sign Up
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-5">

          {/* Username */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Admin Username
            </label>
            <input
              type="text"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="Enter admin username"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.errors.username && (
              <p className="text-red-600 text-sm mt-1">{formik.errors.username}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Admin Password
            </label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Enter admin password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.errors.password && (
              <p className="text-red-600 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              placeholder="Confirm password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.errors.confirmPassword && (
              <p className="text-red-600 text-sm mt-1">
                {formik.errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Create Admin Account
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already an admin?{" "}
          <a href="/admin/login" className="text-purple-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminSignup;

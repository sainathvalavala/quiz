import React, { useState } from "react";
import "./App.css";
import { Link, Outlet, useParams } from "react-router-dom";
import Navbar from "./pages/Navbar";

function App() {
  var category = useParams();
  console.log(category);
  const [isMobile] = useState(window.outerWidth <= 500);
  return (
    <div>
      <div className="fixed w-full bg-[#232f3e]">
        <Navbar />
      </div>
      <>
        {!isMobile ? (
          <>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Select a Category
              </h1>
              <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-100">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Select a Category
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                  <Link
                    to={`/quiz/HTML`}
                    className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center hover:shadow-xl transition"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
                      className="w-50 h-50 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-semibold">HTML</h2>
                  </Link>

                  <Link
                    to={`/quiz/CSS`}
                    className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center hover:shadow-xl transition"
                  >
                    <img
                      src="https://www.svgrepo.com/show/303263/css3-logo.svg"
                      className="w-50 h-50  mb-4"
                    />
                    <h2 className="text-xl font-semibold">CSS</h2>
                  </Link>

                  <Link
                    to={`/quiz/JavaScript`}
                    className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center hover:shadow-xl transition"
                  >
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                      className="w-50 h-50  mb-4"
                    />
                    <h2 className="text-xl font-semibold">JavaScript</h2>
                  </Link>

                  <Link
                    to={`/quiz/React`}
                    className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center hover:shadow-xl transition"
                  >
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                      className="w-50 h-50  mb-4"
                    />
                    <h2 className="text-xl font-semibold">React</h2>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="min-h-screen flex flex-col items-center bg-gray-100 px-5 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Select a Category
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">
              {/* HTML */}
              <Link
                to="/quiz/HTML"
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
                  className="w-24 h-24 object-cover rounded-lg mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">HTML</h2>
              </Link>

              {/* CSS */}
              <Link
                to="/quiz/CSS"
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all"
              >
                <img
                  src="https://www.svgrepo.com/show/303263/css3-logo.svg"
                  className="w-24 h-24 mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">CSS</h2>
              </Link>

              {/* JavaScript */}
              <Link
                to="/quiz/JavaScript"
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all"
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                  className="w-24 h-24 mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  JavaScript
                </h2>
              </Link>

              {/* React */}
              <Link
                to="/quiz/React"
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all"
              >
                <img
                  src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                  className="w-24 h-24 mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">React</h2>
              </Link>
            </div>
          </div>
        )}
      </>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;

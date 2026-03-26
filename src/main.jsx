import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./routes/router";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-right"
      newestOnTop
      pauseOnFocusLoss={false}
      theme="dark"
      autoClose={2200}
      closeOnClick
      hideProgressBar={false}
    />
  </React.StrictMode>
);

import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import AppDetails from "../pages/AppDetails";
import Installation from "../pages/Installation";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "apps", element: <Apps /> },
      { path: "apps/:id", element: <AppDetails /> },
      { path: "installation", element: <Installation /> }
    ]
  },
  { path: "*", element: <ErrorPage /> }
]);

export default router;

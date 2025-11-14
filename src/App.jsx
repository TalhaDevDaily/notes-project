import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Register from "./pages/Register";
import app from "./firebase.config";
import Login from "./pages/Login";
import Bin from "./pages/Bin";

const App = () => {
  const pageRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
        </Route>

        <Route>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/bin" element={<Bin />} />
          </Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={pageRoute} />
    </>
  );
};

export default App;

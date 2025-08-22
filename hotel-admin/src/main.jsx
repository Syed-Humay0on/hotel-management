import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/Login";
import "./index.css"; // Tailwind styles
import "flowbite";
// src/main.jsx or index.jsx
import "flowbite/dist/flowbite.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

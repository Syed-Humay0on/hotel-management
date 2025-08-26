"use client";

import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Set axios defaults to include cookies
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      console.log("Login success:", res.data);
      setError("");

      // ✅ Proper React Router redirect
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Admin Login
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-gray-200">
              Email
            </Label>
            <TextInput
              id="email"
              type="email"
              placeholder="admin@admin.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              color="dark"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-gray-200">
              Password
            </Label>
            <TextInput
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              color="dark"
            />
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

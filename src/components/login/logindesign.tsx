"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";


export default function LoginPageDesign() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
  
    if (username === storedUsername && password === storedPassword) {
      router.push("/blooddonate");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white border rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center text-red-600">ROKTO DAAN - Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}

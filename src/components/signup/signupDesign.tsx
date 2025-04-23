"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";


export default function SignupPageDesign() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignup = () => {
    if (!username || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Signup successful! You can now log in.");
    router.push("/signin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white border rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center text-red-600">ROKTO DAAN - Signup</h1>
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border rounded"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          onClick={handleSignup}
          className="w-full px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
        >
          Signup
        </button>
      </div>
    </div>
  );
}

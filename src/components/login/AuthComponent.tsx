"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function SignInPage() {
  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    try {
      await signIn("github");
      setMessage("Signing in with GitHub...");
    } catch (err) {
      console.error("Sign in error:", err);
      setMessage("Error signing in. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-[350px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      {/* Top Heading */}
      <h1 className="text-white text-3xl font-bold absolute top-8">
        Developed by Shehroz
      </h1>

      {/* Centered Authentication Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-80 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Authentication</h1>
        <p className="text-gray-600 mb-4">Sign in to continue</p>
        <button
          onClick={handleSignIn}
          className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg w-full transition-transform transform hover:scale-105"
        >
          <FaGithub size={20} /> Sign in with GitHub
        </button>
        {message && <div className="mt-4 text-blue-500">{message}</div>}
      </div>
    </div>
  );
}



"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

export default function SignOutPage() {
  const [message, setMessage] = useState("");

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage("Successfully signed out!");
    } catch (err) {
      console.error("Sign out error:", err);
      setMessage("Error signing out. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600">
      <div className="bg-white shadow-lg rounded-lg p-8 w-80 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Goodbye!</h1>
        <p className="text-gray-600 mb-4">You can sign in again anytime.</p>
        <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg w-full transition-transform transform hover:scale-105"
        >
          Sign Out
        </button>
        {message && <div className="mt-4 text-green-500">{message}</div>}
      </div>
    </div>
  );
}





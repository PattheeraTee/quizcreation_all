// app/reset-password/page.js
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sending reset password email here
    console.log("Email submitted:", email);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#F9F8F6]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <Link href={"/"} className="text-[#03A9F4] text-sm mb-1 hover:underline bg-[#03A9F4] bg-opacity-10 p-1 rounded-md">
              &larr; Back
        </Link>
        <h2 className="text-center text-2xl font-semibold mb-6">ลืมรหัสผ่าน</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-2">
                <label htmlFor="email" className="block text-gray-700 mb-1">
                    อีเมล
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="กรอกอีเมล"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
          <button
            type="submit"
            className="w-full bg-[#03A9F4] hover:bg-[#0B76BC] text-white py-2 rounded-full text-lg font-medium"
          >
            ส่ง
          </button>
        </form>
      </div>
    </div>
  );
}

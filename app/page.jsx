// components/LoginForm.js
"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9F8F6]">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
        <h2 className="mb-8 text-2xl font-semibold text-center text-gray-800">เข้าสู่ระบบ</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">อีเมล</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="กรอกอีเมล"
              required
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">รหัสผ่าน</label>
              <Link href="/forgot-password" className="text-sm text-gray-400 underline">ลืมรหัสผ่าน</Link>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="กรอกรหัสผ่าน"
              required
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-[#03A9F4] rounded-full hover:bg-[#0B76BC]"
          >
            เข้าสู่ระบบ
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-500">
          ถ้ายังไม่มีบัญชีให้{" "}
          <Link href="/register" className="text-[#03A9F4] underline">ลงทะเบียน</Link>
        </p>
      </div>
    </div>
  );
}

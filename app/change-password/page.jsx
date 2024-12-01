"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function ChangePassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password change logic here
    console.log("Password changed successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F9F8F6]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <Link href={"/"} className="text-[#03A9F4] text-sm mb-1 hover:underline bg-[#03A9F4] bg-opacity-10 p-1 rounded-md">
              &larr; Back
        </Link>
        <h2 className="text-center text-2xl font-semibold mb-8">เปลี่ยนรหัสผ่าน</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1" htmlFor="password">
              รหัสผ่าน
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="กรอกรหัสผ่านใหม่"
              className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1" htmlFor="confirmPassword">
              ยืนยันรหัสผ่าน
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="กรอกยืนยันรหัสผ่านใหม่"
              className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#03A9F4] text-white p-3 rounded-full hover:bg-[#0B76BC] transition duration-300"
          >
            ยืนยัน
          </button>
        </form>
      </div>
    </div>
  );
}

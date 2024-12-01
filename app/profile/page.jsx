// pages/profile.js
"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import taeyeon from '../components/images/taeyeon.png';
import Header from '../components/menu/header';

export default function ProfilePage() {
  return (
    <div className="bg-[#F9F8F6] text-black min-h-screen flex flex-col"> 
    <Header />
    <div className="flex flex-grow justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <eader />
        <div className="flex items-center justify-between mb-4">
          <Link href={"/home"} className="text-[#03A9F4] text-sm mb-1 hover:underline bg-[#03A9F4] bg-opacity-10 p-1 rounded-md">
            &larr; Back
          </Link>
          <Link href={"/edit-profile"} className="border border-[#03A9F4] text-[#03A9F4] text-sm px-4 py-1 rounded-full">
            แก้ไขข้อมูลผู้ใช้
          </Link>
        </div>
        
        <h2 className="text-xl font-semibold mt-4 mb-6 text-start">ข้อมูลผู้ใช้</h2>
        
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-24 h-24">
            <Image
              src={taeyeon}
              alt="Profile Image"
              className="rounded-full"
              width={96}
              height={96}
            />
            <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
              <FontAwesomeIcon icon={faPencil} />
            </button>
          </div>
          
          <div className="space-y-4 mt-4 w-full">
            <div className="flex ">
              <p className="text-black">ชื่อผู้ใช้ :</p>
              <p className="text-black font-medium">ty_kim</p>
            </div>
            <div className="flex ">
              <p className="text-black">อีเมล :</p>
              <p className="text-black font-medium">kimty@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

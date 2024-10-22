import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import taeyeon from "../../components/images/taeyeon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faEye } from "@fortawesome/free-solid-svg-icons";

export default function QuizHeader() {
  return (
    <div className='bg-white border-b border-black'>
      <header className="flex items-center p-4">
        {/* Left Section: Logo */}
        <Link className="flex items-center" href="/home">
          <span className="text-2xl font-bold text-black mr-4">QUIZ LOGO</span>
        </Link>

        {/* Center Section: Quiz Name */}
        <div className="text-xl font-medium text-center text-black flex-grow">ชื่อแบบสอบถาม</div>

        {/* Right Section: Settings and User Profile */}
        <div className="flex items-center space-x-4">
          {/* Icons Section */}
          <button aria-label="Change Theme" className="p-2 ">
            <FontAwesomeIcon icon={faPalette} className='w-6 h-6 text-[#434146]'/>
          </button>
          <button aria-label="Preview Quiz" className="p-2">
            <FontAwesomeIcon icon={faEye} className='w-6 h-6 text-[#434146]'/>
          </button>

          {/* Publish Button */}
          <button className="bg-[#03A9F4] text-white rounded-full px-4 py-2">เผยแพร่</button>

          {/* User Profile */}
          <div className="rounded-full overflow-hidden w-10 h-10">
            <Image
              src={taeyeon} // Update with your user profile path
              alt="User Profile"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover border border-black"
            />
          </div>
        </div>
      </header>

      <nav className="flex justify-center space-x-8 mt-4">
        <Link href="#questions">
          <p className="text-purple-500 border-b-2 border-purple-500">คำถาม</p>
        </Link>
        <Link href="#responses">
          <p className="text-black">การตอบกลับ</p>
        </Link>
        <Link href="#settings">
          <p className="text-black">ตั้งค่า</p>
        </Link>
      </nav>
    </div>
  );
}

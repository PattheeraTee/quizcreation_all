// components/CoverPage.js
import React from "react";

const CoverPage = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4 text-black">หน้าปก</h2>
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://hisopartyofficial.com/backend/web/uploads/images/202405/1/11903/ea66b12249b2592db7243e165aae4f5c.jpg"
          alt="Cover"
          className="w-full h-72 object-cover mb-4 rounded-xl"
        />
        <input
          type="text"
          placeholder="ชื่อแบบสอบถาม"
          className="w-full px-4 py-2 mb-2 border border-gray-300 rounded text-black"
        />
        <input
          type="text"
          placeholder="อธิบายแบบสอบถาม"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded text-black"
        />
        <button className="px-6 py-2 bg-[#03A9F4] text-white rounded-full">
          เริ่มต้น
        </button>
      </div>
    </div>
  );
};

export default CoverPage;


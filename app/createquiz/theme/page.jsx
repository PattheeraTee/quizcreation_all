'use client';
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const TextEditor = () => {
  const [textAlign, setTextAlign] = useState('left');
  const [fontSize, setFontSize] = useState('');
  const [textColor, setTextColor] = useState('#89E78D');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [showTextColorPicker, setShowTextColorPicker] = useState(false);
  const [showBackgroundColorPicker, setShowBackgroundColorPicker] = useState(false);
  const [showEditor, setShowEditor] = useState(true);

  const closePopup = () => {
    setShowTextColorPicker(false);
    setShowBackgroundColorPicker(false);
  };

  if (!showEditor) return null;

  return (
    <div className="p-4 w-1/5 mt-20  right-0 bg-white rounded-lg shadow-md ">
      <button 
        className="absolute top-2 right-2 text-gray-600 text-3xl"
        onClick={() => setShowEditor(false)}
      >
        &times;
      </button>
      <div className="flex items-center space-x-2 mb-4">
        <button className="font-bold text-lg border px-2 py-1 rounded text-black">B</button>
        <button className="italic text-lg border px-2 py-1 rounded text-black">I</button>
        <button className="underline text-lg border px-2 py-1 rounded text-black">U</button>
      </div>

      <div className="mb-4">
        <span className="block mb-2 text-black">จัดตำแหน่งข้อความ</span>
        <div className="flex space-x-2">
          <button 
            className={`border px-3 py-1 rounded text-black ${textAlign === 'left' ? 'bg-gray-300' : ''}`}
            onClick={() => setTextAlign('left')}
          >
            ซ้าย
          </button>
          <button 
            className={`border px-3 py-1 rounded text-black ${textAlign === 'center' ? 'bg-gray-300' : ''}`}
            onClick={() => setTextAlign('center')}
          >
            กลาง
          </button>
          <button 
            className={`border px-3 py-1 rounded text-black ${textAlign === 'right' ? 'bg-gray-300' : ''}`}
            onClick={() => setTextAlign('right')}
          >
            ขวา
          </button>
        </div>
      </div>

      <div className="mb-4">
        <span className="block mb-2 text-black">ขนาดตัวอักษร</span>
        <select 
          className="border rounded w-full px-3 py-1 text-black"
          value={fontSize} 
          onChange={(e) => setFontSize(e.target.value)}
        >
          <option value="">เลือกขนาดตัวอักษร</option>
          <option value="small">เล็ก</option>
          <option value="medium">กลาง</option>
          <option value="large">ใหญ่</option>
        </select>
      </div>

      <div className="mb-4">
        <span className="block mb-2 text-black">สีตัวอักษร</span>
        <div className="flex items-center space-x-2">
          <div 
            className="w-6 h-6 rounded cursor-pointer" 
            style={{ backgroundColor: textColor }}
            onClick={() => setShowTextColorPicker(!showTextColorPicker)}
          ></div>
          <button 
            className="border rounded px-3 py-1 text-black"
            onClick={() => setShowTextColorPicker(!showTextColorPicker)}
          >
            {textColor}
          </button>
          {showTextColorPicker && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
              <div className="bg-white p-4 rounded-lg shadow-md relative">
                <button 
                  className="absolute top-2 right-2 text-gray-600"
                  onClick={() => setShowTextColorPicker(false)}
                >
                  &times;
                </button>
                <HexColorPicker color={textColor} onChange={setTextColor} />
                <div className="flex justify-between mt-4">
                  <button
                    className="border px-3 py-1 rounded text-black bg-gray-200"
                    onClick={closePopup}
                  >
                    ยกเลิก
                  </button>
                  <button
                    className="border px-3 py-1 rounded text-white bg-blue-500"
                    onClick={() => setShowTextColorPicker(false)}
                  >
                    ตกลง
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mb-4">
        <span className="block mb-2 text-black">สีพื้นหลัง</span>
        <div className="flex items-center space-x-2">
          <div 
            className="w-6 h-6 rounded cursor-pointer" 
            style={{ backgroundColor: backgroundColor }}
            onClick={() => setShowBackgroundColorPicker(!showBackgroundColorPicker)}
          ></div>
          <button 
            className="border rounded px-3 py-1 text-black"
            onClick={() => setShowBackgroundColorPicker(!showBackgroundColorPicker)}
          >
            {backgroundColor}
          </button>
          {showBackgroundColorPicker && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
              <div className="bg-white p-4 rounded-lg shadow-md relative">
                <button 
                  className="absolute top-2 right-2 text-gray-600"
                  onClick={() => setShowBackgroundColorPicker(false)}
                >
                  &times;
                </button>
                <HexColorPicker color={backgroundColor} onChange={setBackgroundColor} />
                <div className="flex justify-between mt-4">
                  <button
                    className="border px-3 py-1 rounded text-black bg-gray-200"
                    onClick={closePopup}
                  >
                    ยกเลิก
                  </button>
                  <button
                    className="border px-3 py-1 rounded text-white bg-blue-500"
                    onClick={() => setShowBackgroundColorPicker(false)}
                  >
                    ตกลง
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextEditor;

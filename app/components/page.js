'use client';
import { useState } from "react";
import Header from "./menu/header";
import Sidebar from "./menu/sidebar";
import ImportFile from "./importfile/import-file";
import GenerateQuiz from "./generate-quiz/page";
import MyQuiz from "./myquiz/page";
import Template from "./template/page";

export default function Page() {
  const [selectedComponent, setSelectedComponent] = useState("myquiz"); // default to "myquiz"

  // Function to conditionally render components based on selectedComponent
  const renderComponent = () => {
    switch (selectedComponent) {
      case "import":
        return <ImportFile />;
      case "ai":
        return <GenerateQuiz />;
      case "myquiz":
        return <MyQuiz />;
      case "template":
        return <Template />;
      default:
        return <MyQuiz />;
    }
  };

  return (
    <div className="bg-[#F9F8F6] text-black h-screen">
      <Header />
      <div className="flex mt-4 h-full">
        <div className="w-1/5">
          <Sidebar selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} /> {/* Pass selectedComponent and setter */}
        </div>
        <div className="w-4/5">
          {renderComponent()} {/* Conditionally render the component */}
        </div>
      </div>
    </div>
  );
}

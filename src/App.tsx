// import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-full min-h-screen flex space-x-6">
        <div className="w-[20%] border border-gray-800 min-h-screen overflow-hidden">
          <aside className="bg-gray-100 w-full min-h-screen p-6">
            <div className="border border-gray-200 rounded-md py-2.5 px-6 w-full flex items-center">
              <i className="fas fa-file-powerpoint fa-lg fa-fw mr-2 text-black"></i>
              <span className="text-xl">Presentation</span>
            </div>

            <div className="my-3 w-full">
              <span>Slide 1 of 15</span>
            </div>

            <div className="border border-gray-800 rounded-md py-2.5 px-6 w-full h-48 flex items-center my-6"></div>

            <button className="border border-gray-800 bg-gray-900 rounded-md py-2.5 px-6 w-full flex items-center justify-center">
              <i className="fas fa-plus fa-lg fa-fw mr-2 text-white"></i>
              <span className="text-xl text-white">Add New Slide</span>
            </button>
          </aside>
        </div>
        <div className="w-[80%] border border-gray-800 min-h-screen"></div>
      </div>
    </>
  );
}

export default App;

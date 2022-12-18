import React, { useState } from "react";

const Dropdown: React.FC = () => {
  const [isHidden, setHidden] = useState(true);

  return (
    <div className="container mx-auto px-4 py-8">
      <h6 className="font-bold md-2"> Componente Dropdown</h6>
      <div className="relative">
        <button
          className="flex items-center text-sm bg-gray-50 border border-gray-300 px-2 py-1 rounded text-gray-700 shadow"
          onClick={() => {
            setHidden(!isHidden);
          }}
        >
          Botão
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <div
          className={
            isHidden
              ? "hidden"
              : "" +
                " absolute bg-white border border-gray-300 py-1 shadow-md rounded"
          }
        >
          <a
            href="#"
            className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-100"
          >
            Link1
          </a>
          <a
            href="#"
            className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-100"
          >
            Link2
          </a>
          <a
            href="#"
            className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-100"
          >
            Link3
          </a>
          <a
            href="#"
            className="block w-full text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-100"
          >
            Link4
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

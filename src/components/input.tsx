import React from "react";

const Input: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h6 className=" font-bold mb-2">Componente Input</h6>
      <div className="space-y-2">
        <input
          type="text"
          className="bg-gray-40 border border-gray-300 focus:border-blue-500 focus:outline-none rounded px-2 py-1 text-sm text-gray-800 placeholder-gray-300 w-full"
          placeholder="Digite um texto"
        />
        <input
          type="text"
          className="bg-gray-40 border border-gray-300 focus:border-blue-500 focus:outline-none rounded px-2 py-1 text-md text-gray-800 placeholder-gray-300 w-full"
          placeholder="Digite um texto"
        />
        <input
          type="text"
          className="bg-gray-40 border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-40 rounded px-2 py-1 text-lg text-gray-800 placeholder-gray-300 w-full transition duration-300 ease-in-out"
          placeholder="Digite um texto"
        />
      </div>
    </div>
  );
};

export default Input;

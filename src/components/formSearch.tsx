import React from "react";

const FormSearch: React.FC = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-20 flex justify-center">
      <form className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
          <option value="">Escolha estado</option>
        </select>
        <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
          <option value="">Escolha cidade</option>
        </select>
        <button className="col-span-2 lg:col-span-1 inline-flex items-center justify-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          Pesquisar resorts
        </button>
      </form>
    </div>
  );
};

export default FormSearch;

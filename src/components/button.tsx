import React from "react";

const Button: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-x-2">
        <h6 className="font-bold mb-2">Componente Button</h6>
        <button className="text-sm bg-blue-500 hover:bg-blue-600 px-4 py-1 text-white shadow rounded">
          Save
        </button>
        <button className="text-md bg-blue-500 hover:bg-blue-600 px-4 py-1 text-white shadow rounded">
          Save
        </button>
        <button className="text-lg bg-blue-500 hover:bg-blue-600 px-6 py-2 text-white shadow rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default Button;

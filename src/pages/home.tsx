import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6 text-xl flex flex-col">
      <a
        href="/components"
        className="bg-blue-600 rounded px-4 py-2 hover:bg-blue-800 shadow text-white font-bold text-2xl"
      >
        Componentes
      </a>
      <a
        href="/login"
        className="bg-blue-600 rounded px-4 py-2 hover:bg-blue-800 shadow text-white font-bold text-2xl"
      >
        Login
      </a>
    </div>
  );
};
export default Home;

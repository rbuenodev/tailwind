import React from "react";

const Login: React.FC = () => {
  return (
    <div className="mx-auto h-screen w-full px-8 py-10 space-y-10 bg-gray-100">
      <a
        href="/"
        className="bg-green-400 hover:bg-green-700 py-2 px-4 text-2xl rounded-md shadow-sm"
      >
        Voltar
      </a>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-lg font-bold text-center mb-4">Login</h2>
        <div className="max-w-md shadow-md rounded-md p-4 bg-white space-y-4 w-80">
          <div>
            <label className="block text-sm text-gray-800 mb-2">Email</label>
            <input
              type="email"
              className="bg-gray-40 border border-gray-300 focus:border-blue-500 focus:outline-none rounded px-2 py-1 text-sm text-gray-800 placeholder-gray-300 w-full transition duration-300 ease-in-out"
              placeholder="Digite seu e-mail"
            ></input>
          </div>
          <div>
            <label className="block text-sm text-gray-800 mb-2">Senha</label>
            <input
              type="password"
              className="bg-gray-40 border border-gray-300 focus:border-blue-500 focus:outline-none rounded px-2 py-1 text-sm text-gray-800 placeholder-gray-300 w-full transition duration-300 ease-in-out"
              placeholder="Digite sua senha"
            ></input>
          </div>
          <div className="text-right">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Esqueci minha senha
            </a>
          </div>
          <div>
            <button className="w-full bg-blue-600 hover:bg-blue-800 px-3 py-2 text-md rounded-md text-white transition duration-500 ease-in-out ">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

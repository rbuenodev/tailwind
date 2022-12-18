const Badge: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h6 className=" font-bold mb-2">Componente Badge</h6>
      <div className="space-x-2">
        <div className="inline-flex text-sm bg-green-100 px-1.5 py-0.5 rounded-md text-green-800 font-medium">
          Ativo
        </div>
        <div className="inline-flex text-sm bg-green-100 px-1.5 py-0.5 rounded-full text-green-800 font-medium">
          Ativo
        </div>
        <div className="inline-flex text-sm bg-red-100 px-1.5 py-0.5 rounded-full text-red-800 font-medium">
          Inativo
        </div>
        <div className="inline-flex text-sm bg-yellow-100 px-1.5 py-0.5 rounded-full text-yellow-800 font-medium">
          Progresso
        </div>
      </div>
    </div>
  );
};
export default Badge;

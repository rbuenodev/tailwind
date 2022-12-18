import React from "react";

const Card: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h6 className="font-bold mb-2">Componente Card</h6>
      <div className="bg-white rounded-md shadow-lg overflow-hidden">
        <div className="w-full bg-gray-100 p-4 border border-b border-gray-200">
          <h4 className="font-bold">Titulo card</h4>
        </div>
        <div className="text-base p-4">
          Lorem ipsum dolor sit amet, decore libris disputationi ad vix. Mea
          omittam offendit vituperata ad. Per praesent adversarium id, eam eu
          magna ipsum utroque, duis simul ridens qui et. Ex vitae reprimique
          mediocritatem mei, eam quem movet at, voluptatum appellantur nam in.
          Vel wisi dolor in, maiorum propriae delicata ei pro, vide virtute
          vulputate ne sit.
        </div>
        <div className="w-full bg-gray-50 p-3 border border-t border-gray-100">
          <h4 className="font-bold">rodapé</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;

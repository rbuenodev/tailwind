import React from "react";
import image from "../assets/img/praia.jpg";

const Feature: React.FC = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-20">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="lg:pr-10">
          <div className="text-sm text-gray-400 font-medium">
            RESORT EM DESTAQUE
          </div>
          <div className="text-2xl text-gray-600">
            Ecoresort Praia do Forte Bahia
          </div>
          <div className="text-sm text-gray-400 font-medium mt-2">
            Ecoresort qualidade 5 estrelas
          </div>
          <div>
            <p className="text-sm text-gray-400 font-medium mt-4">
              Lorem ipsum dolor sit amet, decore libris disputationi ad vix. Mea
              omittam offendit vituperata ad. Per praesent adversarium id, eam
              eu magna ipsum utroque, duis simul ridens qui et. Ex vitae
              reprimique mediocritatem mei, eam quem movet at, voluptatum
              appellantur nam in. Vel wisi dolor in, maiorum propriae delicata
              ei pro, vide virtute vulputate ne sit.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded"
              >
                Solicitar Reserva
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 lg:ml-auto rounded overflow-hidden mb-5 lg:mb-0">
          <img src={image} width="450px" />
        </div>
      </div>
    </div>
  );
};

export default Feature;

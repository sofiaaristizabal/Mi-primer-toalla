
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-100 text-pink-700 py-8 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          Hecho con <span role="img" aria-label="corazón">💖</span> para chicas increíbles como tú.
        </p>
        <p className="text-sm mt-2">
          Realizado por Sofia Aristizabal Madrid, estudiante de ingenieria de sistemas y computación de la EIA
        </p>
        <p className="text-sm mt-2">
         Propiedad de Aula Abierta
        </p>
        <p className="text-xs mt-2">
          &copy; {new Date().getFullYear()} Guía Amiga. Todos los derechos reservados (¡pero comparte el cariño!).
        </p>
      </div>
    </footer>
  );
};

export default Footer;

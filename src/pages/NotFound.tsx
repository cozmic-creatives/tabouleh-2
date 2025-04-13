
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from '@/components/SEO';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Gebruiker probeerde een niet-bestaande route te openen:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SEO 
        title="Pagina Niet Gevonden - 404 Error"
        description="De pagina die u zoekt bestaat niet of is verplaatst. Ga terug naar de homepage van TABOULEH 2 Restaurant."
        type="website"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oeps! Pagina niet gevonden</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Terug naar Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;


import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Home, UtensilsCrossed, Mail } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Gebruiker probeerde een niet-bestaande route te openen:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-clay-50 bg-pattern relative overflow-hidden">
      <SEO 
        title="Pagina Niet Gevonden - 404 Error"
        description="De pagina die u zoekt bestaat niet of is verplaatst. Ga terug naar de homepage van TABOULEH 2 Restaurant."
        type="website"
      />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-spice-100 opacity-40 blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-olive-100 opacity-40 blur-2xl"></div>
      
      <div className="text-center px-4 max-w-2xl mx-auto relative z-10">
        {/* 404 Number with style */}
        <div className="mb-6">
          <span className="text-8xl md:text-9xl font-serif font-bold bg-gradient-to-br from-spice-600 to-spice-400 bg-clip-text text-transparent leading-none">
            404
          </span>
        </div>
        
        {/* Main message */}
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-olive-900 mb-4">
          Hmm, deze pagina staat niet op ons menu
        </h1>
        <p className="text-lg text-clay-700 mb-8 max-w-md mx-auto">
          De pagina die je zoekt is mogelijk verplaatst of bestaat niet. Geen zorgen, laten we je terug naar het goede pad leiden!
        </p>
        
        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-spice-600 hover:bg-spice-700 shadow-md w-full sm:w-auto">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Terug naar Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-spice-300 text-spice-700 hover:bg-spice-50 w-full sm:w-auto">
            <Link to="/menu" className="flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4" />
              Bekijk Menu
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-olive-300 text-olive-700 hover:bg-olive-50 w-full sm:w-auto">
            <Link to="/contact" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

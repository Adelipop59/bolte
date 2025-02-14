import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8" />
            <span className="font-bold text-xl">AutoClean Pro</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-200 transition-colors">Accueil</Link>
            <Link to="/services" className="hover:text-blue-200 transition-colors">Nos Prestations</Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 hover:bg-blue-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 hover:bg-blue-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Nos Prestations
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 hover:bg-blue-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
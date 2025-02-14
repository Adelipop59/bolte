import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AutoClean Pro</h3>
            <p className="text-gray-400">
              Votre spécialiste du nettoyage automobile professionnel
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>01 23 45 67 89</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>contact@autocleanpro.fr</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>123 rue du Nettoyage, 75000 Paris</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <p className="text-gray-400">
              Lundi - Vendredi: 8h30 - 19h00<br />
              Samedi: 9h00 - 18h00<br />
              Dimanche: Fermé
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AutoClean Pro. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
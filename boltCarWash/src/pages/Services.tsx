import React from 'react';
import { Car, Sparkles, Shield, Timer, PenTool as Tool, SprayCan as Spray } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Nettoyage Extérieur Premium",
    price: "à partir de 49€",
    description: "Lavage carrosserie, jantes, vitres, et protection céramique",
    features: [
      "Lavage haute pression",
      "Décontamination ferreux",
      "Nettoyage jantes et pneus",
      "Protection céramique",
    ],
    icon: Car
  },
  {
    title: "Nettoyage Intérieur Complet",
    price: "à partir de 79€",
    description: "Aspiration complète, nettoyage cuir/tissu, et désinfection",
    features: [
      "Aspiration approfondie",
      "Nettoyage sièges et moquettes",
      "Traitement cuir",
      "Désinfection complète",
    ],
    icon: Sparkles
  },
  {
    title: "Formule Complete",
    price: "à partir de 119€",
    description: "Combinaison des services intérieur et extérieur",
    features: [
      "Nettoyage extérieur premium",
      "Nettoyage intérieur complet",
      "Protection longue durée",
      "Désodorisation offerte",
    ],
    icon: Shield
  }
];

const additionalServices = [
  {
    title: "Traitement Céramique",
    description: "Protection longue durée pour votre carrosserie",
    icon: Spray
  },
  {
    title: "Rénovation Optiques",
    description: "Restauration des phares ternis",
    icon: Tool
  },
  {
    title: "Nettoyage Express",
    description: "Service rapide pour les urgences",
    icon: Timer
  }
];

const Services = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Prestations
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Des solutions adaptées à tous vos besoins
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Prendre rendez-vous
          </Link>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">
                  {service.price}
                </p>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Services Additionnels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-lg mb-6">
            Contactez-nous pour un devis personnalisé adapté à vos besoins
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
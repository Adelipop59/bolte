import React from 'react';
import { Shield, Timer, Award, Star, Users, ThumbsUp, Car, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: "Marie L.",
    role: "Cliente fidèle",
    content: "Un service exceptionnel ! Ma voiture n'a jamais été aussi propre.",
    rating: 5
  },
  {
    name: "Thomas B.",
    role: "Client régulier",
    content: "Équipe professionnelle et résultats impeccables. Je recommande !",
    rating: 5
  },
  {
    name: "Sophie M.",
    role: "Nouvelle cliente",
    content: "Ravie du service, ils ont redonné une seconde vie à mon véhicule.",
    rating: 5
  }
];

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Redonnez vie à<br />votre véhicule
            </h1>
            <p className="text-xl md:text-3xl mb-12 text-gray-200">
              Service professionnel de nettoyage automobile à votre service
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 text-center"
              >
                <span className="relative z-10">Prendre rendez-vous</span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                to="/services"
                className="group relative px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-lg font-semibold transition-all duration-200 hover:bg-white/20 text-center"
              >
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Pourquoi nous choisir ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Service Premium", desc: "Des prestations haut de gamme pour un résultat impeccable" },
              { icon: Timer, title: "Rapidité", desc: "Service rapide et efficace pour minimiser votre attente" },
              { icon: Award, title: "Expertise", desc: "Une équipe qualifiée avec des années d'expérience" }
            ].map((feature, index) => (
              <div key={index} className="gradient-border hover-lift">
                <div className="p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Notre Processus</h2>
            <p className="text-xl text-gray-600">Un service simple et efficace en 4 étapes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Car, title: "1. Réservation", desc: "Prenez rendez-vous en ligne ou par téléphone" },
              { icon: Users, title: "2. Accueil", desc: "Nous vous accueillons et évaluons vos besoins" },
              { icon: Sparkles, title: "3. Nettoyage", desc: "Nos experts prennent soin de votre véhicule" },
              { icon: ThumbsUp, title: "4. Livraison", desc: "Votre véhicule vous est rendu comme neuf" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card p-8 rounded-2xl hover-lift">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto transform -rotate-6">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent transform -translate-y-1/2 -translate-x-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Avis Clients</h2>
            <p className="text-xl text-gray-600">Ce que nos clients disent de nous</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl hover-lift">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 text-lg">{testimonial.content}</p>
                <div className="border-t border-gray-100 pt-6">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-blue-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
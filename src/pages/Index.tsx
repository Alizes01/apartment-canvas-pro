
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Home, MapPin, Camera, FileText, DollarSign, Settings } from 'lucide-react';
import AddApartmentModal from '@/components/AddApartmentModal';

const Index = () => {
  const [showAddApartment, setShowAddApartment] = useState(false);

  const features = [
    {
      icon: Home,
      title: "Informations de base",
      description: "Type d'appartement, chambres, toilettes"
    },
    {
      icon: MapPin,
      title: "Localisation précise",
      description: "Adresse complète avec Google Maps"
    },
    {
      icon: Camera,
      title: "Galerie photos",
      description: "Jusqu'à 60 photos de qualité"
    },
    {
      icon: FileText,
      title: "Description détaillée",
      description: "Nom accrocheur et description complète"
    },
    {
      icon: DollarSign,
      title: "Prix flexible",
      description: "Multiple devises disponibles"
    },
    {
      icon: Settings,
      title: "Mode de réservation",
      description: "Instantané ou sur demande"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Location Appartements
              </h1>
              <p className="text-gray-600 mt-1">
                Plateforme moderne de gestion locative
              </p>
            </div>
            <Button
              onClick={() => setShowAddApartment(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg"
              size="lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Ajouter un appartement
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enregistrez votre
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}appartement meublé
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Interface moderne et intuitive pour enregistrer facilement vos appartements meublés 
            avec toutes les informations nécessaires en 6 étapes simples.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-lg border-0 bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à enregistrer votre premier appartement ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Notre processus guidé en 6 étapes vous permet d'enregistrer facilement tous les détails 
              de votre appartement meublé. Interface responsive et moderne adaptée à tous les écrans.
            </p>
            <Button
              onClick={() => setShowAddApartment(true)}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-50 shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Commencer l'enregistrement
            </Button>
          </div>
        </div>
      </div>

      {/* Add Apartment Modal */}
      <AddApartmentModal
        isOpen={showAddApartment}
        onClose={() => setShowAddApartment(false)}
      />
    </div>
  );
};

export default Index;

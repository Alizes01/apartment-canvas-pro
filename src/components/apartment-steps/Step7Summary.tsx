
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, MapPin, Camera, FileText, DollarSign, Zap, Clock } from 'lucide-react';

interface Step7Props {
  data: any;
}

const Step7Summary: React.FC<Step7Props> = ({ data }) => {
  const topCurrencies = [
    { code: 'XAF', name: 'Franc CFA', symbol: 'FCFA' },
    { code: 'USD', name: 'Dollar américain', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'Livre sterling', symbol: '£' },
    { code: 'JPY', name: 'Yen japonais', symbol: '¥' },
    { code: 'CAD', name: 'Dollar canadien', symbol: 'C$' },
    { code: 'AUD', name: 'Dollar australien', symbol: 'A$' },
    { code: 'CHF', name: 'Franc suisse', symbol: 'CHF' },
    { code: 'CNY', name: 'Yuan chinois', symbol: '¥' },
    { code: 'INR', name: 'Roupie indienne', symbol: '₹' }
  ];

  const selectedCurrency = topCurrencies.find(c => c.code === data.currency);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Récapitulatif de votre appartement
        </h2>
        <p className="text-gray-600">
          Vérifiez toutes les informations avant de publier votre annonce
        </p>
      </div>

      <div className="grid gap-6">
        {/* Informations de base */}
        <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Informations de base
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-medium">{data.type || 'Non renseigné'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Chambres</p>
                <p className="font-medium">{data.bedrooms} chambre{data.bedrooms > 1 ? 's' : ''}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Toilettes</p>
                <p className="font-medium">{data.bathrooms} toilette{data.bathrooms > 1 ? 's' : ''}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Localisation */}
        <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              Localisation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="font-medium">
                {data.streetAddress}, {data.neighborhood}
              </p>
              <p className="text-gray-600">
                {data.commune}, {data.city}
              </p>
              {data.googleMapsLink && (
                <Badge variant="outline" className="text-green-600 border-green-300">
                  Lien Google Maps ajouté
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Photos */}
        <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-purple-600" />
              Photos ({data.photos.length}/60)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {data.photos.length > 0 ? (
              <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                {data.photos.slice(0, 12).map((photo: File, index: number) => (
                  <div key={index} className="aspect-square bg-gray-100 rounded overflow-hidden">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Photo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {data.photos.length > 12 && (
                  <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-sm text-gray-500">
                      +{data.photos.length - 12}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-500">Aucune photo ajoutée</p>
            )}
          </CardContent>
        </Card>

        {/* Détails */}
        <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-orange-600" />
              Détails
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Nom de l'appartement</p>
                <p className="font-medium">{data.name || 'Non renseigné'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Description</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {data.description || 'Aucune description'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prix */}
        <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              Prix
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {data.price?.toLocaleString() || '0'} {selectedCurrency?.symbol}
                </p>
                <p className="text-sm text-gray-500">par mois</p>
              </div>
              <div className="text-sm text-gray-600">
                <p>~{Math.round((data.price || 0) / 30)} {selectedCurrency?.symbol}/jour</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mode de réservation */}
        <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {data.bookingMode === 'instant' ? (
                <Zap className="w-5 h-5 text-green-600" />
              ) : (
                <Clock className="w-5 h-5 text-blue-600" />
              )}
              Mode de réservation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Badge 
                variant={data.bookingMode === 'instant' ? 'default' : 'secondary'}
                className={data.bookingMode === 'instant' ? 'bg-green-100 text-green-700' : ''}
              >
                {data.bookingMode === 'instant' ? 'Réservation instantanée' : 'Demande de réservation'}
              </Badge>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {data.bookingMode === 'instant' 
                ? 'Les locataires peuvent réserver immédiatement'
                : 'Les locataires doivent envoyer une demande'
              }
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
        <h3 className="font-semibold text-green-800 mb-2">🎉 Félicitations !</h3>
        <p className="text-green-700 text-sm">
          Votre appartement est prêt à être publié. Une fois enregistré, il sera visible par tous les locataires potentiels.
        </p>
      </div>
    </div>
  );
};

export default Step7Summary;

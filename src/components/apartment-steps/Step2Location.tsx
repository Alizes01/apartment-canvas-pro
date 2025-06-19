
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin } from 'lucide-react';

interface Step2Props {
  data: any;
  updateData: (field: string, value: any) => void;
}

const Step2Location: React.FC<Step2Props> = ({ data, updateData }) => {
  const isValidGoogleMapsLink = (url: string) => {
    return url.includes('maps.google.com') || url.includes('goo.gl/maps') || url.includes('maps.app.goo.gl');
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Localisation de l'appartement
        </h2>
        <p className="text-gray-600">
          Renseignez l'adresse complète pour aider vos futurs locataires à vous trouver
        </p>
      </div>

      <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-blue-600" />
            </div>
            Adresse complète
          </CardTitle>
          <CardDescription>
            Toutes les informations de localisation sont requises
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="city">Ville *</Label>
              <Input
                id="city"
                placeholder="Ex: Douala"
                value={data.city}
                onChange={(e) => updateData('city', e.target.value)}
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="commune">Commune *</Label>
              <Input
                id="commune"
                placeholder="Ex: Akwa"
                value={data.commune}
                onChange={(e) => updateData('commune', e.target.value)}
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="neighborhood">Quartier *</Label>
              <Input
                id="neighborhood"
                placeholder="Ex: Bonanjo"
                value={data.neighborhood}
                onChange={(e) => updateData('neighborhood', e.target.value)}
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="street">Adresse de la rue *</Label>
              <Input
                id="street"
                placeholder="Ex: 123 Rue de la Paix"
                value={data.streetAddress}
                onChange={(e) => updateData('streetAddress', e.target.value)}
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="maps-link">Lien Google Maps *</Label>
            <Input
              id="maps-link"
              placeholder="https://maps.google.com/..."
              value={data.googleMapsLink}
              onChange={(e) => updateData('googleMapsLink', e.target.value)}
              className={`focus:ring-blue-500 focus:border-blue-500 ${
                data.googleMapsLink && !isValidGoogleMapsLink(data.googleMapsLink) 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                  : ''
              }`}
            />
            {data.googleMapsLink && !isValidGoogleMapsLink(data.googleMapsLink) && (
              <p className="text-sm text-red-600">
                Veuillez entrer un lien Google Maps valide
              </p>
            )}
            <p className="text-sm text-gray-500">
              Copiez et collez le lien Google Maps de votre appartement. 
              Cela permettra aux locataires de voir la localisation exacte.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Step2Location;

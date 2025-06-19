
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface Step1Props {
  data: any;
  updateData: (field: string, value: any) => void;
}

const Step1BasicInfo: React.FC<Step1Props> = ({ data, updateData }) => {
  const apartmentTypes = [
    'Studio',
    'Appartement 1 pièce',
    'Appartement 2 pièces',
    'Appartement 3 pièces',
    'Appartement 4 pièces',
    'Appartement 5+ pièces',
    'Duplex',
    'Triplex',
    'Penthouse',
    'Loft'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Informations de base
        </h2>
        <p className="text-gray-600">
          Commençons par les caractéristiques principales de votre appartement
        </p>
      </div>

      <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-sm">1</span>
            </div>
            Type d'appartement
          </CardTitle>
          <CardDescription>
            Sélectionnez le type d'appartement que vous souhaitez enregistrer
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="apartment-type">Type d'appartement</Label>
            <Select value={data.type} onValueChange={(value) => updateData('type', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choisir le type d'appartement" />
              </SelectTrigger>
              <SelectContent>
                {apartmentTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="bedrooms">Nombre de chambres</Label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <Button
                    key={num}
                    variant={data.bedrooms === num ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateData('bedrooms', num)}
                    className={data.bedrooms === num ? 
                      "bg-blue-600 hover:bg-blue-700" : 
                      "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
                    }
                  >
                    {num}
                  </Button>
                ))}
                <Button
                  variant={data.bedrooms > 6 ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateData('bedrooms', 7)}
                  className={data.bedrooms > 6 ? 
                    "bg-blue-600 hover:bg-blue-700" : 
                    "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
                  }
                >
                  6+
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bathrooms">Nombre de toilettes/salles de bain</Label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Button
                    key={num}
                    variant={data.bathrooms === num ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateData('bathrooms', num)}
                    className={data.bathrooms === num ? 
                      "bg-blue-600 hover:bg-blue-700" : 
                      "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
                    }
                  >
                    {num}
                  </Button>
                ))}
                <Button
                  variant={data.bathrooms > 5 ? "default" : "outline"}
                  size="sm"
                  onClick={() => updateData('bathrooms', 6)}
                  className={data.bathrooms > 5 ? 
                    "bg-blue-600 hover:bg-blue-700" : 
                    "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
                  }
                >
                  5+
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Step1BasicInfo;


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FileText } from 'lucide-react';

interface Step4Props {
  data: any;
  updateData: (field: string, value: any) => void;
}

const Step4Details: React.FC<Step4Props> = ({ data, updateData }) => {
  const nameCharCount = data.name.length;
  const descriptionCharCount = data.description.length;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Détails de l'appartement
        </h2>
        <p className="text-gray-600">
          Donnez un nom accrocheur et décrivez votre appartement de manière attrayante
        </p>
      </div>

      <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <FileText className="w-4 h-4 text-blue-600" />
            </div>
            Nom et description
          </CardTitle>
          <CardDescription>
            Ces informations seront visibles par tous les futurs locataires
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="apartment-name">Nom de l'appartement *</Label>
              <span className={`text-xs ${
                nameCharCount < 10 
                  ? 'text-red-500' 
                  : nameCharCount > 30 
                    ? 'text-red-500' 
                    : 'text-green-600'
              }`}>
                {nameCharCount}/30
              </span>
            </div>
            <Input
              id="apartment-name"
              placeholder="Ex: Magnifique studio moderne avec vue sur mer"
              value={data.name}
              onChange={(e) => {
                if (e.target.value.length <= 30) {
                  updateData('name', e.target.value);
                }
              }}
              className={`focus:ring-blue-500 focus:border-blue-500 ${
                nameCharCount < 10 || nameCharCount > 30 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                  : nameCharCount >= 10 
                    ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
                    : ''
              }`}
              maxLength={30}
            />
            {nameCharCount < 10 && (
              <p className="text-sm text-red-600">
                Le nom doit contenir au moins 10 caractères
              </p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="apartment-description">Description courte *</Label>
              <span className={`text-xs ${
                descriptionCharCount < 50 
                  ? 'text-red-500' 
                  : descriptionCharCount > 500 
                    ? 'text-red-500' 
                    : 'text-green-600'
              }`}>
                {descriptionCharCount}/500
              </span>
            </div>
            <Textarea
              id="apartment-description"
              placeholder="Décrivez votre appartement : ses atouts, équipements, proximité des transports, commerces..."
              value={data.description}
              onChange={(e) => {
                if (e.target.value.length <= 500) {
                  updateData('description', e.target.value);
                }
              }}
              className={`min-h-32 focus:ring-blue-500 focus:border-blue-500 ${
                descriptionCharCount < 50 || descriptionCharCount > 500 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                  : descriptionCharCount >= 50 
                    ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
                    : ''
              }`}
              maxLength={500}
            />
            {descriptionCharCount < 50 && (
              <p className="text-sm text-red-600">
                La description doit contenir au moins 50 caractères
              </p>
            )}
            <p className="text-sm text-gray-500">
              Une bonne description inclut : les équipements, la luminosité, la proximité des commodités, l'ambiance du quartier...
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Step4Details;

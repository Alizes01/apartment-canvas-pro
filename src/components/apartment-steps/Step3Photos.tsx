
import React, { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Upload, X, Image } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface Step3Props {
  data: any;
  updateData: (field: string, value: any) => void;
}

const Step3Photos: React.FC<Step3Props> = ({ data, updateData }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const remainingSlots = 60 - data.photos.length;
    const filesToAdd = files.slice(0, remainingSlots);
    
    const newPhotos = [...data.photos, ...filesToAdd];
    updateData('photos', newPhotos);
  };

  const removePhoto = (index: number) => {
    const newPhotos = data.photos.filter((_: any, i: number) => i !== index);
    updateData('photos', newPhotos);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Photos de l'appartement
        </h2>
        <p className="text-gray-600">
          Ajoutez jusqu'à 60 photos pour présenter votre appartement sous son meilleur jour
        </p>
      </div>

      <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Camera className="w-4 h-4 text-blue-600" />
            </div>
            Galerie photos ({data.photos.length}/60)
          </CardTitle>
          <CardDescription>
            Les photos de qualité attirent plus de locataires. Montrez toutes les pièces importantes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {data.photos.length < 60 && (
            <div className="flex flex-col items-center justify-center">
              <div 
                onClick={triggerFileInput}
                className="w-full max-w-md h-32 border-2 border-dashed border-blue-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-colors flex flex-col items-center justify-center gap-2"
              >
                <Upload className="w-8 h-8 text-blue-500" />
                <p className="text-sm text-blue-600 font-medium">
                  Cliquez pour ajouter des photos
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG jusqu'à 10MB chacune
                </p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          )}

          {data.photos.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.photos.map((photo: File, index: number) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Photo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removePhoto(index)}
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          {data.photos.length === 0 && (
            <Alert>
              <Image className="h-4 w-4" />
              <AlertDescription>
                Aucune photo ajoutée. Les annonces avec photos reçoivent 5x plus de vues !
              </AlertDescription>
            </Alert>
          )}

          {data.photos.length >= 60 && (
            <Alert>
              <AlertDescription>
                Vous avez atteint la limite maximale de 60 photos.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Step3Photos;

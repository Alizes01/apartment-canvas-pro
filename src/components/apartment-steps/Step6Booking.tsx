
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Zap, Clock } from 'lucide-react';

interface Step6Props {
  data: any;
  updateData: (field: string, value: any) => void;
}

const Step6Booking: React.FC<Step6Props> = ({ data, updateData }) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Mode de réservation
        </h2>
        <p className="text-gray-600">
          Choisissez comment vous souhaitez gérer les demandes de réservation
        </p>
      </div>

      <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4 text-blue-600" />
            </div>
            Type de réservation
          </CardTitle>
          <CardDescription>
            Cette option définit comment les locataires peuvent réserver votre appartement
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            value={data.bookingMode}
            onValueChange={(value) => updateData('bookingMode', value)}
            className="space-y-4"
          >
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-blue-50/50 transition-colors cursor-pointer">
                <RadioGroupItem value="instant" id="instant" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="instant" className="cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-lg">Réservation instantanée</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        RECOMMANDÉ
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Les locataires peuvent réserver immédiatement votre appartement sans attendre votre approbation. 
                      Idéal pour maximiser vos réservations et offrir une expérience fluide. 
                      Vous recevrez une notification instantanée et le paiement sera sécurisé automatiquement.
                    </p>
                    <div className="mt-2 flex items-center gap-4 text-xs text-green-600">
                      <span>✓ Plus de réservations</span>
                      <span>✓ Moins de gestion</span>
                      <span>✓ Paiement sécurisé</span>
                    </div>
                  </Label>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-blue-50/50 transition-colors cursor-pointer">
                <RadioGroupItem value="request" id="request" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="request" className="cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-lg">Demande de réservation</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Les locataires doivent envoyer une demande que vous devrez approuver manuellement. 
                      Parfait si vous voulez filtrer vos locataires ou avoir plus de contrôle sur les réservations. 
                      Vous avez 24h pour répondre aux demandes.
                    </p>
                    <div className="mt-2 flex items-center gap-4 text-xs text-blue-600">
                      <span>✓ Contrôle total</span>
                      <span>✓ Sélection des locataires</span>
                      <span>✓ Communication préalable</span>
                    </div>
                  </Label>
                </div>
              </div>
            </div>
          </RadioGroup>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <h4 className="font-semibold text-gray-900 mb-2">
              {data.bookingMode === 'instant' ? 'Réservation instantanée activée' : 'Demande de réservation activée'}
            </h4>
            <p className="text-sm text-gray-600">
              {data.bookingMode === 'instant' 
                ? 'Vos locataires pourront réserver immédiatement. Vous pouvez changer ce paramètre à tout moment.'
                : 'Vous recevrez des demandes de réservation à approuver. Pensez à répondre rapidement pour ne pas perdre de clients.'
              }
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Step6Booking;

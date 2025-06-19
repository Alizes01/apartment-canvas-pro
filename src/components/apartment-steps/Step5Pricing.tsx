import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { DollarSign } from 'lucide-react';

interface Step5Props {
  data: any;
  updateData: (field: string, value: any) => void;
}

const Step5Pricing: React.FC<Step5Props> = ({ data, updateData }) => {
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
          Prix de l'appartement
        </h2>
        <p className="text-gray-600">
          Définissez le prix de location mensuel et choisissez votre devise
        </p>
      </div>

      <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-blue-600" />
            </div>
            Tarification
          </CardTitle>
          <CardDescription>
            Fixez un prix compétitif pour attirer plus de locataires
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="price">Prix mensuel *</Label>
              <div className="relative">
                <Input
                  id="price"
                  type="number"
                  placeholder="0"
                  value={data.price || ''}
                  onChange={(e) => updateData('price', parseFloat(e.target.value) || 0)}
                  className="focus:ring-blue-500 focus:border-blue-500 pr-20"
                  min="0"
                  step="1000"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <span className="text-sm text-gray-500">
                    {selectedCurrency?.symbol}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currency">Devise *</Label>
              <Select value={data.currency} onValueChange={(value) => updateData('currency', value)}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {topCurrencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{currency.symbol}</span>
                        <span>{currency.name}</span>
                        <span className="text-gray-500">({currency.code})</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {data.price > 0 && (
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Récapitulatif des prix</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Prix mensuel :</span>
                  <span className="font-medium">
                    {data.price.toLocaleString()} {selectedCurrency?.symbol}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Prix par semaine :</span>
                  <span>
                    {(data.price / 4).toFixed(0)} {selectedCurrency?.symbol}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Prix par jour :</span>
                  <span>
                    {(data.price / 30).toFixed(0)} {selectedCurrency?.symbol}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="text-sm text-gray-600 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">💡 Conseils pour fixer le prix</h4>
            <ul className="space-y-1 text-yellow-700">
              <li>• Recherchez les prix dans votre quartier</li>
              <li>• Considérez les équipements inclus</li>
              <li>• Ajustez selon la saison et la demande</li>
              <li>• Un prix juste attire plus de locataires sérieux</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Step5Pricing;

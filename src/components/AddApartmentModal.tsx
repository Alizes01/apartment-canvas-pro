
import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Step1BasicInfo from './apartment-steps/Step1BasicInfo';
import Step2Location from './apartment-steps/Step2Location';
import Step3Photos from './apartment-steps/Step3Photos';
import Step4Details from './apartment-steps/Step4Details';
import Step5Pricing from './apartment-steps/Step5Pricing';
import Step6Booking from './apartment-steps/Step6Booking';
import Step7Summary from './apartment-steps/Step7Summary';
import ExitConfirmModal from './ExitConfirmModal';
import SaveDraftModal from './SaveDraftModal';

interface ApartmentData {
  type: string;
  bedrooms: number;
  bathrooms: number;
  city: string;
  commune: string;
  neighborhood: string;
  streetAddress: string;
  googleMapsLink: string;
  photos: File[];
  name: string;
  description: string;
  price: number;
  currency: string;
  bookingMode: 'instant' | 'request';
}

interface AddApartmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddApartmentModal: React.FC<AddApartmentModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showSaveDraft, setShowSaveDraft] = useState(false);
  const [apartmentData, setApartmentData] = useState<ApartmentData>({
    type: '',
    bedrooms: 1,
    bathrooms: 1,
    city: '',
    commune: '',
    neighborhood: '',
    streetAddress: '',
    googleMapsLink: '',
    photos: [],
    name: '',
    description: '',
    price: 0,
    currency: 'XAF',
    bookingMode: 'instant'
  });

  const totalSteps = 7;

  const updateApartmentData = (field: keyof ApartmentData, value: any) => {
    setApartmentData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleExit = () => {
    setShowExitConfirm(true);
  };

  const handleSave = () => {
    setShowSaveDraft(true);
  };

  const confirmExit = () => {
    setShowExitConfirm(false);
    onClose();
  };

  const confirmSave = () => {
    setShowSaveDraft(false);
    // Ici vous pouvez ajouter la logique de sauvegarde
    console.log('Données sauvegardées:', apartmentData);
    onClose();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1BasicInfo data={apartmentData} updateData={updateApartmentData} />;
      case 2:
        return <Step2Location data={apartmentData} updateData={updateApartmentData} />;
      case 3:
        return <Step3Photos data={apartmentData} updateData={updateApartmentData} />;
      case 4:
        return <Step4Details data={apartmentData} updateData={updateApartmentData} />;
      case 5:
        return <Step5Pricing data={apartmentData} updateData={updateApartmentData} />;
      case 6:
        return <Step6Booking data={apartmentData} updateData={updateApartmentData} />;
      case 7:
        return <Step7Summary data={apartmentData} />;
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "Informations de base";
      case 2: return "Localisation";
      case 3: return "Photos";
      case 4: return "Détails";
      case 5: return "Prix";
      case 6: return "Mode de réservation";
      case 7: return "Récapitulatif";
      default: return "";
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={() => {}}>
        <DialogContent className="max-w-none h-screen w-full p-0 gap-0">
          <div className="flex flex-col h-full bg-gradient-to-br from-slate-50 to-white">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b bg-white/80 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleExit}
                  className="hover:bg-red-50 hover:text-red-600"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">
                    Enregistrer un appartement
                  </h1>
                  <p className="text-sm text-gray-500">
                    Étape {currentStep} sur {totalSteps}: {getStepTitle()}
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSave}
                className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
              >
                <Save className="h-4 w-4 mr-2" />
                Enregistrer et sortir
              </Button>
            </div>

            {/* Progress Bar */}
            <div className="px-6 py-4 bg-white/50">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <span key={i} className={currentStep > i ? 'text-blue-600 font-medium' : ''}>
                    {i + 1}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-6">
              <div className="max-w-4xl mx-auto">
                {renderStep()}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-6 border-t bg-white/80 backdrop-blur-sm">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="disabled:opacity-50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Précédent
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                >
                  Suivant
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    console.log('Appartement enregistré:', apartmentData);
                    onClose();
                  }}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                >
                  Enregistrer l'appartement
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ExitConfirmModal
        isOpen={showExitConfirm}
        onClose={() => setShowExitConfirm(false)}
        onConfirm={confirmExit}
      />

      <SaveDraftModal
        isOpen={showSaveDraft}
        onClose={() => setShowSaveDraft(false)}
        onConfirm={confirmSave}
      />
    </>
  );
};

export default AddApartmentModal;

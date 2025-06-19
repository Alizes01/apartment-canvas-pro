
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';

interface SaveDraftModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const SaveDraftModal: React.FC<SaveDraftModalProps> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Save className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <DialogTitle>Sauvegarder le brouillon ?</DialogTitle>
              <DialogDescription className="mt-1">
                Vos données seront sauvegardées pour une modification ultérieure.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-sm text-gray-600">
            Vos informations seront sauvegardées et vous pourrez continuer l'enregistrement 
            plus tard. Vous recevrez un email de rappel avec le lien pour reprendre là où vous vous êtes arrêté.
          </p>
        </div>

        <DialogFooter className="flex gap-2 sm:gap-0">
          <Button
            variant="outline"
            onClick={onClose}
            className="hover:bg-gray-50"
          >
            Annuler
          </Button>
          <Button
            onClick={onConfirm}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Sauvegarder et sortir
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SaveDraftModal;

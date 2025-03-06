
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ImportIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { importPagesToCMS } from '@/utils/importPagesToCms';
import { useAuth } from '@/contexts/AuthContext';

const ImportPagesButton = () => {
  const [isImporting, setIsImporting] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const handleImport = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "You must be logged in to import pages.",
        variant: "destructive",
      });
      return;
    }

    setIsImporting(true);
    
    try {
      const result = await importPagesToCMS(user.id);
      
      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
        });
      } else {
        toast({
          title: "Import failed",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error importing pages:', error);
      toast({
        title: "Import failed",
        description: "An unexpected error occurred while importing pages.",
        variant: "destructive",
      });
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <Button 
      onClick={handleImport} 
      disabled={isImporting}
      className="bg-brandcentral-accent hover:bg-brandcentral-accent/90"
    >
      <ImportIcon className="h-4 w-4 mr-2" />
      {isImporting ? 'Importing...' : 'Import Website Pages'}
    </Button>
  );
};

export default ImportPagesButton;


import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AlertTriangle, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from '@/components/ui/dialog';

interface PageSettingsProps {
  isPublished: boolean;
  setIsPublished: (isPublished: boolean) => void;
  metaDescription: string;
  setMetaDescription: (description: string) => void;
  isEditMode: boolean;
  onDelete: () => void;
}

const PageSettings: React.FC<PageSettingsProps> = ({
  isPublished,
  setIsPublished,
  metaDescription,
  setMetaDescription,
  isEditMode,
  onDelete,
}) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-4">Page Settings</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="published">Published</Label>
              <p className="text-sm text-gray-500">Make this page visible to the public</p>
            </div>
            <Switch
              id="published"
              checked={isPublished}
              onCheckedChange={setIsPublished}
            />
          </div>
          
          <div>
            <Label htmlFor="meta-description">Meta Description</Label>
            <p className="text-sm text-gray-500 mb-2">Brief description for search engines</p>
            <Textarea
              id="meta-description"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              placeholder="Enter meta description"
              className="h-24"
            />
            {metaDescription && metaDescription.length > 160 && (
              <p className="mt-1 text-sm text-amber-600 flex items-center">
                <AlertTriangle className="h-3 w-3 mr-1" />
                Meta descriptions should be 160 characters or less
              </p>
            )}
          </div>
          
          {isEditMode && (
            <div className="pt-4 border-t">
              <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                    <Trash className="h-4 w-4 mr-2" />
                    Delete Page
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Delete Page</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to delete this page? This action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="destructive" onClick={() => {
                      onDelete();
                      setShowDeleteDialog(false);
                    }}>
                      Delete
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PageSettings;

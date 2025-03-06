
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Search, Trash, Mail, Download, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock data - would be fetched from Supabase in a real application
const mockSubscribers = [
  { id: 1, email: 'john.doe@example.com', dateSubscribed: '2023-06-15', status: 'Active' },
  { id: 2, email: 'jane.smith@example.com', dateSubscribed: '2023-06-10', status: 'Active' },
  { id: 3, email: 'robert.johnson@example.com', dateSubscribed: '2023-06-08', status: 'Active' },
  { id: 4, email: 'susan.williams@example.com', dateSubscribed: '2023-06-05', status: 'Unsubscribed' },
  { id: 5, email: 'michael.brown@example.com', dateSubscribed: '2023-06-01', status: 'Active' },
  { id: 6, email: 'emily.davis@example.com', dateSubscribed: '2023-05-28', status: 'Active' },
];

const Subscribers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [subscribers, setSubscribers] = useState(mockSubscribers);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const { toast } = useToast();

  const filteredSubscribers = subscribers.filter(subscriber => 
    subscriber.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subscriber.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteSubscriber = (id: number) => {
    // In a real app, this would call Supabase to delete the subscriber
    setSubscribers(subscribers.filter(subscriber => subscriber.id !== id));
    toast({
      title: "Subscriber deleted",
      description: "The subscriber has been removed from your list.",
    });
  };

  const handleAddSubscriber = () => {
    if (!newEmail || !newEmail.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would call Supabase to add the subscriber
    const newId = Math.max(...subscribers.map(s => s.id)) + 1;
    const today = new Date().toISOString().split('T')[0];
    
    setSubscribers([
      ...subscribers,
      { id: newId, email: newEmail, dateSubscribed: today, status: 'Active' }
    ]);
    
    setNewEmail('');
    setIsDialogOpen(false);
    
    toast({
      title: "Subscriber added",
      description: "The new subscriber has been added to your list.",
    });
  };

  const handleExportCSV = () => {
    // Create CSV content
    const headers = ["ID", "Email", "Date Subscribed", "Status"];
    const csvContent = [
      headers.join(","),
      ...subscribers.map(subscriber => 
        [subscriber.id, subscriber.email, subscriber.dateSubscribed, subscriber.status].join(",")
      )
    ].join("\n");
    
    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'subscribers.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Export complete",
      description: "Your subscribers list has been exported as CSV.",
    });
  };

  const triggerWebhook = async () => {
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter a webhook URL first.",
        variant: "destructive",
      });
      return;
    }

    try {
      // In a real implementation, we would include more data
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Add this to handle CORS
        body: JSON.stringify({
          event: "subscribers_export",
          count: subscribers.length,
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: "Webhook triggered",
        description: "The webhook has been triggered successfully.",
      });
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast({
        title: "Error",
        description: "Failed to trigger the webhook. Please check the URL and try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Email Subscribers</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExportCSV}>
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-brandcentral-accent hover:bg-brandcentral-accent/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Subscriber
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Subscriber</DialogTitle>
                <DialogDescription>
                  Enter the email address of the new subscriber.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-brandcentral-accent hover:bg-brandcentral-accent/90" onClick={handleAddSubscriber}>
                  Add Subscriber
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex items-center space-x-2 border rounded-md p-2">
        <Search className="h-4 w-4 text-gray-400" />
        <Input 
          type="text" 
          placeholder="Search subscribers..." 
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="border rounded-md p-4 bg-white">
        <h3 className="font-medium mb-2">Webhook Integration</h3>
        <p className="text-sm text-gray-500 mb-4">
          Connect to external tools like Zapier, Make, or GoHighLevel by entering your webhook URL.
        </p>
        <div className="flex gap-2">
          <Input
            type="url"
            placeholder="Enter webhook URL"
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
          />
          <Button variant="secondary" onClick={triggerWebhook}>
            Test Webhook
          </Button>
        </div>
      </div>

      {filteredSubscribers.length > 0 ? (
        <div className="border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Date Subscribed</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-20">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubscribers.map(subscriber => (
                <TableRow key={subscriber.id}>
                  <TableCell className="font-medium">{subscriber.email}</TableCell>
                  <TableCell className="text-sm text-gray-500">{subscriber.dateSubscribed}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      subscriber.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {subscriber.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleDeleteSubscriber(subscriber.id)}
                    >
                      <Trash className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center border rounded-md p-8 text-center">
          <Mail className="h-12 w-12 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">No subscribers found</h3>
          <p className="text-gray-500 mb-4">
            {searchTerm ? `No results for "${searchTerm}"` : "You haven't added any subscribers yet."}
          </p>
        </div>
      )}
    </div>
  );
};

export default Subscribers;

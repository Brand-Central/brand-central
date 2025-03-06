
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
import { Search, UserPlus, Shield, MoreHorizontal, Key } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

// Mock data - would be fetched from Supabase in a real application
const mockUsers = [
  { id: 1, email: 'admin@example.com', role: 'Admin', lastLogin: '2023-06-15 09:45' },
  { id: 2, email: 'editor@example.com', role: 'Editor', lastLogin: '2023-06-14 14:32' },
  { id: 3, email: 'viewer@example.com', role: 'Viewer', lastLogin: '2023-06-10 11:15' },
];

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState(mockUsers);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState('Editor');
  const { toast } = useToast();

  const filteredUsers = users.filter(user => 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = () => {
    if (!newEmail || !newEmail.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would call Supabase Auth to create the user
    const newId = Math.max(...users.map(u => u.id)) + 1;
    const now = new Date().toISOString().split('.')[0].replace('T', ' ');
    
    setUsers([
      ...users,
      { id: newId, email: newEmail, role: newRole, lastLogin: now }
    ]);
    
    setNewEmail('');
    setNewRole('Editor');
    setIsDialogOpen(false);
    
    toast({
      title: "User invited",
      description: "An invitation email has been sent to the new user.",
    });
  };

  const handleDeleteUser = (id: number) => {
    // In a real app, this would call Supabase to delete the user
    setUsers(users.filter(user => user.id !== id));
    toast({
      title: "User removed",
      description: "The user has been removed from the system.",
    });
  };

  const handleResetPassword = (email: string) => {
    // In a real app, this would call Supabase Auth to reset the password
    toast({
      title: "Password reset email sent",
      description: `A password reset link has been sent to ${email}.`,
    });
  };

  const handleChangeRole = (id: number, newRole: string) => {
    // In a real app, this would call Supabase to update the user's role
    setUsers(users.map(user => 
      user.id === id ? { ...user, role: newRole } : user
    ));
    
    toast({
      title: "Role updated",
      description: "The user's role has been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Users</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-brandcentral-accent hover:bg-brandcentral-accent/90">
              <UserPlus className="h-4 w-4 mr-2" />
              Invite User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite New User</DialogTitle>
              <DialogDescription>
                Enter the email address and select a role for the new user.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium">Role</label>
                <select 
                  id="role"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-brandcentral-accent hover:bg-brandcentral-accent/90" onClick={handleAddUser}>
                Send Invitation
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center space-x-2 border rounded-md p-2">
        <Search className="h-4 w-4 text-gray-400" />
        <Input 
          type="text" 
          placeholder="Search users..." 
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="border rounded-md p-4 bg-white">
        <h3 className="font-medium flex items-center mb-2">
          <Shield className="h-4 w-4 mr-2 text-brandcentral-accent" />
          Role Permissions
        </h3>
        <div className="text-sm text-gray-500 space-y-2">
          <p><strong>Admin:</strong> Full access to all CMS features, including user management.</p>
          <p><strong>Editor:</strong> Can create, edit, and publish content, but cannot manage users.</p>
          <p><strong>Viewer:</strong> Read-only access to content, cannot make changes.</p>
        </div>
      </div>

      {filteredUsers.length > 0 ? (
        <div className="border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead className="w-20">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map(user => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.email}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.role === 'Admin' 
                        ? 'bg-purple-100 text-purple-800' 
                        : user.role === 'Editor'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.role}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">{user.lastLogin}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleResetPassword(user.email)}>
                          <Key className="h-4 w-4 mr-2" />
                          Reset Password
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleChangeRole(user.id, 'Admin')}>
                          <Shield className="h-4 w-4 mr-2" />
                          Make Admin
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleChangeRole(user.id, 'Editor')}>
                          <Shield className="h-4 w-4 mr-2" />
                          Make Editor
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleChangeRole(user.id, 'Viewer')}>
                          <Shield className="h-4 w-4 mr-2" />
                          Make Viewer
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-600 focus:bg-red-50 focus:text-red-700"
                        >
                          <Shield className="h-4 w-4 mr-2" />
                          Remove User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center border rounded-md p-8 text-center">
          <UserPlus className="h-12 w-12 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">No users found</h3>
          <p className="text-gray-500 mb-4">
            {searchTerm ? `No results for "${searchTerm}"` : "You haven't added any users yet."}
          </p>
        </div>
      )}
    </div>
  );
};

export default Users;

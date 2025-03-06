
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, Mail, Eye } from 'lucide-react';

const Dashboard = () => {
  // Normally we would fetch this data from Supabase
  const stats = [
    { title: 'Total Pages', value: '12', icon: <FileText className="h-8 w-8 text-blue-500" />, change: '+2 this week' },
    { title: 'Published Pages', value: '8', icon: <Eye className="h-8 w-8 text-green-500" />, change: '66% of total' },
    { title: 'Admin Users', value: '3', icon: <Users className="h-8 w-8 text-purple-500" />, change: 'No change' },
    { title: 'Subscribers', value: '247', icon: <Mail className="h-8 w-8 text-amber-500" />, change: '+18 this month' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest content management activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: 'Page Updated', target: 'Services', user: 'admin@example.com', time: '2 hours ago' },
                { action: 'Page Created', target: 'New Blog Post', user: 'editor@example.com', time: '1 day ago' },
                { action: 'User Added', target: 'viewer@example.com', user: 'admin@example.com', time: '3 days ago' },
                { action: 'Page Published', target: 'About Us', user: 'editor@example.com', time: '5 days ago' },
              ].map((activity, index) => (
                <div key={index} className="flex justify-between items-start pb-2 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="text-sm font-medium">{activity.action}: <span className="text-brandcentral-accent">{activity.target}</span></p>
                    <p className="text-xs text-gray-500">By {activity.user}</p>
                  </div>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you might want to perform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Create Page', icon: <FileText className="h-5 w-5" />, path: '/admin/pages/new' },
                { label: 'View Subscribers', icon: <Mail className="h-5 w-5" />, path: '/admin/subscribers' },
                { label: 'Manage Users', icon: <Users className="h-5 w-5" />, path: '/admin/users' },
                { label: 'View Website', icon: <Eye className="h-5 w-5" />, path: '/' },
              ].map((action, index) => (
                <a 
                  key={index}
                  href={action.path}
                  className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {action.icon}
                  <span className="mt-2 text-sm font-medium">{action.label}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

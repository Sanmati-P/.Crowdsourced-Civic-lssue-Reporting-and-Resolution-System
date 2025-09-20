import React from 'react';
import Card from '../components/ui/Card';
import IssueMap from '../components/dashboard/IssueMap';

// Add lat and lng properties to your dummy data
const dummyIssues = [
  { id: 'RPT-001', title: 'Large Pothole', location: 'Main St', status: 'In Progress', lat: 11.935, lng: 79.792 },
  { id: 'RPT-002', title: 'Streetlight is Out', location: 'Oak Ave', status: 'New', lat: 11.931, lng: 79.795 },
  { id: 'RPT-003', title: 'Trash Cans Overflowing', location: 'Pine Ln', status: 'Resolved', lat: 11.938, lng: 79.798 },
];

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      {/* Summary Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card title="New Reports">
          <p className="text-4xl font-bold text-blue-600">45</p>
        </Card>
        <Card title="In Progress">
          <p className="text-4xl font-bold text-yellow-600">12</p>
        </Card>
        <Card title="Resolved">
          <p className="text-4xl font-bold text-green-600">230</p>
        </Card>
        <Card title="Total Reports">
          <p className="text-4xl font-bold text-gray-800">287</p>
        </Card>
      </div>
      
      {/* Live Issue Map Section */}
      <Card title="Live Issue Map" className="h-[28rem]">
        <IssueMap issues={dummyIssues} />
      </Card>
    </div>
  );
};

export default DashboardPage;
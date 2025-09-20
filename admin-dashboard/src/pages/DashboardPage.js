import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/ui/Card';
import IssueMap from '../components/dashboard/IssueMap';

const DashboardPage = () => {
  const [dashboardData, setDashboardData] = useState({
    summary: { newReports: 0, inProgress: 0, resolved: 0, totalReports: 0 },
    issues: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual backend API endpoint for dashboard data
    const API_URL = 'YOUR_BACKEND_API_URL/dashboard-data'; 

    axios.get(API_URL)
      .then(response => {
        setDashboardData({
          summary: response.data.summary,
          issues: response.data.issues, // Assuming this includes lat and lng
        });
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching dashboard data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="text-center mt-12 text-gray-500">Loading dashboard...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card title="New Reports">
          <p className="text-4xl font-bold text-blue-600">{dashboardData.summary.newReports}</p>
        </Card>
        <Card title="In Progress">
          <p className="text-4xl font-bold text-yellow-600">{dashboardData.summary.inProgress}</p>
        </Card>
        <Card title="Resolved">
          <p className="text-4xl font-bold text-green-600">{dashboardData.summary.resolved}</p>
        </Card>
        <Card title="Total Reports">
          <p className="text-4xl font-bold text-gray-800">{dashboardData.summary.totalReports}</p>
        </Card>
      </div>
      
      <Card title="Live Issue Map" className="h-[28rem]">
        <IssueMap issues={dashboardData.issues} />
      </Card>
    </div>
  );
};

export default DashboardPage;
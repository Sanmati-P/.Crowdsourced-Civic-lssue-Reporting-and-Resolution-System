import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/ui/Card';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell,
} from 'recharts';

const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AnalyticsPage = () => {
  const [analyticsData, setAnalyticsData] = useState({
    reportsByCategory: [],
    reportsOverTime: [],
    departmentalResponse: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Replace this with your actual backend API endpoint for analytics data
    const API_URL = 'YOUR_BACKEND_API_URL/analytics';

    axios.get(API_URL)
      .then(response => {
        setAnalyticsData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching analytics data!", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="text-center mt-12 text-gray-500">Loading analytics...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Analytics and Reporting</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reports by Category - Bar Chart */}
        <Card title="Reports by Category">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData.reportsByCategory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="reports" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        
        {/* Reports Over Time - Line Chart */}
        <Card title="Reports Over Time">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData.reportsOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="reports" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        
        {/* Departmental Response - Pie Chart */}
        <div className="lg:col-span-2">
          <Card title="Departmental Response">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={analyticsData.departmentalResponse}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {analyticsData.departmentalResponse.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
import React from 'react';
import Card from '../components/ui/Card';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell,
} from 'recharts';

// Dummy data for the charts
const reportsByCategoryData = [
  { name: 'Potholes', reports: 45 },
  { name: 'Streetlights', reports: 30 },
  { name: 'Sanitation', reports: 25 },
  { name: 'Roads', reports: 15 },
  { name: 'Other', reports: 10 },
];

const reportsOverTimeData = [
  { name: 'Jan', reports: 20 },
  { name: 'Feb', reports: 30 },
  { name: 'Mar', reports: 45 },
  { name: 'Apr', reports: 40 },
  { name: 'May', reports: 60 },
];

const departmentalResponseData = [
  { name: 'Public Works', value: 75 },
  { name: 'Sanitation', value: 85 },
  { name: 'Parks & Rec', value: 60 },
  { name: 'General Services', value: 50 },
];

const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AnalyticsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Analytics and Reporting</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reports by Category - Bar Chart */}
        <Card title="Reports by Category">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={reportsByCategoryData}>
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
            <LineChart data={reportsOverTimeData}>
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
          <Card title="Departmental Response (Dummy Data)">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentalResponseData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {departmentalResponseData.map((entry, index) => (
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
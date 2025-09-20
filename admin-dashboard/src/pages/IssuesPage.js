// src/pages/IssuesPage.js
import React, { useState } from 'react';
import IssueTable from '../components/issues/IssueTable';
import IssueDetail from '../components/issues/IssueDetail';

const dummyIssues = [
  // ... your dummy data, updated with assignedTo property
  { id: 'RPT-001', title: 'Large Pothole on Main St', location: '123 Main St', status: 'In Progress', date: '2025-09-18', description: '...', assignedTo: 'Public Works' },
  { id: 'RPT-002', title: 'Streetlight is Out', location: '456 Oak Ave', status: 'New', date: '2025-09-19', description: '...', assignedTo: 'Unassigned' },
  { id: 'RPT-003', title: 'Trash Cans Overflowing', location: '789 Pine Ln', status: 'Resolved', date: '2025-09-17', description: '...', assignedTo: 'Sanitation' },
];

const IssuesPage = () => {
  const [issues, setIssues] = useState(dummyIssues);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [sortKey, setSortKey] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle issue updates from the modal
  const handleUpdateIssue = (updatedIssue) => {
    setIssues(prevIssues => 
      prevIssues.map(issue => 
        issue.id === updatedIssue.id ? updatedIssue : issue
      )
    );
  };

  const handleViewDetails = (issue) => {
    setSelectedIssue(issue);
  };

  const handleCloseDetail = () => {
    setSelectedIssue(null);
  };

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredIssues = issues.filter(issue =>
    issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedIssues = [...filteredIssues].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Reported Issues</h1>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search issues..."
          className="w-full px-4 py-2 border rounded-md"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <IssueTable 
        issues={sortedIssues} 
        handleViewDetails={handleViewDetails}
        handleSort={handleSort}
        sortKey={sortKey}
        sortDirection={sortDirection}
      />
      
      {/* Pass the handleUpdateIssue function to the modal */}
      {selectedIssue && (
        <IssueDetail 
          issue={selectedIssue} 
          onClose={handleCloseDetail} 
          onUpdate={handleUpdateIssue}
        />
      )}
    </div>
  );
};

export default IssuesPage;
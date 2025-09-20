import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IssueTable from '../components/issues/IssueTable';
import IssueDetail from '../components/issues/IssueDetail';

const IssuesPage = () => {
  // We will now use an empty array as the initial state for issues
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [sortKey, setSortKey] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');
  const [searchQuery, setSearchQuery] = useState('');

  // This hook fetches data from the backend when the component first mounts
  useEffect(() => {
    // Replace with your actual backend API endpoint for all issues
    const API_URL = 'YOUR_BACKEND_API_URL/issues'; 

    axios.get(API_URL)
      .then(response => {
        setIssues(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching issues:", error);
        setIsLoading(false);
      });
  }, []); // The empty array [] ensures this runs only once

  // This function updates the issue both in the backend and in our local state
  const handleUpdateIssue = (updatedIssue) => {
    // Replace with your actual backend API endpoint for updating issues
    const API_URL = `YOUR_BACKEND_API_URL/issues/${updatedIssue.id}`;

    axios.put(API_URL, updatedIssue)
      .then(response => {
        setIssues(prevIssues => 
          prevIssues.map(issue => 
            issue.id === updatedIssue.id ? updatedIssue : issue
          )
        );
        // Optional: Close the modal after a successful update
        setSelectedIssue(null);
      })
      .catch(error => {
        console.error("Error updating issue:", error);
      });
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

  // Filter and sort logic remains the same, but now it operates on the fetched 'issues' state
  const filteredIssues = issues.filter(issue =>
    issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedIssues = [...filteredIssues].sort((a, b) => {
    const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
    if (sortKey === 'priority') {
      const aVal = priorityOrder[a.priority] || 0;
      const bVal = priorityOrder[b.priority] || 0;
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    }
    if (a[sortKey] < b[sortKey]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  if (isLoading) {
    return <div className="text-center mt-12 text-gray-500">Loading issues...</div>;
  }

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
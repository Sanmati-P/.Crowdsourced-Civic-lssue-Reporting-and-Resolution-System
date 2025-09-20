import React, { useState } from 'react';
import Card from '../ui/Card';

const IssueDetail = ({ issue, onClose, onUpdate }) => {
  // CORRECT: Call useState hooks at the top, before any conditional logic.
  const [status, setStatus] = useState(issue ? issue.status : 'New');
  const [assignedTo, setAssignedTo] = useState(issue ? issue.assignedTo || 'Unassigned' : 'Unassigned');

  // Place conditional logic AFTER the hooks.
  if (!issue) return null;

  // We'll need some options for the dropdowns
  const statusOptions = ['New', 'In Progress', 'Resolved', 'Closed'];
  const departmentOptions = ['Unassigned', 'Public Works', 'Sanitation', 'Parks & Rec', 'General Services'];

  // This function is triggered when the status is changed
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    onUpdate({ ...issue, status: newStatus });
  };

  // This function is triggered when the assignment is changed
  const handleAssignmentChange = (e) => {
    const newAssignedTo = e.target.value;
    setAssignedTo(newAssignedTo);
    onUpdate({ ...issue, assignedTo: newAssignedTo });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50">
      <Card className="relative p-8 w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-4">{issue.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-gray-600">Report ID</label>
            <p className="text-gray-800">{issue.id}</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600">Date</label>
            <p className="text-gray-800">{issue.date}</p>
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-semibold text-gray-600">Status</label>
            <select
              id="status"
              value={status}
              onChange={handleStatusChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              {statusOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="assignedTo" className="block text-sm font-semibold text-gray-600">Assigned To</label>
            <select
              id="assignedTo"
              value={assignedTo}
              onChange={handleAssignmentChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              {departmentOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Display Text Description */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-700">{issue.description}</p>
        </div>

        {/* Placeholder for Images and Voice Explanation */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Attached Images</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-24 bg-gray-300 rounded-md flex items-center justify-center">
                <span className="text-gray-500">Image 1</span>
              </div>
              <div className="h-24 bg-gray-300 rounded-md flex items-center justify-center">
                <span className="text-gray-500">Image 2</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Voice Explanation</h3>
            <div className="h-24 bg-gray-300 rounded-md flex items-center justify-center">
              <p className="text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.899a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.293-4.293a1 1 0 011.414 0V20a1 1 0 01-1.414 0L5.586 15z" />
                </svg>
                <span className="text-sm">Play Voice Clip</span>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default IssueDetail;
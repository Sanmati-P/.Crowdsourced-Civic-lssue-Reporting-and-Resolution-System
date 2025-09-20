import React from 'react';

const IssueTable = ({ issues, handleViewDetails, handleSort, sortKey, sortDirection }) => {
  // Function to render a sorting arrow icon
  const renderSortArrow = (key) => {
    if (sortKey === key) {
      return sortDirection === 'asc' ? ' ↑' : ' ↓';
    }
    return '';
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th onClick={() => handleSort('id')} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
              ID {renderSortArrow('id')}
            </th>
            <th onClick={() => handleSort('title')} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
              Issue {renderSortArrow('title')}
            </th>
            <th onClick={() => handleSort('location')} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
              Location {renderSortArrow('location')}
            </th>
            <th onClick={() => handleSort('status')} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
              Status {renderSortArrow('status')}
            </th>
            <th onClick={() => handleSort('date')} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
              Date {renderSortArrow('date')}
            </th>
            <th className="px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{issue.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{issue.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{issue.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  issue.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                  issue.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {issue.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{issue.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => handleViewDetails(issue)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueTable;
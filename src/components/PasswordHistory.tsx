import React from 'react';

interface PasswordHistoryProps {
  history: string[];
  onCopy: (password: string) => void;
}

const PasswordHistory: React.FC<PasswordHistoryProps> = ({ history, onCopy }) => {
  return (
    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Last 5 Generated Passwords</h2>
      <ul>
        {history.length === 0 ? (
          <li className="text-gray-600 dark:text-gray-400">No passwords generated yet.</li>
        ) : (
          history.map((pw, index) => (
            <li key={index} className="flex items-center justify-between mb-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-md">
              <span className="font-mono text-gray-800 dark:text-gray-200 break-all mr-4">{pw}</span>
              <button
                onClick={() => onCopy(pw)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded transition duration-200 ease-in-out dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                Copy
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PasswordHistory;

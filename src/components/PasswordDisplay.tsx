import React from 'react';

interface PasswordDisplayProps {
  password: string;
  onCopy: () => void;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password, onCopy }) => {
  return (
    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Generated Password:</h2>
      <div className="flex items-center">
        <input
          type="text"
          readOnly
          value={password}
          className="flex-grow p-3 border border-gray-300 dark:border-gray-600 rounded-l-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-lg font-mono"
        />
        <button
          onClick={onCopy}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-r-lg transition duration-200 ease-in-out"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default PasswordDisplay;

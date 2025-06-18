import React from 'react';

interface PasswordControlsProps {
  length: number;
  setLength: (length: number) => void;
  includeUppercase: boolean;
  setIncludeUppercase: (include: boolean) => void;
  includeLowercase: boolean;
  setIncludeLowercase: (include: boolean) => void;
  includeNumbers: boolean;
  setIncludeNumbers: (include: boolean) => void;
  includeSymbols: boolean;
  setIncludeSymbols: (include: boolean) => void;
}

const PasswordControls: React.FC<PasswordControlsProps> = ({
  length,
  setLength,
  includeUppercase,
  setIncludeUppercase,
  includeLowercase,
  setIncludeLowercase,
  includeNumbers,
  setIncludeNumbers,
  includeSymbols,
  setIncludeSymbols,
}) => {
  return (
    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Password Controls</h2>
      <div className="flex items-center mb-4">
        <label htmlFor="passwordLength" className="mr-4 text-lg text-gray-700 dark:text-gray-300">Length: {length}</label>
        <input
          type="range"
          id="passwordLength"
          min="6"
          max="30"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex items-center text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          /> Include Uppercase
        </label>
        <label className="flex items-center text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          /> Include Lowercase
        </label>
        <label className="flex items-center text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          /> Include Numbers
        </label>
        <label className="flex items-center text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          /> Include Symbols
        </label>
      </div>
    </div>
  );
};

export default PasswordControls;

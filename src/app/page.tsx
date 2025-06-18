'use client';

import React, { useState, useEffect } from 'react';
import PasswordControls from '../components/PasswordControls';
import PasswordDisplay from '../components/PasswordDisplay';
import PasswordHistory from '../components/PasswordHistory';
import DarkModeToggle from '../components/DarkModeToggle';
import { generatePassword } from '../utils/passwordGenerator';

export default function Home() {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [passwordHistory, setPasswordHistory] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load history from localStorage
    const storedHistory = localStorage.getItem('passwordHistory');
    if (storedHistory) {
      setPasswordHistory(JSON.parse(storedHistory));
    }

    // Load dark mode preference
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setIsDarkMode(JSON.parse(storedDarkMode));
      if (JSON.parse(storedDarkMode)) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  useEffect(() => {
    // Save history to localStorage whenever it changes
    localStorage.setItem('passwordHistory', JSON.stringify(passwordHistory));
  }, [passwordHistory]);

  useEffect(() => {
    // Apply or remove dark class based on state
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(
      length,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols
    );
    setGeneratedPassword(newPassword);

    // Add to history, keeping only the last 5
    setPasswordHistory((prevHistory) => {
      const updatedHistory = [newPassword, ...prevHistory].slice(0, 5);
      return updatedHistory;
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Password copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="z-10 w-full max-w-2xl items-center justify-between font-sans text-sm lg:flex flex-col">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-blue-600 dark:text-blue-400">
          🔐 OpenPass
        </h1>

        <PasswordControls
          length={length}
          setLength={setLength}
          includeUppercase={includeUppercase}
          setIncludeUppercase={setIncludeUppercase}
          includeLowercase={includeLowercase}
          setIncludeLowercase={setIncludeLowercase}
          includeNumbers={includeNumbers}
          setIncludeNumbers={setIncludeNumbers}
          includeSymbols={includeSymbols}
          setIncludeSymbols={setIncludeSymbols}
        />

        <button
          onClick={handleGeneratePassword}
          className="w-full max-w-md bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg mb-8 text-xl shadow-lg transform transition duration-200 ease-in-out hover:scale-105"
        >
          🔁 Generate Password
        </button>

        <PasswordDisplay
          password={generatedPassword}
          onCopy={() => copyToClipboard(generatedPassword)}
        />

        <PasswordHistory
          history={passwordHistory}
          onCopy={copyToClipboard}
        />

        <DarkModeToggle
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </main>
  );
}

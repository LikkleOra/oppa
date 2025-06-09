"use client";

import dynamic from 'next/dynamic';
import TestComponent from './components/TestComponent';

const Uploader = dynamic(() => import('./components/Uploader'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Video Clipping Tool</h1>
        <input type="file" accept="video/*" className="mb-4" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Upload
        </button>
      </div>
    </main>
  );
}

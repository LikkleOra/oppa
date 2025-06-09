"use client";

import { useState } from 'react';
import { transcribeAudio } from '@lib/transcribe';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const [video, setVideo] = useState<File | null>(null);
  const [transcription, setTranscription] = useState<string>('');
  const [analysis, setAnalysis] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('');
  const router = useRouter();

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setVideo(file);
  };

  const handleTranscribe = async () => {
    if (!video) {
      alert('Please select a video file');
      return;
    }

    setIsLoading(true);
    setStatus('Transcribing...');

    try {
      const transcriptionResult = await transcribeAudio(video);
      setTranscription(transcriptionResult);
      setStatus('Transcription complete!');

      setIsAnalyzing(true);
      setStatus('Analyzing your video...');

      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transcript: transcriptionResult }),
      });

      const data = await response.json();

      if (response.ok) {
        setAnalysis(data);
        setStatus('Analysis complete!');
        router.push('/preview');
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error: any) {
      setStatus(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
      setIsAnalyzing(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Video Upload</h1>
        <input
          type="file"
          accept="video/*"
          className="mb-4"
          onChange={handleVideoChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleTranscribe}
          disabled={isLoading || isAnalyzing}
        >
          {isLoading ? 'Transcribing...' : isAnalyzing ? 'Analyzing...' : 'Transcribe'}
        </button>
        {status && <p className="mt-4">{status}</p>}
        {transcription && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Transcription</h2>
            <p>{transcription}</p>
          </div>
        )}
        {analysis && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Analysis</h2>
            <h3 className="text-xl font-bold mb-2">Titles</h3>
            <div className="flex flex-wrap mb-4">
              {analysis.titles.map((title: string) => (
                <button key={title} className="bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-2 mr-2 mb-2">
                  {title}
                </button>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2">Hooks</h3>
            <ul className="list-disc list-inside mb-4">
              {analysis.hooks.map((hook: string) => (
                <li key={hook}>{hook}</li>
              ))}
            </ul>
            <h3 className="text-xl font-bold mb-2">Clips</h3>
            {analysis.clips.map((clip: any) => (
              <div key={clip.title} className="border rounded-lg p-4 mb-4">
                <h4 className="text-lg font-bold">{clip.title}</h4>
                <p>Start: {clip.start}</p>
                <p>End: {clip.end}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

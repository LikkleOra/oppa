"use client";

import { useState, useRef, useEffect } from 'react';

export default function PreviewPage() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [clips, setClips] = useState<any[]>([]);
  const [currentClip, setCurrentClip] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Mock clip data for now
    setClips([
      { title: 'Clip 1', start: '00:05', end: '00:10' },
      { title: 'Clip 2', start: '00:15', end: '00:20' },
      { title: 'Clip 3', start: '00:25', end: '00:30' },
    ]);

    // Mock video URL for now
    setVideoUrl('https://www.w3schools.com/html/mov_bbb.mp4');
  }, []);

  const playClip = (index: number) => {
    setCurrentClip(index);
    const clip = clips[index];
    if (videoRef.current) {
      videoRef.current.currentTime = parseTime(clip.start);
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (videoRef.current && currentClip !== null) {
      const clip = clips[currentClip];
      const endTime = parseTime(clip.end);

      const onTimeUpdate = () => {
        if (videoRef.current && videoRef.current.currentTime >= endTime) {
          videoRef.current.pause();
          videoRef.current.removeEventListener('timeupdate', onTimeUpdate);
        }
      };

      videoRef.current.addEventListener('timeupdate', onTimeUpdate);

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('timeupdate', onTimeUpdate);
        }
      };
    }
  }, [currentClip, clips]);

  const parseTime = (time: string) => {
    const [minutes, seconds] = time.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Clip Preview</h1>
        {videoUrl ? (
          <video ref={videoRef} src={videoUrl} controls className="w-full max-w-2xl mb-4" />
        ) : (
          <p>No video uploaded yet.</p>
        )}
        <div className="flex flex-wrap justify-center">
          {clips.map((clip, index) => (
            <button
              key={index}
              className={`bg-gray-200 hover:bg-gray-300 rounded-full px-4 py-2 mr-2 mb-2 ${currentClip === index ? 'bg-green-500 text-white' : ''}`}
              onClick={() => playClip(index)}
            >
              {clip.title} ({clip.start} - {clip.end})
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

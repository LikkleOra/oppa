import { NextResponse } from 'next/server';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';

export async function POST(request: Request) {
  try {
    const { videoUrl, start, end } = await request.json();

    if (!videoUrl || !start || !end) {
      return NextResponse.json({ error: 'Video URL, start time, and end time are required' }, { status: 400 });
    }

    // Initialize ffmpeg
    const ffmpeg = new FFmpeg();
    await ffmpeg.load();

    // Fetch the video file
    const videoData = await fetchFile(videoUrl);
    ffmpeg.writeFile('input.mp4', videoData);

    // Run ffmpeg command
    const startTime = start;
    const endTime = end;
    await ffmpeg.exec([
      '-i',
      'input.mp4',
      '-ss',
      startTime,
      '-to',
      endTime,
      '-c:v',
      'libx264',
      '-c:a',
      'aac',
      '-strict',
      'experimental',
      'output.mp4',
    ]);

    // Read the output file
    const outputData = await ffmpeg.readFile('output.mp4');

    // Create a download link
    const blob = new Blob([outputData], { type: 'video/mp4' });
    const url = URL.createObjectURL(blob);

    return NextResponse.json({ url });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

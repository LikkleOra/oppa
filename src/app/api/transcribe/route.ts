import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import fs from 'fs';
import { promises as fsp } from 'fs';
import os from 'os';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'File is required' }, { status: 400 });
    }

    // Save the file to a temporary directory
    const buffer = await file.arrayBuffer();
    const tmpdir = os.tmpdir();
    const filepath = path.join(tmpdir, file.name);
    await fsp.writeFile(filepath, Buffer.from(buffer));

    // Extract audio and transcribe using OpenAI Whisper API
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(filepath) as any,
      model: 'whisper-1',
    });

    // Delete the temporary file
    await fsp.unlink(filepath);

    return NextResponse.json({ transcription: transcription.text });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

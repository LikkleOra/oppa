import { NextResponse } from 'next/server';
import { analyzeTranscript } from '@lib/analyze';

export async function POST(request: Request) {
  try {
    const { transcript } = await request.json();

    if (!transcript) {
      return NextResponse.json({ error: 'Transcript is required' }, { status: 400 });
    }

    const analysis = await analyzeTranscript(transcript);

    return NextResponse.json(analysis);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

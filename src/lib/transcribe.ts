// src/lib/transcribe.ts

export async function transcribeAudio(file: File): Promise<string> {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/transcribe', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to transcribe audio');
    }

    return data.transcription;
  } catch (error: any) {
    console.error('Error transcribing audio:', error);
    throw new Error(error.message || 'Failed to transcribe audio');
  }
}

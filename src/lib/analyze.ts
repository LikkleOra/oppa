import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeTranscript(transcript: string) {
  try {
    const prompt = `Analyze this transcript. Return:
{
  titles: [...],
  summary: "...",
  hooks: ["Hook 1", "Hook 2"],
  clips: [
    { title: "...", start: "00:23", end: "01:10" },
    { title: "...", start: "02:12", end: "02:45" }
  ]
}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt + transcript }],
    });

    const analysis = JSON.parse(completion.choices[0].message.content || '{}');
    return analysis;
  } catch (error) {
    console.error('Error analyzing transcript:', error);
    throw new Error('Failed to analyze transcript');
  }
}

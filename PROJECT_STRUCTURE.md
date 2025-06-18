# OpusClip - Video Clipping Tool

## Project Structure

This document outlines the structure of the OpusClip video clipping tool, a Next.js application that uses AI for video transcription, summarization, and clip generation.

### Core Technologies

- **Next.js (App Router)** with TypeScript
- **TailwindCSS** for styling
- **ESLint + Prettier** for linting and formatting
- **FFmpeg (WASM)** for client-side video processing
- **OpenAI Whisper API** for audio transcription
- **GPT-4/GPT-3.5** for content analysis and generation

### Directory Structure

```
/src
├── app                    # Next.js App Router structure
│   ├── api                # API routes
│   │   ├── analyze        # Video content analysis API
│   │   ├── export         # Video export API
│   │   ├── gpt            # GPT integration API
│   │   ├── transcribe     # Audio transcription API
│   │   ├── upload         # File upload API
│   │   └── whisper        # Whisper API integration
│   ├── components         # App-specific components
│   ├── preview            # Video preview and clip selection page
│   ├── upload             # Video upload page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components             # Shared components
├── lib                    # Utility libraries
│   ├── analyze.ts         # Video analysis functions
│   └── transcribe.ts      # Transcription functions
├── styles                 # Global styles
├── types                  # TypeScript type definitions
└── utils                  # Utility functions
```

### Key Features

1. **Video Upload**: Users can upload videos for processing
2. **Transcription**: Audio is extracted and transcribed using OpenAI's Whisper API
3. **Content Analysis**: Transcripts are analyzed with GPT to identify key moments
4. **Clip Generation**: Users can preview and export clips based on AI suggestions
5. **Export**: Clips can be exported using client-side FFmpeg processing

### API Routes

- `/api/transcribe`: Handles audio transcription using Whisper API
- `/api/analyze`: Processes transcripts with GPT to identify key moments
- `/api/gpt`: General-purpose GPT integration
- `/api/export/clip`: Handles clip export functionality

### Pages

- `/`: Home page with introduction and getting started button
- `/upload`: Video upload and processing page
- `/preview`: Video preview and clip selection/export page

### Import Aliases

The project uses the following import aliases for cleaner imports:

- `@components/*`: Components directory
- `@lib/*`: Library functions
- `@types/*`: TypeScript types
- `@utils/*`: Utility functions
- `@styles/*`: Styles directory
- `@pages/*`: Pages directory
- `@api/*`: API directory

## Development

### Environment Variables

Create a `.env.local` file with the following variables:

```
OPENAI_API_KEY=your_openai_api_key
```

### Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Deployment

The project is designed to be easily deployable to Vercel:

```bash
npm run build
```

## Future Enhancements

- User authentication
- Saved clips library
- Advanced editing features
- Custom export settings
- Batch processing
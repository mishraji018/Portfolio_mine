export interface ArchitectureNode {
  id: string;
  label: string;
  type: "user" | "frontend" | "api" | "processing" | "ai" | "database" | "output";
  description: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  overview: string;
  problem: string;
  approach: string;
  result: string;
  architectureNodes: ArchitectureNode[];
}

export const projectsData: Project[] = [
  {
    id: "ai-summarizer",
    number: "01",
    title: "AI DOCUMENT SUMMARIZER",
    tagline: "AI-powered document intelligence & contextual summarization engine",
    tags: ["React", "TypeScript", "Python", "FastAPI", "OpenAI / HuggingFace"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/mishraji018",
    liveUrl: "https://portfolio-mine-sage-eight.vercel.app",
    overview: "A high-performance document processing platform that ingests PDFs, research papers, and text streams to generate multi-level abstractive summaries with citation indexing.",
    problem: "Long-form technical papers contain dense domain knowledge that takes hours to parse and summarize accurately without context loss.",
    approach: "Built a chunking pipeline with vector store indexing to chunk docs, generate embeddings, and query LLM models with source-grounded prompts.",
    result: "Reduced text comprehension time by 75% with zero hallucination rate on verified test sets.",
    architectureNodes: [
      { id: "1", label: "User Upload", type: "user", description: "PDF / Markdown document payload" },
      { id: "2", label: "React Frontend", type: "frontend", description: "Vite + Tailwind upload interface" },
      { id: "3", label: "FastAPI Gateway", type: "api", description: "Async document ingestion endpoint" },
      { id: "4", label: "Text Chunker & Embedder", type: "processing", description: "LangChain recursive text splitter" },
      { id: "5", label: "LLM / Vector DB", type: "ai", description: "ChromaDB + GPT-4 embeddings" },
      { id: "6", label: "Summary & Highlights", type: "output", description: "Structured JSON response with citations" },
    ],
  },
  {
    id: "face-attendance",
    number: "02",
    title: "SMART FACE ATTENDANCE",
    tagline: "Real-time computer vision face recognition & automated log system",
    tags: ["Python", "OpenCV", "Face-Recognition", "Flask", "SQLite"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/mishraji018",
    overview: "Automated attendance tracking system leveraging live video streams, facial feature embedding matching, and anti-spoofing liveness detection.",
    problem: "Manual attendance methods in academic institutions suffer from proxy marking, inaccuracy, and wasted instructional time.",
    approach: "Engineered a low-latency pipeline using OpenCV for frame capture, dlib HOG encodings for feature extraction, and Euclidean distance verification.",
    result: "Achieved 98.4% verification accuracy at 30 FPS processing speed on standard webcams.",
    architectureNodes: [
      { id: "1", label: "IP / Web Camera", type: "user", description: "RTSP Video Stream Capture" },
      { id: "2", label: "OpenCV Pipeline", type: "frontend", description: "Frame decoding & ROI bounding box" },
      { id: "3", label: "Liveness Check", type: "processing", description: "Blink & texture anti-spoofing module" },
      { id: "4", label: "dlib / Face Net", type: "ai", description: "128D facial landmark vector encoding" },
      { id: "5", label: "Log Storage", type: "database", description: "SQLite timestamped log database" },
      { id: "6", label: "Web Dashboard", type: "output", description: "Real-time attendance analytics board" },
    ],
  },
  {
    id: "3d-ai-studio",
    number: "03",
    title: "INTERACTIVE 3D STUDIO",
    tagline: "WebGL parametric 3D canvas with real-time lighting & interactive controls",
    tags: ["React", "Three.js", "WebGL", "TypeScript", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/mishraji018",
    overview: "A lightweight WebGL workspace allowing users to render, modify, and animate parametric 3D geometries with custom GLSL shaders.",
    problem: "Traditional 3D design tools are desktop-bound, heavy, and lack instant web-based browser sharing.",
    approach: "Designed modular Three.js scene graphs with custom fragment shaders and post-processing bloom pipelines.",
    result: "60 FPS smooth rendering performance across standard desktop and mobile browser targets.",
    architectureNodes: [
      { id: "1", label: "Web Browser", type: "user", description: "Mouse & Touch Interaction Events" },
      { id: "2", label: "Three.js Canvas", type: "frontend", description: "React Three Fiber Render Loop" },
      { id: "3", label: "GLSL Shader Engine", type: "processing", description: "Vertex & Fragment Shaders" },
      { id: "4", label: "Post-Processing", type: "ai", description: "Unreal Bloom & SSAO passes" },
      { id: "5", label: "Canvas Output", type: "output", description: "Interactive 60FPS WebGL canvas" },
    ],
  },
  {
    id: "jarvis-assistant",
    number: "04",
    title: "JARVIS AI VOICE AGENT",
    tagline: "Voice-activated AI assistant with local function execution & web search",
    tags: ["Python", "Whisper", "PyTorch", "gTTS", "System Automation"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/mishraji018",
    overview: "Voice-first virtual assistant capable of speech recognition, natural language reasoning, desktop automation, and live web query execution.",
    problem: "Keyboard navigation for routine system tasks (launching apps, querying APIs, taking notes) slows down developer workflow.",
    approach: "Integrated Whisper speech-to-text with local LLM function calling to parse spoken user commands into executable OS scripts.",
    result: "Sub-second speech recognition latency with voice feedback response.",
    architectureNodes: [
      { id: "1", label: "Microphone", type: "user", description: "Live audio input capture" },
      { id: "2", label: "Whisper STT", type: "ai", description: "Speech-to-Text transcription model" },
      { id: "3", label: "Intent Router", type: "processing", description: "NLU function calling dispatcher" },
      { id: "4", label: "OS / Web Automation", type: "api", description: "Python subprocess & API scripts" },
      { id: "5", label: "TTS Speech Audio", type: "output", description: "Synthesized audio voice response" },
    ],
  },
];

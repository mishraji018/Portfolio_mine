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
    id: "task-caretaker",
    number: "01",
    title: "TASK CARETAKER",
    tagline: "Smart task management & productivity web app",
    tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/mishraji018",
    liveUrl: "https://task-caretaker.vercel.app/",
    overview: "A clean, intuitive task management web application to organize, track and prioritize daily tasks — with a modern UI and smooth interactions.",
    problem: "Most task apps are cluttered with unnecessary features, making simple task tracking feel overwhelming and slow.",
    approach: "Built a minimal yet powerful React app with local state management, smooth UI transitions, and a focus on usability and clean design.",
    result: "A live, deployed productivity tool with a fast, distraction-free interface for daily task management.",
    architectureNodes: [
      { id: "1", label: "User Browser", type: "user", description: "Desktop & mobile web client" },
      { id: "2", label: "React + Vite", type: "frontend", description: "Component-based SPA" },
      { id: "3", label: "State Management", type: "processing", description: "Local state & persistence layer" },
      { id: "4", label: "TailwindCSS", type: "processing", description: "Utility-first responsive UI" },
      { id: "5", label: "Vercel Deploy", type: "output", description: "Live edge-deployed web app" },
    ],
  },
  {
    id: "chitchat-web",
    number: "02",
    title: "CHITCHAT WEB",
    tagline: "Real-time chat web application with modern messaging UI",
    tags: ["React", "TypeScript", "Firebase", "TailwindCSS", "Vite"],
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/mishraji018",
    liveUrl: "https://chit-chat-web-y3jg.vercel.app/",
    overview: "A modern real-time web chat application with instant messaging, user authentication, and a clean responsive interface — deployed live on Vercel.",
    problem: "Building a real-time communication app requires seamless state sync, authentication, and a polished UI that works across all devices.",
    approach: "Built with React and Firebase for real-time database sync and auth, with a clean component-based UI and smooth message animations.",
    result: "A fully functional live chat app with real-time messaging, deployed and accessible to users worldwide.",
    architectureNodes: [
      { id: "1", label: "User Browser", type: "user", description: "Web client on any device" },
      { id: "2", label: "React Frontend", type: "frontend", description: "Component-based SPA with Vite" },
      { id: "3", label: "Firebase Auth", type: "api", description: "Google / Email authentication" },
      { id: "4", label: "Firestore DB", type: "database", description: "Real-time NoSQL message store" },
      { id: "5", label: "Live Messages", type: "output", description: "Instant synced chat UI" },
    ],
  },
  {
    id: "delhi-visit",
    number: "03",
    title: "DELHI VISIT",
    tagline: "Interactive travel guide & exploration web app for Delhi",
    tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/mishraji018",
    liveUrl: "https://delhi-visit.vercel.app/",
    overview: "A modern, interactive travel guide web application for exploring Delhi — featuring curated destinations, landmarks, food spots, and travel tips with a sleek UI.",
    problem: "Most travel guide websites feel outdated, cluttered, and lack interactive visual storytelling to help tourists discover Delhi's best experiences.",
    approach: "Built a clean, responsive React app with curated content sections, smooth animations, and an intuitive layout optimized for both desktop and mobile exploration.",
    result: "A live, deployed travel guide showcasing full-stack frontend skills with modern design and real-world usability.",
    architectureNodes: [
      { id: "1", label: "User Browser", type: "user", description: "Desktop & mobile web visitor" },
      { id: "2", label: "React + Vite", type: "frontend", description: "Component-based SPA architecture" },
      { id: "3", label: "TailwindCSS", type: "processing", description: "Utility-first responsive styling" },
      { id: "4", label: "Vercel CDN", type: "api", description: "Edge-deployed static hosting" },
      { id: "5", label: "Interactive UI", type: "output", description: "Curated destinations & travel content" },
    ],
  },
  {
    id: "jarvis-assistant",
    number: "04",
    title: "JARVIS AI VOICE AGENT",
    tagline: "Voice-activated AI assistant with local function execution & web search",
    tags: ["Python", "Whisper", "PyTorch", "gTTS", "System Automation"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://mishraji018.github.io/Voice_assistant_anti/",
    liveUrl: "https://mishraji018.github.io/Voice_assistant_anti/",
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


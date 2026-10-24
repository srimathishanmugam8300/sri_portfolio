import type { SkillCategory } from '../types';

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'LLMs & Agentic Systems',
    description: 'Autonomous reasoning, factual verification, and retrieval pipelines',
    skills: [
      { name: 'Retrieval-Augmented Generation (RAG)', context: 'Claim-level verification, context grounding' },
      { name: 'LangGraph & Multi-Agent Workflows', context: 'Agent orchestration, state management' },
      { name: 'Gemini 2.5 Flash & Flash Lite', context: 'Multimodal vision and structured JSON grounding' },
      { name: 'Tool & Function Calling', context: 'Deterministic API execution, safe escalation' },
      { name: 'Prompt Engineering & Guardrails', context: 'Input sanitization, prompt-injection defense' },
    ],
  },
  {
    category: 'Computer Vision & Foundation Models',
    description: 'Vision embeddings, zero-shot classification, and visual feature extraction',
    skills: [
      { name: 'CLIP & OpenCLIP', context: 'Zero-shot image classification and semantic tagging' },
      { name: 'DINOv2', context: 'Self-supervised visual feature representation' },
      { name: 'Segment Anything Model (SAM)', context: 'Zero-shot mask extraction and spatial cues' },
      { name: 'YOLO & EfficientNetV2-L', context: 'Object detection frameworks and transfer learning' },
      { name: 'OpenCV & EasyOCR', context: 'Spatial image preprocessing and OCR extraction' },
    ],
  },
  {
    category: 'Backend & System Engineering',
    description: 'Scalable services, asynchronous processing, and API design',
    skills: [
      { name: 'Python', context: 'Primary systems language for AI, data pipelines, automation' },
      { name: 'FastAPI & REST APIs', context: 'High-throughput async backends and service endpoints' },
      { name: 'IMAP & SMTP Automation', context: 'Mailbox ingestion, filtering, and safe outbound' },
      { name: 'WebSockets', context: 'Real-time bidirectional event streaming' },
      { name: 'SQLAlchemy & SQLite', context: 'Persistent job tracking, state stores' },
    ],
  },
  {
    category: 'Data & Processing',
    description: 'Dataset pipelines, embedding stores, and automated categorization',
    skills: [
      { name: 'Automated Dataset Organization', context: 'Classification-based directory sorting' },
      { name: 'PostgreSQL & MySQL', context: 'Relational data modeling and civic complaint indexing' },
      { name: 'MongoDB', context: 'Document stores and unstructured metadata' },
      { name: 'NumPy, Pandas & Scikit-learn', context: 'Data wrangling, matrix manipulation, metrics' },
      { name: 'Active Learning Refinement', context: 'Human-in-the-loop sample review heuristics' },
    ],
  },
  {
    category: 'Frontend & Developer Tools',
    description: 'Production toolchain, reactive interfaces, and deployment',
    skills: [
      { name: 'React & TypeScript', context: 'Component architecture, strict typing, responsive UI' },
      { name: 'JavaScript, HTML5 & CSS3', context: 'Modern DOM manipulation, semantic structure' },
      { name: 'Git & GitHub', context: 'Version control, branch workflows, open-source repos' },
      { name: 'Vite & Vercel', context: 'Fast builds, SPA bundling, edge deployments' },
      { name: 'Google Colab', context: 'GPU prototyping and model evaluation' },
    ],
  },
];

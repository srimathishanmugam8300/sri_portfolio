import React, { useState } from 'react';
import { ArrowRight, FileDown, Cpu, Layers, ShieldCheck, Terminal, Database, Network } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Hero: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const pipelineStages = [
    {
      id: 0,
      icon: <Database size={18} />,
      title: 'Data Ingestion',
      desc: 'Multimodal images, IMAP mail, audio, & unstructured civic inputs',
    },
    {
      id: 1,
      icon: <Network size={18} />,
      title: 'Representation & Vision',
      desc: 'Zero-shot CLIP embeddings, DINOv2 feature vectors, & OCR tokens',
    },
    {
      id: 2,
      icon: <Cpu size={18} />,
      title: 'Reasoning & Grounding',
      desc: 'LangGraph agents, Gemini 2.5 Flash, & structured JSON rules',
    },
    {
      id: 3,
      icon: <ShieldCheck size={18} />,
      title: 'Guardrails & Verification',
      desc: 'Prompt injection filters, NLI claim audits, & human escalation',
    },
    {
      id: 4,
      icon: <Terminal size={18} />,
      title: 'Service Dispatch',
      desc: 'FastAPI endpoints, SQLite audit stores, & automated sorting',
    },
    {
      id: 5,
      icon: <Layers size={18} />,
      title: 'Persistent State',
      desc: 'PostgreSQL data models, vector caches, & reproducible results',
    },
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-status-pulse" />
            <span>Open to AI/ML &amp; Software Engineering Opportunities</span>
          </div>

          <h1 className="hero-title">
            Building intelligent systems.{' '}
            <span className="hero-title-highlight">Engineering practical solutions.</span>
          </h1>

          <h2 className="hero-subtitle">
            Srimathi S. &mdash; AI/ML Engineer &amp; Software Developer
          </h2>

          <p className="hero-description">
            I build intelligent systems, automated data pipelines, and reliable software that solves tangible problems.
            My work spans zero-shot computer vision, agentic reasoning, factual claim verification, and robust backend services.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" id="btn-explore-projects">
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="https://github.com/srimathishanmugam8300"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              id="btn-hero-github"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="/Srimathi_S_Resume.pdf"
              download="Srimathi_S_Resume.pdf"
              className="btn btn-secondary"
              id="btn-hero-resume"
            >
              <FileDown size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-label">Core Focus</span>
              <span className="meta-value">Multimodal AI &amp; Software</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Approach</span>
              <span className="meta-value">Grounded &amp; Auditable</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Code Repositories</span>
              <span className="meta-value">100% Verifiable</span>
            </div>
          </div>
        </div>

        {/* Technical System Flow Visualization */}
        <div className="hero-visual-card" aria-label="System Architecture Flow Visualization">
          <div className="visual-header">
            <div className="visual-controls">
              <span className="visual-dot" />
              <span className="visual-dot" />
              <span className="visual-dot" />
            </div>
            <span>active_system_pipeline.py</span>
          </div>

          <div className="system-flow-canvas">
            <div className="system-row">
              {pipelineStages.slice(0, 3).map((stage) => (
                <div
                  key={stage.id}
                  className={`system-node-box ${activeStage === stage.id ? 'active' : ''}`}
                  onClick={() => setActiveStage(stage.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveStage(stage.id)}
                  aria-label={`Inspect ${stage.title}`}
                >
                  <div className="node-icon-wrapper">{stage.icon}</div>
                  <div className="node-title">{stage.title}</div>
                  <div className="node-desc">{stage.desc}</div>
                </div>
              ))}
            </div>

            <div className="system-row">
              {pipelineStages.slice(3, 6).map((stage) => (
                <div
                  key={stage.id}
                  className={`system-node-box ${activeStage === stage.id ? 'active' : ''}`}
                  onClick={() => setActiveStage(stage.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveStage(stage.id)}
                  aria-label={`Inspect ${stage.title}`}
                >
                  <div className="node-icon-wrapper">{stage.icon}</div>
                  <div className="node-title">{stage.title}</div>
                  <div className="node-desc">{stage.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

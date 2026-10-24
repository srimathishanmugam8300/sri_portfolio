import React from 'react';
import { Eye, Bot, Server, Workflow, Award, GraduationCap, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Bot size={14} />
            <span>Engineering Profile</span>
          </div>
          <h2 className="section-title">Bridging Machine Learning &amp; Software Systems</h2>
          <p className="section-desc">
            An engineering perspective focused on practical implementations, verifiable truth grounding, and end-to-end software integration.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am an AI/ML engineer and full-stack software developer who builds systems combining intelligent models with reliable backend architectures. Rather than treating machine learning as isolated experiments in notebooks, I design automated pipelines, API services, and data flows that turn raw perceptual inputs into structured, actionable outcomes.
            </p>
            <p>
              My hands-on project work addresses core challenges across modern computing: accelerating image dataset curation through zero-shot vision models (<strong>MAIA</strong>), auditing factual claims and evidence traceability in generative RAG answers (<strong>Meiporul</strong>), routing and deduplicating municipal civic grievances with multimodal vision (<strong>Makkal Hub</strong>), and engineering defensive, grounded email automation with strict safety guardrails (<strong>Meizhi</strong>).
            </p>

            <div className="about-pillars">
              <div className="pillar-card">
                <Eye className="pillar-icon" size={24} />
                <h3 className="pillar-title">Computer Vision</h3>
                <p className="pillar-desc">
                  CLIP zero-shot classification, DINOv2 visual representations, and automated image dataset organization.
                </p>
              </div>

              <div className="pillar-card">
                <Bot className="pillar-icon" size={24} />
                <h3 className="pillar-title">Agentic AI &amp; RAG</h3>
                <p className="pillar-desc">
                  LangGraph state orchestration, claim-level factual verification, and Gemini prompt-injection defense.
                </p>
              </div>

              <div className="pillar-card">
                <Server className="pillar-icon" size={24} />
                <h3 className="pillar-title">Backend Architecture</h3>
                <p className="pillar-desc">
                  FastAPI async services, IMAP/SMTP mail automation, SQLite/PostgreSQL data stores, and WebSockets.
                </p>
              </div>

              <div className="pillar-card">
                <Workflow className="pillar-icon" size={24} />
                <h3 className="pillar-title">Data Automation</h3>
                <p className="pillar-desc">
                  Automated folder categorization, spatial deduplication, and structured JSON knowledge stores.
                </p>
              </div>
            </div>
          </div>

          <div className="about-highlights-card">
            <h3 className="highlights-title">
              <GraduationCap size={22} className="highlight-bullet" />
              <span>Education &amp; Credentials</span>
            </h3>

            <div style={{ marginBottom: '1.75rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                Bachelor of Technology, Artificial Intelligence and Data Science
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--accent-cyan)', marginTop: '0.2rem' }}>
                Sri Shakthi Institute of Engineering and Technology
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                2024 &ndash; 2028 &bull; Cumulative GPA: 8.67 / 10
              </div>
            </div>

            <h3 className="highlights-title">
              <Award size={22} className="highlight-bullet" />
              <span>Verified Achievements</span>
            </h3>

            <ul className="highlight-list">
              <li className="highlight-item">
                <CheckCircle2 size={18} className="highlight-bullet" />
                <div className="highlight-content">
                  <h4>Google Student Ambassador (2026)</h4>
                  <p>Selected to represent Google developer technologies and champion AI/ML initiatives.</p>
                </div>
              </li>
              <li className="highlight-item">
                <CheckCircle2 size={18} className="highlight-bullet" />
                <div className="highlight-content">
                  <h4>Hack Forge Kalam 2025 &mdash; Runner-Up</h4>
                  <p>Built a machine learning model to solve a real-world challenge, placing as Runner-Up among competing teams.</p>
                </div>
              </li>
              <li className="highlight-item">
                <CheckCircle2 size={18} className="highlight-bullet" />
                <div className="highlight-content">
                  <h4>TN Startup Summit 2025</h4>
                  <p>Pitched and presented technical project innovations before industry leaders and founders.</p>
                </div>
              </li>
              <li className="highlight-item">
                <CheckCircle2 size={18} className="highlight-bullet" />
                <div className="highlight-content">
                  <h4>Python for Data Science, AI &amp; Development</h4>
                  <p>Certified by IBM in core algorithmic workflows and data science methodology.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

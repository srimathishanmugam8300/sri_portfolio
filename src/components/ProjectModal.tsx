import React, { useEffect } from 'react';
import type { ProjectCaseStudy } from '../types';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { X, ExternalLink, ShieldCheck, AlertCircle, Wrench, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-area">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
              <span
                className={`status-badge status-${project.status.toLowerCase().replace(' ', '_')}`}
              >
                {project.status}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {project.statusDetail}
              </span>
            </div>
            <h2 id="modal-project-title">{project.name}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>{project.tagline}</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </a>
            ) : (
              <span
                className="btn btn-secondary btn-sm"
                style={{ opacity: 0.6, cursor: 'not-allowed' }}
                title="Repository will be published upon release"
              >
                <GithubIcon size={16} />
                <span>Repo Coming Soon</span>
              </span>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Overview & Problem */}
          <div className="case-section">
            <h3>Overview</h3>
            <p>{project.overview}</p>
          </div>

          <div className="case-section">
            <h3>Problem Statement &amp; Intended Users</h3>
            <p>{project.problemStatement}</p>
            <p style={{ marginTop: '0.5rem', color: 'var(--text-cyan)', fontSize: '0.875rem' }}>
              <strong>Target Audience:</strong> {project.targetAudience}
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="case-section">
            <h3>System Architecture &amp; Data Flow</h3>
            <ArchitectureDiagram flow={project.architectureFlow} />
          </div>

          {/* Implemented vs Planned Feature Matrix */}
          <div className="case-section">
            <h3>
              <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)' }} />
              <span>Implementation Status Matrix</span>
            </h3>
            <div className="matrix-table-wrap">
              <table className="matrix-table">
                <thead>
                  <tr>
                    <th>Feature Component</th>
                    <th>Status</th>
                    <th>Implementation Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {project.featureMatrix.map((item, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.feature}</td>
                      <td>
                        <span
                          className={`status-badge status-${item.category.toLowerCase().replace(' ', '_')}`}
                        >
                          {item.category}
                        </span>
                      </td>
                      <td>{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Engineering Decisions */}
          <div className="case-section">
            <h3>
              <Wrench size={18} style={{ color: 'var(--accent-cyan)' }} />
              <span>Key Engineering Decisions &amp; Trade-offs</span>
            </h3>
            <div className="decisions-grid">
              {project.engineeringDecisions.map((item, idx) => (
                <div key={idx} className="decision-card">
                  <div className="decision-title">{item.decision}</div>
                  <div className="decision-body">{item.rationale}</div>
                  <div className="decision-tradeoff">
                    <strong>Trade-off:</strong> {item.tradeoff}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Contribution */}
          <div className="case-section">
            <h3>Tech Stack &amp; Individual Role</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
              {project.techStack.core.map((t) => (
                <span key={t} className="tag-pill" style={{ color: 'var(--accent-cyan-light)' }}>
                  {t}
                </span>
              ))}
              {project.techStack.models?.map((m) => (
                <span key={m} className="tag-pill" style={{ color: '#a78bfa' }}>
                  {m}
                </span>
              ))}
              {project.techStack.tools?.map((tool) => (
                <span key={tool} className="tag-pill">
                  {tool}
                </span>
              ))}
            </div>
            <p>
              <strong>My Contribution:</strong> {project.individualContribution}
            </p>
          </div>

          {/* Current Limitations & Planned Improvements */}
          <div className="case-section">
            <h3>
              <AlertCircle size={18} style={{ color: '#fbbf24' }} />
              <span>Current Limitations &amp; Next Engineering Milestones</span>
            </h3>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>
              {project.limitations.map((lim, idx) => (
                <li key={idx} style={{ marginBottom: '0.35rem' }}>
                  {lim}
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Highlights */}
          <div className="case-section" style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1rem', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={16} style={{ color: 'var(--accent-emerald)' }} />
              <span>Verifiable Project Facts</span>
            </h4>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
              {project.verifiedHighlights.map((vh, idx) => (
                <li key={idx}>{vh}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

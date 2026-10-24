import React from 'react';
import type { ProjectCaseStudy } from '../types';
import { ArrowRight, GitBranch } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Implemented':
        return 'status-implemented';
      case 'In Progress':
        return 'status-in_progress';
      case 'Prototype':
        return 'status-prototype';
      default:
        return '';
    }
  };

  return (
    <article className="project-card" id={`card-${project.id}`}>
      <div>
        <div className="project-card-header">
          <h3 className="project-title">{project.name}</h3>
          <span className={`status-badge ${getStatusClass(project.status)}`}>
            {project.status}
          </span>
        </div>

        <p className="project-tagline">{project.summary}</p>

        {/* Architecture flow indicator */}
        <div className="project-diagram-preview">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <GitBranch size={14} style={{ color: 'var(--accent-cyan)' }} />
            <span>Architecture:</span>
          </div>
          <span>
            {project.architectureFlow.nodes.length} Stages ({project.architectureFlow.type})
          </span>
        </div>

        {/* Technical tags */}
        <div className="project-tags">
          {project.techStack.core.slice(0, 3).map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
          {project.techStack.models?.slice(0, 2).map((m) => (
            <span key={m} className="tag-pill" style={{ color: '#a78bfa' }}>
              {m}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card-footer">
        <div className="card-links">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label={`View ${project.name} on GitHub`}
              title="View GitHub Repository"
            >
              <GithubIcon size={18} />
            </a>
          ) : (
            <span
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
              }}
            >
              Repo Coming Soon
            </span>
          )}
        </div>

        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onOpenCaseStudy(project)}
          aria-label={`Explore ${project.name} Case Study`}
        >
          <span>Deep-Dive Case Study</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </article>
  );
};

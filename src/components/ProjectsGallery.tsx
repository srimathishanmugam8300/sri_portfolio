import React, { useState, useMemo } from 'react';
import type { ProjectCaseStudy, ProjectDomain } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Search, FolderKanban } from 'lucide-react';

export const ProjectsGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const filters: (string | ProjectDomain)[] = [
    'All',
    'AI/ML',
    'Computer Vision',
    'Data Engineering',
    'Intelligent Automation',
    'Software Development',
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesFilter =
        selectedFilter === 'All' || project.domain.includes(selectedFilter as ProjectDomain);
      const matchesSearch =
        searchQuery.trim() === '' ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.core.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesFilter && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderKanban size={14} />
            <span>Systems Portfolio</span>
          </div>
          <h2 className="section-title">Engineered Projects &amp; Case Studies</h2>
          <p className="section-desc">
            Explore 5 core AI/ML, computer vision, and backend automation systems with verified implementation details and architectural specifications.
          </p>
        </div>

        {/* Toolbar: Filters & Search */}
        <div className="projects-toolbar">
          <div className="filter-group" role="tablist" aria-label="Project Domain Filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
                onClick={() => setSelectedFilter(filter)}
                role="tab"
                aria-selected={selectedFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="search-box">
            <Search size={16} style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search by project or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects by name or technology"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={(proj) => setActiveModalProject(proj)}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              background: 'var(--bg-card)',
              borderRadius: '12px',
              border: '1px solid var(--border-card)',
            }}
          >
            <p style={{ color: 'var(--text-secondary)' }}>
              No projects found matching "<strong>{searchQuery}</strong>" in category "<strong>{selectedFilter}</strong>".
            </p>
            <button
              className="btn btn-secondary btn-sm"
              style={{ marginTop: '1rem' }}
              onClick={() => {
                setSelectedFilter('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};

import React from 'react';
import { SKILLS_DATA } from '../data/skillsData';
import { Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Wrench size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Verified Technical Skills</h2>
          <p className="section-desc">
            Technologies, libraries, and frameworks applied in production repositories and real-world project builds.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS_DATA.map((cat) => (
            <div key={cat.category} className="skill-category-card">
              <div className="skill-cat-header">
                <h3 className="skill-cat-title">{cat.category}</h3>
                <p className="skill-cat-desc">{cat.description}</p>
              </div>

              <div className="skill-tag-list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item-pill">
                    <div className="skill-name-row">
                      <span>{skill.name}</span>
                    </div>
                    <span className="skill-context">{skill.context}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

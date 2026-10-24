import React from 'react';
import { FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Srimathi S. &mdash; AI/ML Engineer &amp; Software Developer</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Built with React, TypeScript &amp; Vite &bull; Vanilla CSS Design System &bull; Deployed on Vercel
          </p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/srimathishanmugam8300"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/srimathi-shanmugam-366a92316/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://leetcode.com/u/srimathi_shanmugam/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="LeetCode Profile"
            title="LeetCode Profile"
          >
            <LeetCodeIcon size={18} />
          </a>
          <a
            href="/Srimathi_S_Resume.pdf"
            download="Srimathi_S_Resume.pdf"
            className="icon-link"
            aria-label="Download Resume"
            title="Download Resume"
          >
            <FileDown size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

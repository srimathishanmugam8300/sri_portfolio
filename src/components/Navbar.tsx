import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Engineering Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" className="nav-brand" aria-label="Srimathi S. Portfolio Home">
          <span className="brand-dot" />
          <span>Srimathi S.</span>
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            href="https://github.com/srimathishanmugam8300"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/srimathi-shanmugam-366a92316/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="/Srimathi_S_Resume.pdf"
            download="Srimathi_S_Resume.pdf"
            className="btn btn-primary btn-sm"
            aria-label="Download Srimathi S. Resume"
          >
            <FileDown size={16} />
            <span>Resume</span>
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="/Srimathi_S_Resume.pdf"
          download="Srimathi_S_Resume.pdf"
          className="btn btn-primary"
          style={{ marginTop: '0.5rem' }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <FileDown size={16} />
          <span>Download Resume</span>
        </a>
      </div>
    </nav>
  );
};

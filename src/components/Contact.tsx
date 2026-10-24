import React, { useState } from 'react';
import { Mail, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'client_validated'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a message subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const encodedBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    setSubmitStatus('client_validated');
    window.location.href = `mailto:ssrimathi8300@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Connect &amp; Collaborate</h2>
          <p className="section-desc">
            Open to discussing engineering roles, AI/ML internships, technical collaborations, and entry-level software opportunities.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
              Whether you are an engineering team looking for a versatile AI/ML engineer, a recruiter seeking an early-career software developer, or an open-source contributor interested in multimodal annotation and RAG verification, I would love to connect.
            </p>

            <div className="contact-channels">
              <a
                href="https://github.com/srimathishanmugam8300"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
                aria-label="Visit GitHub Profile"
              >
                <GithubIcon size={24} className="channel-icon" />
                <div className="channel-meta">
                  <h4>GitHub</h4>
                  <p>github.com/srimathishanmugam8300</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/srimathi-shanmugam-366a92316/"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
                aria-label="Visit LinkedIn Profile"
              >
                <LinkedinIcon size={24} className="channel-icon" />
                <div className="channel-meta">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/srimathi-shanmugam-366a92316</p>
                </div>
              </a>

              <a
                href="https://leetcode.com/u/srimathi_shanmugam/"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
                aria-label="Visit LeetCode Profile"
              >
                <LeetCodeIcon size={24} className="channel-icon" />
                <div className="channel-meta">
                  <h4>LeetCode</h4>
                  <p>leetcode.com/u/srimathi_shanmugam</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
              Send an Engineering Inquiry
            </h3>

            {submitStatus === 'client_validated' && (
              <div className="form-status status-success" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={18} />
                <span>Input validated! Launching your email client with your message drafted.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="form-control"
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && (
                  <span style={{ color: '#fb7185', fontSize: '0.75rem', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <AlertCircle size={12} /> {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="form-control"
                  placeholder="e.g. jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && (
                  <span style={{ color: '#fb7185', fontSize: '0.75rem', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <AlertCircle size={12} /> {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  className="form-control"
                  placeholder="e.g. AI/ML Engineering Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
                {errors.subject && (
                  <span style={{ color: '#fb7185', fontSize: '0.75rem', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <AlertCircle size={12} /> {errors.subject}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  className="form-control"
                  rows={4}
                  placeholder="Tell me about the role, project, or technical problem you'd like to discuss..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && (
                  <span style={{ color: '#fb7185', fontSize: '0.75rem', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <AlertCircle size={12} /> {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={16} />
                <span>Draft Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

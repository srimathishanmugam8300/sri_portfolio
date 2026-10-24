import React from 'react';
import { Compass, CheckCircle } from 'lucide-react';

export const EngineeringApproach: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Problem Definition & Output Scope',
      desc: 'Clarify the exact objective, input formats, success criteria, and whether an AI model is truly needed or if deterministic heuristics suffice.',
    },
    {
      num: '02',
      title: 'Data & System Constraint Analysis',
      desc: 'Audit raw modalities, class distributions, noise, latency limits, API costs, compute bounds, and potential security or privacy risks.',
    },
    {
      num: '03',
      title: 'Pipeline & Boundary Architecture',
      desc: 'Decompose the system into isolated modules with explicit contracts, decoupling data ingestion, perception, reasoning, and transport.',
    },
    {
      num: '04',
      title: 'Targeted Model & Tool Selection',
      desc: 'Pair appropriate tools with specific tasks—leveraging zero-shot vision (CLIP), small language models for inference, or frontier LLMs solely for ambiguous escalations.',
    },
    {
      num: '05',
      title: 'Incremental Implementation & Testing',
      desc: 'Build minimal operational baselines first, verifying intermediate tensors, schemas, and API contracts before adding orchestration layers.',
    },
    {
      num: '06',
      title: 'Edge-Case Inspection & Failure Auditing',
      desc: 'Examine failure modes, adversarial prompt injections, contradictory retrieved passages, out-of-distribution images, and ambiguous samples.',
    },
    {
      num: '07',
      title: 'Evidence-Based Refinement',
      desc: 'Document limitations transparently, establish reproducible benchmarks, and iterate pipeline components guided by observable data rather than guesswork.',
    },
  ];

  return (
    <section id="approach" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} />
            <span>Methodology</span>
          </div>
          <h2 className="section-title">Engineering Approach</h2>
          <p className="section-desc">
            A principled, iterative methodology for translating ambiguous problem statements into verifiable, resilient production software.
          </p>
        </div>

        <div className="approach-track">
          {steps.map((s) => (
            <div key={s.num} className="approach-card">
              <div className="approach-num">{s.num}</div>
              <h3 className="approach-title">{s.title}</h3>
              <p className="approach-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem 1.5rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <CheckCircle size={24} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>
            <strong>Systematic Reliability:</strong> This workflow prioritizes substance over decoration, ensuring that every model deployment is guarded by verifiable validation gates, deterministic fallbacks, and honest documentation of limitations.
          </p>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import type { ArchitectureFlow } from '../types';
import { CheckCircle2, Clock, Sparkles, ArrowDown } from 'lucide-react';

interface ArchitectureDiagramProps {
  flow: ArchitectureFlow;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ flow }) => {
  const getBadgeClass = (type: ArchitectureFlow['type']) => {
    switch (type) {
      case 'implemented':
        return 'diagram-kind-implemented';
      case 'designed':
        return 'diagram-kind-designed';
      case 'future':
        return 'diagram-kind-future';
      default:
        return '';
    }
  };

  const getStatusIcon = (status: 'implemented' | 'in_progress' | 'planned') => {
    switch (status) {
      case 'implemented':
        return <CheckCircle2 size={14} style={{ color: '#34d399' }} />;
      case 'in_progress':
        return <Clock size={14} style={{ color: '#60a5fa' }} />;
      case 'planned':
        return <Sparkles size={14} style={{ color: '#a78bfa' }} />;
    }
  };

  return (
    <div className="diagram-container">
      <div className="diagram-header">
        <div>
          <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
            {flow.title}
          </span>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.15rem' }}>
            {flow.description}
          </p>
        </div>
        <span className={`diagram-kind-badge ${getBadgeClass(flow.type)}`}>
          {flow.type === 'implemented' ? 'Verified Implemented Flow' : 'Documented System Design'}
        </span>
      </div>

      <div className="flow-node-track">
        {flow.nodes.map((node, index) => {
          const isLast = index === flow.nodes.length - 1;
          const nextConnection = flow.connections.find((c) => c.from === node.id);

          return (
            <React.Fragment key={node.id}>
              <div className="flow-node-card">
                <div className="node-left">
                  <span className="node-step-num">0{index + 1}</span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <span className="node-text-title">{node.label}</span>
                      {getStatusIcon(node.status)}
                    </div>
                    {node.sublabel && <div className="node-text-sub">{node.sublabel}</div>}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="node-type-tag">{node.type}</span>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-mono)',
                      color:
                        node.status === 'implemented'
                          ? '#34d399'
                          : node.status === 'in_progress'
                          ? '#60a5fa'
                          : '#a78bfa',
                      textTransform: 'capitalize',
                    }}
                  >
                    {node.status.replace('_', ' ')}
                  </span>
                </div>
              </div>

              {!isLast && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.2rem 0',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <ArrowDown size={14} />
                  {nextConnection?.label && (
                    <span style={{ color: 'var(--text-muted)' }}>{nextConnection.label}</span>
                  )}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

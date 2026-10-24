export type ProjectStatus = 
  | 'Implemented' 
  | 'In Progress' 
  | 'Prototype' 
  | 'Planned' 
  | 'Needs Verification';

export type ProjectDomain = 
  | 'AI/ML' 
  | 'Computer Vision' 
  | 'Data Engineering' 
  | 'Intelligent Automation' 
  | 'Software Development';

export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel?: string;
  type: 'input' | 'process' | 'model' | 'guardrail' | 'storage' | 'output';
  status: 'implemented' | 'in_progress' | 'planned';
}

export interface ArchitectureFlow {
  title: string;
  type: 'implemented' | 'designed' | 'future';
  description: string;
  nodes: ArchitectureNode[];
  connections: { from: string; to: string; label?: string }[];
}

export interface FeatureMatrixItem {
  feature: string;
  category: 'Implemented' | 'In Progress' | 'Planned';
  notes: string;
}

export interface ProjectCaseStudy {
  id: string;
  name: string;
  tagline: string;
  domain: ProjectDomain[];
  status: ProjectStatus;
  statusDetail: string;
  githubUrl?: string;
  demoUrl?: string;
  summary: string;
  overview: string;
  problemStatement: string;
  targetAudience: string;
  solution: string;
  actualImplementation: string;
  architectureFlow: ArchitectureFlow;
  techStack: {
    core: string[];
    models?: string[];
    tools?: string[];
  };
  individualContribution: string;
  engineeringDecisions: {
    decision: string;
    rationale: string;
    tradeoff: string;
  }[];
  limitations: string[];
  plannedImprovements: string[];
  featureMatrix: FeatureMatrixItem[];
  verifiedHighlights: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    context: string;
  }[];
}

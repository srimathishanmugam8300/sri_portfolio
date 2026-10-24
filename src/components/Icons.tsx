import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const GithubIcon: React.FC<IconProps> = ({ size = 20, className, style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ size = 20, className, style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const LeetCodeIcon: React.FC<IconProps> = ({ size = 20, className, style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.247 2.167 5.864 2.115 8.048-.115l4.316-4.402a1.364 1.364 0 0 0-.007-1.928 1.353 1.353 0 0 0-1.921-.007l-4.316 4.402a3.02 3.02 0 0 1-4.22.062l-.039-.039-4.277-4.193a3.24 3.24 0 0 1-.689-.993 3.32 3.32 0 0 1-.194-.567 3.385 3.385 0 0 1-.038-1.42 3.256 3.256 0 0 1 .741-1.285l3.854-4.126L14.444 2.37a1.36 1.36 0 0 0-.961-.438v-.002zM18.8 8.4a1.36 1.36 0 0 0-.961.438l-4.298 4.384a1.36 1.36 0 1 0 1.928 1.92l4.298-4.384A1.36 1.36 0 0 0 18.8 8.4z" />
  </svg>
);

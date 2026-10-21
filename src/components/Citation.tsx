import React from 'react';
import { SOURCES } from '../data/sources';

interface CitationProps {
  id: number;
  className?: string;
  showBadge?: boolean;
}

export const Citation: React.FC<CitationProps> = ({ id, className = '', showBadge = false }) => {
  const source = SOURCES.find((s) => s.id === id);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(`source-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.classList.add('ring-2', 'ring-[#F5B800]', 'bg-[#183153]');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-[#F5B800]', 'bg-[#183153]');
      }, 2500);
    }
  };

  if (!source) {
    return <sup className={`font-mono text-xs text-[#F5B800] ${className}`}>[{id}]</sup>;
  }

  return (
    <span className="inline-flex items-center gap-1 align-baseline whitespace-nowrap">
      <a
        href={`#source-${id}`}
        onClick={handleClick}
        title={`${source.author} (${source.date}) : ${source.title}`}
        aria-label={`Source [${id}] : ${source.author}`}
        className={`font-mono text-xs font-semibold text-[#F5B800] hover:text-[#ffd666] underline decoration-dotted decoration-[#F5B800]/60 underline-offset-2 transition-colors cursor-pointer px-0.5 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F5B800] ${className}`}
      >
        [{id}]
      </a>
      {showBadge && source.commercial && (
        <span className="text-[10px] tracking-wide text-amber-300/90 font-mono font-medium">
          (source commerciale)
        </span>
      )}
      {showBadge && source.estimation && (
        <span className="text-[10px] tracking-wide text-purple-300/90 font-mono font-medium">
          (estimation)
        </span>
      )}
    </span>
  );
};

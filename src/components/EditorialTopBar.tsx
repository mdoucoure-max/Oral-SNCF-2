import React, { useState } from 'react';
import { Activity, Printer, GitBranch, ArrowUpRight } from 'lucide-react';

interface EditorialTopBarProps {
  onToggleFontSize: () => void;
  isLargeFont: boolean;
}

export const EditorialTopBar: React.FC<EditorialTopBarProps> = ({ onToggleFontSize, isLargeFont }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <aside className="border-b border-slate-700/60 bg-[#0A1422] text-xs text-slate-300 font-mono py-1.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Date & Special Edition */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <span className="font-semibold text-slate-200">Lundi 19 octobre 2026</span>
          <span aria-hidden="true" className="text-slate-600">|</span>
          <span className="text-slate-400">Édition Spéciale Sprints Cloud, Edge, Données & IA</span>
          <span aria-hidden="true" className="text-slate-600 hidden sm:inline">|</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Surveillance Réseau : 28 000 km opérationnels</span>
          </span>
        </div>

        {/* Right: Quick actions & Accessibility */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs">
          <button
            onClick={onToggleFontSize}
            className="hover:text-white transition-colors flex items-center gap-1 px-1.5 py-0.5 rounded hover:bg-slate-800"
            title="Ajuster la taille du texte"
            aria-label="Ajuster la taille du texte"
          >
            <span className={`text-[10px] ${!isLargeFont ? 'font-bold text-[#F5B800]' : ''}`}>A-</span>
            <span>/</span>
            <span className={`text-xs ${isLargeFont ? 'font-bold text-[#F5B800]' : ''}`}>A+</span>
          </button>

          <span aria-hidden="true" className="text-slate-700">|</span>

          <button
            onClick={handlePrint}
            className="hover:text-white transition-colors flex items-center gap-1.5 px-1.5 py-0.5 rounded hover:bg-slate-800"
            title="Imprimer ou exporter en PDF"
            aria-label="Imprimer cet article"
          >
            <Printer className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden md:inline">Imprimer</span>
          </button>

          <span aria-hidden="true" className="text-slate-700">|</span>

          <a
            href="#schema"
            className="text-sky-400 font-semibold hover:underline flex items-center gap-1"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>Schéma 10 étapes</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

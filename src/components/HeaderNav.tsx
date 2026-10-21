import React, { useState } from 'react';
import { SprintTab } from '../types';
import { RailPattern } from './RailPattern';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderNavProps {
  activeTab: SprintTab;
  onSelectTab: (tab: SprintTab) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ activeTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: SprintTab; label: string; color: string; badge?: string }[] = [
    { id: 'accueil', label: 'Accueil', color: '#F5B800' },
    { id: 'schema', label: '10 étapes', color: '#38BDF8', badge: 'Schéma' },
    { id: 'tni', label: 'TNI (4 Piliers)', color: '#38BDF8', badge: 'IoT/Edge/Cloud/IA' },
    { id: 'cloud', label: 'Cloud', color: '#4DA3FF', badge: 'Sprint 1' },
    { id: 'edge', label: 'Edge', color: '#FF6B35', badge: 'Sprint 2' },
    { id: 'donnees-ia', label: 'Données & IA', color: '#9B7BFF', badge: 'Sprint 3' },
    { id: 'sources', label: 'Sources', color: '#2EAD6B' },
  ];

  const handleNavClick = (tab: SprintTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(tab);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F1E33]/90 backdrop-blur-md border-b border-slate-700/60 shadow-lg shadow-black/20">
      {/* Discreet rail pattern in header */}
      <RailPattern className="absolute top-0 left-0 right-0 h-6 -translate-y-1 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Wordmark */}
          <a
            href="#accueil"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('accueil');
            }}
            className="flex items-center gap-2.5 text-slate-100 hover:text-white transition-colors whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800] rounded"
          >
            {/* Custom SVG Icon for Railway & Sensor */}
            <svg
              className="w-7 h-7 text-[#F5B800] group-hover:scale-105 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 19L7 5" />
              <path d="M20 19L17 5" />
              <path d="M6 14H18" />
              <path d="M7 10H17" />
              <circle cx="12" cy="7" r="1.5" fill="#F5B800" stroke="none" />
            </svg>
            <span className="font-bold tracking-tight text-base sm:text-lg">
              Cas C <span className="text-slate-400 font-normal">|</span> Voies Ferrées
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Navigation principale"
            className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    color: isActive ? item.color : undefined,
                    borderColor: isActive ? item.color : 'transparent',
                  }}
                  className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap border-b-2 font-medium flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800] ${
                    isActive
                      ? 'bg-slate-800/80 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40 border-transparent'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-mono opacity-80 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action / Quick Jump */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#sources"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('sources');
              }}
              className="text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-600/70 px-3.5 py-2 rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2EAD6B]"
            >
              <span>26 Sources (Presse TNI 2023-2026)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#2EAD6B]" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800] rounded-md"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1626] border-b border-slate-700 px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  color: isActive ? item.color : undefined,
                }}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between ${
                  isActive ? 'bg-slate-800 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-700/60 text-slate-300">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-800">
            <a
              href="#sources"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('sources');
              }}
              className="block w-full text-center py-2 text-xs font-semibold text-slate-200 bg-slate-800 rounded-md"
            >
              Consulter les 22 sources bibliographiques
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

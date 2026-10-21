import React from 'react';
import { RailPattern } from './RailPattern';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07111D] border-t border-slate-800 text-slate-400 text-xs py-12 overflow-hidden">
      {/* Discreet rail pattern */}
      <RailPattern className="absolute top-0 left-0 right-0 h-6 -translate-y-1 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="text-white font-bold text-sm tracking-tight mb-1">
              Cas C · Détection des Défauts des Voies Ferrées
            </div>
            <div className="text-xs text-slate-400">
              Dossier récapitulatif · Sprints 1 (Cloud), 2 (Edge), 3 (Données & IA)
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium flex-wrap">
            <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
            <span className="text-slate-700">·</span>
            <a href="#schema" className="hover:text-sky-400 transition-colors">Schéma 10 étapes</a>
            <span className="text-slate-700">·</span>
            <a href="#tni" className="hover:text-[#38BDF8] transition-colors">TNI (4 Piliers)</a>
            <span className="text-slate-700">·</span>
            <a href="#dashboard-sensor" className="hover:text-[#F5B800] transition-colors">Télémétrie</a>
            <span className="text-slate-700">·</span>
            <a href="#cloud" className="hover:text-[#4DA3FF] transition-colors">Sprint Cloud</a>
            <span className="text-slate-700">·</span>
            <a href="#edge" className="hover:text-[#FF6B35] transition-colors">Sprint Edge</a>
            <span className="text-slate-700">·</span>
            <a href="#donnees-ia" className="hover:text-[#9B7BFF] transition-colors">Sprint Données & IA</a>
            <span className="text-slate-700">·</span>
            <a href="#sources" className="hover:text-[#2EAD6B] transition-colors">Sources</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800]"
            aria-label="Retourner en haut de la page"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-xs">Haut de page</span>
          </button>
        </div>

        {/* Mentions légales et académiques obligatoires */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] leading-relaxed">
          <div className="text-slate-300 font-medium">
            Projet étudiant – Sprints Cloud, Edge, Données & IA – Cas C : détection des défauts des voies ferrées – Non affilié à SNCF ni à Network Rail – 2026
          </div>
          <div className="font-mono text-slate-400 whitespace-nowrap">
            Auteurs : Mohamed Doucoure & Zacharie Lonzemba-Yoka · octobre 2026
          </div>
        </div>
      </div>
    </footer>
  );
};

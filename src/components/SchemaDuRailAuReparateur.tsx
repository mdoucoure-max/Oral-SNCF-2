import React, { useState } from 'react';
import { Citation } from './Citation';
import {
  RotateCcw,
  Check,
  X,
  ArrowRight,
  ArrowDown,
  ArrowLeft,
  ChevronRight,
  Info,
  Maximize2,
  Minimize2,
} from 'lucide-react';

export const SchemaDuRailAuReparateur: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [expertDecision, setExpertDecision] = useState<'confirmed' | 'rejected' | null>('confirmed');
  const [filterDomain, setFilterDomain] = useState<string>('all');

  const domainColors: Record<string, { bg: string; text: string; border: string; label: string }> = {
    edge: { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/40', label: 'Edge' },
    reseau: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/40', label: 'Réseau' },
    cloud: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/40', label: 'Cloud' },
    ia: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/40', label: 'IA' },
    humain: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/40', label: 'Humain' },
  };

  return (
    <section id="schema" className="py-16 sm:py-24 bg-[#0A1627] text-slate-100 border-b border-slate-800 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-sky-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[300px] bg-purple-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header of the Diagram */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider text-slate-400 uppercase mb-2">
              <span className="text-sky-400 font-bold">CAS C · SNCF RÉSEAU</span>
              <span aria-hidden="true">·</span>
              <span>SPRINTS CLOUD, EDGE, DONNÉES & IA</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Du rail au réparateur
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
              Comment capteurs, Edge, Cloud, IA et humains repèrent un défaut de géométrie de la voie avant le seuil critique de sécurité.
            </p>
          </div>

          <div className="text-right flex flex-col md:items-end gap-2 shrink-0">
            <div className="text-xs font-mono text-slate-400 bg-slate-900/80 px-3.5 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2">
              <span className="text-white font-semibold">28 000 km de lignes</span>
              <Citation id={7} />
              <span>·</span>
              <span className="text-white font-semibold">45 000 km inspectés en 2023 (wagons SIM)</span>
              <Citation id={15} />
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              Mohamed Doucoure & Zacharie Lonzemba-Yoka · octobre 2026
            </div>
          </div>
        </div>

        {/* Legend bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 p-3 bg-[#0E1D33] rounded-xl border border-slate-800 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-slate-400 uppercase font-semibold">Acteurs & Domaines :</span>
            <button
              onClick={() => setFilterDomain(filterDomain === 'edge' ? 'all' : 'edge')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                filterDomain === 'edge' ? 'bg-sky-500/20 text-sky-300 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
              <span>Edge</span>
            </button>
            <button
              onClick={() => setFilterDomain(filterDomain === 'reseau' ? 'all' : 'reseau')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                filterDomain === 'reseau' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span>Réseau</span>
            </button>
            <button
              onClick={() => setFilterDomain(filterDomain === 'cloud' ? 'all' : 'cloud')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                filterDomain === 'cloud' ? 'bg-blue-500/20 text-blue-300 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              <span>Cloud</span>
            </button>
            <button
              onClick={() => setFilterDomain(filterDomain === 'ia' ? 'all' : 'ia')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                filterDomain === 'ia' ? 'bg-purple-500/20 text-purple-300 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              <span>IA</span>
            </button>
            <button
              onClick={() => setFilterDomain(filterDomain === 'humain' ? 'all' : 'humain')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                filterDomain === 'humain' ? 'bg-emerald-500/20 text-emerald-300 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>Humain</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-purple-300 font-medium">
            <span className="w-6 border-b-2 border-dashed border-purple-400" />
            <span>Boucle d'apprentissage continu</span>
          </div>
        </div>

        {/* Master Diagram: 2 Rows of 5 Cards with Timeline and Return Loop */}
        <div className="relative bg-[#0D1B2E] border border-slate-700/80 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl overflow-x-auto">
          {/* Loop Return line (from Card 10 to Card 02) */}
          <div className="hidden lg:block absolute left-[12%] right-[70%] top-[49%] -translate-y-1/2 z-0 pointer-events-none">
            <div className="border-t-2 border-l-2 border-dashed border-purple-400/80 h-28 rounded-tl-2xl relative">
              <span className="absolute -top-3 left-10 text-[11px] font-mono font-bold bg-[#0D1B2E] px-2 text-purple-300 flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5 animate-spin-slow" />
                <span>↻ MODÈLES MIS À JOUR → IA EMBARQUÉE</span>
              </span>
            </div>
          </div>

          {/* Temporal line markers top row */}
          <div className="hidden lg:grid grid-cols-5 gap-4 mb-2 text-[11px] font-mono text-slate-400 text-center">
            <div className="col-span-1"></div>
            <div className="col-span-1 flex items-center justify-center gap-1 text-sky-400">
              <span>≈ MILLISECONDES</span>
              <ArrowRight className="w-3 h-3" />
            </div>
            <div className="col-span-1 flex items-center justify-center gap-1 text-sky-300 font-bold">
              <span>&lt; 10 MS · À BORD</span>
              <ArrowRight className="w-3 h-3" />
            </div>
            <div className="col-span-1 flex items-center justify-center gap-1 text-amber-300">
              <span>SECONDES → HEURES</span>
              <ArrowRight className="w-3 h-3" />
            </div>
            <div className="col-span-1 flex items-center justify-center gap-1 text-blue-300">
              <span>TEMPS DIFFÉRÉ</span>
            </div>
          </div>

          {/* ROW 1: 01 to 05 (Left to Right) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 relative z-10">
            {/* 01 · EDGE : Capter */}
            <div
              onClick={() => setActiveStep(activeStep === 1 ? null : 1)}
              className={`cursor-pointer rounded-xl p-4 transition-all border flex flex-col justify-between ${
                activeStep === 1
                  ? 'bg-[#152B47] border-sky-400 ring-2 ring-sky-400/30'
                  : 'bg-[#102035] border-sky-500/30 hover:border-sky-400/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-sky-400">01 · EDGE</span>
                  <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono font-bold flex items-center justify-center border border-sky-500/40">
                    1
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">Capter</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Caméras, lasers, accéléromètres et fibre optique mesurent le rail à chaque passage.
                </p>

                {/* Illustration SVG : Rail & Capteurs */}
                <div className="h-20 bg-[#0A1627] rounded-lg p-2 border border-slate-800 flex items-center justify-center mb-3">
                  <svg viewBox="0 0 160 50" className="w-full h-full text-slate-400" fill="none">
                    {/* Rail profile */}
                    <path d="M40 38 L120 38 L115 32 L95 32 L95 18 L110 14 L110 8 L50 8 L50 14 L65 18 L65 32 L45 32 Z" fill="#334155" stroke="#64748B" strokeWidth="1" />
                    {/* Laser beam */}
                    <line x1="80" y1="2" x2="80" y2="8" stroke="#FF6B35" strokeWidth="2" strokeDasharray="2 1" />
                    <circle cx="80" cy="8" r="2.5" fill="#FF6B35" />
                    {/* Camera */}
                    <rect x="72" y="0" width="16" height="5" rx="1" fill="#0EA5E9" />
                  </svg>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>60–100 Go / jour · IRIS 320</span>
                <Citation id={3} />
              </div>
            </div>

            {/* 02 · EDGE : Analyser à bord */}
            <div
              onClick={() => setActiveStep(activeStep === 2 ? null : 2)}
              className={`cursor-pointer rounded-xl p-4 transition-all border flex flex-col justify-between ${
                activeStep === 2
                  ? 'bg-[#152B47] border-sky-400 ring-2 ring-sky-400/30'
                  : 'bg-[#102035] border-sky-500/30 hover:border-sky-400/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-sky-400">02 · EDGE</span>
                  <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono font-bold flex items-center justify-center border border-sky-500/40">
                    2
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">Analyser à bord</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  L'IA embarquée repère fissures et écarts de géométrie, puis jette le flux inutile.
                </p>

                {/* Illustration : Signal & Détection */}
                <div className="h-20 bg-[#0A1627] rounded-lg p-2 border border-slate-800 flex flex-col justify-between text-[10px] font-mono mb-3">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="bg-sky-950 px-1.5 py-0.5 rounded text-sky-400 font-bold border border-sky-800">IA · EDGE</span>
                    <span className="text-amber-400 font-bold">défaut ?</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg viewBox="0 0 100 20" className="w-full h-5 text-sky-400">
                      <path d="M0 10 Q15 10 25 2 Q35 18 45 10 T65 10 T85 4 T100 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="text-[9px] text-slate-500 text-center">
                    analyse en temps réel, image par image
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>&lt; 10 ms · &lt; 10 % transmis</span>
                <Citation id={5} showBadge />
              </div>
            </div>

            {/* 03 · EDGE : Alerter */}
            <div
              onClick={() => setActiveStep(activeStep === 3 ? null : 3)}
              className={`cursor-pointer rounded-xl p-4 transition-all border flex flex-col justify-between ${
                activeStep === 3
                  ? 'bg-[#152B47] border-sky-400 ring-2 ring-sky-400/30'
                  : 'bg-[#102035] border-sky-500/30 hover:border-sky-400/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-sky-400">03 · EDGE</span>
                  <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono font-bold flex items-center justify-center border border-sky-500/40">
                    3
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">Alerter</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Un défaut critique déclenche l'alerte à bord, sans attendre la réponse du réseau.
                </p>

                {/* Illustration : Distance parcourue */}
                <div className="h-20 bg-[#0A1627] rounded-lg p-2 border border-slate-800 flex flex-col justify-center gap-1.5 text-[10px] font-mono mb-3">
                  <div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                      <span>Attente Cloud · 300 ms</span>
                      <span className="text-red-400 font-bold">26,7 m</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden mt-0.5">
                      <div className="bg-red-500 h-full w-[90%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-slate-400 text-[9px]">
                      <span>Décision à bord · 10 ms</span>
                      <span className="text-emerald-400 font-bold">0,9 m</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden mt-0.5">
                      <div className="bg-emerald-500 h-full w-[8%]" />
                    </div>
                  </div>
                  <div className="text-[9px] text-slate-500 text-center">
                    distance parcourue à 320 km/h
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>26,7 m en 300 ms</span>
                <span className="text-[10px] text-slate-500 font-sans">(calcul)</span>
              </div>
            </div>

            {/* 04 · RÉSEAU : Transmettre */}
            <div
              onClick={() => setActiveStep(activeStep === 4 ? null : 4)}
              className={`cursor-pointer rounded-xl p-4 transition-all border flex flex-col justify-between ${
                activeStep === 4
                  ? 'bg-[#152B47] border-amber-400 ring-2 ring-amber-400/30'
                  : 'bg-[#102035] border-amber-500/30 hover:border-amber-400/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-amber-400">04 · RÉSEAU</span>
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold flex items-center justify-center border border-amber-500/40">
                    4
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">Transmettre</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Seuls les défauts partent, en 4G/5G ou en différé à la sortie d'un tunnel.
                </p>

                {/* Illustration : Tunnel et sortie */}
                <div className="h-20 bg-[#0A1627] rounded-lg p-2 border border-slate-800 flex flex-col items-center justify-center text-[10px] font-mono mb-3">
                  <div className="flex items-center gap-1.5 my-1">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">tunnel</span>
                    <ArrowRight className="w-3 h-3 text-amber-400" />
                    <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">4G/5G</span>
                  </div>
                  <div className="text-[9px] text-slate-500 text-center mt-1">
                    pas de réseau → envoi différé à la sortie
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Couverture visée : 90 %</span>
                <Citation id={20} />
              </div>
            </div>

            {/* 05 · CLOUD : Centraliser */}
            <div
              onClick={() => setActiveStep(activeStep === 5 ? null : 5)}
              className={`cursor-pointer rounded-xl p-4 transition-all border flex flex-col justify-between ${
                activeStep === 5
                  ? 'bg-[#152B47] border-blue-400 ring-2 ring-blue-400/30'
                  : 'bg-[#102035] border-blue-500/30 hover:border-blue-400/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-blue-400">05 · CLOUD</span>
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold flex items-center justify-center border border-blue-500/40">
                    5
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">Centraliser</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Le Cloud range chaque mesure par ligne, voie et point kilométrique, et l'archive.
                </p>

                {/* Illustration : Matrice 3D */}
                <div className="h-20 bg-[#0A1627] rounded-lg p-2 border border-slate-800 flex flex-col justify-center items-center text-[10px] font-mono mb-3">
                  <div className="grid grid-cols-4 gap-1 w-24 mb-1">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="h-3 bg-blue-500/30 rounded-sm border border-blue-400/40" />
                    ))}
                  </div>
                  <div className="text-[9px] text-slate-500">
                    voies × points kilométriques →
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Archive 80 To · 20 ans</span>
                <Citation id={3} />
              </div>
            </div>
          </div>

          {/* Transition connector right edge: Row 1 to Row 2 */}
          <div className="hidden lg:flex justify-end pr-8 mb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
              <span>Du stockage Cloud vers l'IA d'anticipation</span>
              <ArrowDown className="w-4 h-4 text-purple-400 animate-bounce" />
            </div>
          </div>

          {/* Temporal line markers bottom row */}
          <div className="hidden lg:grid grid-cols-5 gap-4 mb-2 text-[11px] font-mono text-slate-400 text-center">
            <div className="col-span-1 flex items-center justify-center gap-1 text-purple-300">
              <ArrowLeft className="w-3 h-3" />
              <span>JOURS → SEMAINES</span>
            </div>
            <div className="col-span-1 flex items-center justify-center gap-1 text-emerald-300">
              <ArrowLeft className="w-3 h-3" />
              <span>HEURES → JOURS</span>
            </div>
            <div className="col-span-1 flex items-center justify-center gap-1 text-emerald-400">
              <ArrowLeft className="w-3 h-3" />
              <span>VALIDATION RAPIDE</span>
            </div>
            <div className="col-span-1 flex items-center justify-center gap-1 text-purple-400">
              <ArrowLeft className="w-3 h-3" />
              <span>PASSAGE APRÈS PASSAGE</span>
            </div>
            <div className="col-span-1"></div>
          </div>

          {/* ROW 2: 10 to 06 (Rendered left-to-right as 10, 09, 08, 07, 06) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {/* 10 · IA + CLOUD : Apprendre */}
            <div
              onClick={() => setActiveStep(activeStep === 10 ? null : 10)}
              className={`cursor-pointer rounded-xl p-4 transition-all border flex flex-col justify-between ${
                activeStep === 10
                  ? 'bg-[#152B47] border-purple-400 ring-2 ring-purple-400/30'
                  : 'bg-[#102035] border-purple-500/30 hover:border-purple-400/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-purple-400">10 · IA + CLOUD</span>
                  <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold flex items-center justify-center border border-purple-500/40">
                    10
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">Apprendre</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Les défauts validés réentraînent le modèle, redéployé ensuite dans les trains.
                </p>

                {/* Illustration : modèle v1 -> modèle v2 */}
                <div className="h-20 bg-[#0A1627] rounded-lg p-2 border border-slate-800 flex flex-col items-center justify-center text-[10px] font-mono mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">modèle v1</span>
                    <ArrowRight className="w-3 h-3 text-purple-400" />
                    <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 font-bold">modèle v2</span>
                  </div>
                  <div className="text-[9px] text-slate-500 text-center">
                    défauts validés → réentraînement
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Entraîné sur AWS SageMaker</span>
                <Citation id={16} />
              </div>
            </div>

            {/* 09 · HUMAIN : Réparer */}
            <div
              onClick={() => setActiveStep(activeStep === 9 ? null : 9)}
              className={`cursor-pointer rounded-xl p-4 transition-all border flex flex-col justify-between ${
                activeStep === 9
                  ? 'bg-[#152B47] border-emerald-400 ring-2 ring-emerald-400/30'
                  : 'bg-[#102035] border-emerald-500/30 hover:border-emerald-400/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-emerald-400">09 · HUMAIN</span>
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold flex items-center justify-center border border-emerald-500/40">
                    9
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">Réparer</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Les agents réparent avant le seuil critique, avec moins d'inspections à pied.
                </p>

                {/* Illustration : Intervention ciblée */}
                <div className="h-20 bg-[#0A1627] rounded-lg p-2 border border-slate-800 flex flex-col items-center justify-center text-[10px] font-mono mb-3">
                  <div className="w-16 h-4 bg-emerald-950/70 border border-emerald-500/50 rounded flex items-center justify-center text-emerald-300 text-[10px] font-bold">
                    [ PK 142.8 ]
                  </div>
                  <div className="text-[9px] text-slate-500 text-center mt-1">
                    intervention ciblée, avant seuil critique
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>−30 % incidents d'aiguillage</span>
                <Citation id={1} />
              </div>
            </div>

            {/* 08 · HUMAIN : Décider */}
            <div
              onClick={() => setActiveStep(activeStep === 8 ? null : 8)}
              className={`cursor-pointer rounded-xl p-4 transition-all border flex flex-col justify-between ${
                activeStep === 8
                  ? 'bg-[#152B47] border-emerald-400 ring-2 ring-emerald-400/30'
                  : 'bg-[#102035] border-emerald-500/30 hover:border-emerald-400/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-emerald-400">08 · HUMAIN</span>
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold flex items-center justify-center border border-emerald-500/40">
                    8
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">Décider</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  L'Infrapôle priorise selon la gravité et planifie l'intervention sur la voie.
                </p>

                {/* Illustration : Échéancier */}
                <div className="h-20 bg-[#0A1627] rounded-lg p-2 border border-slate-800 flex flex-col justify-center gap-1 text-[10px] font-mono mb-3">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-red-400 font-bold">urgent</span>
                    <span className="text-slate-400">J+0</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-amber-400 font-bold">planifié</span>
                    <span className="text-slate-400">S+2</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-slate-400">surveillé</span>
                    <span className="text-slate-500">M+1</span>
                  </div>
                  <div className="text-[8px] text-slate-500 text-center">
                    aujourd'hui → semaines à venir
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Base Infrapôle mise à jour</span>
                <Citation id={15} />
              </div>
            </div>

            {/* 07 · HUMAIN : Valider */}
            <div
              onClick={() => setActiveStep(activeStep === 7 ? null : 7)}
              className={`cursor-pointer rounded-xl p-4 transition-all border flex flex-col justify-between ${
                activeStep === 7
                  ? 'bg-[#152B47] border-emerald-400 ring-2 ring-emerald-400/30'
                  : 'bg-[#102035] border-emerald-500/30 hover:border-emerald-400/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-emerald-400">07 · HUMAIN</span>
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold flex items-center justify-center border border-emerald-500/40">
                    7
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">Valider</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Un expert confirme ou rejette chaque défaut proposé par l'IA avant toute action.
                </p>

                {/* Illustration : Boutons interactifs Valider/Rejeter */}
                <div className="h-20 bg-[#0A1627] rounded-lg p-2 border border-slate-800 flex flex-col justify-center items-center gap-1.5 text-[10px] font-mono mb-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpertDecision('confirmed');
                      }}
                      className={`px-2 py-1 rounded flex items-center gap-1 transition-all ${
                        expertDecision === 'confirmed'
                          ? 'bg-emerald-600 text-white font-bold shadow-md shadow-emerald-900/40'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Check className="w-3 h-3 text-white" />
                      <span>confirmé</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpertDecision('rejected');
                      }}
                      className={`px-2 py-1 rounded flex items-center gap-1 transition-all ${
                        expertDecision === 'rejected'
                          ? 'bg-red-600 text-white font-bold shadow-md shadow-red-900/40'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <X className="w-3 h-3 text-white" />
                      <span>rejeté</span>
                    </button>
                  </div>
                  <div className="text-[9px] text-slate-500 text-center">
                    seuls les défauts confirmés passent
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>L'IA propose, l'humain décide</span>
                <Citation id={17} showBadge />
              </div>
            </div>

            {/* 06 · IA + CLOUD : Prédire */}
            <div
              onClick={() => setActiveStep(activeStep === 6 ? null : 6)}
              className={`cursor-pointer rounded-xl p-4 transition-all border flex flex-col justify-between ${
                activeStep === 6
                  ? 'bg-[#152B47] border-purple-400 ring-2 ring-purple-400/30'
                  : 'bg-[#102035] border-purple-500/30 hover:border-purple-400/70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-purple-400">06 · IA + CLOUD</span>
                  <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold flex items-center justify-center border border-purple-500/40">
                    6
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">Prédire</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Passage après passage, l'IA suit l'évolution de chaque défaut et anticipe le seuil.
                </p>

                {/* Illustration : Courbe seuil critique */}
                <div className="h-20 bg-[#0A1627] rounded-lg p-2 border border-slate-800 flex flex-col justify-between text-[10px] font-mono mb-3">
                  <div className="flex justify-between text-[9px]">
                    <span className="text-red-400 font-bold">critique</span>
                    <span className="text-amber-400">urgent</span>
                    <span className="text-emerald-400">normal</span>
                  </div>
                  <div className="relative h-6 w-full">
                    <svg viewBox="0 0 100 24" className="w-full h-full">
                      <line x1="0" y1="6" x2="100" y2="6" stroke="#EF4444" strokeWidth="0.8" strokeDasharray="2 2" />
                      <path d="M0 22 C30 20 60 16 80 10" fill="none" stroke="#A855F7" strokeWidth="2" />
                      <circle cx="80" cy="10" r="3" fill="#EF4444" className="animate-ping" />
                      <circle cx="80" cy="10" r="2.5" fill="#EF4444" />
                    </svg>
                  </div>
                  <div className="text-[8px] text-slate-500 text-center truncate">
                    un point = un passage · on intervient avant le rouge
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Normal · urgent · critique</span>
                <Citation id={3} />
              </div>
            </div>
          </div>
        </div>

        {/* Détail interactif si étape sélectionnée */}
        {activeStep !== null && (
          <div className="mt-6 bg-[#0E1F36] border border-slate-700 rounded-xl p-5 text-xs sm:text-sm text-slate-200 shadow-xl flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 font-mono font-bold flex items-center justify-center shrink-0">
                0{activeStep}
              </span>
              <div>
                <strong className="text-white">Étape 0{activeStep} dans la chaîne ferroviaire :</strong>{' '}
                {activeStep === 1 && "Acquisition physique haute cadence (caméras linéaires, lasers, odomètres, capteurs acoustiques à fibre optique)."}
                {activeStep === 2 && "Tri sélectif instantané par IA embarquée pour éliminer 90% du flux brut et ne garder que les anomalies."}
                {activeStep === 3 && "Déclenchement d'alerte en cabine en moins de 10 ms (0,9 m à 320 km/h au lieu de 26,7 m en attendant le réseau)."}
                {activeStep === 4 && "Transmission 4G/5G sécurisée avec mise en mémoire tampon en cas de traversée de tunnel ou zone blanche."}
                {activeStep === 5 && "Centralisation dans le référentiel national (ligne/voie/PK) sur serveur de 80 To avec 20 ans d'archives."}
                {activeStep === 6 && "Analyse prédictive multi-passages pour modéliser la dégradation et alerter avant d'atteindre le seuil critique."}
                {activeStep === 7 && "Revue et arbitrage par un expert humain (human-in-the-loop) à Derby ou l'Infrapôle pour éliminer les faux positifs."}
                {activeStep === 8 && "Planification des fenêtres d'intervention par le chef de secteur en fonction des urgences et de l'exploitation."}
                {activeStep === 9 && "Réparation ciblée au point kilométrique sans exposition inutile des agents à pied sur le ballast."}
                {activeStep === 10 && "Apprentissage continu : injection des défauts réels confirmés dans AWS SageMaker pour réentraîner les modèles."}
              </div>
            </div>
            <button
              onClick={() => setActiveStep(null)}
              className="text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800"
            >
              Fermer
            </button>
          </div>
        )}

        {/* Bottom bibliographic reference row as seen on the PDF */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-start justify-between gap-4 text-xs text-slate-400">
          <div className="leading-relaxed">
            <strong className="text-slate-300 font-mono">Sources officielles du schéma :</strong>{' '}
            <span className="font-mono text-[11px]">
              [1] L. De Matharel (JDN 2017) · [3] L. Charlier (Railway Gazette 2006) · [5] aicas (*commercial) · [7] SNCF Numérique (2026) · [15] AIDO (2023) · [16] A. Chandeze (2020) · [17] UIC & McKinsey (2024) · [20] J. Redon (Selectra 2025). Étape 3 : calcul 320 km/h ÷ 3,6 × 0,3 s = 26,7 m.
            </span>
          </div>

          <div className="shrink-0 text-[11px] font-mono text-slate-400 text-right">
            Projet étudiant · non affilié à SNCF
            <br />
            <strong className="text-slate-300">Mohamed Doucoure & Zacharie Lonzemba-Yoka</strong> · octobre 2026
          </div>
        </div>
      </div>
    </section>
  );
};

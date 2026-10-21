import React, { useEffect, useState } from 'react';
import { Citation } from './Citation';
import { ArrowDown, Activity, Cpu, Cloud, Database } from 'lucide-react';

export const Hero: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState({
    lines: 0,
    dataIris: 0,
    fpsPlpr: 0,
    milesFoot: 0,
  });

  useEffect(() => {
    const duration = 1600;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setAnimatedValues({
        lines: Math.round(28000 * ease),
        dataIris: Math.round(100 * ease),
        fpsPlpr: Math.round(70000 * ease),
        milesFoot: Math.round(8500 * ease),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="accueil" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background glow and subtle railway blueprint grids */}
      <div className="absolute inset-0 bg-[#0F1E33] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-[#4DA3FF]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-[#FF6B35]/8 blur-[110px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic dossier kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-6 tracking-wide">
          <span className="text-[#F5B800] font-semibold">DOSSIER RÉCAPITULATIF</span>
          <span aria-hidden="true">·</span>
          <span>CAS C (TNI)</span>
          <span aria-hidden="true">·</span>
          <span>SPRINTS 1 CLOUD, 2 EDGE, 3 DONNÉES & IA</span>
          <span aria-hidden="true">·</span>
          <span className="text-white font-medium">AUTEURS : MOHAMED DOUCOURE & ZACHARIE LONZEMBA-YOKA</span>
          <span aria-hidden="true">·</span>
          <span className="text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
            Actualités & Presse TNI 2024-2026 incluses
          </span>
        </div>

        {/* Main Titles */}
        <div className="max-w-4xl">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 text-balance">
            Détecter la fissure avant l'accident
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-6 max-w-3xl">
            Capteurs, IA embarquée, Cloud et données au service de la sécurité des voies ferrées.
          </p>

          <div className="bg-[#132642] border border-slate-700/70 rounded-xl p-4 sm:p-5 text-sm text-slate-300 leading-relaxed mb-6 max-w-3xl">
            <div className="flex items-start gap-3">
              <span className="text-[#F5B800] font-semibold shrink-0 mt-0.5">Problématique :</span>
              <p>
                Identifier les micro-fissures et défauts géométriques des rails via des capteurs et une IA embarquée
                avant que le seuil critique de sécurité ferroviaire ne soit atteint. Cas de référence :{' '}
                <strong className="text-white font-medium">SNCF Réseau</strong>, comparé à{' '}
                <strong className="text-white font-medium">Network Rail (Royaume-Uni)</strong>.
              </p>
            </div>
          </div>

          {/* Call to action for the diagram & TNI */}
          <div className="mb-10 flex flex-wrap items-center gap-3">
            <a
              href="#schema"
              className="px-4 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <span>Schéma « Du rail au réparateur » (10 étapes)</span>
              <ArrowDown className="w-3.5 h-3.5 text-slate-950" />
            </a>
            <a
              href="#tni"
              className="px-4 py-2.5 bg-purple-950/80 hover:bg-purple-900 text-purple-200 border border-purple-500/50 font-semibold text-xs rounded-xl transition-colors flex items-center gap-2"
            >
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>Architecture TNI (IoT · Edge · Cloud · IA)</span>
            </a>
            <a
              href="#dashboard-sensor"
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl border border-slate-700 transition-colors flex items-center gap-2"
            >
              <Activity className="w-3.5 h-3.5 text-[#F5B800]" />
              <span>Direct Télémétrie</span>
            </a>
          </div>
        </div>

        {/* 4 Compteurs animés */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {/* Compteur 1 */}
          <div className="bg-[#132642]/90 border border-slate-700/70 rounded-xl p-5 hover:border-[#4DA3FF]/50 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-3">
              <span className="font-mono uppercase tracking-wider">Réseau ferré français</span>
              <Citation id={7} />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight mb-1">
              &gt; {animatedValues.lines.toLocaleString('fr-FR')} <span className="text-lg font-sans font-medium text-slate-300">km</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Plus de 28 000 km de lignes, dont <strong className="text-slate-200">2 800 km</strong> à grande vitesse <Citation id={7} />
            </p>
          </div>

          {/* Compteur 2 */}
          <div className="bg-[#132642]/90 border border-slate-700/70 rounded-xl p-5 hover:border-[#4DA3FF]/50 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-3">
              <span className="font-mono uppercase tracking-wider">Train IRIS 320</span>
              <Citation id={3} />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#4DA3FF] font-mono tabular-nums tracking-tight mb-1">
              60 à {animatedValues.dataIris} <span className="text-lg font-sans font-medium text-slate-300">Go/j</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              60 à 100 Go de données par jour pour le train de mesure IRIS 320 <Citation id={3} />
            </p>
          </div>

          {/* Compteur 3 */}
          <div className="bg-[#132642]/90 border border-slate-700/70 rounded-xl p-5 hover:border-[#FF6B35]/50 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-3">
              <span className="font-mono uppercase tracking-wider">Trains PLPR</span>
              <Citation id={13} />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FF6B35] font-mono tabular-nums tracking-tight mb-1">
              {animatedValues.fpsPlpr.toLocaleString('fr-FR')} <span className="text-lg font-sans font-medium text-slate-300">img/s</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              70 000 images par seconde pour les trains PLPR de Network Rail <Citation id={13} />
            </p>
          </div>

          {/* Compteur 4 */}
          <div className="bg-[#132642]/90 border border-slate-700/70 rounded-xl p-5 hover:border-[#2EAD6B]/50 transition-colors">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-3">
              <span className="font-mono uppercase tracking-wider">Sécurité des agents</span>
              <Citation id={13} />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#2EAD6B] font-mono tabular-nums tracking-tight mb-1">
              {animatedValues.milesFoot.toLocaleString('fr-FR')} <span className="text-lg font-sans font-medium text-slate-300">miles</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              8 500 miles de voies qui ne sont plus inspectés à pied au Royaume-Uni <Citation id={13} />
            </p>
          </div>
        </div>

        {/* Quick jump anchors to the 3 Sprints */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="text-xs text-slate-400 uppercase tracking-wider font-mono mr-1">Navigation directe :</span>
          <a
            href="#cloud"
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-sky-950/70 text-[#4DA3FF] border border-[#4DA3FF]/40 hover:bg-sky-900/50 transition-colors flex items-center gap-1.5"
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>Sprint 1 · Cloud</span>
          </a>
          <a
            href="#edge"
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-orange-950/70 text-[#FF6B35] border border-[#FF6B35]/40 hover:bg-orange-900/50 transition-colors flex items-center gap-1.5"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Sprint 2 · Edge</span>
          </a>
          <a
            href="#donnees-ia"
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-purple-950/70 text-[#9B7BFF] border border-[#9B7BFF]/40 hover:bg-purple-900/50 transition-colors flex items-center gap-1.5"
          >
            <Database className="w-3.5 h-3.5" />
            <span>Sprint 3 · Données & IA</span>
          </a>
        </div>
      </div>
    </section>
  );
};

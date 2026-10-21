import React, { useState } from 'react';
import { Citation } from './Citation';
import { Gauge, Clock, Zap, AlertTriangle, Play, RotateCcw } from 'lucide-react';

export const CalculateurLatence: React.FC = () => {
  const [speed, setSpeed] = useState<number>(320); // km/h (80 to 320)
  const [delayMs, setDelayMs] = useState<number>(300); // 10, 100, 300
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // Formule : distance (m) = vitesse (km/h) ÷ 3,6 × délai (s)
  const calculateDistance = (v: number, ms: number): number => {
    const delaySec = ms / 1000;
    const dist = (v / 3.6) * delaySec;
    // Arrondi à 1 décimale comme dans les valeurs de contrôle
    return Math.round(dist * 10) / 10;
  };

  const currentDistance = calculateDistance(speed, delayMs);
  const edgeDistance = calculateDistance(speed, 10);
  const cloud100Distance = calculateDistance(speed, 100);
  const cloud300Distance = calculateDistance(speed, 300);

  const speedInMps = Math.round((speed / 3.6) * 10) / 10;

  const triggerAnimation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 1200);
  };

  return (
    <div className="bg-[#12233B] border border-orange-500/40 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-700/80 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35] uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
            <span>Simulateur physique interactif</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Pendant que le Cloud répond…
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Calculez la distance parcourue à grande vitesse avant même la première réponse du serveur.
          </p>
        </div>

        {/* Formule affichée */}
        <div className="bg-[#0B1728] border border-slate-700 rounded-xl px-4 py-2.5 text-xs font-mono text-slate-300 flex items-center gap-2 shrink-0">
          <span className="text-[#F5B800] font-bold">Formule :</span>
          <span>distance (m) = vitesse (km/h) ÷ 3,6 × délai (s)</span>
        </div>
      </div>

      {/* Contrôles du simulateur */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Curseur de vitesse */}
        <div className="bg-[#0C1A2E]/80 border border-slate-700/70 rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <label htmlFor="speed-slider" className="text-sm font-semibold text-white flex items-center gap-2">
              <Gauge className="w-4 h-4 text-[#FF6B35]" />
              <span>Vitesse du train :</span>
            </label>
            <div className="text-right">
              <span className="text-2xl font-extrabold text-white font-mono tabular-nums">{speed}</span>
              <span className="text-xs text-slate-400 font-mono ml-1">km/h</span>
              <div className="text-[11px] text-slate-400 font-mono">
                soit <span className="text-[#F5B800] font-bold">{speedInMps} m/s</span>
              </div>
            </div>
          </div>

          <input
            id="speed-slider"
            type="range"
            min="80"
            max="320"
            step="10"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#FF6B35] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
            aria-label="Vitesse du train en kilomètres par heure"
          />

          <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-2">
            <span>80 km/h (Ligne classique)</span>
            <span>200 km/h (PLPR UK)</span>
            <span className="text-[#FF6B35] font-bold">320 km/h (TGV / IRIS 320)</span>
          </div>
        </div>

        {/* Sélecteur de délai */}
        <div className="bg-[#0C1A2E]/80 border border-slate-700/70 rounded-xl p-5">
          <label className="text-sm font-semibold text-white flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-[#4DA3FF]" />
            <span>Délai de traitement / aller-retour réseau :</span>
          </label>

          <div className="grid grid-cols-3 gap-2.5">
            <button
              onClick={() => setDelayMs(10)}
              className={`p-3 rounded-lg border text-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] ${
                delayMs === 10
                  ? 'bg-orange-950/80 border-[#FF6B35] text-white shadow-md'
                  : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:border-slate-500'
              }`}
            >
              <div className="text-xs font-mono uppercase text-[#FF6B35] font-bold">10 ms</div>
              <div className="text-sm font-extrabold text-white mt-0.5">Edge local</div>
              <div className="text-[10px] text-slate-400 mt-1">&lt; 10 ms à bord <Citation id={5} showBadge /></div>
            </button>

            <button
              onClick={() => setDelayMs(100)}
              className={`p-3 rounded-lg border text-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4DA3FF] ${
                delayMs === 100
                  ? 'bg-sky-950/80 border-[#4DA3FF] text-white shadow-md'
                  : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:border-slate-500'
              }`}
            >
              <div className="text-xs font-mono uppercase text-[#4DA3FF] font-bold">100 ms</div>
              <div className="text-sm font-extrabold text-white mt-0.5">Cloud min.</div>
              <div className="text-[10px] text-slate-400 mt-1">100 ms 4G/5G <Citation id={5} showBadge /></div>
            </button>

            <button
              onClick={() => setDelayMs(300)}
              className={`p-3 rounded-lg border text-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] ${
                delayMs === 300
                  ? 'bg-red-950/70 border-red-500 text-white shadow-md'
                  : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:border-slate-500'
              }`}
            >
              <div className="text-xs font-mono uppercase text-red-400 font-bold">300 ms</div>
              <div className="text-sm font-extrabold text-white mt-0.5">Cloud dégradé</div>
              <div className="text-[10px] text-slate-400 mt-1">300 ms réseau <Citation id={5} showBadge /></div>
            </button>
          </div>
        </div>
      </div>

      {/* Résultat principal & Repères de contrôle */}
      <div className="bg-[#0A1627] border border-slate-700 rounded-xl p-5 sm:p-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Distance parcourue en aveugle à {speed} km/h pendant {delayMs} ms
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums mt-1 flex items-baseline gap-2">
              <span className={delayMs === 10 ? 'text-[#2EAD6B]' : delayMs === 100 ? 'text-[#4DA3FF]' : 'text-[#FF6B35]'}>
                {currentDistance.toLocaleString('fr-FR')} mètres
              </span>
              <span className="text-xs text-slate-400 font-normal">
                ({speed} ÷ 3,6 × {delayMs / 1000} s)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={triggerAnimation}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg border border-slate-600 transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
            >
              <Play className="w-3.5 h-3.5 text-[#F5B800]" />
              <span>Lancer l'animation du train</span>
            </button>
          </div>
        </div>

        {/* Valeurs de contrôle imposées */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800 text-xs">
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between">
            <span className="text-slate-400">À 320 km/h · Edge (10 ms) :</span>
            <span className="font-mono font-bold text-[#2EAD6B]">0,9 m</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between">
            <span className="text-slate-400">À 320 km/h · Cloud (100 ms) :</span>
            <span className="font-mono font-bold text-[#4DA3FF]">8,9 m</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between">
            <span className="text-slate-400">À 320 km/h · Cloud (300 ms) :</span>
            <span className="font-mono font-bold text-[#FF6B35]">26,7 m</span>
          </div>
        </div>
      </div>

      {/* Visualisation animée d'un train SVG qui avance sur les rails */}
      <div className="bg-[#081220] rounded-xl p-5 border border-slate-800 relative overflow-hidden">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
          <span>Représentation spatiale de la distance parcourue</span>
          <span className="text-[#FF6B35] font-semibold">Échelle : max 30 mètres</span>
        </div>

        {/* SVG Railway Track with moving train */}
        <div className="relative h-32 sm:h-36 w-full flex items-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 120"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Voies ferrées */}
            <line x1="50" y1="70" x2="950" y2="70" stroke="#334155" strokeWidth="4" />
            <line x1="50" y1="85" x2="950" y2="85" stroke="#334155" strokeWidth="4" />

            {/* Traverses */}
            {Array.from({ length: 45 }).map((_, i) => (
              <line
                key={i}
                x1={60 + i * 20}
                y1="64"
                x2={60 + i * 20}
                y2="91"
                stroke="#475569"
                strokeWidth="3"
                strokeLinecap="round"
              />
            ))}

            {/* Point de détection initial / micro-fissure sur le rail */}
            <g transform="translate(100, 78)">
              <circle cx="0" cy="0" r="6" fill="#FF6B35" className="animate-ping opacity-75" />
              <circle cx="0" cy="0" r="5" fill="#FF6B35" />
              <text x="0" y="-18" textAnchor="middle" fill="#FF6B35" fontSize="10" fontFamily="monospace" fontWeight="bold">
                Défaut / Fissure
              </text>
              <line x1="0" y1="-12" x2="0" y2="-4" stroke="#FF6B35" strokeWidth="1.5" />
            </g>

            {/* Repère Edge (10 ms) */}
            <g transform={`translate(${100 + (edgeDistance / 30) * 800}, 78)`}>
              <line x1="0" y1="-30" x2="0" y2="20" stroke="#2EAD6B" strokeWidth="2" strokeDasharray="3 3" />
              <text x="0" y="-35" textAnchor="middle" fill="#2EAD6B" fontSize="10" fontFamily="monospace" fontWeight="bold">
                Edge : {edgeDistance}m
              </text>
            </g>

            {/* Repère Cloud (100 ms) */}
            <g transform={`translate(${100 + (cloud100Distance / 30) * 800}, 78)`}>
              <line x1="0" y1="-25" x2="0" y2="20" stroke="#4DA3FF" strokeWidth="2" strokeDasharray="3 3" />
              <text x="0" y="-28" textAnchor="middle" fill="#4DA3FF" fontSize="10" fontFamily="monospace" fontWeight="bold">
                Cloud 100ms : {cloud100Distance}m
              </text>
            </g>

            {/* Repère Cloud (300 ms) */}
            <g transform={`translate(${100 + (cloud300Distance / 30) * 800}, 78)`}>
              <line x1="0" y1="-30" x2="0" y2="20" stroke="#FF6B35" strokeWidth="2" strokeDasharray="3 3" />
              <text x="0" y="-35" textAnchor="middle" fill="#FF6B35" fontSize="10" fontFamily="monospace" fontWeight="bold">
                Cloud 300ms : {cloud300Distance}m
              </text>
            </g>

            {/* Train SVG stylisé qui avance */}
            <g
              transform={`translate(${100 + (currentDistance / 30) * 800}, 42)`}
              className={`transition-all duration-700 ease-out ${isSimulating ? 'scale-105' : ''}`}
            >
              {/* Ombre train */}
              <ellipse cx="25" cy="30" rx="35" ry="4" fill="black" opacity="0.4" />

              {/* Rame de train profil aérodynamique */}
              <path
                d="M-20 24 L50 24 L68 18 L72 10 L60 2 L-20 2 Z"
                fill="#1E293B"
                stroke="#64748B"
                strokeWidth="1.5"
              />
              <path
                d="M45 4 L65 10 L58 16 L45 16 Z"
                fill="#38BDF8"
                opacity="0.85"
              />
              {/* Liseré signalisation jaune */}
              <line x1="-20" y1="20" x2="62" y2="20" stroke="#F5B800" strokeWidth="2" />

              {/* Roues */}
              <circle cx="-10" cy="26" r="3" fill="#94A3B8" />
              <circle cx="5" cy="26" r="3" fill="#94A3B8" />
              <circle cx="35" cy="26" r="3" fill="#94A3B8" />
              <circle cx="50" cy="26" r="3" fill="#94A3B8" />

              {/* Capteur embarqué sous le châssis avec faisceau vers le rail */}
              <circle cx="20" cy="22" r="3" fill="#FF6B35" />
              <polygon points="17,24 23,24 28,34 12,34" fill="#FF6B35" opacity="0.3" />

              {/* Phares avant */}
              <polygon points="70,12 85,8 85,16" fill="#FEF08A" opacity="0.6" />
            </g>
          </svg>
        </div>

        <div className="mt-2 text-xs text-slate-400 flex items-center justify-between">
          <span>Départ de la fissure (0 m)</span>
          <span className="text-[#F5B800] font-medium">
            En Edge, le train n'a parcouru que {edgeDistance} m quand l'anomalie est signalée, contre {cloud300Distance} m si l'on attendait le Cloud.
          </span>
          <span>Fin de zone (30 m)</span>
        </div>
      </div>
    </div>
  );
};

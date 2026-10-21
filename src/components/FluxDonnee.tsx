import React, { useState } from 'react';
import { Citation } from './Citation';
import { Camera, Cpu, Cloud, UserCheck, Wrench, RotateCcw, ChevronRight, X } from 'lucide-react';

interface StepDetail {
  id: number;
  name: string;
  shortDesc: string;
  role: string;
  color: string;
  accentBg: string;
  icon: React.ReactNode;
  details: {
    title: string;
    items: { text: string; citationId?: number; commercial?: boolean }[];
  };
}

export const FluxDonnee: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const steps: StepDetail[] = [
    {
      id: 1,
      name: 'Capteurs',
      shortDesc: 'Caméras, lasers, accéléromètres, fibre',
      role: 'Acquisition physique brute',
      color: '#4DA3FF',
      accentBg: 'rgba(77, 163, 255, 0.12)',
      icon: <Camera className="w-5 h-5 text-[#4DA3FF]" />,
      details: {
        title: 'Étape 1 : Acquisition physique multisensorielle',
        items: [
          { text: 'Train IRIS 320 : caméras linéaires, vidéo, géométrie laser et inertielle jusqu’à 320 km/h', citationId: 3 },
          { text: 'Wagons d’inspection SIM : 7 caméras vidéo haute résolution', citationId: 15 },
          { text: 'Trains commerciaux (STC) : accéléromètres, position GNSS et odométrie à chaque passage', citationId: 4 },
          { text: 'Fibre optique (SURFO) : 28 000 km de câbles le long des voies utilisés comme capteurs acoustiques', citationId: 6 },
          { text: 'Trains PLPR (Network Rail) : jusqu’à 70 000 images/seconde, 1 image tous les 0,8 mm à 125 mph', citationId: 13 },
        ],
      },
    },
    {
      id: 2,
      name: 'IA embarquée (Edge)',
      shortDesc: 'Détection temps réel, tri (< 10 % transmis)',
      role: 'Filtrage immédiat à bord',
      color: '#FF6B35',
      accentBg: 'rgba(255, 107, 53, 0.12)',
      icon: <Cpu className="w-5 h-5 text-[#FF6B35]" />,
      details: {
        title: 'Étape 2 : Détection locale et réduction drastique de flux',
        items: [
          { text: 'Calcul instantané à bord avec latence < 10 ms (contre 100 à 300 ms en Cloud)', citationId: 5, commercial: true },
          { text: 'Détection des anomalies de surface et alertes critiques immédiates sans dépendre du réseau', citationId: 5 },
          { text: 'Tri sélectif : les flux vidéo 1080p continus (~6 Mbit/s) sont jetés ; seuls les défauts et métadonnées (~0,1 Mbit/s) sont conservés', citationId: 5, commercial: true },
          { text: 'Moins de 10 % du volume brut collecté est transmis vers l’infrastructure centrale', citationId: 5, commercial: true },
          { text: 'Fonctionne hors ligne dans les tunnels et zones blanches sans couverture réseau', citationId: 20 },
        ],
      },
    },
    {
      id: 3,
      name: 'Cloud',
      shortDesc: 'Centraliser · Calculer · API',
      role: 'Mémoire et puissance centrale',
      color: '#4DA3FF',
      accentBg: 'rgba(77, 163, 255, 0.12)',
      icon: <Cloud className="w-5 h-5 text-[#4DA3FF]" />,
      details: {
        title: 'Étape 3 : Centralisation, calcul lourd et réentraînement',
        items: [
          { text: 'Centralisation dans un référentiel unique (ligne, voie, point kilométrique PK) et archivage historique (serveur national 80 To, 20 ans d’archives)', citationId: 3 },
          { text: 'Calcul analytique et comparaison multi-passages pour suivre l’évolution lente des défauts (projet STC sur Databricks)', citationId: 4 },
          { text: 'Entraînement des modèles de vision par ordinateur sur AWS SageMaker', citationId: 16 },
          { text: 'Exposition par API vers les outils de maintenance et applications terrain (Programme Surveillance & Supervision)', citationId: 6 },
        ],
      },
    },
    {
      id: 4,
      name: 'Validation humaine',
      shortDesc: 'Experts confirment ou rejettent',
      role: 'Garantie de sécurité (Human-in-the-loop)',
      color: '#9B7BFF',
      accentBg: 'rgba(155, 123, 255, 0.12)',
      icon: <UserCheck className="w-5 h-5 text-[#9B7BFF]" />,
      details: {
        title: 'Étape 4 : Supervision humaine indispensable',
        items: [
          { text: 'L’IA signale des défauts « potentiels » ; des experts humains les confirment ou les rejettent', citationId: 13 },
          { text: 'Network Rail a mis en place un centre d’experts à Derby, puis ouvert un 2e centre en janvier 2019 face au volume de détections', citationId: 13 },
          { text: 'SNCF : intégration directe des alertes dans la base des équipes de maintenance Infrapôle', citationId: 15 },
          { text: 'Règle d’or UIC / McKinsey : « L’IA propose, l’humain décide » pour éliminer tout risque d’accident ferroviaire', citationId: 17 },
        ],
      },
    },
    {
      id: 5,
      name: 'Maintenance',
      shortDesc: 'Alertes normal / urgent / critique',
      role: 'Intervention ciblée sur les rails',
      color: '#2EAD6B',
      accentBg: 'rgba(46, 173, 107, 0.12)',
      icon: <Wrench className="w-5 h-5 text-[#2EAD6B]" />,
      details: {
        title: 'Étape 5 : Planification et réparation sur le terrain',
        items: [
          { text: 'Classification normalisée des mesures selon la gravité : normal, urgent, critique', citationId: 3 },
          { text: 'Le chef de secteur / l’Infrapôle planifie le créneau d’intervention en fonction du niveau d’urgence', citationId: 15 },
          { text: 'Les agents interviennent avec précision sur le point kilométrique identifié, évitant les tournées de recherche à pied', citationId: 13 },
          { text: 'Remplacement ou meulage des rails avant que la micro-fissure ne devienne une rupture de voie catastrophique', citationId: 18 },
        ],
      },
    },
  ];

  return (
    <section className="py-12 bg-[#0B1728] border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-mono text-[#F5B800] uppercase tracking-wider mb-2">
              Architecture globale
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Le parcours de la donnée ferroviaire
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              De l'impulsion physique sur le rail jusqu'à l'intervention de l'équipe de maintenance. Cliquez sur une étape pour afficher les détails.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-700/60 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#4DA3FF]" />
            <span>Architecture hybride Edge + Cloud</span>
          </div>
        </div>

        {/* Schéma horizontal interactif */}
        <div className="relative bg-[#102036] rounded-2xl p-4 sm:p-6 border border-slate-700/80 shadow-xl overflow-hidden">
          {/* Rail guides decoration in the background */}
          <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-0.5 bg-slate-700/50 -z-0 hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isSelected = selectedStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedStep(isSelected ? null : step.id)}
                  style={{
                    borderColor: isSelected ? step.color : 'rgba(71, 85, 105, 0.4)',
                  }}
                  className={`text-left p-4 rounded-xl transition-all relative flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800] ${
                    isSelected
                      ? 'bg-[#162C4A] shadow-md shadow-black/40 -translate-y-1'
                      : 'bg-[#12233B] hover:bg-[#152844] hover:border-slate-500'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105"
                        style={{ backgroundColor: step.accentBg }}
                      >
                        {step.icon}
                      </div>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">
                        0{step.id}
                      </span>
                    </div>

                    <div className="text-sm font-bold text-white group-hover:text-slate-100 flex items-center gap-1.5 mb-1">
                      <span>{step.name}</span>
                    </div>

                    <div className="text-xs text-slate-400 font-mono mb-2">
                      {step.role}
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-2">
                      {step.shortDesc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs font-medium">
                    <span
                      style={{ color: step.color }}
                      className="text-[11px] font-semibold"
                    >
                      {isSelected ? 'Masquer détails' : 'Explorer l’étape'}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform text-slate-400 ${
                        isSelected ? 'rotate-90 text-white' : 'group-hover:translate-x-0.5'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dotted Return Flow: Cloud -> IA embarquée */}
          <div className="mt-6 pt-5 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs bg-[#0C1A2E]/80 rounded-xl px-4 py-3">
            <div className="flex items-center gap-2 text-slate-300">
              <RotateCcw className="w-4 h-4 text-[#4DA3FF] animate-spin-slow shrink-0" />
              <span className="font-semibold text-white">Boucle de rétroaction continue :</span>
              <span className="text-slate-300">
                Le Cloud réentraîne les modèles d'IA sur les défauts validés et les redéploie dans les trains.
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#4DA3FF] bg-[#4DA3FF]/10 px-3 py-1 rounded-md border border-[#4DA3FF]/30 shrink-0">
              <span className="inline-block w-2 h-2 rounded-full bg-[#4DA3FF] animate-pulse" />
              <span>Cloud ➔ IA embarquée (Edge) : « Modèles d'IA mis à jour »</span>
              <Citation id={16} />
            </div>
          </div>
        </div>

        {/* Détails de l'étape sélectionnée */}
        {selectedStep !== null && (
          <div className="mt-4 bg-[#142640] border border-slate-600 rounded-xl p-5 sm:p-6 shadow-2xl relative transition-all">
            {(() => {
              const current = steps.find((s) => s.id === selectedStep);
              if (!current) return null;
              return (
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: current.accentBg }}
                      >
                        {current.icon}
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                          Détails d'architecture · Étape {current.id}/05
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {current.details.title}
                        </h3>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedStep(null)}
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700/60 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800]"
                      aria-label="Fermer les détails"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <ul className="space-y-2.5 text-sm text-slate-200">
                    {current.details.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#F5B800] mt-1 shrink-0 font-bold">•</span>
                        <span>
                          {item.text}
                          {item.citationId && (
                            <span className="ml-1">
                              <Citation id={item.citationId} showBadge={item.commercial} />
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
};

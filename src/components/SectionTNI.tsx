import React, { useState } from 'react';
import { Citation } from './Citation';
import {
  Cpu,
  Wifi,
  Cloud,
  Brain,
  ArrowRight,
  ArrowDown,
  Layers,
  Database,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Zap,
  Server,
  Activity,
  HardDrive,
  Users,
} from 'lucide-react';

interface KeyMetric {
  label: string;
  value: string;
  citationId?: number;
  commercial?: boolean;
  estimation?: boolean;
  note?: string;
}

interface PillarPoint {
  title: string;
  desc: string;
  citationId: number;
  commercial?: boolean;
  estimation?: boolean;
}

interface Pillar {
  id: 'iot' | 'edge' | 'cloud' | 'ia';
  name: string;
  tagline: string;
  color: string;
  accentBg: string;
  borderColor: string;
  icon: React.ReactNode;
  summary: string;
  keyMetrics: KeyMetric[];
  points: PillarPoint[];
}

export const SectionTNI: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'iot' | 'edge' | 'cloud' | 'ia'>('iot');
  const [activeSchemaFlow, setActiveSchemaFlow] = useState<'all' | 'critical' | 'predictive' | 'learning'>('all');

  const pillars: Pillar[] = [
    {
      id: 'iot' as const,
      name: 'IoT & Capteurs',
      tagline: 'Acquisition physique & transformation d’actifs',
      color: '#38BDF8',
      accentBg: 'bg-sky-500/10',
      borderColor: 'border-sky-500/40',
      icon: <Wifi className="w-5 h-5 text-sky-400" />,
      summary: 'Collecter en continu les signaux vibratoires, thermiques, inertiels et optiques sur les voies et rames.',
      keyMetrics: [
        { label: 'Réseau couvert', value: '28 000 km', citationId: 7 },
        { label: 'Fibre acoustique (SURFO)', value: '28 000 km', citationId: 6 },
        { label: 'Trains équipés télédiagnostic', value: '> 1 100 rames', citationId: 7 },
        { label: 'Cadence caméras PLPR', value: '70 000 img/s', citationId: 13 },
      ],
      points: [
        {
          title: 'Instrumentation des voies & aiguillages',
          desc: 'Pose de capteurs accélérométriques et thermiques sur les aiguillages sensibles de la LGV Sud-Est, ayant permis une baisse de 30 % des incidents mécaniques.',
          citationId: 1,
        },
        {
          title: 'Projet SURFO (Surveillance par Fibres Optiques)',
          desc: 'Transformation des 28 000 km de câbles optiques de télécommunications existants en capteurs acoustiques distribués (DAS), localisant les micro-fissures et chutes d’obstacles à précision métrique en continu.',
          citationId: 6,
        },
        {
          title: 'Vecteurs mobiles d’inspection haute fréquence',
          desc: 'Rames dédiées (IRIS 320 à 320 km/h, wagons SIM à 7 caméras) et trains commerciaux (STC) équipés de capteurs optiques, inertiels et GNSS produisant 60 à 100 Go de données brutes par jour.',
          citationId: 3,
        },
      ],
    },
    {
      id: 'edge' as const,
      name: 'Edge Computing',
      tagline: 'Intelligence embarquée & décision instantanée',
      color: '#FF6B35',
      accentBg: 'bg-orange-500/10',
      borderColor: 'border-orange-500/40',
      icon: <Cpu className="w-5 h-5 text-[#FF6B35]" />,
      summary: 'Traiter localement sous le train avec latence < 10 ms et réduire de plus de 90 % le flux avant envoi.',
      keyMetrics: [
        { label: 'Latence de décision à bord', value: '< 10 ms', citationId: 5, commercial: true },
        { label: 'Distance à 320 km/h (10 ms)', value: '0,9 m', note: 'vs 26,7 m en Cloud' },
        { label: 'Volume transmis vers Cloud', value: '< 10 %', citationId: 5, commercial: true },
        { label: 'Couverture 4G/5G ciblée Arcep', value: '90 % fin 2025', citationId: 20 },
      ],
      points: [
        {
          title: 'Temps réel strict & sécurité des circulations',
          desc: 'À 320 km/h, le train parcourt 88,9 m par seconde. Un aller-retour réseau vers le Cloud (100 à 300 ms) ferait franchir 8,9 à 26,7 m en aveugle, contre seulement 0,9 m avec un calcul Edge local en moins de 10 ms.',
          citationId: 5,
          commercial: true,
        },
        {
          title: 'Filtrage massif du bruit & économie de bande passante',
          desc: 'Un flux vidéo linéaire 1080p consomme environ 6 Mbit/s, contre 0,1 Mbit/s pour des métadonnées géolocalisées. L’IA embarquée élimine les images de voies saines et n’envoie que les extraits d’anomalies (< 10 % transmis).',
          citationId: 5,
          commercial: true,
        },
        {
          title: 'Résilience hors-ligne en tunnel et matériel durci',
          desc: 'Fonctionnement autonome en zone blanche ou tunnel. Calculateurs ferroviaires conformes aux normes strictes EN 50155 (chocs, vibrations, température) et EN 45545-2 (sécurité incendie).',
          citationId: 21,
          commercial: true,
        },
      ],
    },
    {
      id: 'cloud' as const,
      name: 'Cloud Computing',
      tagline: 'Centralisation, archivage & calcul analytique',
      color: '#4DA3FF',
      accentBg: 'bg-sky-500/10',
      borderColor: 'border-sky-500/40',
      icon: <Cloud className="w-5 h-5 text-[#4DA3FF]" />,
      summary: 'Constituer la mémoire du réseau sur 20 ans, réentraîner les modèles et alimenter le télédiagnostic.',
      keyMetrics: [
        { label: 'Archive nationale IRIS 320', value: '80 To · 20 ans', citationId: 3 },
        { label: 'Variables par train', value: '8 000 analysées', citationId: 24 },
        { label: 'Variables en temps réel', value: '2 000 en direct', citationId: 24 },
        { label: 'Objectif migration AWS groupe', value: '90 % applicatifs', citationId: 9 },
      ],
      points: [
        {
          title: 'Référentiel unique national spatio-temporel',
          desc: 'Rapprochement de l’ensemble des passages de rames dans un référentiel rigoureux (Ligne, Voie, Point Kilométrique PK et coordonnées géodésiques), permettant de comparer les dérives d’un même tronçon sur plusieurs années.',
          citationId: 4,
        },
        {
          title: 'Calcul lourd multi-passages & Machine Learning',
          desc: 'Filtrage statistique et suivi de déformation sur Databricks (projet STC) et pipeline d’entraînement de vision par ordinateur sur AWS SageMaker (projet Olexya).',
          citationId: 16,
        },
        {
          title: 'Souveraineté des données & conformité réglementaire',
          desc: 'Débat autour de la loi SREN (article 31) et qualification SecNumCloud pour les données stratégiques de transport public ; offres de cloud de confiance françaises (ex. Thales et Google Cloud).',
          citationId: 11,
        },
      ],
    },
    {
      id: 'ia' as const,
      name: 'Intelligence Artificielle',
      tagline: 'Vision par ordinateur & supervision human-in-the-loop',
      color: '#C084FC',
      accentBg: 'bg-purple-500/10',
      borderColor: 'border-purple-500/40',
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      summary: 'Anticiper les déformations de rails et assister les experts sans jamais remplacer la décision humaine.',
      keyMetrics: [
        { label: 'Précision diagnostic pannes', value: '95 %', citationId: 24 },
        { label: 'Utilisateurs AIDO potentiels', value: '2 200 agents', citationId: 15 },
        { label: 'Inspections à pied supprimées', value: '8 500 miles', citationId: 13 },
        { label: 'Réduction retards prédictifs', value: '-20 %', citationId: 17, estimation: true },
      ],
      points: [
        {
          title: 'Vision par ordinateur (CNN & YOLO)',
          desc: 'Détection automatisée des défauts de voie (joints isolants collés JIC, attaches manquantes, fissures de surface) via des modèles de deep learning spécialisés comme le système AIDO développé par Eurailscout France.',
          citationId: 15,
        },
        {
          title: 'Gestion du déséquilibre des classes (Class Imbalance)',
          desc: '99,9 % des images ferroviaires étant saines, les modèles sont calibrés avec une priorité absolue au rappel (recall) et enrichis par synthèse de fissures par GAN pour interdire tout faux négatif critique.',
          citationId: 18,
        },
        {
          title: 'Doctrine absolue : « L’IA propose, l’humain décide »',
          desc: 'Validation systématique de chaque alerte par des experts qualifiés en centre de supervision (Derby au Royaume-Uni ou Infrapôle Paris-Nord) avant toute décision de travaux ou modification de limitation de vitesse.',
          citationId: 17,
          estimation: true,
        },
      ],
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab)!;

  return (
    <section id="tni" className="py-16 sm:py-24 bg-[#0B1728] border-b border-slate-800 text-slate-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-sky-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[300px] bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header of Section TNI */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#F5B800] uppercase tracking-wider mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5B800]" />
            <span>Technologies Numériques Innovantes (TNI)</span>
            <span aria-hidden="true">·</span>
            <span>Architecture Système Ferroviaire</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            La Convergence des TNI : IoT, Edge, Cloud et IA
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Dans le cas d'étude C de surveillance des voies ferrées, aucune technologie ne fonctionne en silo. C'est l'articulation coordonnée de l'<strong className="text-sky-300 font-semibold">IoT</strong> (captation), de l'<strong className="text-orange-300 font-semibold">Edge</strong> (filtrage & alerte immédiate), du <strong className="text-blue-300 font-semibold">Cloud</strong> (centralisation & mémoire) et de l'<strong className="text-purple-300 font-semibold">IA</strong> (prédiction & validation humaine) qui rend possible la détection précoce des micro-fissures avant le seuil de rupture.
          </p>
        </div>

        {/* 4 Pillars Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {pillars.map((p) => {
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                style={{
                  borderColor: isActive ? p.color : undefined,
                }}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#152B47] shadow-lg shadow-black/40 ring-1'
                    : 'bg-[#102035] border-slate-700/80 hover:bg-[#132640] hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-slate-800/80">{p.icon}</div>
                  <span
                    style={{ color: p.color }}
                    className="text-xs font-mono font-bold uppercase tracking-wider"
                  >
                    Pilier 0{pillars.indexOf(p) + 1}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-base text-white">{p.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">{p.tagline}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed View */}
        <div className="bg-[#102035] border border-slate-700 rounded-2xl p-6 sm:p-8 mb-16 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-700/80 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                {currentPillar.icon}
              </div>
              <div>
                <span
                  style={{ color: currentPillar.color }}
                  className="text-xs font-mono font-bold uppercase tracking-wider"
                >
                  TNI Pilier · {currentPillar.name}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                  {currentPillar.tagline}
                </h3>
              </div>
            </div>

            <div className="text-xs text-slate-400 max-w-md">
              {currentPillar.summary}
            </div>
          </div>

          {/* Key figures strip for the active pillar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {currentPillar.keyMetrics.map((km, idx) => (
              <div key={idx} className="bg-[#0B1728] border border-slate-800 p-3.5 rounded-xl">
                <div className="text-[11px] font-mono text-slate-400 truncate mb-1">
                  {km.label}
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-white flex items-center gap-1.5">
                  <span>{km.value}</span>
                  {km.citationId && (
                    <Citation id={km.citationId} showBadge={km.commercial || km.estimation} />
                  )}
                </div>
                {km.note && <div className="text-[10px] text-slate-500 font-mono mt-0.5">{km.note}</div>}
              </div>
            ))}
          </div>

          {/* Detailed Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentPillar.points.map((pt, idx) => (
              <div key={idx} className="bg-[#0C1A2E] border border-slate-700/70 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      style={{ color: currentPillar.color }}
                      className="font-mono text-xs font-bold"
                    >
                      §{idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white">{pt.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {pt.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px]">Référence source :</span>
                  <Citation id={pt.citationId} showBadge={pt.commercial} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* LE SCHÉMA EXPLICATIF DE SYNTHÈSE TNI À LA FIN                  */}
        {/* -------------------------------------------------------------- */}
        <div className="mt-12 pt-10 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>Schéma Explicatif de Synthèse TNI</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Flux de Convergence & Articulation de Bout en Bout
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Ce schéma synthétise la transmission de l'information, la réduction volumétrique, les temps de réponse et la boucle d'apprentissage entre les 4 technologies.
              </p>
            </div>

            {/* Filtre de scénario pour le schéma */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-1">Mettre en avant :</span>
              <button
                onClick={() => setActiveSchemaFlow('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeSchemaFlow === 'all'
                    ? 'bg-slate-700 text-white font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                Vue globale
              </button>
              <button
                onClick={() => setActiveSchemaFlow('critical')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeSchemaFlow === 'critical'
                    ? 'bg-orange-500/20 text-[#FF6B35] border border-[#FF6B35]/50 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-[#FF6B35]'
                }`}
              >
                Alerte critique (&lt; 10 ms)
              </button>
              <button
                onClick={() => setActiveSchemaFlow('predictive')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeSchemaFlow === 'predictive'
                    ? 'bg-sky-500/20 text-[#4DA3FF] border border-[#4DA3FF]/50 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-[#4DA3FF]'
                }`}
              >
                Dérive géométrique (Cloud)
              </button>
              <button
                onClick={() => setActiveSchemaFlow('learning')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeSchemaFlow === 'learning'
                    ? 'bg-purple-500/20 text-[#C084FC] border border-[#C084FC]/50 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:text-[#C084FC]'
                }`}
              >
                Boucle de retour IA
              </button>
            </div>
          </div>

          {/* Grand schéma interactif vectoriel */}
          <div className="bg-[#081220] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Ligne de flux connectrice principale */}
            <div className="hidden lg:block absolute left-12 right-12 top-[125px] h-1 bg-gradient-to-r from-sky-500 via-orange-500 to-purple-500 opacity-40 z-0" />

            {/* 4 Blocs verticaux principaux */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mb-8">
              {/* Étape 1 : IoT */}
              <div
                className={`bg-[#0F1E33] rounded-xl p-5 border transition-all ${
                  activeSchemaFlow === 'all' || activeSchemaFlow === 'critical' || activeSchemaFlow === 'predictive'
                    ? 'border-sky-500/60 shadow-lg shadow-sky-950/30 ring-1 ring-sky-500/30'
                    : 'border-slate-800 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
                    ÉTAPE 1 · IoT
                  </span>
                  <span className="text-xs font-mono text-slate-400">Physique</span>
                </div>

                <h4 className="text-base font-bold text-white mb-1">Capteurs & Voies</h4>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Génération des signaux bruts en temps continu à chaque passage.
                </p>

                <div className="space-y-2 text-[11px] font-mono bg-[#091524] p-3 rounded-lg border border-slate-800">
                  <div className="flex justify-between text-slate-400">
                    <span>Volumétrie :</span>
                    <span className="text-white font-bold">100 % (brut)</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Débit IRIS 320 :</span>
                    <span className="text-sky-400">60-100 Go/j</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Fibre SURFO :</span>
                    <span className="text-emerald-400">28 000 km</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Temps physique :</span>
                  <span className="font-mono text-sky-400 font-bold">Instantané</span>
                </div>
              </div>

              {/* Étape 2 : Edge */}
              <div
                className={`bg-[#0F1E33] rounded-xl p-5 border transition-all ${
                  activeSchemaFlow === 'all' || activeSchemaFlow === 'critical' || activeSchemaFlow === 'learning'
                    ? 'border-orange-500/60 shadow-lg shadow-orange-950/30 ring-1 ring-orange-500/30'
                    : 'border-slate-800 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-orange-950 text-[#FF6B35] border border-orange-800">
                    ÉTAPE 2 · EDGE
                  </span>
                  <span className="text-xs font-mono text-slate-400">À bord</span>
                </div>

                <h4 className="text-base font-bold text-white mb-1">Filtrage & Alerte</h4>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  L’IA embarquée élimine le bruit, conserve les anomalies et alerte le conducteur.
                </p>

                <div className="space-y-2 text-[11px] font-mono bg-[#091524] p-3 rounded-lg border border-slate-800">
                  <div className="flex justify-between text-slate-400">
                    <span>Réduction flux :</span>
                    <span className="text-[#2EAD6B] font-bold">&gt; 90 % éliminé</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Transmis réseau :</span>
                    <span className="text-orange-400">&lt; 10 % volume</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Alerte cabine :</span>
                    <span className="text-red-400 font-bold">&lt; 10 ms (0,9 m)</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Norme matériel :</span>
                  <span className="font-mono text-orange-400">EN 50155</span>
                </div>
              </div>

              {/* Étape 3 : Cloud */}
              <div
                className={`bg-[#0F1E33] rounded-xl p-5 border transition-all ${
                  activeSchemaFlow === 'all' || activeSchemaFlow === 'predictive' || activeSchemaFlow === 'learning'
                    ? 'border-blue-500/60 shadow-lg shadow-blue-950/30 ring-1 ring-blue-500/30'
                    : 'border-slate-800 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-950 text-[#4DA3FF] border border-blue-800">
                    ÉTAPE 3 · CLOUD
                  </span>
                  <span className="text-xs font-mono text-slate-400">Central</span>
                </div>

                <h4 className="text-base font-bold text-white mb-1">Datalake & Calcul</h4>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Fusion spatiale sur ligne/voie/PK, archivage historique et modélisation Databricks.
                </p>

                <div className="space-y-2 text-[11px] font-mono bg-[#091524] p-3 rounded-lg border border-slate-800">
                  <div className="flex justify-between text-slate-400">
                    <span>Mémoire réseau :</span>
                    <span className="text-white font-bold">80 To · 20 ans</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Télédiagnostic :</span>
                    <span className="text-blue-400">1 100 trains</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Variables train :</span>
                    <span className="text-purple-400">8 000 / rame</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Infrastructure :</span>
                  <span className="font-mono text-[#4DA3FF]">AWS / Databricks</span>
                </div>
              </div>

              {/* Étape 4 : IA & Humain */}
              <div
                className={`bg-[#0F1E33] rounded-xl p-5 border transition-all ${
                  activeSchemaFlow === 'all' || activeSchemaFlow === 'predictive' || activeSchemaFlow === 'learning'
                    ? 'border-purple-500/60 shadow-lg shadow-purple-950/30 ring-1 ring-purple-500/30'
                    : 'border-slate-800 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-purple-950 text-[#C084FC] border border-purple-800">
                    ÉTAPE 4 · IA & HUMAIN
                  </span>
                  <span className="text-xs font-mono text-slate-400">Décision</span>
                </div>

                <h4 className="text-base font-bold text-white mb-1">Validation & Travaux</h4>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  L'expert confirme, l'Infrapôle planifie et les agents interviennent au PK ciblé.
                </p>

                <div className="space-y-2 text-[11px] font-mono bg-[#091524] p-3 rounded-lg border border-slate-800">
                  <div className="flex justify-between text-slate-400">
                    <span>Règle d'or :</span>
                    <span className="text-[#F5B800] font-bold">Human-in-the-loop</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Centres experts :</span>
                    <span className="text-white">Derby / Infrapôle</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Baisse incidents :</span>
                    <span className="text-emerald-400 font-bold">-30 % aiguillages</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Impact sécurité :</span>
                  <span className="font-mono text-emerald-400">Zéro déraillement</span>
                </div>
              </div>
            </div>

            {/* Boucle de rétroaction IA réentraînée (Cloud -> Edge) */}
            <div className="bg-[#0C1A2E] border border-purple-500/30 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3 text-slate-300">
                <RotateCcw className="w-5 h-5 text-purple-400 shrink-0 animate-spin-slow" />
                <div>
                  <strong className="text-white">Boucle d'amélioration continue (Cloud ➔ Edge) :</strong> Les défauts validés par les experts sur le terrain réentraînent les algorithmes sur AWS SageMaker, puis les versions mises à jour des modèles sont redéployées dans les calculateurs embarqués des trains.
                </div>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-purple-300 bg-purple-950/60 px-3 py-1.5 rounded-lg border border-purple-800 shrink-0">
                <span>Modèle v1 ➔ v2 déployé</span>
                <Citation id={16} />
              </div>
            </div>

            {/* Tableau récapitulatif des flux TNI */}
            <div className="mt-6 pt-5 border-t border-slate-800 text-xs">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                Synthèse des flux de convergence TNI :
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-300">
                <div className="bg-[#091524] p-3 rounded-lg border border-slate-800">
                  <span className="text-sky-400 font-semibold block mb-0.5">1. Du rail à l’écran de bord :</span>
                  Acquisition physique IoT brute ➔ traitement Edge en &lt; 10 ms ➔ alerte sonore et visuelle immédiate en cabine.
                </div>
                <div className="bg-[#091524] p-3 rounded-lg border border-slate-800">
                  <span className="text-[#4DA3FF] font-semibold block mb-0.5">2. Du train au Datalake :</span>
                  Transmission sécurisée des métadonnées filtrées (&lt; 10 %) en 4G/5G ➔ centralisation nationale ➔ analyse multi-passages sur Databricks.
                </div>
                <div className="bg-[#091524] p-3 rounded-lg border border-slate-800">
                  <span className="text-purple-400 font-semibold block mb-0.5">3. Du modèle au geste métier :</span>
                  L'IA signale un risque prédictif ➔ un expert confirme ➔ les agents réparent au PK exact, évitant les tournées à pied dangereuses.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

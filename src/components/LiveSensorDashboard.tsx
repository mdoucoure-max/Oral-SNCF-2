import React, { useState, useEffect } from 'react';
import { Citation } from './Citation';
import {
  Activity,
  Thermometer,
  Zap,
  Gauge,
  AlertTriangle,
  CheckCircle,
  Play,
  RotateCcw,
} from 'lucide-react';

interface TrackPreset {
  id: string;
  name: string;
  speed: number;
  temp: number;
  airTemp: number;
  vib: number;
  freq: number;
  wear: number;
  stress: number;
  status: 'nominal' | 'warning' | 'critical';
  statusText: string;
  actionText: string;
}

const PRESETS: TrackPreset[] = [
  {
    id: 'lgv-sud-est',
    name: 'LGV Sud-Est · PK 142.8 (320 km/h)',
    speed: 320,
    temp: 34.8,
    airTemp: 24.2,
    vib: 0.38,
    freq: 18,
    wear: 0.14,
    stress: 42,
    status: 'nominal',
    statusText: 'Nominal · Aucun risque géométrique détecté',
    actionText: 'Surveillance continue · Moins de 10 % des données transmises',
  },
  {
    id: 'classic-line',
    name: 'Ligne classique · Région Centre (140 km/h)',
    speed: 140,
    temp: 28.5,
    airTemp: 21.0,
    vib: 0.82,
    freq: 24,
    wear: 0.45,
    stress: 58,
    status: 'nominal',
    statusText: 'Nominal · Géométrie conforme aux cotes de sécurité',
    actionText: 'Agrégation multi-passages en cours vers Databricks',
  },
  {
    id: 'heatwave',
    name: 'Canicule estivale · Vallée du Rhône (54.5 °C rail)',
    speed: 220,
    temp: 54.5,
    airTemp: 38.6,
    vib: 1.15,
    freq: 32,
    wear: 0.88,
    stress: 84,
    status: 'warning',
    statusText: 'Alerte préventive · Risque de dilatation thermique des rails',
    actionText: 'Vitesse abaissée à 220 km/h · Inspection AIDO programmée',
  },
  {
    id: 'defect-sim',
    name: 'Simulation défaut critique · Micro-fissure JIC détectée',
    speed: 300,
    temp: 36.2,
    airTemp: 25.1,
    vib: 2.74,
    freq: 68,
    wear: 2.10,
    stress: 94,
    status: 'critical',
    statusText: 'Seuil critique détecté · Déclenchement alerte en cabine < 10 ms',
    actionText: 'Transmission priorité absolue au centre d’expertise Infrapôle',
  },
];

export const LiveSensorDashboard: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('lgv-sud-est');
  const [currentPreset, setCurrentPreset] = useState<TrackPreset>(PRESETS[0]);
  const [tick, setTick] = useState<number>(0);

  useEffect(() => {
    const found = PRESETS.find((p) => p.id === selectedPresetId);
    if (found) setCurrentPreset(found);
  }, [selectedPresetId]);

  // Subtle live vibration fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const waveOffset = Math.sin(tick) * 2;

  return (
    <section id="dashboard-sensor" className="py-14 bg-[#091524] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#102035] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-700/80">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#F5B800] uppercase tracking-wider mb-1">
                <Activity className="w-4 h-4 text-[#F5B800] animate-pulse" />
                <span>Module télémétrique inspiré de L'Écho Ferroviaire</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Direct Capteurs & Télémétrie Voie
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Simulation en direct des flux physiques acquis par les rames de surveillance (température, vibrations triaxiales, usure).
              </p>
            </div>

            {/* Sélecteur de scénario */}
            <div className="flex items-center gap-2">
              <label htmlFor="track-preset-select" className="text-xs font-mono text-slate-400 whitespace-nowrap">
                Scénario :
              </label>
              <select
                id="track-preset-select"
                value={selectedPresetId}
                onChange={(e) => setSelectedPresetId(e.target.value)}
                className="bg-[#0B1728] border border-slate-700 text-white text-xs rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-[#F5B800] focus:outline-none"
              >
                {PRESETS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bannière de statut dynamique */}
          <div
            className={`my-6 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors ${
              currentPreset.status === 'nominal'
                ? 'bg-emerald-950/60 border border-emerald-600/40'
                : currentPreset.status === 'warning'
                ? 'bg-amber-950/60 border border-amber-600/40'
                : 'bg-red-950/70 border border-red-500/60 animate-pulse'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                  currentPreset.status === 'nominal'
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : currentPreset.status === 'warning'
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {currentPreset.status === 'nominal' ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertTriangle className="w-5 h-5" />
                )}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{currentPreset.statusText}</div>
                <div className="text-xs text-slate-300">{currentPreset.actionText}</div>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-300 bg-slate-900/60 px-3 py-1.5 rounded border border-slate-700/60 shrink-0">
              Vitesse : <strong className="text-white">{currentPreset.speed} km/h</strong>
            </div>
          </div>

          {/* Grille des 3 métriques capteurs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Jauge 1 : Température du rail */}
            <div className="bg-[#0B1728] border border-slate-700/80 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
                  <Thermometer className="w-4 h-4 text-orange-400" />
                  <span>Température du rail</span>
                </span>
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    currentPreset.temp > 50
                      ? 'bg-red-950 text-red-300 border border-red-700'
                      : 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                  }`}
                >
                  {currentPreset.temp > 50 ? 'DILATATION' : 'NOMINAL'}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums my-1">
                {currentPreset.temp} <span className="text-lg font-sans text-slate-400">°C</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400 mb-3">
                Air ambiant : {currentPreset.airTemp} °C (Delta : +{(currentPreset.temp - currentPreset.airTemp).toFixed(1)}°C)
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    currentPreset.temp > 50 ? 'bg-red-500' : 'bg-emerald-500'
                  }`}
                  style={{ width: `${Math.min((currentPreset.temp / 65) * 100, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>0 °C</span>
                <span>Seuil critique canicule : 55 °C</span>
              </div>
            </div>

            {/* Jauge 2 : Vibrations accélérométriques */}
            <div className="bg-[#0B1728] border border-slate-700/80 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-sky-400" />
                  <span>Vibrations triaxiales (Z)</span>
                </span>
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    currentPreset.vib > 2.0
                      ? 'bg-red-950 text-red-300 border border-red-700'
                      : currentPreset.vib > 1.0
                      ? 'bg-amber-950 text-amber-300 border border-amber-700'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {currentPreset.freq} Hz
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums my-1">
                {currentPreset.vib} <span className="text-lg font-sans text-slate-400">g</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400 mb-2">
                Accéléromètre piézoélectrique essieu IRIS 320 <Citation id={3} />
              </div>

              {/* Dynamic waveform SVG */}
              <div className="h-7 w-full bg-slate-900/60 rounded px-1 flex items-center">
                <svg className="w-full h-5 text-sky-400" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path
                    d={`M0 10 Q10 ${10 - currentPreset.vib * 3 + waveOffset} 20 10 T40 ${10 + currentPreset.vib * 3} T60 10 T80 ${10 - currentPreset.vib * 3} T100 10`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  />
                </svg>
              </div>
            </div>

            {/* Jauge 3 : Profil d'usure tête de rail */}
            <div className="bg-[#0B1728] border border-slate-700/80 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
                  <Gauge className="w-4 h-4 text-purple-400" />
                  <span>Profil d'usure tête de rail</span>
                </span>
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    currentPreset.wear > 1.5
                      ? 'bg-red-950 text-red-300 border border-red-700'
                      : 'bg-purple-950 text-purple-300 border border-purple-700'
                  }`}
                >
                  {currentPreset.stress} % charge
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums my-1">
                {currentPreset.wear} <span className="text-lg font-sans text-slate-400">mm</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400 mb-3">
                Mesure laser optique triangulée / 12 mm max admissible
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    currentPreset.wear > 1.5 ? 'bg-red-500' : 'bg-purple-500'
                  }`}
                  style={{ width: `${Math.min((currentPreset.wear / 3.0) * 100, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>0 mm (neuf)</span>
                <span>Seuil de meulage prédictif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

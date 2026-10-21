import React, { useState } from 'react';
import { Citation } from './Citation';
import { AlertTriangle, CheckCircle, RefreshCw, HelpCircle, Eye } from 'lucide-react';

export const DemoBiais: React.FC = () => {
  const [metricMode, setMetricMode] = useState<'accuracy' | 'recall'>('accuracy');
  const [modelType, setModelType] = useState<'naive' | 'trained'>('naive');

  // Données de l'exemple fictif imposé par le prompt :
  // 1 000 images totales : 10 défauts réels, 990 voies saines
  const totalImages = 1000;
  const actualDefects = 10;
  const actualHealthy = 990;

  // Modèle 1 : Naïf (prédit toujours "Sain")
  // Prédit 0 défaut -> 0 Vrais Positifs, 10 Faux Négatifs, 990 Vrais Négatifs, 0 Faux Positifs
  const naiveStats = {
    tp: 0,
    fn: 10,
    tn: 990,
    fp: 0,
    accuracy: 99.0, // (990 / 1000) * 100
    recall: 0.0,    // (0 / 10) * 100
  };

  // Modèle 2 : Entraîné avec priorité au rappel (seuil prudent + suréchantillonnage)
  // Détecte 9 défauts sur 10, 1 raté (FN), génère 20 fausses alertes (FP) qui seront vérifiées par l'expert humain
  const trainedStats = {
    tp: 9,
    fn: 1,
    tn: 970,
    fp: 20,
    accuracy: 97.9, // (979 / 1000) * 100
    recall: 90.0,   // (9 / 10) * 100
  };

  const currentStats = modelType === 'naive' ? naiveStats : trainedStats;

  return (
    <div className="bg-[#12233B] border border-purple-500/40 rounded-2xl p-6 sm:p-8 shadow-xl">
      {/* Header Démo */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-700/80 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#9B7BFF] uppercase tracking-wider mb-1">
            <span className="w-2 h-2 rounded-full bg-[#9B7BFF]" />
            <span>Démonstrateur de risque algorithmique</span>
            <span className="text-amber-400 font-bold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
              Exemple fictif pédagogique
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Le piège de la précision globale vs le rappel
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Sur les rails, 99,9 % des images sont saines. Un modèle aveugle qui dit « tout va bien » obtient une note scolaire de 99 %, tout en laissant passer les fissures mortelles.
          </p>
        </div>

        {/* Bouton Changer de métrique */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          <button
            onClick={() => setMetricMode(metricMode === 'accuracy' ? 'recall' : 'accuracy')}
            className="w-full sm:w-auto px-4 py-2.5 bg-[#9B7BFF] hover:bg-[#8660f7] text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Changer de métrique (actuel : {metricMode === 'accuracy' ? 'Précision globale' : 'Rappel'})</span>
          </button>
          <span className="text-[11px] font-mono text-slate-400">
            Cliquez pour basculer la métrique
          </span>
        </div>
      </div>

      {/* Sélecteur de modèle */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="text-xs font-mono text-slate-300">Sélectionner l'algorithme :</span>
        <button
          onClick={() => setModelType('naive')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
            modelType === 'naive'
              ? 'bg-slate-800 text-[#F5B800] border-[#F5B800] shadow-sm'
              : 'bg-slate-900/60 text-slate-400 border-slate-700 hover:text-white'
          }`}
        >
          Modèle naïf (« Répond toujours Sain »)
        </button>
        <button
          onClick={() => setModelType('trained')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
            modelType === 'trained'
              ? 'bg-slate-800 text-[#2EAD6B] border-[#2EAD6B] shadow-sm'
              : 'bg-slate-900/60 text-slate-400 border-slate-700 hover:text-white'
          }`}
        >
          Modèle entraîné & sécurisé (Priorité au Rappel)
        </button>
      </div>

      {/* Affichage de la métrique active */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Panneau de la métrique choisie */}
        <div
          className={`rounded-xl p-6 border transition-all ${
            metricMode === 'accuracy'
              ? 'bg-[#14233c] border-[#4DA3FF]/50'
              : 'bg-[#1b1c3d] border-[#9B7BFF]/70'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider mb-2">
            <span className={metricMode === 'accuracy' ? 'text-[#4DA3FF]' : 'text-[#9B7BFF]'}>
              {metricMode === 'accuracy' ? 'Métrique 1 : Précision globale (Accuracy)' : 'Métrique 2 : Rappel (Recall / Sensibilité)'}
            </span>
            <span className="text-[11px] text-slate-400">
              {metricMode === 'accuracy' ? '(VN + VP) / Total' : 'VP / Total défauts réels'}
            </span>
          </div>

          <div className="flex items-baseline gap-3 mb-2">
            <span
              className={`text-4xl sm:text-5xl font-extrabold font-mono tabular-nums ${
                metricMode === 'accuracy'
                  ? modelType === 'naive' ? 'text-amber-300' : 'text-[#4DA3FF]'
                  : modelType === 'naive' ? 'text-red-400' : 'text-[#2EAD6B]'
              }`}
            >
              {metricMode === 'accuracy' ? `${currentStats.accuracy.toFixed(1)} %` : `${currentStats.recall.toFixed(1)} %`}
            </span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium">
              {metricMode === 'accuracy'
                ? modelType === 'naive' ? 'Trompeur ! (« Tout semble parfait »)' : 'Excellente exactitude globale'
                : modelType === 'naive' ? 'CATASTROPHIQUE (0 défaut détecté !)' : '9 défauts sur 10 interceptés'}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {metricMode === 'accuracy' ? (
              <span>
                La précision globale compte tous les rails sains (990/1000). Le modèle naïf affiche un score impressionnant de <strong className="text-white">99 %</strong> alors qu'il n'a trouvé <strong className="text-red-400">aucun des 10 défauts réels</strong>.
              </span>
            ) : (
              <span>
                Le rappel mesure la proportion de réels défauts interceptés. Pour le modèle naïf, le rappel est de <strong className="text-red-400">0 %</strong>. C'est pourquoi en sécurité ferroviaire, on optimise exclusivement le <strong className="text-white">rappel</strong> <Citation id={18} />.
              </span>
            )}
          </p>
        </div>

        {/* Bilan sécurité opérationnelle */}
        <div className="bg-[#0C1A2E] border border-slate-700 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono uppercase text-slate-400 mb-2">Conséquence sur la sécurité du réseau</div>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Défauts critiques interceptés :</span>
                <span className="font-mono font-bold text-white">{currentStats.tp} / 10</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-slate-400">Fissures ratées (Faux négatifs) :</span>
                <span className={`font-mono font-bold ${currentStats.fn > 0 ? 'text-red-400' : 'text-[#2EAD6B]'}`}>
                  {currentStats.fn} fissure(s) non signalée(s) !
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Fausses alertes à vérifier par l'expert :</span>
                <span className="font-mono text-slate-300">{currentStats.fp} images</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-700/60 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-lg">
            <strong className="text-[#F5B800]">Stratégie ferroviaire :</strong> Mieux vaut 20 faux positifs analysés en quelques secondes par un expert à Derby ou l'Infrapôle qu'un seul faux négatif entraînant un déraillement <Citation id={17} />.
          </div>
        </div>
      </div>

      {/* Matrice de confusion 2x2 interactive */}
      <div>
        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
          <span>Matrice de confusion détaillée sur 1 000 images :</span>
          <span className="text-[11px] text-slate-400 font-normal">Échantillon fictif</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          {/* Vrais Positifs */}
          <div className="bg-[#0B1A28] border border-emerald-500/40 rounded-xl p-3.5">
            <div className="text-[11px] font-mono uppercase text-[#2EAD6B] font-bold">Vrais Positifs (VP)</div>
            <div className="text-2xl font-bold font-mono text-white my-1">{currentStats.tp}</div>
            <div className="text-[11px] text-slate-400">Fissures réelles détectées</div>
          </div>

          {/* Faux Négatifs (DANGER) */}
          <div className="bg-[#241016] border border-red-500/50 rounded-xl p-3.5 ring-1 ring-red-500/30">
            <div className="text-[11px] font-mono uppercase text-red-400 font-bold flex items-center justify-center gap-1">
              <AlertTriangle className="w-3 h-3 text-red-400" />
              <span>Faux Négatifs (FN)</span>
            </div>
            <div className="text-2xl font-bold font-mono text-red-400 my-1">{currentStats.fn}</div>
            <div className="text-[11px] text-red-300/80 font-semibold">Danger critique sur la voie !</div>
          </div>

          {/* Vrais Négatifs */}
          <div className="bg-[#0B1A28] border border-slate-700 rounded-xl p-3.5">
            <div className="text-[11px] font-mono uppercase text-slate-400 font-bold">Vrais Négatifs (VN)</div>
            <div className="text-2xl font-bold font-mono text-white my-1">{currentStats.tn}</div>
            <div className="text-[11px] text-slate-400">Rails sains bien reconnus</div>
          </div>

          {/* Faux Positifs */}
          <div className="bg-[#19192c] border border-purple-500/40 rounded-xl p-3.5">
            <div className="text-[11px] font-mono uppercase text-[#9B7BFF] font-bold">Faux Positifs (FP)</div>
            <div className="text-2xl font-bold font-mono text-white my-1">{currentStats.fp}</div>
            <div className="text-[11px] text-slate-400">Triés par l'expert humain</div>
          </div>
        </div>
      </div>
    </div>
  );
};

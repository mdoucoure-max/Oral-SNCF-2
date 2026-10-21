import React from 'react';
import { Citation } from './Citation';
import { Cloud, Database, Cpu, Share2, Server, ShieldAlert, ArrowRight, HardDrive, CheckCircle2 } from 'lucide-react';

export const OngletCloud: React.FC = () => {
  return (
    <section id="cloud" className="py-16 sm:py-20 bg-[#0F1E33] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Sprint */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#4DA3FF] uppercase tracking-wider mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4DA3FF]" />
            <span>Sprint 1 · Cloud Computing</span>
            <span aria-hidden="true">·</span>
            <span>Cas C : Détection des défauts de voies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Le Cloud : Centraliser, calculer, exposer
          </h2>
          <p className="text-base text-slate-300 mt-2 max-w-3xl">
            L'architecture est hybride Edge + Cloud : la détection immédiate se fait à bord du train, tandis que le Cloud intervient en temps différé pour l'analyse globale, la mémoire du réseau et l'exposition aux équipes.
          </p>
        </div>

        {/* 1.1 Rôle précis du Cloud - 3 cartes */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <span className="text-[#4DA3FF] font-semibold">1.1</span>
            <span>Le rôle précis du Cloud (3 piliers fondamentaux)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Carte 1 : Centraliser */}
            <div className="bg-[#132642] border border-[#4DA3FF]/30 rounded-xl p-6 relative overflow-hidden group hover:border-[#4DA3FF]/70 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#4DA3FF]/10 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-lg bg-[#4DA3FF]/15 flex items-center justify-center mb-5 text-[#4DA3FF]">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
                <span>CENTRALISER</span>
                <span className="text-xs font-mono text-slate-400">Socle</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Réunir les mesures de tous les vecteurs dans un référentiel unique (ligne, voie, point kilométrique PK) et les archiver : la véritable « mémoire » du réseau.
              </p>
              <div className="pt-4 border-t border-slate-700/60 bg-[#0C1A2E]/60 -mx-6 -mb-6 p-4 text-xs text-slate-300">
                <span className="text-[#4DA3FF] font-semibold block mb-1">Preuve / Source :</span>
                IRIS 320 : serveur national de <strong className="text-white">80 To</strong>, avec <strong className="text-white">20 ans d'archives</strong> <Citation id={3} />
              </div>
            </div>

            {/* Carte 2 : Calculer */}
            <div className="bg-[#132642] border border-[#4DA3FF]/30 rounded-xl p-6 relative overflow-hidden group hover:border-[#4DA3FF]/70 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#4DA3FF]/10 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-lg bg-[#4DA3FF]/15 flex items-center justify-center mb-5 text-[#4DA3FF]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
                <span>CALCULER</span>
                <span className="text-xs font-mono text-slate-400">Analytique</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Comparer de nombreux passages, valider statistiquement, suivre l'évolution des défauts (maintenance prédictive) et entraîner les modèles d'IA.
              </p>
              <div className="pt-4 border-t border-slate-700/60 bg-[#0C1A2E]/60 -mx-6 -mb-6 p-4 text-xs text-slate-300">
                <span className="text-[#4DA3FF] font-semibold block mb-1">Preuve / Source :</span>
                Projet STC sur Databricks <Citation id={4} /> ; modèles de vision entraînés sur AWS SageMaker <Citation id={16} />
              </div>
            </div>

            {/* Carte 3 : Exposer */}
            <div className="bg-[#132642] border border-[#4DA3FF]/30 rounded-xl p-6 relative overflow-hidden group hover:border-[#4DA3FF]/70 transition-colors">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#4DA3FF]/10 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-lg bg-[#4DA3FF]/15 flex items-center justify-center mb-5 text-[#4DA3FF]">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
                <span>EXPOSER (API)</span>
                <span className="text-xs font-mono text-slate-400">Diffusion</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Diffuser les alertes et l'historique vers les outils de maintenance, les tableaux de bord et les applications mobiles des agents de terrain.
              </p>
              <div className="pt-4 border-t border-slate-700/60 bg-[#0C1A2E]/60 -mx-6 -mb-6 p-4 text-xs text-slate-300">
                <span className="text-[#4DA3FF] font-semibold block mb-1">Preuve / Source :</span>
                Programme Surveillance & Supervision de SNCF Réseau <Citation id={6} />
              </div>
            </div>
          </div>

          {/* Cadre Cloud du groupe */}
          <div className="mt-6 bg-[#0E1F36] border border-slate-700 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Server className="w-5 h-5 text-[#4DA3FF] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">Cadre Cloud du groupe :</strong> SNCF Réseau a commencé à migrer vers AWS en 2018 <Citation id={8} /> ; objectif : <strong className="text-[#4DA3FF] font-mono">90 %</strong> des actifs applicatifs, avec des économies attendues de « plusieurs dizaines de millions d'euros par an » <Citation id={9} />.
              </div>
            </div>
          </div>
        </div>

        {/* 1.2 Deux sources réelles */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <span className="text-[#4DA3FF] font-semibold">1.2</span>
            <span>Deux sources réelles (auteur + date)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#132642] border border-slate-700 rounded-xl p-6">
              <div className="text-xs font-mono text-[#4DA3FF] uppercase mb-1">Source 1 : Article Tech SNCF</div>
              <h4 className="text-base font-bold text-white mb-2">
                Lélia De Matharel, Journal du Net (18 mai 2017) <Citation id={1} />
              </h4>
              <p className="text-xs text-slate-400 italic mb-4">
                « SNCF Réseau économisera 100 millions d'euros d'ici 2020 en partie grâce à l'IoT »
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#4DA3FF] font-bold">•</span>
                  <span>IRIS 320 : capteurs + IA d'analyse d'images, réseau couvert environ tous les 15 jours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4DA3FF] font-bold">•</span>
                  <span>Aiguillages LGV Sud-Est : <strong>-30 % d'incidents</strong> après la pose de capteurs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4DA3FF] font-bold">•</span>
                  <span>400 personnes dans 50 équipes IoT ; plan numérique global de 900 M€ sur 3 ans.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#132642] border border-slate-700 rounded-xl p-6">
              <div className="text-xs font-mono text-[#4DA3FF] uppercase mb-1">Source 2 : Prédiction Gartner</div>
              <h4 className="text-base font-bold text-white mb-2">
                Santhosh Rao (Gartner), cité par Schneider Electric (30 sept. 2019) <Citation id={2} />
              </h4>
              <p className="text-xs text-slate-400 italic mb-4">
                Prédiction de Santhosh Rao (senior research director, Gartner), relayée par Vincenzo Salmeri
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#4DA3FF] font-bold">•</span>
                  <span>D'ici 2025, <strong>75 % des données d'entreprise</strong> créées et traitées hors data center centralisé ou Cloud, contre environ 10 % auparavant.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span className="text-slate-300">
                    <strong className="text-amber-300">Limite méthodologique :</strong> source secondaire ; à citer expressément comme « Gartner, cité par Schneider Electric ».
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Éclairage Presse Récente TNI (2024-2026) */}
          <div className="mt-6 bg-[#0E1F36] border border-[#4DA3FF]/40 rounded-xl p-5 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-700/80">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-sky-950 text-[#4DA3FF] border border-[#4DA3FF]/40">
                  Presse Récente TNI (2024-2026)
                </span>
                <h4 className="text-sm font-bold text-white">
                  L'Usine Digitale : Industrialisation du Cloud et du télédiagnostic ferroviaire
                </h4>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span>Mai 2024</span>
                <Citation id={24} />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Selon l'enquête de <em>L'Usine Digitale</em> consacrée aux TNI de maintenance prédictive, la SNCF surveille désormais en continu plus de <strong className="text-white font-mono">1 100 trains</strong> et analyse jusqu'à <strong className="text-white font-mono">8 000 variables par rame</strong> (dont <strong className="text-[#4DA3FF] font-mono">2 000 en temps réel</strong>), avec un taux de précision diagnostique de <strong className="text-[#2EAD6B] font-mono">95 %</strong>. Le Cloud centralise ce flux massif pour l'analytique et l'historique de santé du matériel roulant et de l'infrastructure <Citation id={24} /> <Citation id={7} />.
            </p>
          </div>
        </div>

        {/* 1.3 Données envoyées au Cloud vs gardées en local */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[#4DA3FF] font-semibold">1.3</span>
              <span>Données envoyées au Cloud vs gardées en local</span>
            </div>
            <div className="text-xs font-mono text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2.5 py-1 rounded-md">
              Moins de 10 % des données collectées sont transmises <span className="text-amber-400/90 font-mono">(source commerciale)</span> <Citation id={5} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gardé en local */}
            <div className="bg-[#152336] border border-[#FF6B35]/40 rounded-xl p-5 sm:p-6">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#FF6B35]/30">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF6B35]" />
                  <h4 className="text-base font-bold text-white">GARDÉ EN LOCAL (Edge)</h4>
                </div>
                <span className="text-xs font-mono text-[#FF6B35]">&gt; 90 % du flux brut éliminé</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] font-bold">✕</span>
                  <span>Flux vidéo bruts des caméras linéaires</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] font-bold">✕</span>
                  <span>Mesures laser et géométriques brutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] font-bold">✕</span>
                  <span>Vibrations haute fréquence (accéléromètres)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] font-bold">✕</span>
                  <span>Signaux bruts de la fibre optique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2EAD6B] font-bold">✓</span>
                  <span>Calcul de l'IA en temps réel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] font-bold">✓</span>
                  <span>Alerte immédiate en cas de défaut critique</span>
                </li>
              </ul>
            </div>

            {/* Envoyé au Cloud */}
            <div className="bg-[#122642] border border-[#4DA3FF]/40 rounded-xl p-5 sm:p-6">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#4DA3FF]/30">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#4DA3FF]" />
                  <h4 className="text-base font-bold text-white">ENVOYÉ AU CLOUD</h4>
                </div>
                <span className="text-xs font-mono text-[#4DA3FF]">&lt; 10 % du volume transmis <Citation id={5} /></span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4DA3FF] shrink-0 mt-0.5" />
                  <span>Défauts détectés : type, gravité (normal / urgent / critique), position (ligne, voie, PK, GPS), date</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4DA3FF] shrink-0 mt-0.5" />
                  <span>Indicateurs de géométrie agrégés</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4DA3FF] shrink-0 mt-0.5" />
                  <span>Extraits d'images des défauts*</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4DA3FF] shrink-0 mt-0.5" />
                  <span>Informations de passage (train, vitesse)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4DA3FF] shrink-0 mt-0.5" />
                  <span>Historique multi-passages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9B7BFF] shrink-0 mt-0.5" />
                  <span>Retour du Cloud vers le train : modèles d'IA mis à jour*</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-3 text-[11px] text-slate-400 italic">
            * Choix d'architecture courants, non décrits explicitement par SNCF dans les sources consultées.
          </div>
        </div>

        {/* 1.4 Freins documentés */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <span className="text-[#4DA3FF] font-semibold">1.4</span>
            <span>Freins documentés : Technique & Souveraineté</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frein 1 : Latence et bande passante */}
            <div className="bg-[#132642] border border-slate-700/80 rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-2.5 text-white font-bold mb-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-mono text-sm">
                  01
                </div>
                <span>Frein principal : Latence et bande passante</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                IRIS 320 produit <strong className="text-white">60 à 100 Go/jour</strong> : les résultats sont évalués à bord puis transmis par réseau mobile « avec un léger décalage » <Citation id={3} />.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                La tendance Gartner confirmée par Schneider Electric (75 % des données d'entreprise traitées hors Cloud d'ici 2025) reflète cette impossibilité physique d'envoyer tous les flux vidéo bruts en continu <Citation id={2} />.
              </p>
            </div>

            {/* Frein 2 : Souveraineté */}
            <div className="bg-[#132642] border border-slate-700/80 rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-2.5 text-white font-bold mb-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-[#4DA3FF] flex items-center justify-center font-mono text-sm">
                  02
                </div>
                <span>Frein secondaire : Souveraineté et conformité</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                En 2022, le passage de SNCF Connect sur AWS a fait l'objet de vives critiques au nom du RGPD et du droit américain extraterritorial (Cloud Act). SNCF répondait que <strong className="text-white">7 000 serveurs sur plus de 35 000</strong> étaient concernés <Citation id={10} />.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                La loi SREN (art. 31, décret du 14 avril 2026) impose un cloud qualifié SecNumCloud pour les données sensibles de l'État et de ses opérateurs <Citation id={11} /> (application à SNCF non confirmée). Des offres « de confiance » émergent sur le marché français (coentreprise Thales et Google Cloud en 2021) <Citation id={12} />.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

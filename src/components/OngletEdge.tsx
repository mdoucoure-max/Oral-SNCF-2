import React from 'react';
import { Citation } from './Citation';
import { CalculateurLatence } from './CalculateurLatence';
import {
  Cpu,
  Clock,
  WifiOff,
  HardDrive,
  Shield,
  Layers,
  CheckCircle,
  HelpCircle,
  AlertCircle,
  ArrowRight,
  TrendingDown,
  Building,
} from 'lucide-react';

export const OngletEdge: React.FC = () => {
  const stepsArticulation = [
    {
      num: 1,
      title: 'Mesure',
      where: 'Edge (train)',
      desc: 'Caméras, lasers, accéléromètres captent le rail en continu (jusqu’à 1 image tous les 0,8 mm sur PLPR).',
      citationId: 13,
    },
    {
      num: 2,
      title: 'Détection et tri',
      where: 'Edge (train)',
      desc: 'L’IA embarquée repère les défauts potentiels, classe leur gravité (normal, urgent, critique) et jette le flux vidéo inutile.',
      citationId: 5,
      commercial: true,
    },
    {
      num: 3,
      title: 'Transmission',
      where: 'Réseau (4G / 5G)',
      desc: 'Seuls les défauts géolocalisés partent, en 4G/5G ou en différé si coupure (IRIS : transmission « avec un léger décalage »).',
      citationId: 3,
    },
    {
      num: 4,
      title: 'Centralisation & recoupement',
      where: 'Cloud',
      desc: 'Comparaison avec les passages précédents, fusion multi-capteurs et corrélation avec la base des équipements.',
      citationId: 4,
    },
    {
      num: 5,
      title: 'Validation humaine',
      where: 'Centre d’expertise',
      desc: 'Des experts confirment ou rejettent les défauts potentiels avant tout envoi aux chefs de secteur.',
      citationId: 13,
    },
    {
      num: 6,
      title: 'Réentraînement & déploiement',
      where: 'Cloud ➔ Edge',
      desc: 'Les défauts validés servent à réentraîner les modèles (AWS SageMaker chez SNCF Réseau), redéployés ensuite dans les trains*.',
      citationId: 16,
    },
  ];

  return (
    <section id="edge" className="py-16 sm:py-20 bg-[#0B1728] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Sprint */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35] uppercase tracking-wider mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
            <span>Sprint 2 · Edge Computing</span>
            <span aria-hidden="true">·</span>
            <span>Cas C : Détection des défauts de voies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            L'Edge : Décider dans le train, au plus près du rail
          </h2>
          <p className="text-base text-slate-300 mt-2 max-w-3xl">
            L'Edge Computing n'est pas une simple commodité : c'est un impératif physique dicté par la vitesse des rames, l'absence de réseau permanent et l'explosion des flux haute fréquence.
          </p>
        </div>

        {/* 2.1 Où l'Edge est-il strictement obligatoire ? (3 cartes + sécurité) */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <span className="text-[#FF6B35] font-semibold">2.1</span>
            <span>Où l'Edge est-il strictement obligatoire ? (Contraintes physiques)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Carte 1 : Latence / Sécurité */}
            <div className="bg-[#12233B] border border-[#FF6B35]/40 rounded-xl p-6 relative overflow-hidden group hover:border-[#FF6B35] transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#FF6B35]/15 flex items-center justify-center mb-5 text-[#FF6B35]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">LATENCE / SÉCURITÉ</h3>
              <p className="text-xs text-slate-400 font-mono mb-3">
                Décision d'arrêt ou d'alerte immédiate
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Un défaut critique doit déclencher une alerte sans attendre un aller-retour réseau. À 320 km/h, le train parcourt <strong className="text-white">88,9 m par seconde</strong>.
              </p>
              <div className="pt-3 border-t border-slate-700/60 text-xs text-slate-300 bg-[#0B1626]/70 -mx-6 -mb-6 p-4">
                <span className="text-[#FF6B35] font-semibold block mb-1">Preuve / Chiffre :</span>
                Aller-retour Cloud : 100 à 300 ms vs Edge : &lt; 10 ms <Citation id={5} showBadge />.
                À 320 km/h : <strong className="text-white">8,9 à 26,7 m</strong> parcourus en attendant le Cloud, contre <strong className="text-[#2EAD6B]">0,9 m</strong> en Edge (calcul).
              </div>
            </div>

            {/* Carte 2 : Coupure réseau */}
            <div className="bg-[#12233B] border border-[#FF6B35]/40 rounded-xl p-6 relative overflow-hidden group hover:border-[#FF6B35] transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#FF6B35]/15 flex items-center justify-center mb-5 text-[#FF6B35]">
                <WifiOff className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">COUPURE RÉSEAU</h3>
              <p className="text-xs text-slate-400 font-mono mb-3">
                Fonctionnement 100 % déconnecté
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Tunnels, tranchées, zones blanches et changements d'antenne répétés à très grande vitesse : la connectivité est intermittente. Le système de détection doit impérativement fonctionner hors ligne.
              </p>
              <div className="pt-3 border-t border-slate-700/60 text-xs text-slate-300 bg-[#0B1626]/70 -mx-6 -mb-6 p-4">
                <span className="text-[#FF6B35] font-semibold block mb-1">Preuve / Chiffre :</span>
                Objectif de l'Arcep : seulement <strong className="text-white">90 % de couverture</strong> des lignes régionales fin 2025. LGV Lyon-Marseille, Atlantique, SEA encore mal couvertes <Citation id={20} />.
              </div>
            </div>

            {/* Carte 3 : Volume de données */}
            <div className="bg-[#12233B] border border-[#FF6B35]/40 rounded-xl p-6 relative overflow-hidden group hover:border-[#FF6B35] transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#FF6B35]/15 flex items-center justify-center mb-5 text-[#FF6B35]">
                <HardDrive className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">VOLUME DE DONNÉES</h3>
              <p className="text-xs text-slate-400 font-mono mb-3">
                Saturation de la bande passante 4G/5G
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Le flux vidéo et inertiel brut est trop massif pour être transmis en continu par réseau cellulaire. L'Edge filtre et élimine le bruit à la source.
              </p>
              <div className="pt-3 border-t border-slate-700/60 text-xs text-slate-300 bg-[#0B1626]/70 -mx-6 -mb-6 p-4">
                <span className="text-[#FF6B35] font-semibold block mb-1">Preuve / Chiffre :</span>
                IRIS 320 : 60-100 Go/jour <Citation id={3} /> ; PLPR : 70 000 images/s <Citation id={13} /> ; flux vidéo 1080p ≈ <strong className="text-white">6 Mbit/s</strong> contre métadonnées ≈ <strong className="text-white">0,1 Mbit/s</strong> <Citation id={5} showBadge />.
              </div>
            </div>
          </div>

          {/* Bandeau Sécurité des données & Clarification frontière */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0E1F36] border border-slate-700 rounded-xl p-4 flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#2EAD6B] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-300">
                <strong className="text-white">Sécurité et confidentialité des données :</strong> Les données brutes restent confinées dans le train, réduisant l'exposition de données sensibles d'infrastructure ferroviaire en transit ou chez un tiers hébergeur.
              </div>
            </div>

            <div className="bg-[#0E1F36] border border-slate-700 rounded-xl p-4 flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-300">
                <strong className="text-slate-200">Là où l'Edge n'est PAS nécessaire :</strong> Entraînement des modèles d'IA, archivage historique sur 20 ans, comparaison multi-passages et planification des travaux. Ces tâches lourdes et non urgentes restent dans le Cloud.
              </div>
            </div>
          </div>
        </div>

        {/* 2.2 CALCULATEUR INTERACTIF (Section B) */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <span className="text-[#FF6B35] font-semibold">2.2</span>
            <span>Calculateur interactif en temps réel</span>
          </div>

          <CalculateurLatence />
        </div>

        {/* 2.3 Frise d'articulation Edge & Cloud en 6 étapes (Section C) */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <span className="text-[#FF6B35] font-semibold">2.3</span>
            <span>Comment Edge et Cloud s'articulent (Frise en 6 étapes)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stepsArticulation.map((step) => (
              <div
                key={step.num}
                className="bg-[#12233B] border border-slate-700/80 rounded-xl p-5 hover:border-[#FF6B35]/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-orange-500/20 text-[#FF6B35] font-mono font-bold text-sm flex items-center justify-center">
                      0{step.num}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {step.where}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-400">
                  <span>Source documentée</span>
                  <Citation id={step.citationId} showBadge={step.commercial} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-[11px] text-slate-400 italic">
            * Le redéploiement des modèles vers les trains est un principe classique des architectures Edge-Cloud ; il n'est pas détaillé publiquement par SNCF.
          </div>
        </div>

        {/* 2.4 Cas réel déployé : Network Rail PLPR & AIDO SNCF (Section D) */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <span className="text-[#FF6B35] font-semibold">2.4</span>
            <span>Cas réels déployés : Network Rail (PLPR) & SNCF (AIDO)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Fiche Network Rail PLPR (2 colonnes) */}
            <div className="lg:col-span-2 bg-[#12233B] border border-slate-700 rounded-xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-700">
                <div>
                  <div className="text-xs font-mono text-[#FF6B35] uppercase">Cas de référence international</div>
                  <h3 className="text-xl font-bold text-white">Network Rail (Royaume-Uni) · Système PLPR</h3>
                </div>
                <div className="flex items-center gap-1.5">
                  <Citation id={13} />
                  <Citation id={14} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300 mb-6">
                <div className="bg-[#0B1728] p-3.5 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block text-xs font-mono mb-1">Dispositif & Capteurs</span>
                  <strong className="text-white font-medium">PLPR (Plain Line Pattern Recognition)</strong> : caméras montées sous 5 trains de mesure, dont le fameux New Measurement Train.
                </div>

                <div className="bg-[#0B1728] p-3.5 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block text-xs font-mono mb-1">Cadence de capture</span>
                  <strong className="text-white font-medium">1 image tous les 0,8 mm</strong>, soit <strong className="text-[#FF6B35] font-mono">70 000 images/seconde</strong> à 125 mph (environ 200 km/h) <Citation id={13} />.
                </div>

                <div className="bg-[#0B1728] p-3.5 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block text-xs font-mono mb-1">Défauts détectés</span>
                  Attaches de rails manquantes ou inefficaces, fissurations de surface, excès de ballast…
                </div>

                <div className="bg-[#0B1728] p-3.5 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block text-xs font-mono mb-1">Traitement & Centres</span>
                  Le système signale des défauts potentiels ; une équipe d'experts à Derby les confirme (2e centre ouvert en janvier 2019) <Citation id={14} />.
                </div>
              </div>

              {/* Résultats chiffrés */}
              <div className="bg-[#0E1F36] rounded-xl p-4 border border-slate-700/80">
                <div className="text-xs font-mono uppercase text-[#2EAD6B] font-bold mb-2">
                  Résultats opérationnels mesurés :
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-xl font-bold font-mono text-white">8 500 miles</div>
                    <div className="text-slate-400 mt-0.5">d'inspections à pied supprimées (potentiel de 15 000) <Citation id={13} /></div>
                  </div>
                  <div>
                    <div className="text-xl font-bold font-mono text-[#2EAD6B]">~2,2 M£</div>
                    <div className="text-slate-400 mt-0.5">d'économies de maintenance estimées <Citation id={14} /></div>
                  </div>
                  <div>
                    <div className="text-xl font-bold font-mono text-white">975 000 miles</div>
                    <div className="text-slate-400 mt-0.5">d'inspection prévus sur la période 2019-2024 <Citation id={14} /></div>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-[11px] text-amber-300/90 font-mono bg-amber-950/40 p-2 rounded border border-amber-500/20">
                Limite documentée : Les sources consultées ne précisent pas formellement si l'algorithme d'IA tourne directement à bord des rames ou au centre d'expertise de Derby.
              </div>
            </div>

            {/* Encart SNCF AIDO + Autres exemples */}
            <div className="space-y-4">
              <div className="bg-[#12233B] border border-[#9B7BFF]/40 rounded-xl p-5">
                <div className="text-xs font-mono text-[#9B7BFF] uppercase mb-1">Et à la SNCF ?</div>
                <h4 className="text-base font-bold text-white mb-2">AIDO (Eurailscout France)</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  IA de vision par ordinateur (CNN) développée par Eurailscout France, filiale de SNCF Réseau, analysant le flux vidéo de <strong className="text-white">7 caméras</strong> des wagons d'inspection SIM. Premier objet ciblé : les joints isolants collés (JIC) <Citation id={15} />.
                </p>
                <div className="text-xs text-slate-400 pt-2 border-t border-slate-700/60">
                  Cité par le rapport international UIC / McKinsey (02/2024) parmi les cas majeurs de l'IA ferroviaire <Citation id={17} />.
                </div>
              </div>

              <div className="bg-[#12233B] border border-slate-700 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-mono text-slate-400 uppercase">Presse & Exemples récents TNI</div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    2024-2025
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li>
                    <strong className="text-white">SURFO (Ville, Rail & Transports, 2024) :</strong> Détection acoustique distribuée (DAS) sur 28 000 km de fibre optique le long des voies, capable de géolocaliser les fissures ou anomalies au mètre près en temps réel sans attendre un traitement distant <Citation id={23} />.
                  </li>
                  <li>
                    <strong className="text-white">TrackEi (Railway Technology, 2025) :</strong> IA embarquée sur boîtier durci NVIDIA Jetson, détection en temps réel à plus de 60 mph chez des opérateurs nord-américains <Citation id={22} />.
                  </li>
                  <li>
                    <strong className="text-white">CFF (Suisse) :</strong> Fiabilisation des caméras d'inspection par IA avec LatticeFlow, ETH Zurich et Siemens face aux intempéries extrêmes <Citation id={19} />.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 2.5 Freins opérationnels (Section E) */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <span className="text-[#FF6B35] font-semibold">2.5</span>
            <span>Freins opérationnels et contraintes de déploiement Edge</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="bg-[#12233B] border border-slate-700 p-5 rounded-xl">
              <div className="text-xs font-mono text-red-400 mb-1">Frein 01</div>
              <h5 className="text-sm font-bold text-white mb-2">Charge de validation humaine</h5>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                L'IA signale des défauts « potentiels » : il faut des experts qualifiés pour les trier. Network Rail a dû ouvrir un 2e centre à Derby pour absorber le débit <Citation id={13} /> <Citation id={14} />.
              </p>
            </div>

            <div className="bg-[#12233B] border border-slate-700 p-5 rounded-xl">
              <div className="text-xs font-mono text-red-400 mb-1">Frein 02</div>
              <h5 className="text-sm font-bold text-white mb-2">Matériel durci & certifié</h5>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                Calculateurs embarqués soumis aux normes strictes <strong className="text-white">EN 50155:2021</strong> (chaleur, humidité, chocs) et <strong className="text-white">EN 45545-2</strong> (sécurité incendie) : nettement plus onéreux <Citation id={21} showBadge />.
              </p>
            </div>

            <div className="bg-[#12233B] border border-slate-700 p-5 rounded-xl">
              <div className="text-xs font-mono text-red-400 mb-1">Frein 03</div>
              <h5 className="text-sm font-bold text-white mb-2">Parc mobile à maintenir</h5>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                Chaque train devient un micro-datacenter : maintenance matérielle, pannes en ligne, redéploiement d'images d'IA. Plus de <strong className="text-white">1 100 trains</strong> sont déjà équipés chez SNCF <Citation id={7} />.
              </p>
            </div>

            <div className="bg-[#12233B] border border-slate-700 p-5 rounded-xl">
              <div className="text-xs font-mono text-red-400 mb-1">Frein 04</div>
              <h5 className="text-sm font-bold text-white mb-2">Rentabilité & accès données</h5>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                Business case difficile à démontrer (changements de process majeurs) ; l'accès aux données réelles est le premier obstacle identifié par l'UIC <Citation id={17} showBadge />.
              </p>
            </div>
          </div>

          <div className="bg-[#0C1A2E] border border-amber-500/30 rounded-xl p-4 text-xs text-slate-300 flex items-start gap-3">
            <span className="text-[#F5B800] font-bold text-base shrink-0 mt-0.5">ℹ</span>
            <div>
              <strong className="text-white">À mettre en balance :</strong> Le système PLPR a permis d'économiser environ <strong className="text-white">2,2 M£</strong> dès 2019 <Citation id={14} />. Toutefois, aucun coût complet chiffré de déploiement Edge n'est publié par SNCF ou Network Rail : le coût demeure un frein principalement qualitatif dans la littérature disponible.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

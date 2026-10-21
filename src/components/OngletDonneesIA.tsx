import React from 'react';
import { Citation } from './Citation';
import { DemoBiais } from './DemoBiais';
import {
  Database,
  Brain,
  Sliders,
  CheckCircle,
  AlertOctagon,
  Users,
  Compass,
  FileSpreadsheet,
  ArrowDown,
  Layers,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export const OngletDonneesIA: React.FC = () => {
  const datasetRows = [
    {
      source: 'IRIS 320',
      citationIds: [3, 1],
      donnees: 'Géométrie de voie, images des rails (caméras linéaires), caténaire, GPS, température',
      volume: '60 à 100 Go / jour ; archive nationale de 80 To',
      frequence: '3 500 à 5 000 km/semaine ; réseau couvert ≈ tous les 15 jours',
      format: 'Images + séries de mesures + positions ; classement normal / urgent / critique',
    },
    {
      source: 'Wagons SIM / AIDO',
      citationIds: [15],
      donnees: 'Vidéo de 7 caméras haute cadence',
      volume: '45 000 km en 2023 ; 80 000 km prévus en 2024',
      frequence: "Campagnes d'inspection programmées",
      format: 'Vidéo ➔ résultats en tableau intégré',
    },
    {
      source: 'Trains commerciaux (STC)',
      citationIds: [4],
      donnees: 'Accélérations, position satellite GNSS, vitesse (odométrie)',
      volume: 'Non publié',
      frequence: 'À chaque passage régulier (quotidien)',
      format: 'Séries temporelles projetées par ligne / voie / PK (Python, pandas, Databricks)',
    },
    {
      source: 'Fibre optique (SURFO)',
      citationIds: [6],
      donnees: 'Vibrations et perturbations acoustiques le long des voies',
      volume: '28 000 km de câbles réutilisés en capteurs',
      frequence: 'En continu (24h/24, 7j/7)',
      format: 'Signaux bruts continus',
    },
    {
      source: 'Référence : PLPR (Network Rail)',
      citationIds: [13],
      donnees: 'Images de la voie et des composants de fixation',
      volume: '70 000 images / seconde à 200 km/h',
      frequence: 'Passages réguliers des 5 rames de mesure',
      format: 'Flux d’images haute fréquence',
    },
  ];

  return (
    <section id="donnees-ia" className="py-16 sm:py-20 bg-[#0F1E33] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Sprint */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#9B7BFF] uppercase tracking-wider mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9B7BFF]" />
            <span>Sprint 3 · Données & Intelligence Artificielle</span>
            <span aria-hidden="true">·</span>
            <span>Cas C : Détection des défauts de voies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Données & IA : Que collecte-t-on, qui décide, quel impact, quels risques ?
          </h2>
          <p className="text-base text-slate-300 mt-2 max-w-3xl">
            L'efficacité de la maintenance prédictive repose sur la structuration des volumétries massives et sur un principe d'éthique et de sécurité non négociable : l'IA propose, l'humain décide.
          </p>
        </div>

        {/* 3.1 Tableau des données collectées (Section A) */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[#9B7BFF] font-semibold">3.1</span>
              <span>Tableau des données collectées (Volumétrie, fréquence, format)</span>
            </div>
            <div className="text-xs font-mono text-slate-400 italic">
              Les formats de fichiers précis (JPEG, CSV…) et les résolutions ne sont pas publiés.
            </div>
          </div>

          <div className="bg-[#132642] border border-slate-700 rounded-xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0B1728] border-b border-slate-700 text-slate-300 font-mono text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-semibold">Source</th>
                    <th className="py-3.5 px-4 font-semibold">Données mesurées</th>
                    <th className="py-3.5 px-4 font-semibold">Volumétrie</th>
                    <th className="py-3.5 px-4 font-semibold">Fréquence</th>
                    <th className="py-3.5 px-4 font-semibold">Format & Restitution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60 text-slate-200">
                  {datasetRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#162D4D]/60 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span>{row.source}</span>
                          {row.citationIds.map((cid) => (
                            <Citation key={cid} id={cid} />
                          ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-300">{row.donnees}</td>
                      <td className="py-3.5 px-4 font-mono text-slate-300 tabular-nums">{row.volume}</td>
                      <td className="py-3.5 px-4 text-slate-300">{row.frequence}</td>
                      <td className="py-3.5 px-4 font-mono text-xs text-[#9B7BFF]">{row.format}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 3.2 Modèle de ML, restitution BI et chaîne de supervision (Section B) */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <span className="text-[#9B7BFF] font-semibold">3.2</span>
            <span>Modèle de Machine Learning, restitution BI et chaîne de décision</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Carte Modèle ML */}
            <div className="bg-[#132642] border border-slate-700 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/15 flex items-center justify-center text-[#9B7BFF] mb-4">
                <Brain className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Modèle de Machine Learning</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                <strong className="text-white">AIDO :</strong> Réseau de neurones convolutif (CNN) pour la vision par ordinateur <Citation id={15} />. Les architectures CNN, YOLO et Faster R-CNN sont les plus éprouvées pour la détection de défauts sur les rails <Citation id={18} />.
              </p>
              <div className="text-xs text-slate-400 pt-3 border-t border-slate-700/60 font-mono">
                Entraînement Cloud : <strong className="text-slate-200">AWS SageMaker</strong> avec Olexya <Citation id={16} /> ; filtrage statistique multi-passages sur Databricks (STC) <Citation id={4} />.
              </div>
            </div>

            {/* Carte Restitution BI */}
            <div className="bg-[#132642] border border-slate-700 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-sky-500/15 flex items-center justify-center text-[#4DA3FF] mb-4">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Restitution BI & Tableaux</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                AIDO restitue ses résultats sous forme de tableau intégré directement à la base de données de l'équipe de maintenance de l'Infrapôle Paris-Nord : objet détecté au bon endroit, absent, ou détecté hors base <Citation id={15} />.
              </p>
              <div className="text-xs text-slate-400 pt-3 border-t border-slate-700/60 font-mono">
                IRIS 320 classe les alertes en : <span className="text-[#2EAD6B] font-bold">normal</span> / <span className="text-amber-400 font-bold">urgent</span> / <span className="text-red-400 font-bold">critique</span> <Citation id={3} />.
              </div>
            </div>

            {/* Carte Règle d'or UIC */}
            <div className="bg-[#132642] border border-[#F5B800]/40 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/15 flex items-center justify-center text-[#F5B800] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">Principe éthique & de sécurité</h4>
                <div className="text-lg font-bold text-[#F5B800] tracking-tight mb-2">
                  « L'IA propose, l'humain décide » <Citation id={17} showBadge />
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Le rapport mondial UIC / McKinsey (février 2024) prescrit formellement une boucle d'arbitrage « human-in-the-loop » par des experts pour circonscrire les erreurs algorithmiques.
                </p>
              </div>
              <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-700/60 mt-4">
                Chez Network Rail, seuls les défauts validés à Derby atteignent le terrain <Citation id={13} />.
              </div>
            </div>
          </div>

          {/* Schéma vertical de la chaîne de décision */}
          <div className="bg-[#0B1728] border border-slate-700 rounded-xl p-6">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Qui supervise la décision ? (Chaîne opérationnelle de bout en bout)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              <div className="bg-[#12233B] p-4 rounded-xl border border-purple-500/40 relative">
                <span className="text-[10px] font-mono font-bold text-[#9B7BFF] uppercase">Échelon 1</span>
                <div className="text-base font-bold text-white mt-1 mb-1">IA Embarquée / Cloud</div>
                <p className="text-xs text-slate-300">
                  Propose un défaut potentiel géolocalisé avec score de confiance.
                </p>
              </div>

              <div className="bg-[#12233B] p-4 rounded-xl border border-[#F5B800]/40 relative">
                <span className="text-[10px] font-mono font-bold text-[#F5B800] uppercase">Échelon 2 · Arbitre</span>
                <div className="text-base font-bold text-white mt-1 mb-1 flex items-center gap-1">
                  <span>EXPERT HUMAIN</span>
                  <Citation id={13} />
                </div>
                <p className="text-xs text-slate-300">
                  Confirme ou rejette le défaut signalé (élimination des faux positifs).
                </p>
              </div>

              <div className="bg-[#12233B] p-4 rounded-xl border border-sky-500/40 relative">
                <span className="text-[10px] font-mono font-bold text-[#4DA3FF] uppercase">Échelon 3 · Décideur</span>
                <div className="text-base font-bold text-white mt-1 mb-1">INFRAPÔLE / CHEF</div>
                <p className="text-xs text-slate-300">
                  Décide de la nature des travaux et planifie l'intervention sur les voies.
                </p>
              </div>

              <div className="bg-[#12233B] p-4 rounded-xl border border-emerald-500/40 relative">
                <span className="text-[10px] font-mono font-bold text-[#2EAD6B] uppercase">Échelon 4 · Terrain</span>
                <div className="text-base font-bold text-white mt-1 mb-1">AGENTS VOIE</div>
                <p className="text-xs text-slate-300">
                  Interviennent directement au point kilométrique précis pour réparer.
                </p>
              </div>
            </div>

            {/* Éclairage Presse Récente TNI (2024-2026) */}
            <div className="mt-5 pt-4 border-t border-slate-700/60 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#101F33] p-3.5 rounded-lg border border-purple-500/30">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="font-semibold text-white">LGV BPL (Eiffage Énergie Systèmes, 2024)</span>
                  <Citation id={25} />
                </div>
                <p className="text-slate-300">
                  Déploiement d'une IA hybride combinant les données des trains IRIS 320 et de GMAO pour prédire l'apparition des déformations géométriques de la voie à grande vitesse.
                </p>
              </div>

              <div className="bg-[#101F33] p-3.5 rounded-lg border border-purple-500/30">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="font-semibold text-white">ActuIA Magazine (2024)</span>
                  <Citation id={26} />
                </div>
                <p className="text-slate-300">
                  Analyse des systèmes de vision par ordinateur ferroviaires : confirmation de la doctrine stricte « human-in-the-loop » pour valider chaque détection avant intervention lourde.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3.3 Impact mesurable : EX (Salariés) et CX (Voyageurs) (Section C) */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[#9B7BFF] font-semibold">3.3</span>
              <span>Impact mesurable : EX (Salariés) & CX (Voyageurs)</span>
            </div>
            <div className="text-xs font-mono text-slate-400">
              Chiffres phares : EX = 8 500 miles sans marche ; CX = -30 % incidents d'aiguillage
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Colonne EX (Salariés) */}
            <div className="bg-[#132642] border border-[#2EAD6B]/40 rounded-xl p-6">
              <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-700">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-[#2EAD6B] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Impact Salariés (EX - Employee Experience)</h4>
                  <div className="text-xs text-slate-400 font-mono">Sécurité et réduction de pénibilité</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-[#0B1728] p-4 rounded-lg border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-white mb-1">
                    8 500 miles <Citation id={13} />
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    de voies sans aucune inspection à pied au Royaume-Uni (potentiel de 15 000 miles). Les agents ne sont plus exposés aux dangers physiques directs sur le ballast.
                  </div>
                </div>

                <div className="bg-[#0B1728] p-4 rounded-lg border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-white mb-1">
                    2 200 utilisateurs <Citation id={15} />
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    Agents d'inspection potentiels d'AIDO à la SNCF, libérés de la corvée fastidieuse de scruter manuellement des heures de vidéo en cabine.
                  </div>
                </div>

                <div className="bg-[#0B1728] p-4 rounded-lg border border-slate-800">
                  <div className="text-base font-bold text-white mb-1">
                    Tournées à pied remplacées sur LGV <Citation id={1} />
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    L'IRIS 320 a permis d'éliminer les tournées pédestres nocturnes le long des voies à grande vitesse française.
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne CX (Voyageurs) */}
            <div className="bg-[#132642] border border-[#4DA3FF]/40 rounded-xl p-6">
              <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-700">
                <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-[#4DA3FF] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Impact Voyageurs (CX - Customer Experience)</h4>
                  <div className="text-xs text-slate-400 font-mono">Ponctualité et fiabilité des circulations</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-[#0B1728] p-4 rounded-lg border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-[#2EAD6B] mb-1">
                    -30 % d'incidents <Citation id={1} />
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    Sur les aiguillages de la LGV Sud-Est dès la première phase d'instrumentation par capteurs connectés IoT.
                  </div>
                </div>

                <div className="bg-[#0B1728] p-4 rounded-lg border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-[#4DA3FF] mb-1">
                    -20 % de retards <Citation id={17} showBadge />
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    Par service ferroviaire grâce à la maintenance prédictive de l'infrastructure (estimation mondiale UIC / McKinsey, février 2024).
                  </div>
                </div>

                <div className="bg-[#0B1728] p-4 rounded-lg border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-[#4DA3FF] mb-1">
                    -15 % à -25 % d'arrêts imprévus <Citation id={17} showBadge />
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    Réduction des interruptions inopinées de trafic ferroviaire par traitement anticipé avant dépassement des cotes limites (estimation UIC).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3.4 Biais et risque majeur : la rareté des défauts (Section D) */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <span className="text-[#9B7BFF] font-semibold">3.4</span>
            <span>Biais et risque majeur : la rareté des défauts (déséquilibre des classes)</span>
          </div>

          {/* Démonstrateur interactif */}
          <div className="mb-8">
            <DemoBiais />
          </div>

          {/* Autres risques & Parades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Autres risques documentés */}
            <div className="bg-[#132642] border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-2 text-red-400 font-bold mb-3">
                <AlertOctagon className="w-5 h-5 shrink-0" />
                <h4 className="text-base text-white font-bold">Autres risques algorithmiques documentés</h4>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>
                    <strong className="text-white">Conditions de prise de vue extrêmes :</strong> Rayures sur l'objectif, pluie battante, neige ou verglas sur les rails faussant la détection de l'IA (étudié par les CFF suisses) <Citation id={19} /> ; l'éclairage et la vitesse jouent aussi sur la netteté <Citation id={18} />.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>
                    <strong className="text-white">Effet boîte noire (« considerably black-box ») :</strong> L'opacité interne des réseaux de neurones profonds entre en conflit avec les normes strictes de certification de sécurité ferroviaire <Citation id={18} />.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>
                    <strong className="text-white">Biais de couverture (analyse) :</strong> Les LGV, mieux équipées et plus fréquemment mesurées, peuvent être surreprésentées dans les jeux d'entraînement au détriment des lignes régionales secondaires.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>
                    <strong className="text-white">Sur-confiance des agents (analyse) :</strong> Risque d'atrophie du coup d'œil technique des jeunes agents en cas de dépendance aveugle à l'algorithme <Citation id={17} />.
                  </span>
                </li>
              </ul>
            </div>

            {/* Parades concrètes */}
            <div className="bg-[#132642] border border-[#2EAD6B]/40 rounded-xl p-6">
              <div className="flex items-center gap-2 text-[#2EAD6B] font-bold mb-3">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h4 className="text-base text-white font-bold">Parades techniques et organisationnelles</h4>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2EAD6B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Prioriser le rappel :</strong> Calibrer un seuil de détection prudent pour accepter de fausses alertes plutôt que de manquer une fissure critique.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2EAD6B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Synthèse de données par GAN :</strong> Générer artificiellement des images photoréalistes de micro-fissures rares pour équilibrer les classes d'entraînement <Citation id={18} />.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2EAD6B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Tests de robustesse préalables :</strong> Validation systématique sur bancs d'essais simulant intempéries, saleté et optiques dégradées avant mise en service commerciale <Citation id={19} />.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2EAD6B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Validation humaine systématique :</strong> Maintien obligatoire d'experts chevronnés dans la boucle décisionnelle et formation continue des agents <Citation id={17} />.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

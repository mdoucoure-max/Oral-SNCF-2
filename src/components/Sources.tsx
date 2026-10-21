import React, { useState } from 'react';
import { SOURCES } from '../data/sources';
import { ExternalLink, Search, Newspaper, Filter, Calendar } from 'lucide-react';

export const Sources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'recent' | 'presse' | 'rapport'>('all');

  const filteredSources = SOURCES.filter((s) => {
    // Filter by category
    if (activeFilter === 'recent' && !s.isRecentTNI) return false;
    if (activeFilter === 'presse' && s.type !== 'presse') return false;
    if (activeFilter === 'rapport' && s.type !== 'rapport') return false;

    // Search query
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      s.id.toString().includes(q) ||
      s.author.toLowerCase().includes(q) ||
      s.title.toLowerCase().includes(q) ||
      s.publication.toLowerCase().includes(q) ||
      (s.year && s.year.toString().includes(q)) ||
      (s.notes && s.notes.toLowerCase().includes(q))
    );
  });

  const recentCount = SOURCES.filter((s) => s.isRecentTNI).length;
  const presseCount = SOURCES.filter((s) => s.type === 'presse').length;

  return (
    <section id="sources" className="py-16 sm:py-20 bg-[#0B1728] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#2EAD6B] uppercase tracking-wider mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2EAD6B]" />
              <span>Section Bibliographie · 26 Références Réelles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Sources, Presse & Bibliographie
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Toutes les données du dossier sont adossées aux 26 sources réelles ci-dessous, incluant les articles de presse récents consacrés aux TNI ferroviaires (2023–2026). Liens externes vérifiés.
            </p>
          </div>

          {/* Recherche */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher (ex: SURFO, Usine Digitale, 2024)..."
              className="w-full bg-[#132642] border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2EAD6B]"
              aria-label="Rechercher une source bibliographique"
            />
          </div>
        </div>

        {/* Filtres interactifs par catégorie & actualité récente */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-[#0F1E33] border border-slate-800 rounded-xl">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-[#183153] text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Toutes les sources ({SOURCES.length})
          </button>

          <button
            onClick={() => setActiveFilter('recent')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeFilter === 'recent'
                ? 'bg-amber-500/20 text-[#F5B800] border border-[#F5B800]/50 shadow-sm font-semibold'
                : 'text-slate-400 hover:text-[#F5B800]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Presse & Travaux récents TNI (2023-2026) ({recentCount})</span>
          </button>

          <button
            onClick={() => setActiveFilter('presse')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeFilter === 'presse'
                ? 'bg-sky-500/20 text-[#4DA3FF] border border-[#4DA3FF]/50 shadow-sm font-semibold'
                : 'text-slate-400 hover:text-[#4DA3FF]'
            }`}
          >
            <Newspaper className="w-3.5 h-3.5" />
            <span>Articles de presse ({presseCount})</span>
          </button>

          <button
            onClick={() => setActiveFilter('rapport')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeFilter === 'rapport'
                ? 'bg-purple-500/20 text-[#9B7BFF] border border-[#9B7BFF]/50 shadow-sm font-semibold'
                : 'text-slate-400 hover:text-[#9B7BFF]'
            }`}
          >
            Rapports officiels & Études
          </button>
        </div>

        {/* Grille des 26 sources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSources.map((source) => (
            <div
              key={source.id}
              id={`source-${source.id}`}
              className={`bg-[#12233B] border rounded-xl p-5 hover:border-slate-500 transition-all flex flex-col justify-between scroll-mt-24 group ${
                source.isRecentTNI ? 'border-amber-500/30 bg-[#12233B]/90' : 'border-slate-700/80'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-slate-800 text-[#F5B800] font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-slate-700">
                    [{source.id}]
                  </span>

                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {source.isRecentTNI && (
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-950/80 text-[#F5B800] border border-amber-500/40 font-semibold">
                        TNI Récente ({source.year})
                      </span>
                    )}
                    {source.commercial && (
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-950/70 text-amber-300 border border-amber-500/30">
                        Source commerciale
                      </span>
                    )}
                    {source.estimation && (
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-purple-950/70 text-purple-300 border border-purple-500/30">
                        Estimation
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-slate-400">
                      {source.date}
                    </span>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-white group-hover:text-slate-100 mb-1 leading-snug">
                  {source.title}
                </h4>

                <div className="text-xs text-slate-400 mb-2">
                  <span className="text-slate-300 font-medium">{source.author}</span>
                  {source.publication && (
                    <>
                      <span className="mx-1.5">·</span>
                      <span className="italic text-slate-300">{source.publication}</span>
                    </>
                  )}
                </div>

                {source.notes && (
                  <p className="text-xs text-slate-300/90 bg-[#0C1A2E]/60 p-2.5 rounded-lg border border-slate-800 leading-relaxed mb-3">
                    {source.notes}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-slate-700/50 flex items-center justify-between">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#4DA3FF] hover:text-[#7bbdff] font-medium flex items-center gap-1.5 hover:underline decoration-dotted transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#4DA3FF] rounded"
                >
                  <span className="truncate max-w-[280px] sm:max-w-xs">{source.url}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredSources.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm bg-[#0F1E33] rounded-xl border border-slate-800 mt-4">
            Aucune source ne correspond à vos critères de recherche.
          </div>
        )}
      </div>
    </section>
  );
};

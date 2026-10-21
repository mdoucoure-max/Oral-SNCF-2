import React, { useState, useEffect } from 'react';
import { SprintTab } from './types';
import { EditorialTopBar } from './components/EditorialTopBar';
import { HeaderNav } from './components/HeaderNav';
import { Hero } from './components/Hero';
import { SchemaDuRailAuReparateur } from './components/SchemaDuRailAuReparateur';
import { SectionTNI } from './components/SectionTNI';
import { LiveSensorDashboard } from './components/LiveSensorDashboard';
import { FluxDonnee } from './components/FluxDonnee';
import { OngletCloud } from './components/OngletCloud';
import { OngletEdge } from './components/OngletEdge';
import { OngletDonneesIA } from './components/OngletDonneesIA';
import { Sources } from './components/Sources';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<SprintTab>('accueil');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isLargeFont, setIsLargeFont] = useState<boolean>(false);

  // Barre de progression de lecture & espion de défilement pour les onglets
  useEffect(() => {
    const handleScroll = () => {
      // Calcul du pourcentage de lecture
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max((window.scrollY / totalHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }

      // Synchronisation de l'onglet actif
      const sections: SprintTab[] = ['accueil', 'schema', 'tni', 'cloud', 'edge', 'donnees-ia', 'sources'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTab(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFontSize = () => {
    setIsLargeFont(!isLargeFont);
  };

  return (
    <div
      className={`min-h-screen bg-[#0F1E33] text-slate-100 font-sans selection:bg-[#F5B800] selection:text-slate-900 antialiased ${
        isLargeFont ? 'text-[17px]' : 'text-[15px]'
      }`}
    >
      {/* Barre de progression de lecture (inspirée de sncf140) */}
      <div
        id="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-400 via-[#F5B800] to-purple-500 z-50 transition-all duration-100 ease-out"
        aria-hidden="true"
      />

      {/* Bandeau éditorial supérieur avec métadonnées, date et actions */}
      <EditorialTopBar onToggleFontSize={toggleFontSize} isLargeFont={isLargeFont} />

      {/* Barre de navigation principale fixe */}
      <HeaderNav activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Contenu principal de l'enquête & du dossier */}
      <main id="main-content">
        {/* 1) ACCUEIL & HERO */}
        <Hero />

        {/* NOUVEAU SCHÉMA EN 10 ÉTAPES : « Du rail au réparateur » (Pièce jointe PDF) */}
        <SchemaDuRailAuReparateur />

        {/* NOUVELLE SECTION TNI : IoT, Edge, Cloud, IA + Schéma explicatif de synthèse à la fin */}
        <SectionTNI />

        {/* DIRECT CAPTEURS & TÉLÉMÉTRIE (Inspiré de sncf140.netlify.app) */}
        <LiveSensorDashboard />

        {/* PARCOURS DE LA DONNÉE (Synthèse d'architecture) */}
        <FluxDonnee />

        {/* 2) ONGLET CLOUD (Sprint 1) */}
        <OngletCloud />

        {/* 3) ONGLET EDGE (Sprint 2 - Calculateur interactif de distance & PLPR) */}
        <OngletEdge />

        {/* 4) ONGLET DONNÉES & IA (Sprint 3 - Modèles CNN, impact & Démo de biais) */}
        <OngletDonneesIA />

        {/* 5) SOURCES & BIBLIOGRAPHIE (26 références dont presse TNI récente) */}
        <Sources />
      </main>

      {/* 6) PIED DE PAGE */}
      <Footer />
    </div>
  );
}

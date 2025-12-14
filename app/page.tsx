'use client';

import { LandingController } from '@/controllers/LandingController';
import { LandingView } from '@/views/LandingView';

/**
 * Page d'accueil utilisant l'architecture MVC
 */
export default function Home() {
  // Le contrôleur récupère les données
  const pageData = LandingController.getPageData();

  // La vue affiche les données
  return <LandingView data={pageData} />;
}


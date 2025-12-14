'use client';

import { HomeController } from '@/controllers/HomeController';
import { HomeView } from '@/views/HomeView';

/**
 * Page d'accueil principale
 */
export default function HomePage() {
  const pageData = HomeController.getPageData();
  return <HomeView data={pageData} />;
}


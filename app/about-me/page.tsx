'use client';

import { AboutMeController } from '@/controllers/AboutMeController';
import { AboutMeView } from '@/views/AboutMeView';

/**
 * Page About me
 */
export default function AboutMePage() {
  const pageData = AboutMeController.getPageData();
  return <AboutMeView data={pageData} />;
}


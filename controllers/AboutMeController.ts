import { AboutMePageData } from '@/models/AboutMeModel';

/**
 * Contrôleur pour la page About me
 */
export class AboutMeController {
  /**
   * Traite les données pour la page About me
   */
  static getPageData(): AboutMePageData {
    return {
      title: "About me"
    };
  }
}


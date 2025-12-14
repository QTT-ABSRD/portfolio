import { HomePageData } from '@/models/HomeModel';

/**
 * Contrôleur pour la page d'accueil principale
 */
export class HomeController {
  /**
   * Traite les données pour la page d'accueil
   */
  static getPageData(): HomePageData {
    return {
      title: "Home"
    };
  }
}


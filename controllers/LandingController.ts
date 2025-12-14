import { LandingModel, LandingPageData } from '@/models/LandingModel';

/**
 * Contrôleur pour la page d'accueil
 */
export class LandingController {
  /**
   * Traite les données pour la page d'accueil
   */
  static getPageData(): LandingPageData {
    return LandingModel.getLandingData();
  }
}


/**
 * Modèle pour la page d'accueil
 */
export interface LandingPageData {
  title: string;
  description: string;
}

export class LandingModel {
  /**
   * Récupère les données de la page d'accueil
   */
  static getLandingData(): LandingPageData {
    return {
      title: "Hello boy !",
      description: ""
    };
  }
}


export interface Feature {
  title: string;
  description: string;
}

export interface LandingPageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroCTAButton: string;
  features: Feature[];
  ctaHeadline: string;
  ctaSubheadline: string;
  ctaButton: string;
}

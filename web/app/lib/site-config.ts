/**
 * Site Configuration for LeadGen Ads
 * 
 * Centralized configuration for brand-specific and site-specific settings.
 */

export interface SiteConfig {
  // Brand Information
  brandName: string;
  brandTagline?: string;
  
  // URL Structure
  resourcesBasePath: string;
  homeUrl: string;
  
  // Navigation Links
  contactUrl: string;
  pricingUrl?: string;
  
  // CTA Text
  ctaPrimaryText: string;
  ctaSecondaryText?: string;
  
  // Content Directory Path
  contentDirectory: string;
  
  // Folder Naming Convention
  useStandardNaming: boolean;
  
  // Custom folder structure (if useStandardNaming is false)
  customFolderPatterns?: {
    pillar: string;
    cluster: string;
    blog: string;
  };
}

// Configuration for LeadGen Ads
export const defaultSiteConfig: SiteConfig = {
  brandName: "LeadGen Ads",
  brandTagline: "Turn Google Ads into a predictable lead machine",
  resourcesBasePath: "/resources",
  homeUrl: "/",
  contactUrl: "/contact",
  pricingUrl: "/services",
  ctaPrimaryText: "Book a Free Consultation",
  ctaSecondaryText: "View Our Services",
  contentDirectory: "../SEO Strategy/content",
  useStandardNaming: true,
};

/**
 * Get site configuration
 */
export function getSiteConfig(): SiteConfig {
  return defaultSiteConfig;
}


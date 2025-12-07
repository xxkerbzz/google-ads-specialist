import { Metadata } from 'next';
import { SEOData } from '@/app/types/seo';

export function generateMetadata(seo: SEOData): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      url: seo.ogUrl || seo.canonical,
      siteName: 'LeadGen Ads',
      images: seo.ogImage ? [{ url: seo.ogImage }] : [],
      type: 'website',
    },
    twitter: {
      card: (seo.twitterCard as 'summary_large_image' | 'summary' | 'player' | 'app') || 'summary_large_image',
      title: seo.twitterTitle || seo.title,
      description: seo.twitterDescription || seo.description,
      images: seo.twitterImage ? [seo.twitterImage] : [],
    },
  };
}

export function generateStructuredData(schema: Record<string, unknown>) {
  return {
    '@context': 'https://schema.org',
    ...schema,
  };
}


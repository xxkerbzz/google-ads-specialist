import { generateMetadata } from '@/app/lib/seo-utils';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import Link from 'next/link';

const navItems = [
  { label: 'Home', url: '/' },
  { label: 'Services', url: '/services' },
  { label: 'Case Studies', url: '/case-studies' },
  {
    label: 'Resources',
    url: '/resources',
    dropdown: [
      { label: 'Google Ads for Service Businesses', url: '/resources/google-ads-for-service-businesses' },
      { label: 'Industry-Specific Google Ads', url: '/resources/industry-specific-google-ads' },
      { label: 'Google Ads Services', url: '/resources/google-ads-services-and-management' },
      { label: 'Google Ads Strategy', url: '/resources/google-ads-strategy-and-optimization' },
      { label: 'Google Ads Problems & Solutions', url: '/resources/google-ads-problems-and-solutions' },
    ],
  },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
];

const footerItems = [
  { label: 'About', url: '/about' },
  { label: 'Services', url: '/services' },
  { label: 'Case Studies', url: '/case-studies' },
  { label: 'Contact', url: '/contact' },
  { label: 'FAQ', url: '/faq' },
  { label: 'Resources', url: '/resources' },
  { label: 'Privacy Policy', url: '/privacy' },
  { label: 'Terms of Service', url: '/terms' },
];

export const metadata = generateMetadata({
  title: 'Google Ads Resources for Service Businesses | LeadGen Ads',
  description: 'Comprehensive resources on Google Ads for service businesses. Learn about search ads, local service ads, optimization strategies, and industry-specific tactics.',
  canonical: 'https://leadgenads.com/resources',
});

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Resources', url: '/resources' },
];

// Pillar pages data - in production, this would be loaded dynamically
const pillarPages = [
  {
    title: 'Google Ads for Service Businesses',
    description: 'Complete guide to using Google Ads effectively for service businesses. Learn about search ads, local service ads, optimization, and lead generation strategies.',
    url: '/resources/google-ads-for-service-businesses',
  },
  {
    title: 'Industry-Specific Google Ads',
    description: 'Learn how to create effective Google Ads campaigns for specific service industries including HVAC, plumbing, electrical, roofing, and landscaping.',
    url: '/resources/industry-specific-google-ads',
  },
  {
    title: 'Google Ads Services and Management',
    description: 'Comprehensive guide to Google Ads services and management options for service businesses. Learn about search ads management, LSA management, and remarketing.',
    url: '/resources/google-ads-services-and-management',
  },
  {
    title: 'Google Ads Strategy and Optimization',
    description: 'Learn Google Ads strategy and optimization techniques for service businesses. Complete guide covering keyword research, bidding, ad copy, and conversion optimization.',
    url: '/resources/google-ads-strategy-and-optimization',
  },
  {
    title: 'Google Ads Problems and Solutions',
    description: 'Learn how to solve common Google Ads problems for service businesses. Complete guide covering issues with leads, costs, quality scores, and budgets.',
    url: '/resources/google-ads-problems-and-solutions',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navigation items={navItems} />
      
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Google Ads Resources for Service Businesses
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl">
            Comprehensive guides, strategies, and insights to help service businesses succeed with Google Ads. 
            Learn from industry-specific case studies, optimization techniques, and proven tactics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillarPages.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{page.title}</h2>
                <p className="text-gray-600">{page.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Need Help with Your Google Ads?</h2>
            <p className="text-gray-700 mb-4">
              Book a free consultation to discuss your Google Ads needs and learn how we can help 
              turn your campaigns into a predictable lead generation machine.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </main>

      <Footer items={footerItems} />
    </>
  );
}


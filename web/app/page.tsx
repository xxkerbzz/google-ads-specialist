import { generateMetadata } from '@/app/lib/seo-utils';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import StructuredData from '@/app/components/StructuredData';
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
  title: 'LeadGen Ads - Google Ads Specialist for Service Businesses',
  description: 'Specialized Google Ads management for service businesses. Turn Google Ads into a predictable lead machine. Month-to-month. No contracts. Just results.',
  canonical: 'https://leadgenads.com',
  ogTitle: 'LeadGen Ads - Google Ads Specialist for Service Businesses',
  ogDescription: 'Specialized Google Ads management for service businesses. Turn Google Ads into a predictable lead machine.',
  ogUrl: 'https://leadgenads.com',
});

const organizationSchema = {
  '@type': 'Organization',
  name: 'LeadGen Ads',
  url: 'https://leadgenads.com',
  description: 'Specialized Google Ads management for service businesses',
  sameAs: [],
};

const websiteSchema = {
  '@type': 'WebSite',
  name: 'LeadGen Ads',
  url: 'https://leadgenads.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://leadgenads.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <Navigation items={navItems} />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Turn Google Ads Into A Predictable Lead Machine
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-50 max-w-3xl mx-auto">
                Specialized Google Ads management for service businesses. 
                No fluff, no wasted spend—just campaigns that convert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Service Businesses Choose LeadGen Ads
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                We only work with service businesses, so we understand what actually works.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Specialized Expertise</h3>
                <p className="text-gray-700">
                  Exclusive focus on local service businesses. No e-commerce, SaaS, or B2B tech—just service businesses.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Direct Access</h3>
                <p className="text-gray-700">
                  Work directly with the specialist managing your account. No account managers or offshore teams in between.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">No Contracts</h3>
                <p className="text-gray-700">
                  Month-to-month engagement. You can leave anytime if it's not working. No long-term commitments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Google Ads Services
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Transparent pricing, clear deliverables, and results you can measure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Google Search Ads</h3>
                <p className="text-gray-700 mb-4">
                  Professional management of your search campaigns with weekly optimization and monthly strategy calls.
                </p>
                <p className="text-2xl font-bold text-blue-600 mb-4">$1,500/mo</p>
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Local Service Ads</h3>
                <p className="text-gray-700 mb-4">
                  LSA management with profile optimization, review management, and lead quality monitoring.
                </p>
                <p className="text-2xl font-bold text-blue-600 mb-4">$800/mo</p>
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Display Remarketing</h3>
                <p className="text-gray-700 mb-4">
                  Targeted remarketing campaigns to re-engage website visitors and drive conversions.
                </p>
                <p className="text-2xl font-bold text-blue-600 mb-4">$700/mo</p>
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Turn Google Ads Into a Lead Machine?
            </h2>
            <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
              Book a free consultation to discuss your Google Ads needs. No obligation, no pressure—just a conversation about how we can help.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Book a Free Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer items={footerItems} />
    </>
  );
}

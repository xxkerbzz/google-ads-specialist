import { generateMetadata } from '@/app/lib/seo-utils';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
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
  title: 'Google Ads Services for Service Businesses | LeadGen Ads',
  description: 'Professional Google Ads management services for service businesses. Transparent pricing, clear deliverables, and results you can measure. Month-to-month engagement.',
  canonical: 'https://leadgenads.com/services',
});

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Services', url: '/services' },
];

const serviceSchema = {
  '@type': 'Service',
  serviceType: 'Google Ads Management',
  provider: {
    '@type': 'Organization',
    name: 'LeadGen Ads',
  },
  areaServed: 'United States',
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <Navigation items={navItems} />
      
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Google Ads Services</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Google Search Ads Management</h2>
              <p className="text-xl font-semibold text-blue-600 mb-4">$1,500/month management fee + your ad spend</p>
              <p className="text-gray-800 mb-4">
                <strong>Minimum ad spend required:</strong> $1,500/month
              </p>
              <p className="text-gray-800 mb-4">
                Our Google Search Ads management service includes everything you need to run successful search campaigns:
              </p>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-4">
                <li>Keyword research and selection tailored to your service business</li>
                <li>Competitor analysis and strategic bidding to maximize ROI</li>
                <li>Ad copywriting and A/B testing to improve click-through rates</li>
                <li>Negative keyword management to reduce wasted spend</li>
                <li>Location-based targeting to reach your local customers</li>
                <li>Call extension and sitelink optimization for better conversions</li>
                <li>Weekly optimization to continuously improve performance</li>
                <li>Monthly strategy calls to review results and plan ahead</li>
                <li>Detailed performance reporting you can actually understand</li>
              </ul>
              <p className="text-gray-800">
                You'll have complete access to your Google Ads account and direct communication with the specialist 
                managing your campaigns.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Local Service Ads (LSA) Management</h2>
              <p className="text-xl font-semibold text-blue-600 mb-4">$800/month management fee + pay-per-lead costs</p>
              <p className="text-gray-800 mb-4">
                Local Service Ads are Google's pay-per-lead advertising platform specifically designed for service 
                businesses. You only pay for actual leads, making it a cost-effective option for many businesses.
              </p>
              <p className="text-gray-800 mb-4">Our LSA management includes:</p>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-4">
                <li>Profile setup and Google Guarantee verification assistance</li>
                <li>Review management and optimization to improve your ranking</li>
                <li>Job type and service area configuration for maximum coverage</li>
                <li>Budget management and bid optimization to control costs</li>
                <li>Lead tracking and quality monitoring to ensure you're getting qualified leads</li>
                <li>Dispute management for invalid leads to protect your budget</li>
                <li>Weekly performance reviews to optimize your lead generation</li>
              </ul>
              <p className="text-gray-800">
                LSA is particularly effective for service businesses that want to pay only for qualified leads rather 
                than clicks.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Display Remarketing Campaigns</h2>
              <p className="text-xl font-semibold text-blue-600 mb-4">$700/month management fee + your ad spend</p>
              <p className="text-gray-800 mb-4">
                <strong>Minimum ad spend required:</strong> $500/month
              </p>
              <p className="text-gray-800 mb-4">
                Display remarketing helps you re-engage visitors who have already been to your website, increasing 
                the likelihood they'll convert into customers.
              </p>
              <p className="text-gray-800 mb-4">Our remarketing service includes:</p>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-4">
                <li>Pixel installation and audience creation to track website visitors</li>
                <li>Custom display ad design that matches your brand</li>
                <li>Strategic audience segmentation for better targeting</li>
                <li>Frequency capping optimization to avoid ad fatigue</li>
                <li>Cross-device targeting to reach customers wherever they are</li>
                <li>Performance optimization to improve ROI</li>
                <li>Monthly reporting on campaign performance</li>
              </ul>
              <p className="text-gray-800">
                Remarketing is an effective way to capture leads from visitors who didn't convert on their first visit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Additional Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Landing Page Design</h3>
                  <p className="text-gray-800 mb-2">
                    Starting at $500 per page. Custom landing pages designed to convert your Google Ads traffic into 
                    leads. Optimized for mobile, fast loading, and conversion-focused.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Tracking Setup</h3>
                  <p className="text-gray-800 mb-2">
                    Starting at $99/month. Track which ads and keywords are generating phone calls, so you can 
                    optimize for what's actually working.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Conversion Rate Optimization</h3>
                  <p className="text-gray-800 mb-2">
                    Starting at $800/month. Improve your website's ability to convert visitors into leads through 
                    testing, optimization, and strategic improvements.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">One-Time Account Audit</h3>
                  <p className="text-gray-800 mb-2">
                    $500. A comprehensive analysis of your existing Google Ads account with detailed recommendations 
                    for improvement. Perfect if you're not ready for ongoing management but want expert guidance.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Service Guarantees</h2>
              <ul className="list-disc pl-6 text-gray-800 space-y-2">
                <li><strong>Month-to-month engagement:</strong> No long-term contracts. You can leave anytime if it's not working.</li>
                <li><strong>Direct access:</strong> You work directly with the specialist managing your account, not a junior account manager.</li>
                <li><strong>Weekly performance reports:</strong> Clear, understandable reports showing how your campaigns are performing.</li>
                <li><strong>Monthly strategy calls:</strong> Regular check-ins to review results and optimize strategy.</li>
                <li><strong>24-hour response time:</strong> We respond to your questions within 24 hours.</li>
                <li><strong>Full transparency:</strong> You have complete access to your Google Ads account at all times.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">How to Get Started</h2>
              <p className="text-gray-800 mb-4">
                Getting started is simple. Book a free consultation to discuss your business, your goals, and which 
                service might be the best fit. We'll answer your questions, explain our process, and help you decide 
                if we're a good match.
              </p>
              <p className="text-gray-800 mb-4">
                If you decide to move forward, we'll set up your account, build your campaigns, and start generating 
                leads. There's no long-term commitment—you can cancel anytime if it's not working for you.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Get Started?</h3>
                <p className="text-gray-800 mb-4">
                  Book a free consultation to discuss which service fits your business and learn how we can help 
                  generate more qualified leads.
                </p>
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer items={footerItems} />
    </>
  );
}


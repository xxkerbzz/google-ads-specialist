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
  title: 'Google Ads FAQ for Service Businesses | LeadGen Ads',
  description: 'Frequently asked questions about Google Ads management for service businesses. Learn about our services, pricing, process, and what to expect.',
  canonical: 'https://leadgenads.com/faq',
});

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'FAQ', url: '/faq' },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of service businesses do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work exclusively with local service businesses including HVAC, plumbing, electrical, roofing, landscaping, home remodeling, pest control, and cleaning services. We do not work with e-commerce, SaaS, or B2B tech companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you require long-term contracts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, we work month-to-month with no long-term contracts. You can cancel anytime if it\'s not working for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Google Ads management cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our Google Search Ads management is $1,500/month plus your ad spend (minimum $1,500/month ad spend). Local Service Ads management is $800/month plus pay-per-lead costs. Display Remarketing is $700/month plus your ad spend (minimum $500/month).',
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <Navigation items={navItems} />
      
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">General Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What types of service businesses do you work with?</h3>
                  <p className="text-gray-700">
                    We work exclusively with local service businesses including HVAC, plumbing, electrical, roofing, 
                    landscaping, home remodeling, pest control, and cleaning services. We do not work with e-commerce, 
                    SaaS, or B2B tech companies. Our specialization allows us to deliver better results for service 
                    businesses.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Why should I hire a Google Ads specialist instead of managing it myself?</h3>
                  <p className="text-gray-700">
                    Managing Google Ads effectively requires expertise, time, and staying current with platform changes. 
                    A specialist can help you avoid costly mistakes, optimize campaigns for better ROI, and free up your 
                    time to focus on running your business. Most service business owners find that hiring a specialist 
                    pays for itself through better results and time savings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How is LeadGen Ads different from other agencies?</h3>
                  <p className="text-gray-700">
                    We specialize exclusively in service businesses, so we understand your unique needs. You work 
                    directly with the specialist managing your account—no account managers or offshore teams. We work 
                    month-to-month with no long-term contracts. And we focus on qualified leads that convert, not just 
                    traffic volume.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Service Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What's included in Google Search Ads management?</h3>
                  <p className="text-gray-700">
                    Our Google Search Ads management includes keyword research, competitor analysis, ad copywriting, 
                    A/B testing, negative keyword management, location targeting, call extension optimization, weekly 
                    optimization, monthly strategy calls, and detailed performance reporting.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What's the difference between Google Search Ads and Local Service Ads?</h3>
                  <p className="text-gray-700">
                    Google Search Ads are pay-per-click ads that appear in search results. You pay for each click. 
                    Local Service Ads (LSA) are pay-per-lead ads that appear at the top of search results. You only 
                    pay for actual leads. LSA is often more cost-effective for service businesses, but both can be 
                    effective depending on your goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How often will we communicate?</h3>
                  <p className="text-gray-700">
                    You'll receive weekly performance reports and have monthly strategy calls. You also have direct 
                    access to the specialist managing your account and can reach out anytime with questions. We respond 
                    to all inquiries within 24 hours.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Pricing Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How much does Google Ads management cost?</h3>
                  <p className="text-gray-700">
                    Our Google Search Ads management is $1,500/month plus your ad spend (minimum $1,500/month ad spend 
                    required). Local Service Ads management is $800/month plus pay-per-lead costs. Display Remarketing 
                    is $700/month plus your ad spend (minimum $500/month). All services are month-to-month with no 
                    long-term contracts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Are there any hidden fees?</h3>
                  <p className="text-gray-700">
                    No, our pricing is transparent. The management fee is clearly stated, and you pay your ad spend 
                    directly to Google (or pay-per-lead costs for LSA). There are no setup fees, no hidden charges, 
                    and no long-term contracts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What if I want to cancel?</h3>
                  <p className="text-gray-700">
                    You can cancel anytime with no penalty. Since we work month-to-month, you're not locked into any 
                    long-term commitment. We just ask for 30 days notice so we can wrap up any active campaigns properly.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Process Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How do we get started?</h3>
                  <p className="text-gray-700">
                    Start by booking a free consultation. We'll discuss your business, your goals, and which service 
                    might be the best fit. If we decide to work together, we'll set up your account, build your 
                    campaigns, and start generating leads. The whole process typically takes 1-2 weeks from consultation 
                    to launch.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Do I need to give you access to my Google Ads account?</h3>
                  <p className="text-gray-700">
                    Yes, we'll need access to your Google Ads account to manage your campaigns. You maintain full 
                    ownership and can revoke access anytime. We also recommend giving us access to your Google Analytics 
                    account so we can track conversions and optimize for better results.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How long until I see results?</h3>
                  <p className="text-gray-700">
                    Most clients start seeing leads within 1-2 weeks of campaign launch. However, it typically takes 
                    2-3 months to fully optimize campaigns and see consistent, predictable results. We'll keep you 
                    updated on progress throughout the process.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Results Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What kind of results can I expect?</h3>
                  <p className="text-gray-700">
                    Results vary by industry, location, and business, but most clients see 2-4x increase in qualified 
                    leads, 40-60% reduction in cost per lead, and improved ROI from break-even or low returns to 4:1 or 
                    better. We focus on qualified leads that convert, not just traffic volume.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How do you measure success?</h3>
                  <p className="text-gray-700">
                    We measure success by qualified leads that convert into customers, not just clicks or traffic. 
                    Every campaign is optimized for lead quality and conversion. You'll receive weekly reports showing 
                    lead volume, cost per lead, conversion rates, and ROI.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What if my campaigns aren't performing well?</h3>
                  <p className="text-gray-700">
                    We continuously optimize campaigns to improve performance. If campaigns aren't meeting expectations, 
                    we'll work with you to identify issues and make adjustments. If we can't deliver results after a 
                    reasonable optimization period, you can cancel anytime with no penalty.
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Still Have Questions?</h3>
              <p className="text-gray-700 mb-4">
                Book a free consultation to discuss your specific needs and get answers to any questions you have. 
                There's no obligation, no pressure—just a conversation about how we can help.
              </p>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer items={footerItems} />
    </>
  );
}


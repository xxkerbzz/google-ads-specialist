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
  title: 'About LeadGen Ads - Google Ads Specialist for Service Businesses',
  description: 'Learn about LeadGen Ads, a specialized Google Ads management service for service businesses. Direct access to the specialist, no contracts, just results.',
  canonical: 'https://leadgenads.com/about',
});

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
];

const organizationSchema = {
  '@type': 'Organization',
  name: 'LeadGen Ads',
  url: 'https://leadgenads.com',
  description: 'Specialized Google Ads management for service businesses',
};

export default function AboutPage() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <Navigation items={navItems} />
      
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About LeadGen Ads</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                LeadGen Ads exists to help service businesses turn Google Ads into a predictable lead generation machine. 
                We believe that every service business owner deserves direct access to an expert who understands their 
                industry and can deliver real results—not just traffic, but qualified leads that convert into customers.
              </p>
              <p className="text-gray-700">
                Our mission is to eliminate the frustration that comes with working with large agencies that over-promise 
                and under-deliver, or trying to manage Google Ads yourself without the expertise needed to succeed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why We Focus on Service Businesses</h2>
              <p className="text-gray-700 mb-4">
                Service businesses have unique needs when it comes to Google Ads. Unlike e-commerce or SaaS companies, 
                service businesses need to target local customers, handle emergency and seasonal demand, and convert 
                clicks into actual service appointments—not just website visits.
              </p>
              <p className="text-gray-700 mb-4">
                We've chosen to specialize exclusively in service businesses because we understand these nuances. We know 
                that a plumbing company needs different keywords than a software company. We know that HVAC businesses 
                need to handle both emergency calls and seasonal campaigns. We know that roofing companies need to 
                target homeowners at the right time of year.
              </p>
              <p className="text-gray-700">
                By focusing only on service businesses, we can deliver better results than generalist agencies that try 
                to serve everyone.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">What Makes Us Different</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Access to the Specialist</h3>
                  <p className="text-gray-700">
                    When you work with LeadGen Ads, you work directly with the person managing your campaigns. No 
                    account managers, no offshore teams, no phone trees. Just direct communication with someone who 
                    actually knows your account and your business.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Long-Term Contracts</h3>
                  <p className="text-gray-700">
                    We're confident in our ability to deliver results, which is why we work month-to-month. If we're not 
                    delivering value, you can leave anytime. No pressure, no contracts, just results.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Focus on Qualified Leads</h3>
                  <p className="text-gray-700">
                    We don't measure success by traffic volume or clicks. We measure success by qualified leads that 
                    convert into customers. Every campaign is optimized for lead quality, not just quantity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Reporting</h3>
                  <p className="text-gray-700">
                    You'll receive weekly performance reports that you can actually understand. No jargon, no fluff—just 
                    clear metrics showing how your campaigns are performing and what we're doing to improve them.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">How We Work</h2>
              <p className="text-gray-700 mb-4">
                When you become a client, we start with a deep understanding of your business, your target customers, 
                and your goals. We then build campaigns specifically tailored to your needs—not a one-size-fits-all 
                approach.
              </p>
              <p className="text-gray-700 mb-4">
                We manage your campaigns with weekly optimizations, monthly strategy calls, and continuous monitoring 
                to ensure you're getting the best possible results. You'll have complete transparency into your account 
                and direct access to ask questions or request changes.
              </p>
              <p className="text-gray-700">
                Our goal is to make Google Ads work for your business, not the other way around.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Approach to Google Ads</h2>
              <p className="text-gray-700 mb-4">
                We take a strategic, data-driven approach to Google Ads management. Every decision is based on data, 
                not guesswork. We continuously test and optimize to improve performance, always with the goal of 
                generating more qualified leads at a lower cost.
              </p>
              <p className="text-gray-700 mb-4">
                We focus on the fundamentals: proper keyword research, compelling ad copy, effective landing pages, and 
                strategic bidding. But we also stay current with the latest Google Ads features and best practices to 
                ensure your campaigns are always optimized.
              </p>
              <p className="text-gray-700">
                Most importantly, we understand that Google Ads is just one part of your marketing mix. We work to 
                integrate your campaigns with your overall business goals and ensure everything aligns to drive real 
                business results.
              </p>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-4">
                Book a free consultation to discuss your Google Ads needs and learn how we can help turn your 
                campaigns into a predictable lead generation machine.
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


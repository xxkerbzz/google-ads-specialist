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
  title: 'Google Ads Case Studies for Service Businesses | LeadGen Ads',
  description: 'Real Google Ads results from real service businesses. See how we help HVAC, plumbing, electrical, and roofing companies generate more qualified leads.',
  canonical: 'https://leadgenads.com/case-studies',
});

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Case Studies', url: '/case-studies' },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation items={navItems} />
      
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Case Studies</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-12">
              Real results from real service businesses. Here's how we've helped companies across different industries 
              turn Google Ads into a predictable lead generation machine.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">HVAC Company Case Study</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 mb-2"><strong>Industry:</strong> HVAC</p>
                <p className="text-gray-700 mb-2"><strong>Location:</strong> Metro Area, 500K+ population</p>
                <p className="text-gray-700 mb-2"><strong>Service:</strong> Google Search Ads Management</p>
                <p className="text-gray-700 mb-4"><strong>Time Period:</strong> 6 months</p>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Challenge</h3>
              <p className="text-gray-700 mb-4">
                This HVAC company was spending $3,000/month on Google Ads but only generating 5-8 leads per month, 
                with a cost per lead of $400-600. Many leads were unqualified or from outside their service area. 
                They needed more qualified leads at a lower cost.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Solution</h3>
              <p className="text-gray-700 mb-4">
                We restructured their campaigns to focus on emergency HVAC keywords, improved location targeting to 
                exclude areas outside their service zone, optimized ad copy to attract qualified customers, and 
                implemented call extensions for better conversion tracking.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Results</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Lead volume increased from 5-8/month to 25-30/month</li>
                <li>Cost per lead decreased from $400-600 to $120-150</li>
                <li>Lead quality improved significantly (better qualification through improved targeting)</li>
                <li>ROI improved from break-even to 4:1 return on ad spend</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Plumbing Service Case Study</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 mb-2"><strong>Industry:</strong> Plumbing</p>
                <p className="text-gray-700 mb-2"><strong>Location:</strong> Suburban Area, 200K+ population</p>
                <p className="text-gray-700 mb-2"><strong>Service:</strong> Local Service Ads (LSA) Management</p>
                <p className="text-gray-700 mb-4"><strong>Time Period:</strong> 4 months</p>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Challenge</h3>
              <p className="text-gray-700 mb-4">
                This plumbing service wanted to try Local Service Ads but didn't know how to set them up or optimize 
                them. They were getting some leads but the cost per lead was high and lead quality was inconsistent.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Solution</h3>
              <p className="text-gray-700 mb-4">
                We set up their LSA profile, optimized their job types and service areas, improved their review 
                management to boost ranking, and implemented lead tracking to monitor quality and dispute invalid leads.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Results</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Lead volume increased from 8-10/month to 35-40/month</li>
                <li>Cost per lead decreased from $85 to $45</li>
                <li>Lead quality improved through better job type targeting</li>
                <li>Invalid lead disputes reduced costs by 15%</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Electrical Contractor Case Study</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 mb-2"><strong>Industry:</strong> Electrical</p>
                <p className="text-gray-700 mb-2"><strong>Location:</strong> Urban Area, 1M+ population</p>
                <p className="text-gray-700 mb-2"><strong>Service:</strong> Google Search Ads + Display Remarketing</p>
                <p className="text-gray-700 mb-4"><strong>Time Period:</strong> 8 months</p>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Challenge</h3>
              <p className="text-gray-700 mb-4">
                This electrical contractor was running their own Google Ads campaigns but wasn't seeing consistent 
                results. They were getting traffic but not enough qualified leads, and they didn't have time to 
                manage and optimize campaigns themselves.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Solution</h3>
              <p className="text-gray-700 mb-4">
                We took over their search campaigns, restructured them for better performance, and added display 
                remarketing to capture leads from visitors who didn't convert on their first visit. We also 
                optimized their landing pages for better conversion rates.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Results</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Qualified lead volume increased from 10-12/month to 40-45/month</li>
                <li>Cost per lead decreased from $180 to $95</li>
                <li>Remarketing campaigns generated 30% of total leads at lower cost</li>
                <li>Overall ROI improved from 2:1 to 5:1</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Roofing Company Case Study</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 mb-2"><strong>Industry:</strong> Roofing</p>
                <p className="text-gray-700 mb-2"><strong>Location:</strong> Metro Area, 800K+ population</p>
                <p className="text-gray-700 mb-2"><strong>Service:</strong> Google Search Ads Management</p>
                <p className="text-gray-700 mb-4"><strong>Time Period:</strong> 6 months</p>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Challenge</h3>
              <p className="text-gray-700 mb-4">
                This roofing company needed to generate leads during peak season (spring/summer) but was struggling 
                with high competition and rising costs. They were spending $5,000/month but only getting 15-20 leads, 
                with many being tire-kickers or from outside their service area.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Solution</h3>
              <p className="text-gray-700 mb-4">
                We implemented seasonal campaign strategies, improved location targeting, optimized for high-intent 
                keywords, and created ad copy that pre-qualified leads. We also set up separate campaigns for different 
                service types (repairs vs. replacements).
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Results</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Lead volume increased from 15-20/month to 50-60/month during peak season</li>
                <li>Cost per lead decreased from $250-330 to $100-120</li>
                <li>Lead quality improved significantly (better qualification through targeting and ad copy)</li>
                <li>ROI improved from 2:1 to 6:1 during peak season</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Results Across Industries</h2>
              <p className="text-gray-700 mb-4">
                While results vary by industry, location, and business, we consistently help service businesses:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Increase qualified lead volume by 2-4x</li>
                <li>Reduce cost per lead by 40-60%</li>
                <li>Improve ROI from break-even or low returns to 4:1 or better</li>
                <li>Generate more predictable, consistent lead flow</li>
              </ul>
              <p className="text-gray-700">
                The key is understanding each business's unique needs, target customers, and goals—then building 
                campaigns specifically tailored to those factors.
              </p>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to See Similar Results?</h3>
              <p className="text-gray-700 mb-4">
                See how we can generate similar results for your business. Book a consultation to discuss your goals 
                and learn how we can help turn your Google Ads into a predictable lead generation machine.
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


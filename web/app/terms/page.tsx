import { generateMetadata } from '@/app/lib/seo-utils';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';

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
  title: 'Terms of Service | LeadGen Ads',
  description: 'Terms of service for LeadGen Ads. Read our service agreement, payment terms, and cancellation policy.',
  canonical: 'https://leadgenads.com/terms',
});

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Terms of Service', url: '/terms' },
];

export default function TermsPage() {
  return (
    <>
      <Navigation items={navItems} />
      
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              <strong>Last Updated:</strong> December 7, 2024
            </p>
            
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Service Agreement</h2>
              <p className="text-gray-700 mb-4">
                By engaging LeadGen Ads for Google Ads management services, you agree to these terms of service. 
                Our services are provided on a month-to-month basis with no long-term contracts.
              </p>
              <p className="text-gray-700 mb-4">
                We will provide Google Ads management services as described in your service agreement, including 
                campaign setup, optimization, reporting, and consultation. We will use our best efforts to improve 
                your campaign performance, but we cannot guarantee specific results.
              </p>
              <p className="text-gray-700">
                You agree to provide accurate information about your business, grant us necessary access to your 
                Google Ads account, and cooperate with our recommendations to the best of your ability.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Management fees are billed monthly in advance. Payment is due within 15 days of invoice date. 
                Late payments may result in suspension of services.
              </p>
              <p className="text-gray-700 mb-4">
                Ad spend is paid directly to Google (or pay-per-lead costs for Local Service Ads). We do not 
                handle ad spend payments. You are responsible for maintaining sufficient budget in your Google 
                Ads account.
              </p>
              <p className="text-gray-700">
                All fees are non-refundable except as required by law. If you cancel mid-month, services will 
                continue through the end of the billing period.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">As a client, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Provide accurate information about your business and goals</li>
                <li>Grant necessary access to Google Ads and Analytics accounts</li>
                <li>Respond to requests for information in a timely manner</li>
                <li>Maintain sufficient ad budget in your Google Ads account</li>
                <li>Notify us of any changes that may affect campaign performance</li>
                <li>Use our services in compliance with Google Ads policies</li>
              </ul>
              <p className="text-gray-700">
                You retain full ownership of your Google Ads account and can revoke access at any time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Cancellation Policy</h2>
              <p className="text-gray-700 mb-4">
                Either party may cancel services at any time with 30 days written notice. Since we work 
                month-to-month, there are no penalties for cancellation.
              </p>
              <p className="text-gray-700 mb-4">
                Upon cancellation, we will:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Complete any active work through the end of the billing period</li>
                <li>Provide a final performance report</li>
                <li>Transfer account access back to you</li>
                <li>Provide documentation of campaign structure and optimizations</li>
              </ul>
              <p className="text-gray-700">
                You remain responsible for payment of all fees incurred through the end of the billing period.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                While we use our best efforts to improve your Google Ads performance, we cannot guarantee specific 
                results. Campaign performance depends on many factors beyond our control, including market conditions, 
                competition, and changes to Google's platform.
              </p>
              <p className="text-gray-700 mb-4">
                Our liability is limited to the amount of management fees paid in the month in which the issue 
                occurred. We are not liable for indirect, incidental, or consequential damages.
              </p>
              <p className="text-gray-700">
                You are responsible for ensuring your Google Ads account complies with Google's policies. We are 
                not responsible for account suspensions or penalties resulting from policy violations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                You retain ownership of your Google Ads account, campaigns, and data. We retain ownership of our 
                methodologies, processes, and proprietary tools.
              </p>
              <p className="text-gray-700">
                We may use anonymized performance data for case studies and marketing purposes, but we will never 
                disclose your business name or specific details without your permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these terms of service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@leadgenads.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer items={footerItems} />
    </>
  );
}


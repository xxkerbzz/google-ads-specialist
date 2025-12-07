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
  title: 'Privacy Policy | LeadGen Ads',
  description: 'Privacy policy for LeadGen Ads. Learn how we collect, use, and protect your personal information.',
  canonical: 'https://leadgenads.com/privacy',
});

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Privacy Policy', url: '/privacy' },
];

export default function PrivacyPage() {
  return (
    <>
      <Navigation items={navItems} />
      
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              <strong>Last Updated:</strong> December 7, 2024
            </p>
            
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Business information (business name, type, location)</li>
                <li>Information you provide in consultation requests or contact forms</li>
                <li>Account information if you become a client</li>
              </ul>
              <p className="text-gray-700">
                We also automatically collect certain information when you visit our website, including IP address, 
                browser type, device information, and usage data through cookies and similar technologies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you information about our services (with your consent)</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-gray-700">
                We do not sell your personal information to third parties. We may share information with service 
                providers who help us operate our business, but only to the extent necessary to provide our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Data Protection</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the Internet or electronic storage is 100% secure.
              </p>
              <p className="text-gray-700">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in 
                this privacy policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us using the information provided in the Contact Us section below.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to collect information about your browsing behavior. You can 
                control cookies through your browser settings, but disabling cookies may limit your ability to use 
                certain features of our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this privacy policy or our data practices, please contact us:
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


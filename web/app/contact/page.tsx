import { generateMetadata } from '@/app/lib/seo-utils';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import StructuredData from '@/app/components/StructuredData';

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
  title: 'Contact LeadGen Ads - Free Google Ads Consultation',
  description: 'Book a free Google Ads consultation with LeadGen Ads. No obligation, no pressure—just a conversation about how we can help your service business generate more qualified leads.',
  canonical: 'https://leadgenads.com/contact',
});

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Contact', url: '/contact' },
];

const contactPageSchema = {
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'LeadGen Ads',
    url: 'https://leadgenads.com',
  },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData data={contactPageSchema} />
      <Navigation items={navItems} />
      
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Book a Free Consultation</h2>
              <p className="text-gray-800 mb-4">
                Ready to turn Google Ads into a predictable lead generation machine? Book a free consultation to 
                discuss your business, your goals, and how we can help.
              </p>
              <p className="text-gray-800 mb-6">
                During the consultation, we'll:
              </p>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 mb-6">
                <li>Learn about your business and target customers</li>
                <li>Discuss your current Google Ads performance (if applicable)</li>
                <li>Identify opportunities for improvement</li>
                <li>Explain our services and approach</li>
                <li>Answer any questions you have</li>
                <li>Help you decide if we're a good fit</li>
              </ul>
              <p className="text-gray-800 mb-6">
                There's no obligation, no pressure, and no sales pitch—just a conversation about how we can help 
                your service business generate more qualified leads.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule Your Consultation</h3>
                <p className="text-gray-800 mb-4">
                  Use the form below to request a consultation, or email us directly. We'll respond within 24 hours 
                  to schedule a time that works for you.
                </p>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-gray-900 mb-1">
                      Business Type
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      placeholder="e.g., HVAC, Plumbing, Electrical"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900"
                      placeholder="Tell us about your business and what you'd like to discuss..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Request Consultation
                  </button>
                </form>
                <p className="text-sm text-gray-700 mt-4">
                  Note: This is a demo form. In production, connect this to your email service or form handler 
                  (e.g., Formspree, SendGrid, or Calendly integration).
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-800 mb-4">
                Prefer to reach out directly? You can email us or call us. We respond to all inquiries within 24 hours.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-800 mb-2"><strong>Email:</strong> info@leadgenads.com</p>
                <p className="text-gray-800 mb-2"><strong>Phone:</strong> (555) 123-4567</p>
                <p className="text-gray-800"><strong>Response Time:</strong> Within 24 hours</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How long does a consultation take?</h3>
                  <p className="text-gray-800">
                    Most consultations last 30-45 minutes. We'll discuss your business, your goals, and how we can 
                    help. There's no pressure to sign up—we want to make sure we're a good fit for each other.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What should I prepare for the consultation?</h3>
                  <p className="text-gray-800">
                    Just come ready to talk about your business, your target customers, and your goals. If you're 
                    currently running Google Ads, it's helpful to have access to your account so we can review it 
                    together, but it's not required.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Is there any cost for the consultation?</h3>
                  <p className="text-gray-800">
                    No, the consultation is completely free with no obligation. We want to make sure we're a good 
                    fit before you commit to anything.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Response Time</h2>
              <p className="text-gray-800 mb-4">
                We're committed to responding to all inquiries within 24 hours. If you submit a consultation request 
                or send us an email, you'll hear back from us within one business day.
              </p>
              <p className="text-gray-800">
                For urgent matters, please call us directly. We understand that service businesses sometimes need 
                quick responses, and we'll do our best to accommodate.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer items={footerItems} />
    </>
  );
}


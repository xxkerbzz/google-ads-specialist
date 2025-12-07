'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { ContentData } from '@/app/lib/content';

interface PillarPageTemplateProps {
  content: ContentData;
  childPages?: { title: string; url: string; description?: string }[];
}

export default function PillarPageTemplate({ content, childPages = [] }: PillarPageTemplateProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);
  const [processedContent, setProcessedContent] = useState(content.htmlContent);

  useEffect(() => {
    // Extract headings from HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(content.htmlContent, 'text/html');
    const h2Elements = Array.from(doc.querySelectorAll('h2'));
    const extractedHeadings = h2Elements.map((h2, index) => {
      const id = `section-${index}`;
      h2.id = id;
      return { id, text: h2.textContent || '', level: 2 };
    });
    setHeadings(extractedHeadings);

    // Update HTML with IDs
    const updatedContent = doc.body.innerHTML;
    setProcessedContent(updatedContent);

    // Scroll detection
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      // Find active section
      const sections = extractedHeadings.map(h => {
        const element = document.getElementById(h.id);
        return { id: h.id, offsetTop: element?.offsetTop || 0 };
      });
      
      const scrollPosition = window.scrollY + 200;
      const active = sections
        .filter(s => s.offsetTop <= scrollPosition)
        .sort((a, b) => b.offsetTop - a.offsetTop)[0];
      
      if (active) setActiveSection(active.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content.htmlContent]);

  const calculateReadingTime = (wordCount?: number) => {
    if (!wordCount) return '5 min';
    return `${Math.ceil(wordCount / 200)} min`;
  };

  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Resources', url: '/resources' },
    { label: content.frontmatter.title, url: `/resources/${content.frontmatter.slug}` },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {content.frontmatter.title}
          </h1>
          {content.frontmatter.featuredSnippet && (
            <p className="text-xl text-gray-800 mb-4">{content.frontmatter.featuredSnippet}</p>
          )}
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            {content.frontmatter.wordCount && (
              <span>{content.frontmatter.wordCount.toLocaleString()} words</span>
            )}
            <span>{calculateReadingTime(content.frontmatter.wordCount)} read</span>
            {content.frontmatter.lastUpdated && (
              <span>Updated {new Date(content.frontmatter.lastUpdated).toLocaleDateString()}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: processedContent }}
              style={{
                '--tw-prose-headings': '#111827',
                '--tw-prose-links': '#2563EB',
              } as React.CSSProperties}
            />
            
            {/* Child Pages Section */}
            {childPages.length > 0 && (
              <section className="mt-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Explore This Topic</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {childPages.map((page) => (
                    <Link
                      key={page.url}
                      href={page.url}
                      className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{page.title}</h3>
                      {page.description && (
                        <p className="text-gray-700">{page.description}</p>
                      )}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="mb-6 text-blue-100">
                Book a free consultation to discuss your Google Ads needs and learn how we can help 
                turn your campaigns into a predictable lead generation machine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-center border border-blue-500"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>

          {/* Table of Contents Sidebar */}
          {headings.length > 0 && (
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <details className="lg:hidden mb-4">
                  <summary className="cursor-pointer font-semibold text-gray-900">
                    Table of Contents
                  </summary>
                  <nav className="mt-2 space-y-1">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block py-1 text-sm ${
                          activeSection === heading.id
                            ? 'text-blue-600 font-semibold'
                            : 'text-gray-700 hover:text-gray-900'
                        }`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </details>
                <nav className="hidden lg:block space-y-1">
                  <h3 className="font-semibold text-gray-900 mb-3">Table of Contents</h3>
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={`block py-1 text-sm ${
                        activeSection === heading.id
                          ? 'text-blue-600 font-semibold border-l-4 border-blue-600 pl-2'
                          : 'text-gray-700 hover:text-gray-900 pl-2'
                      }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}


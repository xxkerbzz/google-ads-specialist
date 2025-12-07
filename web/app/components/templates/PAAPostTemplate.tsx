'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import StructuredData from '@/app/components/StructuredData';
import { ContentData } from '@/app/lib/content';

interface PAAPostTemplateProps {
  content: ContentData;
}

export default function PAAPostTemplate({ content }: PAAPostTemplateProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [questionHeadings, setQuestionHeadings] = useState<Array<{ id: string; text: string }>>([]);
  const [processedContent, setProcessedContent] = useState(content.htmlContent);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content.htmlContent, 'text/html');
    const h2Elements = Array.from(doc.querySelectorAll('h2'));
    const questions = h2Elements
      .filter(h2 => h2.textContent?.includes('?'))
      .map((h2, index) => {
        const id = `question-${index}`;
        h2.id = id;
        h2.className = 'border-l-4 border-amber-500 pl-4';
        return { id, text: h2.textContent || '' };
      });
    setQuestionHeadings(questions);

    const updatedContent = doc.body.innerHTML;
    setProcessedContent(updatedContent);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
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
    ...(content.frontmatter.grandparentUrl ? [
      { label: content.frontmatter.grandparentTitle || 'Parent', url: content.frontmatter.grandparentUrl },
    ] : []),
    ...(content.frontmatter.parentUrl ? [
      { label: content.frontmatter.parentTitle || 'Parent', url: content.frontmatter.parentUrl },
    ] : []),
    { label: content.frontmatter.title, url: `/resources/${content.frontmatter.slug}` },
  ];

  const faqSchema = content.frontmatter.faq ? {
    '@type': 'FAQPage',
    mainEntity: content.frontmatter.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      {faqSchema && <StructuredData data={faqSchema} />}
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={breadcrumbs} />
          
          {/* Hero Section */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.frontmatter.title}
            </h1>
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

          {/* Questions Navigation (if more than 3) */}
          {questionHeadings.length > 3 && (
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Questions Answered</h2>
              <ul className="space-y-2">
                {questionHeadings.map((question) => (
                  <li key={question.id}>
                    <a
                      href={`#${question.id}`}
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      {question.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Ready to Get Started?</h2>
            <p className="mb-4 text-blue-50 text-sm">
              Book a free consultation to discuss your Google Ads needs.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block text-sm"
            >
              Book a Free Consultation
            </Link>
          </div>
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
    </>
  );
}


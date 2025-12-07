import { notFound } from 'next/navigation';
import { generateMetadata as generateSEOMetadata } from '@/app/lib/seo-utils';
import { getContentBySlug, getAllContentSlugs, getChildPages } from '@/app/lib/content';
import PillarTemplate from '@/app/components/templates/PillarTemplate';
import SubtopicTemplate from '@/app/components/templates/SubtopicTemplate';
import PAATemplate from '@/app/components/templates/PAATemplate';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const slugs = await getAllContentSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const content = await getContentBySlug(slug);
  
  if (!content) {
    return {
      title: 'Page Not Found | LeadGen Ads',
    };
  }

  return generateSEOMetadata({
    title: content.frontmatter.metaTitle,
    description: content.frontmatter.metaDescription,
    canonical: `https://leadgenads.com/resources/${slug.join('/')}`,
  });
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const content = await getContentBySlug(slug);

  if (!content) {
    notFound();
  }

  // Get child pages for pillar and subtopic pages
  const currentUrl = `/resources/${slug.join('/')}`;
  const childPages = await getChildPages(currentUrl);

  // Render the appropriate template
  // Templates now include Navigation, Footer, StructuredData internally
  if (content.frontmatter.template === 'pillar') {
    return <PillarTemplate content={content} childPages={childPages} />;
  }
  
  if (content.frontmatter.template === 'subtopic') {
    return <SubtopicTemplate content={content} childPages={childPages} />;
  }
  
  if (content.frontmatter.template === 'paa') {
    return <PAATemplate content={content} />;
  }

  // Default to pillar template
  return <PillarTemplate content={content} childPages={childPages} />;
}


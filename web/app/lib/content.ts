import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getSiteConfig } from './site-config';

// Get content directory from config
const config = getSiteConfig();
const contentDirectory = path.isAbsolute(config.contentDirectory)
  ? config.contentDirectory
  : path.join(process.cwd(), config.contentDirectory);

export interface ContentFrontmatter {
  title: string;
  slug: string;
  template: 'pillar' | 'subtopic' | 'paa';
  metaTitle: string;
  metaDescription: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  featuredSnippet?: string;
  parentUrl: string;
  parentTitle: string;
  grandparentUrl?: string;
  grandparentTitle?: string;
  greatGrandparentUrl?: string;
  greatGrandparentTitle?: string;
  childUrls?: string[];
  schema: string;
  faq?: Array<{ question: string; answer: string }>;
  wordCount?: number;
  lastUpdated?: string;
}

export interface ContentData {
  frontmatter: ContentFrontmatter;
  content: string;
  slug: string[];
}

export async function getContentBySlug(slugArray: string[]): Promise<ContentData | null> {
  try {
    let filePath: string;
    const siteConfig = getSiteConfig();
    
    if (slugArray.length === 1) {
      // Pillar page
      if (siteConfig.useStandardNaming) {
        const silo = slugArray[0];
        filePath = path.join(contentDirectory, `Pillar - ${silo}`, `${silo}.md`);
      } else {
        const pattern = siteConfig.customFolderPatterns?.pillar || 'pillars/{slug}';
        const folderPath = pattern.replace('{slug}', slugArray[0]);
        filePath = path.join(contentDirectory, folderPath, `${slugArray[0]}.md`);
      }
    } else if (slugArray.length === 2) {
      // Subtopic/Cluster page
      const [silo, subtopic] = slugArray;
      if (siteConfig.useStandardNaming) {
        filePath = path.join(contentDirectory, `Pillar - ${silo}`, `Cluster - ${subtopic}`, `${subtopic}.md`);
      } else {
        const pattern = siteConfig.customFolderPatterns?.cluster || '{parent}/{slug}';
        const folderPath = pattern.replace('{parent}', silo).replace('{slug}', subtopic);
        filePath = path.join(contentDirectory, folderPath, `${subtopic}.md`);
      }
    } else if (slugArray.length === 3) {
      // PAA/Blog post
      const [silo, subtopic, post] = slugArray;
      if (siteConfig.useStandardNaming) {
        filePath = path.join(contentDirectory, `Pillar - ${silo}`, `Cluster - ${subtopic}`, 'Blog', `${post}.md`);
      } else {
        const blogFolder = siteConfig.customFolderPatterns?.blog || 'posts';
        const pattern = siteConfig.customFolderPatterns?.cluster || '{parent}/{subtopic}';
        const folderPath = pattern.replace('{parent}', silo).replace('{subtopic}', subtopic);
        filePath = path.join(contentDirectory, folderPath, blogFolder, `${post}.md`);
      }
    } else {
      return null;
    }

    if (!fs.existsSync(filePath)) {
      console.warn(`Content file not found: ${filePath}`);
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content: markdownContent } = matter(fileContents);

    return {
      frontmatter: data as ContentFrontmatter,
      content: markdownContent,
      slug: slugArray,
    };
  } catch (error) {
    console.error('Error loading content:', error);
    return null;
  }
}

export async function getAllContentSlugs(): Promise<string[][]> {
  const slugs: string[][] = [];
  const siteConfig = getSiteConfig();

  if (!fs.existsSync(contentDirectory)) {
    console.warn(`Content directory not found: ${contentDirectory}`);
    return slugs;
  }

  if (siteConfig.useStandardNaming) {
    // Standard naming: Pillar - {slug}, Cluster - {subtopic}, Blog/
    const pillarFolders = fs.readdirSync(contentDirectory, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && dirent.name.startsWith('Pillar - '))
      .map(dirent => ({
        folder: dirent.name,
        slug: dirent.name.replace('Pillar - ', '')
      }));

    for (const pillar of pillarFolders) {
      const pillarPath = path.join(contentDirectory, pillar.folder);
      
      // Check for pillar page
      const pillarFile = path.join(pillarPath, `${pillar.slug}.md`);
      if (fs.existsSync(pillarFile)) {
        slugs.push([pillar.slug]);
      }

      // Check for Cluster folders
      const clusterFolders = fs.readdirSync(pillarPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() && dirent.name.startsWith('Cluster - '))
        .map(dirent => ({
          folder: dirent.name,
          slug: dirent.name.replace('Cluster - ', '')
        }));

      for (const cluster of clusterFolders) {
        const clusterPath = path.join(pillarPath, cluster.folder);
        
        // Check for cluster/subtopic page
        const clusterFile = path.join(clusterPath, `${cluster.slug}.md`);
        if (fs.existsSync(clusterFile)) {
          slugs.push([pillar.slug, cluster.slug]);
        }

        // Check for Blog folder and posts inside it
        const blogFolder = path.join(clusterPath, 'Blog');
        if (fs.existsSync(blogFolder) && fs.statSync(blogFolder).isDirectory()) {
          const blogFiles = fs.readdirSync(blogFolder, { withFileTypes: true })
            .filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'))
            .map(dirent => dirent.name.replace('.md', ''));

          for (const post of blogFiles) {
            slugs.push([pillar.slug, cluster.slug, post]);
          }
        }
      }
    }
  } else {
    // Custom folder structure - implement based on customFolderPatterns
    console.warn('Custom folder patterns not fully implemented. Using standard naming is recommended.');
  }

  return slugs;
}

/**
 * Get child pages for a given URL
 */
export async function getChildPages(parentUrl: string): Promise<{ title: string; url: string; description?: string }[]> {
  const children: { title: string; url: string; description?: string }[] = [];
  const allSlugs = await getAllContentSlugs();
  const siteConfig = getSiteConfig();

  for (const slug of allSlugs) {
    const content = await getContentBySlug(slug);
    if (content && content.frontmatter.parentUrl === parentUrl) {
      children.push({
        title: content.frontmatter.title,
        url: `${siteConfig.resourcesBasePath}/${slug.join('/')}`,
        description: content.frontmatter.featuredSnippet || content.frontmatter.metaDescription,
      });
    }
  }

  return children;
}


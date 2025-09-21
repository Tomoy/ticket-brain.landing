import { marked } from 'marked';

// Import blog images
import blogWhyTicketBrainExists from '@/assets/blog-why-ticketbrain-exists.jpg';
import blogSmartGroceryShopping from '@/assets/blog-smart-grocery-shopping.jpg';
import blogReceiptData from '@/assets/blog-receipt-data.jpg';

// Configure marked options for better parsing
marked.setOptions({
  breaks: true,
  gfm: true
});

// Image mapping
const imageMap: Record<string, string> = {
  'blog-why-ticketbrain-exists.jpg': blogWhyTicketBrainExists,
  'blog-smart-grocery-shopping.jpg': blogSmartGroceryShopping,
  'blog-receipt-data.jpg': blogReceiptData,
};

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  excerpt: string;
  image?: string;
  imageUrl?: string;
}

// Simple frontmatter parser for browser compatibility
const parseFrontmatter = (content: string) => {
  const parts = content.split('---');
  if (parts.length < 3) return { data: {}, content };
  
  const frontmatterText = parts[1].trim();
  const markdownContent = parts.slice(2).join('---').trim();
  
  const data: Record<string, string> = {};
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
      data[key] = value;
    }
  });
  
  return { data, content: markdownContent };
};

// Import all markdown files
const postModules = import.meta.glob('/src/posts/*.md', { 
  as: 'raw',
  eager: true 
});

export const getAllPosts = (): BlogPost[] => {
  const posts: BlogPost[] = [];

  Object.entries(postModules).forEach(([path, content]) => {
    const { data, content: markdownContent } = parseFrontmatter(content);
    const slug = path.replace('/src/posts/', '').replace('.md', '');
    
    // Generate excerpt from content (first 150 characters)
    const plainText = markdownContent.replace(/[#*\[\]]/g, '').trim();
    const excerpt = plainText.length > 150 
      ? plainText.substring(0, 150) + '...'
      : plainText;

    posts.push({
      slug: data.slug || slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      description: data.description || '',
      content: marked.parse(markdownContent) as string,
      excerpt,
      image: data.image,
      imageUrl: data.image ? imageMap[data.image] : undefined
    });
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): BlogPost | null => {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug) || null;
};
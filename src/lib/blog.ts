import matter from 'gray-matter';
import { marked } from 'marked';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  excerpt: string;
}

// Import all markdown files
const postModules = import.meta.glob('/src/posts/*.md', { 
  as: 'raw',
  eager: true 
});

export const getAllPosts = (): BlogPost[] => {
  const posts: BlogPost[] = [];

  Object.entries(postModules).forEach(([path, content]) => {
    const { data, content: markdownContent } = matter(content);
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
      excerpt
    });
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): BlogPost | null => {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug) || null;
};
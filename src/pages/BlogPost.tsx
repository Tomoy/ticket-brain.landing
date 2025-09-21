import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getPostBySlug } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  useEffect(() => {
    if (post) {
      // Set SEO meta tags for individual blog post
      document.title = `${post.title} | TicketBrain Blog`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.description);
      }

      // OpenGraph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', `${post.title} | TicketBrain Blog`);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', post.description);
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', `${window.location.origin}/blog/${post.slug}`);
      }
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Back to Blog Link */}
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="ghost" className="pl-0">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {formatDate(post.date)}
            </Badge>
            
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.description}
            </p>
          </header>

          {/* Article Content */}
          <article 
            className="prose prose-lg max-w-none
              prose-headings:text-foreground
              prose-p:text-foreground/90
              prose-p:leading-relaxed
              prose-strong:text-foreground
              prose-ul:text-foreground/90
              prose-ol:text-foreground/90
              prose-li:text-foreground/90
              prose-blockquote:text-foreground/80
              prose-blockquote:border-l-primary
              prose-a:text-primary
              prose-a:no-underline
              hover:prose-a:text-primary/80
              prose-code:text-foreground
              prose-code:bg-muted
              prose-code:px-1
              prose-code:py-0.5
              prose-code:rounded
              prose-pre:bg-muted
              prose-pre:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t">
            <div className="flex justify-between items-center">
              <Link to="/blog">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  More Articles
                </Button>
              </Link>
              
              <div className="text-sm text-muted-foreground">
                Published {formatDate(post.date)}
              </div>
            </div>
          </footer>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
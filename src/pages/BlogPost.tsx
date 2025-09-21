import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getPostBySlug } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const post = slug ? getPostBySlug(slug, language) : null;

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
    const locale = language === 'es' ? 'es-ES' : 'en-US';
    return new Date(dateString).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog Link */}
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="ghost" className="pl-0">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('blog.backToBlog')}
              </Button>
            </Link>
          </div>

          {/* Hero Image */}
          {post.imageUrl && (
            <div className="relative w-full h-64 md:h-80 lg:h-96 mb-8 rounded-lg overflow-hidden">
              <img 
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Header */}
          <header className="mb-12 text-center">
            <Badge variant="secondary" className="mb-6">
              {formatDate(post.date)}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              {post.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {post.description}
            </p>
          </header>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto">
            <article 
              className="prose prose-lg prose-slate max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-h1:text-3xl prose-h1:mb-8 prose-h1:mt-12
                prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-10
                prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8
                prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:text-foreground/90 prose-ul:mb-6
                prose-ol:text-foreground/90 prose-ol:mb-6
                prose-li:text-foreground/90 prose-li:mb-2
                prose-blockquote:text-foreground/80 prose-blockquote:border-l-primary prose-blockquote:pl-6 prose-blockquote:italic
                prose-a:text-primary prose-a:no-underline prose-a:font-medium
                hover:prose-a:text-primary/80 hover:prose-a:underline
                prose-code:text-foreground prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                prose-pre:bg-muted prose-pre:text-foreground prose-pre:p-4 prose-pre:rounded-lg
                prose-img:rounded-lg prose-img:shadow-md
                [&>*:first-child]:mt-0"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link to="/blog">
                <Button variant="outline" className="w-full sm:w-auto">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t('blog.moreArticles')}
                </Button>
              </Link>
              
              <div className="text-sm text-muted-foreground">
                {t('blog.published')} {formatDate(post.date)}
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
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "@/lib/blog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const posts = getAllPosts();

  useEffect(() => {
    // Set SEO meta tags for blog listing page
    document.title = "Blog | TicketBrain - Smart Grocery Shopping Insights";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover insights about smart grocery shopping, AI-powered receipt analysis, and money-saving tips from the TicketBrain blog.');
    }

    // OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Blog | TicketBrain - Smart Grocery Shopping Insights');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Discover insights about smart grocery shopping, AI-powered receipt analysis, and money-saving tips from the TicketBrain blog.');
    }
  }, []);

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
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">TicketBrain Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights on smart grocery shopping, AI-powered receipt analysis, and practical money-saving tips.
            </p>
          </header>

          {/* Blog Posts Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                {/* Thumbnail Image */}
                {post.image && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <img 
                      src={`/src/assets/${post.image}`}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {formatDate(post.date)}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg mb-2 line-clamp-2">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  
                  <CardDescription className="text-sm line-clamp-2">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors text-sm"
                  >
                    Read more
                    <svg 
                      className="ml-1 w-3 h-3" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No blog posts available yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
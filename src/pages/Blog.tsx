import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Our Blog
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Stories, Updates & Insights
            </h1>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              Stay connected with our community through articles, success stories, 
              and updates on our ongoing initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Featured Post */}
          <div className="mb-16">
            <BlogCard post={featuredPost} featured />
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => (
              <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Never Miss an Update
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Subscribe to our newsletter for the latest stories, event announcements, 
            and opportunities to get involved.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

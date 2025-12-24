import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-8 animate-fade-in">
              Building Tomorrow, Together
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-8 leading-tight animate-fade-in-up text-balance">
              Empowering Communities Through{" "}
              <span className="text-primary">Collective Action</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We believe in the power of people coming together to create meaningful, 
              lasting change. Join us in building a more sustainable and connected future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, number: "5,000+", label: "Community Members" },
              { icon: Heart, number: "150+", label: "Projects Completed" },
              { icon: Globe, number: "25", label: "Partner Organizations" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-8 bg-card rounded-xl shadow-soft animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="font-display text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </p>
                <p className="font-body text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-6">
                Our Mission
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Creating Positive Change, One Step at a Time
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Horizon was founded with a simple belief: when people come together with 
                purpose and passion, there's no limit to what we can achieve. We focus on 
                sustainable development, community education, and creating opportunities 
                for meaningful engagement.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                Through our programs and initiatives, we've helped thousands of individuals 
                and families build stronger connections and brighter futures.
              </p>
              <Button variant="default" asChild>
                <Link to="/about">
                  Discover Our Story <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop&q=80"
                  alt="Community members working together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Latest Updates
              </span>
              <h2 className="font-display text-4xl font-semibold text-foreground">
                From Our Blog
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/blog">
                View All Posts <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <BlogCard post={featuredPost} featured />
          </div>

          {/* Recent Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Join our community of changemakers and be part of something bigger. 
            Whether you volunteer, donate, or spread the word, every action counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="xl"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link to="/contact">Join Our Community</Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

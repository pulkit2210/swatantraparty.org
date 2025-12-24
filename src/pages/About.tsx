import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Landmark, Zap, Shield, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Our Philosophy
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-8 leading-tight">
              The Need for a Grounded Economic Philosophy
            </h1>
            <p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
              After 75 years of independence, India has forged a powerful national identity rooted in its rich political and cultural history. Yet, a striking imbalance persists: while we vigorously debate culture and social values, our political economy rarely receives the same level of scrutiny.
            </p>
          </div>
        </div>
      </section>

      {/* The Economic Challenge */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                Since 1947, India’s economic identity has been an ideological roller-coaster—swinging from state-driven socialism and the "License Raj" to market liberalization, only to pivot back toward populist welfarism.
              </p>
              <p className="text-foreground font-medium">
                This inconsistency is a fundamental instability; it threatens the very growth story behind India’s global influence. Without a grounded economic philosophy, our nation remains just one populist turn away from a return to its "povertarian" roots.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-2xl border border-primary/10">
              <Landmark className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">Our Mission: Democratizing the Economy</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                We believe that for India to thrive, her political economy must be democratized and debated as fiercely as any other aspect of our politics. Our goal is to politicize economic policymaking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy / Provocation */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <Zap className="w-12 h-12 mx-auto mb-6 text-accent" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
            A Provocative Economic Framework
          </h2>
          <p className="text-xl opacity-90 leading-relaxed font-body">
            The most effective way to do this is by articulating a transparent, comprehensive, and even possibly provocative economic framework. We champion liberal, free-market ideas—the same principles that restored India’s prosperity post-1991—while grounding them in the unique sociological realities of post-independence India.
          </p>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80"
                  alt="C. Rajagopalachari Inspiration"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-center text-muted-foreground italic">Honoring the legacy of C. Rajagopalachari</p>
            </div>
            <div className="md:w-2/3">
              <h2 className="font-display text-4xl font-semibold text-foreground mb-8 flex items-center gap-3">
                <Shield className="text-primary" /> Our Inspiration: The Swatantra Spirit
              </h2>
              <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
                <p>
                  Our work is an ode to the <strong>Swatantra Party</strong>, founded by C. Rajagopalachari, the first and only Indian Governor-General and successor to Sardar Patel as Home Minister. At the height of India’s tilt toward Soviet-inspired planning, the Swatantra Party stood as the vanguard of free-market principles and liberal values.
                </p>
                <p>
                  As the primary opposition during the 1960s, they challenged the "License-Quota Raj" and championed the belief that economic liberty is the bedrock of a successful democracy.
                </p>
                <p className="text-foreground font-semibold">
                  Today, we revive that mission. We are dedicated to articulating a principled, market-leaning vision to ensure India’s path to prosperity is built on stability, freedom, and intellectual rigor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <BookOpen className="w-12 h-12 mx-auto mb-6 text-primary" />
          <h2 className="font-display text-4xl font-semibold text-foreground mb-6">
            Engage with the Vision
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join us in debating the framework that will define India's future. 
            Help us turn economic policymaking into a national priority.
          </p>
          <Button variant="default" size="xl" asChild>
            <Link to="/contact">
              Join the Dialogue <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;

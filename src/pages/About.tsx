import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Lightbulb, Users, Heart } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every initiative we undertake is guided by our commitment to creating measurable, positive impact in our communities."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creative solutions and new approaches to address the complex challenges facing our world today."
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "We believe in the power of diverse perspectives and ensure everyone has a seat at the table."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Empathy and understanding guide our interactions and drive our dedication to serving others."
    }
  ];

  const team = [
    { name: "Alexandra Chen", role: "Executive Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80" },
    { name: "Marcus Johnson", role: "Programs Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80" },
    { name: "Sofia Martinez", role: "Community Lead", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              About Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Our Story, Our Mission
            </h1>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              Founded in 2020, Horizon emerged from a collective dream to build stronger, 
              more resilient communities through grassroots action and meaningful partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop&q=80"
                  alt="Community gathering"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/20 rounded-2xl -z-10" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display text-4xl font-semibold text-foreground mb-6">
                How It All Began
              </h2>
              <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
                <p>
                  What started as a small group of neighbors wanting to improve their 
                  local park has grown into a movement touching thousands of lives across 
                  multiple communities.
                </p>
                <p>
                  Our founders believed that lasting change doesn't come from the top down—it 
                  grows from the ground up, nurtured by the hands of those who care most 
                  about their neighborhoods and neighbors.
                </p>
                <p>
                  Today, Horizon stands as a testament to what's possible when people unite 
                  around shared values and a common vision for a better tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Values
            </span>
            <h2 className="font-display text-4xl font-semibold text-foreground">
              What Guides Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card p-8 rounded-xl shadow-soft animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              Our Team
            </span>
            <h2 className="font-display text-4xl font-semibold text-foreground mb-4">
              Meet the People Behind Horizon
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team brings together diverse expertise and a shared passion 
              for community development.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-card mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="font-body text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-semibold text-foreground mb-6">
            Want to Join Our Journey?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals who want to make a difference. 
            Reach out to learn about volunteer opportunities and partnerships.
          </p>
          <Button variant="default" size="xl" asChild>
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;

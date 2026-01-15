import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { focusAreas } from "@/lib/data";
import { 
  Wheat, Droplets, Flower2, Cpu, Beef, TrendingUp, UtensilsCrossed, Leaf,
  Target, Eye, Compass, CheckCircle2
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wheat,
  Droplets,
  Flower2,
  Cpu,
  Beef,
  TrendingUp,
  UtensilsCrossed,
  Leaf,
};

const missionPoints = [
  "To promote high-quality agricultural research and innovation",
  "To support sustainable and climate-smart farming",
  "To connect researchers, industry experts, and practitioners",
  "To encourage interdisciplinary collaboration",
];

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="heading-display text-foreground mb-4">About AgriTech Insight</h1>
            <p className="text-body-lg text-muted-foreground">
              A peer-reviewed digital e-magazine dedicated to advancing agricultural knowledge 
              through rigorous research and practical insights.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary rounded-lg">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Vision</span>
              </div>
              <h2 className="heading-section text-foreground mb-6">
                Shaping the Future of Agriculture
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To become a globally recognized digital platform for disseminating innovative agricultural research, 
                sustainable farming solutions, and technological advancements that empower farmers, scientists, and policy makers.
              </p>
            </div>
            <Card className="academic-card overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary to-green-dark flex items-center justify-center">
                  <div className="text-center p-8">
                    <Eye className="h-16 w-16 text-gold mx-auto mb-4" />
                    <p className="text-primary-foreground font-serif text-xl italic">
                      "Advancing agricultural knowledge for a sustainable world"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-green-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary rounded-lg">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <h2 className="heading-section text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Driving positive change in agriculture through knowledge dissemination and collaboration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {missionPoints.map((point, index) => (
              <Card key={index} className="academic-card">
                <CardContent className="flex items-start gap-3 p-6">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground text-sm leading-relaxed">{point}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary rounded-lg">
                <Compass className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <h2 className="heading-section text-foreground mb-6">Our Purpose</h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              AgriTech Insight aims to serve as a knowledge hub where science meets practice. The magazine supports 
              informed decision-making in agriculture, environmental management, and rural development.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground text-sm">Articles Published</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground text-sm">Countries Represented</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-primary mb-2">1000+</div>
                <p className="text-muted-foreground text-sm">Registered Authors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-section text-foreground mb-4">Key Focus Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We cover a comprehensive range of agricultural disciplines to address the diverse 
              challenges facing modern agriculture
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => {
              const IconComponent = iconMap[area.icon] || Leaf;
              return (
                <Card key={area.title} className="academic-card group">
                  <CardContent className="p-6 text-center">
                    <div className="p-4 bg-green-light rounded-full w-fit mx-auto mb-4 group-hover:bg-primary transition-colors">
                      <IconComponent className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg mb-2">{area.title}</h3>
                    <p className="text-muted-foreground text-sm">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { focusAreas } from "@/lib/data";
import { 
  Wheat, Droplets, Flower2, Cpu, Beef, TrendingUp, UtensilsCrossed, Leaf,
  Target, Eye, Compass, CheckCircle2, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

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
      <section className="bg-secondary py-12 md:py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              About AgriTech Insight
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              A peer-reviewed digital e-magazine dedicated to advancing agricultural knowledge 
              through rigorous research and practical insights.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-[#467C4B] font-semibold text-sm uppercase tracking-wider bg-[#467C4B]/10 px-4 py-2 rounded-full">Our Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Shaping the Future of Agriculture
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                To become a globally recognized digital platform for disseminating innovative agricultural research, 
                sustainable farming solutions, and technological advancements that empower farmers, scientists, and policy makers.
              </p>
            </div>
            <Card className="border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#467C4B]/0 to-[#467C4B]/0 group-hover:from-[#467C4B]/5 group-hover:to-[#467C4B]/10 transition-all duration-300"></div>
              <CardContent className="p-0 relative z-10">
                <div className="aspect-video bg-gradient-to-br from-[#467C4B] via-[#5a9462] to-[#A6CDB0] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="p-4 bg-white/10 rounded-xl w-fit mx-auto mb-4">
                      <Eye className="h-12 w-12 text-white mx-auto" />
                    </div>
                    <p className="text-white font-serif text-xl italic" style={{ fontFamily: "'Open Sans', sans-serif" }}>
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
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/50">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-[#467C4B] font-semibold text-sm uppercase tracking-wider">Our Mission</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Driving Positive Change
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Driving positive change in agriculture through knowledge dissemination and collaboration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionPoints.map((point, index) => (
              <Card key={index} className="border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#467C4B]/0 to-[#467C4B]/0 group-hover:from-[#467C4B]/5 group-hover:to-[#467C4B]/10 transition-all duration-300"></div>
                <CardContent className="flex items-start gap-4 p-6 relative z-10">
                  <div className="p-3 bg-gradient-to-br from-[#467C4B]/10 to-[#467C4B]/5 rounded-xl shrink-0 group-hover:from-[#467C4B] group-hover:to-[#467C4B]/80 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                    <CheckCircle2 className="h-5 w-5 text-[#467C4B] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed group-hover:text-[#467C4B] transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    {point}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-green-light/30 via-background to-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#467C4B]/5 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A6CDB0]/10 rounded-full blur-3xl -z-0"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="text-[#467C4B] font-semibold text-sm uppercase tracking-wider bg-[#467C4B]/10 px-4 py-2 rounded-full">Our Purpose</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Knowledge Hub for Agriculture
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              AgriTech Insight aims to serve as a knowledge hub where science meets practice. The magazine supports 
              informed decision-making in agriculture, environmental management, and rural development.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#467C4B] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>500+</div>
                <p className="text-muted-foreground text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>Articles Published</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#467C4B] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>50+</div>
                <p className="text-muted-foreground text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>Countries Represented</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#467C4B] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>1000+</div>
                <p className="text-muted-foreground text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>Registered Authors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-[#467C4B] font-semibold text-sm uppercase tracking-wider">Focus Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Key Focus Areas
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              We cover a comprehensive range of agricultural disciplines to address the diverse 
              challenges facing modern agriculture
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => {
              const IconComponent = iconMap[area.icon] || Leaf;
              return (
                <Card key={area.title} className="border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#467C4B]/0 to-[#467C4B]/0 group-hover:from-[#467C4B]/5 group-hover:to-[#467C4B]/10 transition-all duration-300"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="p-4 bg-gradient-to-br from-[#467C4B]/10 to-[#467C4B]/5 rounded-xl w-fit mx-auto mb-4 group-hover:from-[#467C4B] group-hover:to-[#467C4B]/80 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                      <IconComponent className="h-6 w-6 text-[#467C4B] group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-[#467C4B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/90 transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      {area.description}
                    </p>
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

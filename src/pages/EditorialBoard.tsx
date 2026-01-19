import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { editorialBoard } from "@/lib/data";
import { User, Crown, Settings, Users, BookOpen, ArrowRight } from "lucide-react";

const roleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Editor-in-Chief": Crown,
  "Managing Editor": Settings,
  "Associate Editors": Users,
  "Advisory Board": BookOpen,
  "Technical Editor": Settings,
};

const EditorialBoard = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Editorial Board
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Our distinguished panel of experts ensures the highest standards of peer review 
              and publication quality.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Roles */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-[#467C4B] font-semibold text-sm uppercase tracking-wider">Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Meet Our Editorial Team
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editorialBoard.map((member, index) => {
              const IconComponent = roleIcons[member.role] || User;
              return (
                <Card key={member.role} className="border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#467C4B]/0 to-[#467C4B]/0 group-hover:from-[#467C4B]/5 group-hover:to-[#467C4B]/10 transition-all duration-300"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-gradient-to-br from-[#467C4B]/10 to-[#467C4B]/5 rounded-xl group-hover:from-[#467C4B] group-hover:to-[#467C4B]/80 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                        <IconComponent className="h-6 w-6 text-[#467C4B] group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-[#467C4B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {member.role}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <CardDescription className="text-sm leading-relaxed mb-6 group-hover:text-foreground/90 transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      {member.description}
                    </CardDescription>
                    <div className="p-4 bg-muted/50 rounded-lg border border-transparent group-hover:border-[#467C4B]/20 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 bg-gradient-to-br from-[#467C4B]/10 to-[#467C4B]/5 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-[#467C4B]" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>Position Available</p>
                          <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Open Sans', sans-serif" }}>Contact us to join</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#467C4B] via-[#5a9462] to-[#A6CDB0] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="section-container text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Join Our Editorial Team
            </h2>
            <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              We are always looking for distinguished researchers and practitioners to join our 
              editorial board. If you have expertise in agricultural sciences and a passion for 
              advancing knowledge, we'd love to hear from you.
            </p>
            <Button asChild size="lg" className="bg-white hover:bg-white/90 text-[#467C4B] font-semibold shadow-lg hover:shadow-xl hover:scale-105 px-8 py-6 transition-all duration-300">
              <a href="mailto:editor@agritechinsight.com" className="flex items-center justify-center group">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EditorialBoard;

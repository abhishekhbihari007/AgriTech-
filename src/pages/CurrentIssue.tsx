import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { currentIssue } from "@/lib/data";
import { Download, ChevronDown, ChevronUp, User, Building, Tag } from "lucide-react";

const CurrentIssue = () => {
  const [openAbstracts, setOpenAbstracts] = useState<Record<string, boolean>>({});

  const toggleAbstract = (id: string) => {
    setOpenAbstracts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Layout>
      {/* Issue Header */}
      <section className="bg-gradient-to-r from-[#467C4B] via-[#5a9462] to-[#A6CDB0] py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-white/90 text-[#467C4B] border-none font-semibold px-4 py-1">
                Current Issue
              </Badge>
              <span className="text-white/90 text-sm font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Volume {currentIssue.volume}, Issue {currentIssue.issue}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {currentIssue.month} {currentIssue.year}
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Theme: {currentIssue.theme}
            </p>
            <Button asChild size="lg" className="bg-white hover:bg-white/90 text-[#467C4B] font-semibold shadow-lg hover:shadow-xl hover:scale-105 px-8 py-6 transition-all duration-300">
              <a href="#" download>
                <Download className="mr-2 h-5 w-5" />
                Download Full Issue (PDF)
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="mb-12">
            <div className="inline-block mb-4">
              <span className="text-[#467C4B] font-semibold text-sm uppercase tracking-wider">Articles</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Articles in This Issue
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              {currentIssue.articles.length} peer-reviewed articles
            </p>
          </div>
          
          <div className="space-y-6">
            {currentIssue.articles.map((article, index) => (
              <Card key={article.id} className="border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#467C4B]/0 to-[#467C4B]/0 group-hover:from-[#467C4B]/3 group-hover:to-[#467C4B]/8 transition-all duration-300"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="border-[#467C4B]/30 text-[#467C4B] bg-[#467C4B]/5">
                          {article.category}
                        </Badge>
                        {article.pages && (
                          <span className="text-xs text-muted-foreground font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                            pp. {article.pages}
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-bold leading-tight mb-4 group-hover:text-[#467C4B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {article.title}
                      </CardTitle>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-[#467C4B]" />
                          {article.authors.join(", ")}
                        </div>
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-[#467C4B]" />
                          {article.affiliation}
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="shrink-0 border-[#467C4B]/30 hover:border-[#467C4B] hover:bg-[#467C4B]/5 hover:text-[#467C4B] transition-all duration-300">
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <Collapsible open={openAbstracts[article.id]} onOpenChange={() => toggleAbstract(article.id)}>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full justify-between text-muted-foreground hover:text-[#467C4B] border border-transparent hover:border-[#467C4B]/20 rounded-lg">
                        <span className="font-medium">Abstract</span>
                        {openAbstracts[article.id] ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                        {article.abstract}
                      </p>
                      <div className="flex items-start gap-2">
                        <Tag className="h-4 w-4 text-[#467C4B] shrink-0 mt-0.5" />
                        <div className="flex flex-wrap gap-2">
                          {article.keywords.map((keyword) => (
                            <span 
                              key={keyword}
                              className="text-xs bg-[#467C4B]/10 text-[#467C4B] px-3 py-1 rounded-full font-medium border border-[#467C4B]/20"
                              style={{ fontFamily: "'Open Sans', sans-serif" }}
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CurrentIssue;

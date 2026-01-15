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
      <section className="bg-primary py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="bg-gold text-foreground">
                Current Issue
              </Badge>
              <span className="text-primary-foreground/70 text-sm">
                Volume {currentIssue.volume}, Issue {currentIssue.issue}
              </span>
            </div>
            <h1 className="heading-display text-primary-foreground mb-4">
              {currentIssue.month} {currentIssue.year}
            </h1>
            <p className="text-xl text-primary-foreground/90 font-serif mb-6">
              Theme: {currentIssue.theme}
            </p>
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-foreground font-semibold">
              <a href="#" download>
                <Download className="mr-2 h-5 w-5" />
                Download Full Issue (PDF)
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="mb-8">
            <h2 className="heading-section text-foreground mb-2">Articles in This Issue</h2>
            <p className="text-muted-foreground">
              {currentIssue.articles.length} peer-reviewed articles
            </p>
          </div>
          
          <div className="space-y-6">
            {currentIssue.articles.map((article, index) => (
              <Card key={article.id} className="academic-card">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        {article.pages && (
                          <span className="text-xs text-muted-foreground">
                            pp. {article.pages}
                          </span>
                        )}
                      </div>
                      <CardTitle className="font-serif text-xl leading-tight mb-3">
                        {article.title}
                      </CardTitle>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {article.authors.join(", ")}
                        </div>
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          {article.affiliation}
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="shrink-0">
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <Collapsible open={openAbstracts[article.id]} onOpenChange={() => toggleAbstract(article.id)}>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full justify-between text-muted-foreground hover:text-foreground">
                        <span>Abstract</span>
                        {openAbstracts[article.id] ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-4">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {article.abstract}
                      </p>
                      <div className="flex items-start gap-2">
                        <Tag className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <div className="flex flex-wrap gap-2">
                          {article.keywords.map((keyword) => (
                            <span 
                              key={keyword}
                              className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
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

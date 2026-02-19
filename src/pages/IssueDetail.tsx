import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { archiveIssues } from "@/lib/data";
import type { Issue } from "@/lib/data";
import { Download, ChevronDown, ChevronUp, User, Building, Tag, ArrowLeft } from "lucide-react";

const IssueDetail = () => {
  const { volume, issue } = useParams<{ volume: string; issue: string }>();
  const [openAbstracts, setOpenAbstracts] = useState<Record<string, boolean>>({});

  const volNum = volume ? parseInt(volume, 10) : 0;
  const issueNum = issue ? parseInt(issue, 10) : 0;

  const selectedIssue: Issue | undefined = archiveIssues.find(
    (i) => i.volume === volNum && i.issue === issueNum
  );

  const toggleAbstract = (id: string) => {
    setOpenAbstracts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (!selectedIssue) {
    return (
      <Layout>
        <section className="py-16">
          <div className="section-container text-center">
            <p className="text-muted-foreground mb-6">Issue not found.</p>
            <Button asChild variant="outline">
              <Link to="/archives" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Archives
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const isCurrentIssue =
    selectedIssue.volume === 1 && selectedIssue.issue === 1;

  return (
    <Layout>
      {/* Issue Header */}
      <section className="bg-gradient-to-r from-[#467C4B] via-[#5a9462] to-[#A6CDB0] py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-white/90 text-[#467C4B] border-none font-semibold px-4 py-1">
                {isCurrentIssue ? "Current Issue" : "Archives"}
              </Badge>
              <span className="text-white/90 text-sm font-medium">
                Volume {selectedIssue.volume}, Issue {selectedIssue.issue}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {selectedIssue.month} {selectedIssue.year}
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
              Theme: {selectedIssue.theme}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-[#467C4B] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="#" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Full Issue (PDF)
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/80 text-white hover:bg-white/10">
                <Link to="/archives" className="inline-flex items-center gap-2">
                  <ArrowLeft className="h-5 w-5" />
                  All Archives
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents (magazine-style) */}
      {selectedIssue.articles.length > 0 && (
        <section className="py-8 md:py-10 bg-secondary/50 border-b border-border">
          <div className="section-container">
            <h2 className="text-xl font-bold text-foreground mb-4">Contents</h2>
            <div className="rounded-xl border-2 border-border bg-card p-6 shadow-sm">
              <ul className="space-y-2">
                {selectedIssue.articles.map((article) => (
                  <li key={article.id} className="flex items-baseline gap-4 py-2 border-b border-border/50 last:border-0">
                    <span className="text-[#467C4B] font-semibold text-sm shrink-0 w-14">{article.pages ?? "—"}</span>
                    <span className="text-foreground font-medium">{article.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Articles List */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="mb-12">
            <span className="text-[#467C4B] font-semibold text-sm uppercase tracking-wider">
              Articles
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-2">
              Articles in This Issue
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {selectedIssue.articles.length} peer-reviewed article
              {selectedIssue.articles.length !== 1 ? "s" : ""}
            </p>
          </div>

          {selectedIssue.articles.length === 0 ? (
            <p className="text-muted-foreground">No articles published in this issue yet.</p>
          ) : (
            <div className="space-y-6">
              {selectedIssue.articles.map((article) => (
                <Card
                  key={article.id}
                  className="border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#467C4B]/0 to-[#467C4B]/0 group-hover:from-[#467C4B]/3 group-hover:to-[#467C4B]/8 transition-all duration-300" />

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge
                            variant="outline"
                            className="border-[#467C4B]/30 text-[#467C4B] bg-[#467C4B]/5"
                          >
                            {article.category}
                          </Badge>
                          {article.pages && (
                            <span className="text-xs text-muted-foreground font-medium">pp. {article.pages}</span>
                          )}
                          {article.doi && (
                            <span className="text-xs text-muted-foreground font-mono">DOI: {article.doi}</span>
                          )}
                          {article.publishedDate && (
                            <span className="text-xs text-muted-foreground">{article.publishedDate}</span>
                          )}
                        </div>
                        <CardTitle className="text-xl md:text-2xl font-bold leading-tight mb-4 group-hover:text-[#467C4B] transition-colors">
                          {article.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
                      <Button
                        variant="outline"
                        size="sm"
                        className="shrink-0 border-[#467C4B]/30 hover:border-[#467C4B] hover:bg-[#467C4B]/5 hover:text-[#467C4B] transition-all duration-300"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        PDF
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <Collapsible
                      open={openAbstracts[article.id]}
                      onOpenChange={() => toggleAbstract(article.id)}
                    >
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-between text-muted-foreground hover:text-[#467C4B] border border-transparent hover:border-[#467C4B]/20 rounded-lg"
                        >
                          <span className="font-medium">Abstract</span>
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
                          <Tag className="h-4 w-4 text-[#467C4B] shrink-0 mt-0.5" />
                          <div className="flex flex-wrap gap-2">
                            {article.keywords.map((kw) => (
                              <span
                                key={kw}
                                className="text-xs bg-[#467C4B]/10 text-[#467C4B] px-3 py-1 rounded-full font-medium border border-[#467C4B]/20"
                              >
                                {kw}
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
          )}
        </div>
      </section>
    </Layout>
  );
};

export default IssueDetail;

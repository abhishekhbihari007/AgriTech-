import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { archiveIssues } from "@/lib/data";
import type { Issue } from "@/lib/data";
import { Download, BookOpen, Calendar } from "lucide-react";

const Archives = () => {
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const byYear = archiveIssues.reduce<Record<number, Issue[]>>((acc, issue) => {
    if (!acc[issue.year]) acc[issue.year] = [];
    acc[issue.year].push(issue);
    return acc;
  }, {});

  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  const filteredYears =
    selectedYear === "all"
      ? years
      : years.filter((y) => y.toString() === selectedYear);

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="heading-display text-foreground mb-4">
                Archives
              </h1>
              <p className="text-body-lg text-muted-foreground">
                Browse our complete e-magazine collection. Issues are grouped by year, 
                newest first. View or download any issue.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground font-medium">Filter by year:</span>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[140px] bg-card border-2 border-transparent hover:border-[#467C4B]/30">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent className="bg-card">
                  <SelectItem value="all">All years</SelectItem>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Issues by year – magazine cover design */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/50">
        <div className="section-container">
          {filteredYears.length === 0 ? (
            <div className="text-center py-12">
              <div className="p-4 bg-gradient-to-br from-[#467C4B]/10 to-[#467C4B]/5 rounded-xl w-fit mx-auto mb-4">
                <BookOpen className="h-12 w-12 text-[#467C4B]" />
              </div>
              <p className="text-muted-foreground text-base">
                No issues found for the selected year.
              </p>
            </div>
          ) : (
            filteredYears.map((year) => (
              <div key={year} className="mb-16 last:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 border-b-2 border-[#467C4B]/30 pb-2 inline-block">
                  {year}
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  {byYear[year].length} issue{byYear[year].length !== 1 ? "s" : ""} published
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {byYear[year].map((issue) => (
                    <article
                      key={`${issue.volume}-${issue.issue}-${issue.year}`}
                      className="group"
                    >
                      {/* Magazine cover */}
                      <div className="relative rounded-xl overflow-hidden border-2 border-border bg-card shadow-lg hover:shadow-xl hover:border-[#467C4B]/40 transition-all duration-300 aspect-[3/4] flex flex-col">
                        <div className="flex-1 bg-gradient-to-br from-[#467C4B]/90 via-[#5a9462] to-[#3a6a3f] p-5 flex flex-col justify-between min-h-0">
                          <div>
                            <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">
                              Agri Doctor
                            </span>
                            <div className="mt-3 flex items-center gap-2 text-white/95 text-xs font-medium">
                              <Calendar className="h-3.5 w-3 shrink-0" />
                              {issue.month} {issue.year}
                            </div>
                          </div>
                          <div>
                            <span className="text-white/80 text-[10px] font-semibold">
                              Vol {issue.volume} · Issue {issue.issue}
                            </span>
                            <h3 className="text-white font-bold text-sm md:text-base leading-tight mt-2 line-clamp-3">
                              {issue.theme}
                            </h3>
                          </div>
                        </div>
                        <div className="bg-[#467C4B] text-primary-foreground px-4 py-3 flex items-center justify-between">
                          <span className="text-xs font-semibold">
                            {issue.articles.length > 0
                              ? `${issue.articles.length} article${issue.articles.length !== 1 ? "s" : ""}`
                              : "Coming soon"}
                          </span>
                          <BookOpen className="h-4 w-4 text-white/90" />
                        </div>
                      </div>

                      <div className="mt-4 flex gap-2">
                        {issue.articles.length > 0 && issue.volume === 1 && issue.issue === 1 ? (
                          <Button
                            asChild
                            className="flex-1 bg-[#467C4B] hover:bg-[#3a6a3f] text-white"
                          >
                            <Link to="/current-issue" className="inline-flex items-center justify-center gap-2">
                              <BookOpen className="h-4 w-4" />
                              View full issue
                            </Link>
                          </Button>
                        ) : issue.articles.length > 0 ? (
                          <Button asChild className="flex-1 bg-[#467C4B] hover:bg-[#3a6a3f] text-white">
                            <Link to={`/issue/${issue.volume}/${issue.issue}`} className="inline-flex items-center justify-center gap-2">
                              <BookOpen className="h-4 w-4" />
                              View issue
                            </Link>
                          </Button>
                        ) : (
                          <Button variant="outline" className="flex-1" disabled>
                            Coming soon
                          </Button>
                        )}
                        <Button
                          size="icon"
                          className="bg-[#467C4B] hover:bg-[#3a6a3f] text-white border-0"
                          title="Download PDF"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Archives;

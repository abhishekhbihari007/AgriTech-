import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { archiveIssues } from "@/lib/data";
import { Download, BookOpen, Calendar, ArrowRight } from "lucide-react";

const Archives = () => {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  
  const years = [...new Set(archiveIssues.map(issue => issue.year.toString()))];
  
  const filteredIssues = selectedYear === "all" 
    ? archiveIssues 
    : archiveIssues.filter(issue => issue.year.toString() === selectedYear);

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Archives
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Browse our complete collection of published issues and access valuable research 
                from previous volumes.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground font-medium" style={{ fontFamily: "'Open Sans', sans-serif" }}>Filter by Year:</span>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[140px] bg-card border-2 border-transparent hover:border-[#467C4B]/30">
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent className="bg-card">
                  <SelectItem value="all">All Years</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Issues Grid */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/50">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIssues.map((issue, index) => (
              <Card key={`${issue.volume}-${issue.issue}`} className="border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#467C4B]/0 to-[#467C4B]/0 group-hover:from-[#467C4B]/5 group-hover:to-[#467C4B]/10 transition-all duration-300"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#467C4B] bg-[#467C4B]/10 px-3 py-1 rounded-full border border-[#467C4B]/20">
                      Vol {issue.volume}, Issue {issue.issue}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Calendar className="h-3 w-3" />
                      {issue.month} {issue.year}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold leading-tight mb-2 group-hover:text-[#467C4B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {issue.theme}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    {issue.articles.length > 0 
                      ? `${issue.articles.length} articles published`
                      : "Coming soon"
                    }
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="flex gap-3">
                    {issue.articles.length > 0 ? (
                      <>
                        <Button asChild variant="outline" size="sm" className="flex-1 border-[#467C4B]/30 hover:border-[#467C4B] hover:bg-[#467C4B]/5 hover:text-[#467C4B] transition-all duration-300">
                          <Link to={issue.issue === 1 && issue.volume === 1 ? "/current-issue" : "#"} className="flex items-center justify-center group/btn">
                            <BookOpen className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                            View Issue
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="border-[#467C4B]/30 hover:border-[#467C4B] hover:bg-[#467C4B] hover:text-white transition-all duration-300">
                          <Download className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <Button variant="outline" size="sm" className="flex-1 border-gray-300" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredIssues.length === 0 && (
            <div className="text-center py-12">
              <div className="p-4 bg-gradient-to-br from-[#467C4B]/10 to-[#467C4B]/5 rounded-xl w-fit mx-auto mb-4">
                <BookOpen className="h-12 w-12 text-[#467C4B]" />
              </div>
              <p className="text-muted-foreground text-base" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                No issues found for the selected year.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Archives;

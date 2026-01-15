import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { archiveIssues } from "@/lib/data";
import { Download, BookOpen, Calendar } from "lucide-react";

const Archives = () => {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  
  const years = [...new Set(archiveIssues.map(issue => issue.year.toString()))];
  
  const filteredIssues = selectedYear === "all" 
    ? archiveIssues 
    : archiveIssues.filter(issue => issue.year.toString() === selectedYear);

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="heading-display text-foreground mb-4">Archives</h1>
              <p className="text-body-lg text-muted-foreground">
                Browse our complete collection of published issues and access valuable research 
                from previous volumes.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Filter by Year:</span>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[140px] bg-card">
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
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIssues.map((issue, index) => (
              <Card key={`${issue.volume}-${issue.issue}`} className="academic-card group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-secondary px-2 py-1 rounded">
                      Vol {issue.volume}, Issue {issue.issue}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Calendar className="h-3 w-3" />
                      {issue.month} {issue.year}
                    </div>
                  </div>
                  <CardTitle className="font-serif text-lg group-hover:text-primary transition-colors">
                    {issue.theme}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {issue.articles.length > 0 
                      ? `${issue.articles.length} articles published`
                      : "Coming soon"
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    {issue.articles.length > 0 ? (
                      <>
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <Link to={issue.issue === 1 && issue.volume === 1 ? "/current-issue" : "#"}>
                            <BookOpen className="h-4 w-4 mr-2" />
                            View Issue
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <Button variant="outline" size="sm" className="flex-1" disabled>
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
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No issues found for the selected year.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Archives;

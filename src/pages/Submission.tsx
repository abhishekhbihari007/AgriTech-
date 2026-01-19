import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { articleCategories } from "@/lib/data";
import { 
  FileText, Send, CheckCircle2, Users, BookOpen, FileCode, 
  Upload, AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const whoCanSubmit = [
  "Researchers, academicians, industry experts, students, and practitioners working in agriculture and allied fields",
];

const articleTypes = [
  { type: "Research Articles", description: "Original research with methodology, results, and discussion" },
  { type: "Review Articles", description: "Comprehensive review of literature on specific topics" },
  { type: "Case Studies", description: "Detailed analysis of specific agricultural practices" },
  { type: "Short Communications", description: "Brief reports of significant findings" },
  { type: "Technology Notes", description: "Descriptions of new techniques or methodologies" },
];

const Submission = () => {
  const { toast } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab") || "guidelines";
  const [activeTab, setActiveTab] = useState<string>(tabParam === "submit" ? "submit" : "guidelines");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "submit" || tab === "guidelines") {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    title: "",
    category: "",
    abstract: "",
    declaration: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Manuscript Submitted",
      description: "Thank you for your submission. Our editorial team will review your manuscript.",
    });
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSearchParams({ tab: value });
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Author Guidelines & Submission
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Prepare your manuscript according to our guidelines and submit for peer review.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
              <TabsTrigger value="guidelines" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Guidelines
              </TabsTrigger>
              <TabsTrigger value="submit" className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Submit
              </TabsTrigger>
            </TabsList>

            {/* Guidelines Tab */}
            <TabsContent value="guidelines" className="space-y-8">
              {/* Who Can Submit */}
              <Card className="border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#467C4B]/0 to-[#467C4B]/0 group-hover:from-[#467C4B]/3 group-hover:to-[#467C4B]/8 transition-all duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-[#467C4B]/10 to-[#467C4B]/5 rounded-xl group-hover:from-[#467C4B] group-hover:to-[#467C4B]/80 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                      <Users className="h-5 w-5 text-[#467C4B] group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-[#467C4B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Who Can Submit
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {whoCanSubmit.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#467C4B] shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Article Types */}
              <Card className="border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#467C4B]/0 to-[#467C4B]/0 group-hover:from-[#467C4B]/3 group-hover:to-[#467C4B]/8 transition-all duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-[#467C4B]/10 to-[#467C4B]/5 rounded-xl group-hover:from-[#467C4B] group-hover:to-[#467C4B]/80 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                      <BookOpen className="h-5 w-5 text-[#467C4B] group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-[#467C4B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Article Types
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {articleTypes.map((item) => (
                      <div key={item.type} className="p-4 bg-gradient-to-br from-[#467C4B]/5 to-[#467C4B]/0 rounded-lg border border-[#467C4B]/10 hover:border-[#467C4B]/30 hover:shadow-md transition-all duration-300">
                        <h4 className="font-bold text-foreground mb-1 group-hover:text-[#467C4B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {item.type}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Formatting Guidelines */}
              <Card className="border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#467C4B]/0 to-[#467C4B]/0 group-hover:from-[#467C4B]/3 group-hover:to-[#467C4B]/8 transition-all duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-[#467C4B]/10 to-[#467C4B]/5 rounded-xl group-hover:from-[#467C4B] group-hover:to-[#467C4B]/80 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                      <FileCode className="h-5 w-5 text-[#467C4B] group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-[#467C4B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Formatting Guidelines
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Document Format</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#467C4B] shrink-0 mt-0.5" />
                          Font: Times New Roman, 12 pt
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#467C4B] shrink-0 mt-0.5" />
                          Line spacing: 1.5
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#467C4B] shrink-0 mt-0.5" />
                          3,000 – 6,000 words
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#467C4B] shrink-0 mt-0.5" />
                          Margins: 1 inch on all sides
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#467C4B] shrink-0 mt-0.5" />
                          File format: .doc or .docx
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#467C4B] shrink-0 mt-0.5" />
                          Word limit: 3,000-6,000 words
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Structure Requirements</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#467C4B] shrink-0 mt-0.5" />
                          Title page with author details
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#467C4B] shrink-0 mt-0.5" />
                          Abstract: 200-300 words
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#467C4B] shrink-0 mt-0.5" />
                          Keywords (5-7 terms)
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#467C4B] shrink-0 mt-0.5" />
                          References in APA format
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#467C4B] shrink-0 mt-0.5" />
                          Tables and figures separately
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Review Process */}
              <Card className="border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#467C4B]/0 to-[#467C4B]/0 group-hover:from-[#467C4B]/3 group-hover:to-[#467C4B]/8 transition-all duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-[#467C4B]/10 to-[#467C4B]/5 rounded-xl group-hover:from-[#467C4B] group-hover:to-[#467C4B]/80 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                      <FileCode className="h-5 w-5 text-[#467C4B] group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-[#467C4B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Review Process
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    All submissions undergo editorial screening followed by peer review.
                  </p>
                </CardContent>
              </Card>

              {/* Plagiarism Policy */}
              <Card className="border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#467C4B]/0 to-[#467C4B]/0 group-hover:from-[#467C4B]/3 group-hover:to-[#467C4B]/8 transition-all duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-[#467C4B]/10 to-[#467C4B]/5 rounded-xl group-hover:from-[#467C4B] group-hover:to-[#467C4B]/80 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                      <AlertCircle className="h-5 w-5 text-[#467C4B] group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-[#467C4B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Plagiarism Policy
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Submissions must be original. A plagiarism check will be conducted before acceptance.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Submit Tab */}
            <TabsContent value="submit">
              <Card className="border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-xl transition-all duration-300 max-w-3xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Submit Your Manuscript
                  </CardTitle>
                  <CardDescription style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Fill out the form below to submit your manuscript for peer review
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Dr. John Smith"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john.smith@university.edu"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution/Affiliation *</Label>
                      <Input
                        id="institution"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="University of Agricultural Sciences"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title">Manuscript Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Enter the full title of your manuscript"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger className="bg-card">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent className="bg-card">
                          {articleCategories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="abstract">Abstract *</Label>
                      <Textarea
                        id="abstract"
                        value={formData.abstract}
                        onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                        placeholder="Provide a brief summary of your research (200-300 words)"
                        rows={6}
                        required
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Manuscript File *</Label>
                        <div className="border-2 border-dashed border-[#467C4B]/30 rounded-lg p-6 text-center hover:border-[#467C4B] hover:bg-[#467C4B]/5 transition-all duration-300 cursor-pointer">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            Click to upload (.doc, .docx)
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Figures/Tables (Optional)</Label>
                        <div className="border-2 border-dashed border-[#467C4B]/30 rounded-lg p-6 text-center hover:border-[#467C4B] hover:bg-[#467C4B]/5 transition-all duration-300 cursor-pointer">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            Click to upload (.zip, .jpg, .png)
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
                      <Checkbox
                        id="declaration"
                        checked={formData.declaration}
                        onCheckedChange={(checked) => 
                          setFormData({ ...formData, declaration: checked as boolean })
                        }
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="declaration" className="font-normal text-sm cursor-pointer">
                          Declaration of Originality *
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          I declare that this manuscript is original work, has not been published 
                          elsewhere, and is not under consideration for publication in any other journal.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                      <Button type="submit" disabled={!formData.declaration} className="flex-1 sm:flex-none bg-[#467C4B] hover:bg-[#467C4B]/90 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <Send className="h-4 w-4 mr-2" />
                        Submit Manuscript
                      </Button>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <AlertCircle className="h-4 w-4" />
                        All fields marked with * are required
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Submission;

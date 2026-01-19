import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, FileText, Send, ArrowRight, Leaf, Lightbulb, Globe, Phone } from "lucide-react";

const quickLinks = [
  {
    title: "Latest Issue",
    description: "Read our current volume with cutting-edge research",
    icon: BookOpen,
    href: "/current-issue",
  },
  {
    title: "All Volumes & Issues",
    description: "Browse complete archive of published issues",
    icon: FileText,
    href: "/archives",
  },
  {
    title: "Submit Article",
    description: "Submit your research for peer review",
    icon: Send,
    href: "/submission",
  },
  {
    title: "Author Guidelines",
    description: "Prepare your manuscript for submission",
    icon: FileText,
    href: "/submission",
  },
  {
    title: "Editorial Board",
    description: "Meet our distinguished panel of experts",
    icon: Users,
    href: "/editorial-board",
  },
  {
    title: "Contact Us",
    description: "Get in touch with our editorial team",
    icon: Phone,
    href: "/contact",
  },
];

const features = [
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Research-backed insights for environmentally conscious farming",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Cutting-edge agricultural technologies and methodologies",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Contributions from researchers worldwide",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image - Agriculture Theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop')`,
            backgroundPosition: 'center center'
          }}
        >
          {/* Subtle Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/25"></div>
        </div>
        
        <div className="relative section-container py-12 md:py-16 lg:py-20 w-full">
          <div className="max-w-4xl mx-auto">
            {/* Transparent Blur Container */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-6 md:p-10 lg:p-12 text-center shadow-2xl">
              {/* Badge */}
              <div className="inline-block mb-6 md:mb-8 animate-fade-in">
                <span className="inline-flex items-center px-4 py-2 rounded-md bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-medium border border-gray-300 shadow-sm hover:bg-white hover:shadow-md transition-all duration-300 cursor-default">
                  Peer-Reviewed Digital E-Magazine
                </span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-5 md:mb-6 animate-fade-in leading-tight tracking-tight" style={{ 
                animationDelay: "0.1s",
                fontFamily: "'Poppins', sans-serif"
              }}>
                AgriTech Insight
              </h1>
              
              {/* Subtitle */}
              <div className="mb-4 md:mb-5 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <p className="text-lg md:text-xl lg:text-2xl text-white font-normal leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  A Digital Magazine on Agriculture, Innovation & Sustainability
                </p>
              </div>
              
              {/* Description */}
              <div className="mb-8 md:mb-10 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "0.3s" }}>
                <p className="text-sm md:text-base lg:text-lg text-white font-light leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  Connecting Research, Technology, and Farming for a Sustainable Tomorrow
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto rounded-md transition-all duration-300">
                  <Link to="/current-issue" className="flex items-center justify-center group">
                    Read Current Issue
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-white hover:bg-white/95 text-gray-800 font-semibold shadow-lg hover:shadow-xl hover:scale-105 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto rounded-md transition-all duration-300">
                  <Link to="/submission" className="flex items-center justify-center group">
                    <Send className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:rotate-12 transition-transform" />
                    Submit Your Article
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-[#A6CDB0] hover:bg-[#A6CDB0]/90 text-gray-800 border border-gray-400 font-semibold shadow-lg hover:shadow-xl hover:scale-105 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto rounded-md transition-all duration-300">
                  <Link to="/archives" className="flex items-center justify-center group">
                    Explore Archives
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Description */}
      <section className="py-16 md:py-20 lg:py-24 bg-secondary">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-section text-foreground mb-5 md:mb-6 font-bold">
              Bridging Science and Practice
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              AgriTech Insight is a peer-reviewed digital e-magazine dedicated to advancing knowledge in agriculture, 
              agri-technology, environmental sustainability, and rural innovation. The magazine provides a global 
              platform for scientists, academicians, industry experts, and practitioners to share cutting-edge research, 
              innovations, and policy insights.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/50">
        <div className="section-container">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#467C4B] font-semibold text-sm uppercase tracking-wider">Resources</span>
            </div>
            <h2 className="heading-section text-foreground mb-4 md:mb-5 font-bold text-3xl md:text-4xl lg:text-5xl">
              Explore AgriTech Insight
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Navigate through our resources to access the latest research, submission guidelines, and more
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {quickLinks.map((link, index) => (
              <Link key={link.title} to={link.href} className="group">
                <Card className="h-full bg-card border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 cursor-pointer overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#467C4B]/0 to-[#467C4B]/0 group-hover:from-[#467C4B]/5 group-hover:to-[#467C4B]/10 transition-all duration-300 pointer-events-none"></div>
                  
                  <CardHeader className="p-6 md:p-8 relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-4 bg-gradient-to-br from-[#467C4B]/10 to-[#467C4B]/5 rounded-xl w-fit group-hover:from-[#467C4B] group-hover:to-[#467C4B]/80 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                        <link.icon className="h-6 w-6 text-[#467C4B] group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl font-bold group-hover:text-[#467C4B] transition-colors mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {link.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-sm md:text-base leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors pl-0" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      {link.description}
                    </CardDescription>
                    
                    {/* Arrow indicator */}
                    <div className="mt-4 flex items-center text-[#467C4B] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold mr-2">Explore</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-green-light via-background to-secondary/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#467C4B]/5 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A6CDB0]/10 rounded-full blur-3xl -z-0"></div>
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-[#467C4B] font-semibold text-sm uppercase tracking-wider bg-[#467C4B]/10 px-4 py-2 rounded-full">About the Magazine</span>
              </div>
              <h2 className="heading-section text-foreground mt-2 mb-5 md:mb-6 font-bold text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Where Science Meets Practice
              </h2>
              <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed text-base md:text-lg" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                AgriTech Insight bridges the gap between research and real-world agricultural applications. The magazine 
                highlights new scientific discoveries, emerging technologies, sustainable practices, and agribusiness 
                innovations that contribute to food security and environmental resilience.
              </p>
              <Button asChild size="lg" className="bg-[#467C4B] hover:bg-[#467C4B]/90 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-6">
                <Link to="/about" className="group flex items-center">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="grid gap-5 md:gap-6">
              {features.map((feature, index) => (
                <Card key={feature.title} className="bg-card border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#467C4B]/0 to-[#467C4B]/0 group-hover:from-[#467C4B]/5 group-hover:to-[#467C4B]/10 transition-all duration-300"></div>
                  
                  <CardContent className="flex items-start gap-4 p-6 md:p-7 relative z-10">
                    <div className="p-4 bg-gradient-to-br from-[#467C4B]/10 to-[#467C4B]/5 rounded-xl shrink-0 group-hover:from-[#467C4B] group-hover:to-[#467C4B]/80 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                      <feature.icon className="h-6 w-6 text-[#467C4B] group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-[#467C4B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed group-hover:text-foreground/90 transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-r from-[#467C4B] via-[#5a9462] to-[#A6CDB0] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="section-container text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Join Our Community
            </h2>
            
            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-white/95 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Join our community of researchers and practitioners shaping the future of agriculture. 
              Submit your manuscript today and reach a global audience.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 px-8 md:px-10 py-6 md:py-7 text-base md:text-lg w-full sm:w-auto rounded-lg transition-all duration-300 border-2 border-gold/20">
                <Link to="/submission" className="group flex items-center justify-center">
                  Submit Your Manuscript
                  <Send className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 font-bold shadow-xl hover:shadow-2xl hover:scale-105 px-8 md:px-10 py-6 md:py-7 text-base md:text-lg backdrop-blur-md w-full sm:w-auto rounded-lg transition-all duration-300">
                <Link to="/contact" className="group flex items-center justify-center">
                  Contact Editorial Team
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

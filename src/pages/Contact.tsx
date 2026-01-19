import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "editor@agritechinsight.com",
    description: "For general inquiries and submissions",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-XXXXXXXXXX",
    description: "Monday to Friday, 9AM - 5PM",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "AgriTech Insight Editorial Office",
    description: "",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "2-3 Business Days",
    description: "For manuscript inquiries, allow up to 1 week",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 2-3 business days.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Contact Us
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              Have questions about submissions, partnerships, or anything else? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Get in Touch
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Whether you're a researcher looking to submit your work, an institution 
                interested in collaboration, or a reader with questions, our team is here to help.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <Card key={item.label} className="border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#467C4B]/0 to-[#467C4B]/0 group-hover:from-[#467C4B]/5 group-hover:to-[#467C4B]/10 transition-all duration-300"></div>
                    <CardContent className="flex items-start gap-4 p-5 relative z-10">
                      <div className="p-3 bg-gradient-to-br from-[#467C4B]/10 to-[#467C4B]/5 rounded-xl shrink-0 group-hover:from-[#467C4B] group-hover:to-[#467C4B]/80 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                        <item.icon className="h-5 w-5 text-[#467C4B] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1 group-hover:text-[#467C4B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                          {item.label}
                        </h3>
                        <p className="text-[#467C4B] font-semibold mb-1" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                          {item.value}
                        </p>
                        {item.description && (
                          <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                            {item.description}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-transparent hover:border-[#467C4B]/40 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Send us a Message
                  </CardTitle>
                  <CardDescription style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Fill out the form below and we'll get back to you as soon as possible
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
                          placeholder="Your name"
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
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What is this regarding?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your message..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#467C4B] hover:bg-[#467C4B]/90 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="section-container">
          <div className="aspect-[21/9] rounded-xl overflow-hidden bg-secondary flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">
                Interactive map coming soon
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

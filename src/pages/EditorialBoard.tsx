import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { editorialBoard } from "@/lib/data";
import { User, Crown, Settings, Users, BookOpen } from "lucide-react";

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
      <section className="bg-secondary py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="heading-display text-foreground mb-4">Editorial Board</h1>
            <p className="text-body-lg text-muted-foreground">
              Our distinguished panel of experts ensures the highest standards of peer review 
              and publication quality.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Roles */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editorialBoard.map((member, index) => {
              const IconComponent = roleIcons[member.role] || User;
              return (
                <Card key={member.role} className="academic-card">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-3 bg-primary rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="font-serif text-xl">{member.role}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {member.description}
                    </CardDescription>
                    <div className="mt-6 p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Position Available</p>
                          <p className="text-xs text-muted-foreground">Contact us to join</p>
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
      <section className="py-16 md:py-20 bg-green-light">
        <div className="section-container text-center">
          <h2 className="heading-section text-foreground mb-4">
            Join Our Editorial Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We are always looking for distinguished researchers and practitioners to join our 
            editorial board. If you have expertise in agricultural sciences and a passion for 
            advancing knowledge, we'd love to hear from you.
          </p>
          <a
            href="mailto:editor@agritechinsight.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-green-dark transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default EditorialBoard;

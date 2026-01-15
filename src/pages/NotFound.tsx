import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[70vh] items-center justify-center bg-muted">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="mb-4 text-6xl md:text-7xl font-bold text-primary">404</h1>
          <h2 className="mb-4 text-2xl md:text-3xl font-serif text-foreground">Page Not Found</h2>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            The page you're looking for is currently unavailable. Please return to the homepage.
          </p>
          <Button asChild size="lg" className="font-semibold">
            <Link to="/">
              <HomeIcon className="mr-2 h-5 w-5" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

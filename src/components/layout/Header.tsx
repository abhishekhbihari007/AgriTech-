import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Current Issue", path: "/current-issue" },
  { name: "Archives", path: "/archives" },
  { name: "Editorial Board", path: "/editorial-board" },
  { name: "Guidelines", path: "/submission?tab=guidelines" },
  { name: "Submit", path: "/submission?tab=submit" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isLinkActive = (linkPath: string) => {
    if (linkPath === location.pathname && !linkPath.includes("submission")) return true;
    if (location.pathname === "/submission") {
      const searchParams = new URLSearchParams(location.search);
      const tabParam = searchParams.get("tab");
      if (linkPath.includes("guidelines")) {
        return !tabParam || tabParam === "guidelines";
      }
      if (linkPath.includes("submit")) {
        return tabParam === "submit";
      }
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2.5 bg-gradient-to-br from-[#467C4B] to-[#3a6a3f] rounded-xl group-hover:from-[#3a6a3f] group-hover:to-[#467C4B] transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-105">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-foreground leading-tight group-hover:text-[#467C4B] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                AgriTech Insight
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground tracking-wide hidden sm:block" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Peer-Reviewed E-Magazine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  isLinkActive(link.path)
                    ? "bg-[#467C4B]/10 text-[#467C4B] shadow-sm"
                    : "text-muted-foreground hover:text-[#467C4B] hover:bg-[#467C4B]/5"
                }`}
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-muted-foreground hover:text-[#467C4B] hover:bg-[#467C4B]/5 transition-all duration-300"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200/50 animate-fade-in bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    isLinkActive(link.path)
                      ? "bg-[#467C4B]/10 text-[#467C4B] shadow-sm"
                      : "text-muted-foreground hover:text-[#467C4B] hover:bg-[#467C4B]/5"
                  }`}
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

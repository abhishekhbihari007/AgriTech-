import { Link } from "react-router-dom";
import { BookOpen, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Editorial Board", path: "/editorial-board" },
  { name: "Archives", path: "/archives" },
  { name: "Author Guidelines", path: "/submission" },
  { name: "Contact", path: "/contact" },
];

const resourceLinks = [
  { name: "Current Issue", path: "/current-issue" },
  { name: "Submit Article", path: "/submission" },
  { name: "Peer Review Process", path: "/about" },
  { name: "Publication Ethics", path: "/about" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#467C4B] to-[#A6CDB0]">
      {/* Main Footer */}
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="p-2 bg-white/10 rounded-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="font-serif font-bold text-xl text-white">
                AgriTech Insight
              </span>
            </Link>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              A peer-reviewed digital e-magazine bridging the gap between agricultural research, 
              technology, and practical farming for a sustainable tomorrow.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <social.icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-white"></div>
              <h3 className="font-serif font-semibold text-lg text-white">Quick Links</h3>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white text-base transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-white"></div>
              <h3 className="font-serif font-semibold text-lg text-white">Resources</h3>
            </div>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white text-base transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-white"></div>
              <h3 className="font-serif font-semibold text-lg text-white">Contact Us</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-white shrink-0" />
                <span className="text-white/80 text-base leading-relaxed">editor@agritechinsight.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-white shrink-0" />
                <span className="text-white/80 text-base leading-relaxed">+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-white shrink-0" />
                <span className="text-white/80 text-base leading-relaxed">
                  AgriTech Insight<br />
                  Editorial Office<br />
                  [City, State, Country]
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* E-Magazine Statement & Copyright */}
      <div className="border-t border-white/20">
        <div className="section-container py-6">
          <p className="text-white/80 text-xs text-center leading-relaxed max-w-4xl mx-auto mb-4">
            <strong className="text-white">E-MAGAZINE STATEMENT:</strong> AgriTech Insight is an independent, peer-reviewed digital magazine 
            dedicated to advancing agricultural science, farm innovation, and sustainable development through high-quality 
            scholarly and professional publications.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-white/80 pt-4 border-t border-white/10">
            <p>© {new Date().getFullYear()} AgriTech Insight. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

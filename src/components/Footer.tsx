import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-semibold mb-4">Horizon</h3>
            <p className="font-body text-background/70 max-w-md leading-relaxed">
              Building a brighter future through community action, sustainable initiatives, 
              and meaningful connections that create lasting impact.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="font-body text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium mb-4">Connect</h4>
            <ul className="space-y-3">
              {["Twitter", "Instagram", "LinkedIn", "Newsletter"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-background/60">
            © {currentYear} Horizon. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-background/60 hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

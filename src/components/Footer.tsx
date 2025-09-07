import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-light tracking-wide">
              <span className="text-accent">A</span>lexandra <span className="text-accent">M</span>itchell
            </h3>
            <p className="text-sm text-gray-600 max-w-xs">
              Makeup artist specializing in editorial, fashion, and creative makeup artistry.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-wide uppercase text-gray-900">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/projects" className="block text-sm text-gray-600 hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="/about" className="block text-sm text-gray-600 hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-sm text-gray-600 hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-wide uppercase text-gray-900">Get in Touch</h4>
            <div className="space-y-2">
              <a 
                href="mailto:hello@alexandramitchell.com" 
                className="block text-sm text-gray-600 hover:text-accent transition-colors"
              >
                hello@alexandramitchell.com
              </a>
              <a 
                href="https://instagram.com/alexandra_makeup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 hover:text-accent transition-colors"
              >
                @alexandra_makeup
              </a>
              <p className="text-sm text-gray-600">New York, NY</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs text-gray-500">
              © {currentYear} Alexandra Mitchell. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Portfolio designed with passion for makeup artistry
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

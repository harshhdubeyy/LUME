"use client";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="border-t border-[#EAEAEA]">
      <div className="max-w-[1280px] mx-auto px-10 py-20">
        <div className="grid grid-cols-[1.8fr_1fr_1fr_1fr_1fr] gap-12 items-start">
          
          {/* Brand */}
          <div>
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-7 h-7 rounded-[8px] bg-[#22C55E]" />

              <span className="font-semibold text-[22px] hover:text-[#22C55E] transition-colors">
                LUME
              </span>
            </button>

            <p className="text-gray-500 leading-8">
              Intelligent WhatsApp automation
              for modern businesses.
            </p>

            <p className="text-gray-500 leading-8">
              Built for orders, bookings,
              support and growth.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href="mailto:hello@lume.app"
                className="block hover:text-[#22C55E] transition-colors"
              >
                hello@lume.app
              </a>

              <a
                href="tel:+919876543210"
                className="block hover:text-[#22C55E] transition-colors"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="uppercase tracking-[0.2em] text-gray-400 text-sm mb-8">
              Product
            </p>

            <div className="space-y-6 flex flex-col items-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-[#22C55E] transition-colors"
              >
                Demo
              </button>

              <button
                onClick={() => scrollToSection("why-lume")}
                className="hover:text-[#22C55E] transition-colors"
              >
                Workflows
              </button>

              <button
                onClick={() => scrollToSection("pricing")}
                className="hover:text-[#22C55E] transition-colors"
              >
                Pricing
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="uppercase tracking-[0.2em] text-gray-400 text-sm mb-8">
              Company
            </p>

            <div className="space-y-5 flex flex-col items-start">
              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="hover:text-[#22C55E] transition-colors"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-[#22C55E] transition-colors"
              >
                Contact
              </button>

              <a
                href="mailto:careers@lume.app"
                className="hover:text-[#22C55E] transition-colors"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="uppercase tracking-[0.2em] text-gray-400 text-sm mb-8">
              Legal
            </p>

            <div className="space-y-5 flex flex-col items-start">
              <button className="hover:text-[#22C55E] transition-colors">
                Privacy Policy
              </button>

              <button className="hover:text-[#22C55E] transition-colors">
                Terms of Service
              </button>

              <button className="hover:text-[#22C55E] transition-colors">
                Security
              </button>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="uppercase tracking-[0.2em] text-gray-400 text-sm mb-8">
              Social
            </p>

            <div className="space-y-5 flex flex-col items-start">
              <a
                href="https://linkedin.com/in/YOUR-LINKEDIN-ID"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#22C55E] transition-colors"
              >
                LinkedIn
              </a>

              <a
                href="https://instagram.com/YOUR-INSTAGRAM-ID"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#22C55E] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#EAEAEA] mt-16 pt-8 flex justify-between text-gray-400">
          <p>© 2026 LUME, Inc. All rights reserved.</p>

          <p>
            Crafted for businesses on WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
}
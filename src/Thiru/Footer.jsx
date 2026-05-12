

import { useState } from "react";

const footerSections = [
  {
    title: "Account",
    links: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
  },
  {
    title: "Quick Link",
    links: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
  },
];

// ── Social Icons ───────────────────────────────────────────────────────────
const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

// ── Collapsible section for mobile ────────────────────────────────────────
function FooterAccordion({ title, links }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-800 md:border-none">
      <button
        className="w-full flex items-center justify-between py-4 md:py-0 md:cursor-default"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-sm text-white tracking-wide">{title}</span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform md:hidden ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <ul className={`flex flex-col gap-3 pb-4 md:pb-0 md:mt-5 md:flex ${open ? "flex" : "hidden"}`}>
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@700;800&display=swap');
        .font-logo { font-family: 'Syne', sans-serif; }
        .font-nav  { font-family: 'Inter', sans-serif; }
      `}</style>

      <footer className="bg-gray-950 text-white font-nav">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">

          {/* ── Main Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 md:gap-10 lg:gap-8">

            {/* ── Col 1: Brand + Subscribe ── */}
            <div className="lg:col-span-2 pb-8 md:pb-0 border-b border-gray-800 md:border-none">
              {/* Logo */}
              <h2 className="font-logo text-2xl sm:text-3xl font-extrabold mb-1">
                Shop<span className="text-red-500">zy</span>
              </h2>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed max-w-xs">
                Your one-stop destination for the latest trends in electronics, fashion, and lifestyle.
              </p>

              <p className="text-sm font-semibold text-white mb-1 tracking-wide">Subscribe</p>
              <p className="text-gray-400 text-xs mb-4">Get 10% off your first order</p>

              {/* Email input */}
              <div className="flex items-center border border-gray-700 rounded-xl overflow-hidden max-w-sm focus-within:border-gray-500 transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-transparent text-sm text-white placeholder:text-gray-600 px-4 py-3 flex-1 outline-none"
                />
                <button className="px-4 py-3 bg-red-500 hover:bg-red-600 transition-colors flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ── Col 2: Support ── */}
            <div className="border-b border-gray-800 md:border-none">
              <div className="hidden md:block">
                <h4 className="font-semibold text-sm text-white tracking-wide mb-5">Support</h4>
                <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                  <li className="leading-relaxed">111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</li>
                  <li><a href="mailto:shopzy@gmail.com" className="hover:text-white transition-colors">shopzy@gmail.com</a></li>
                  <li><a href="tel:+88015-88888-9280" className="hover:text-white transition-colors">+88015-88888-9280</a></li>
                </ul>
              </div>
              {/* Mobile accordion */}
              <div className="md:hidden">
                <FooterAccordion
                  title="Support"
                  links={["111 Bijoy sarani, Dhaka, DH 1515", "shopzy@gmail.com", "+88015-88888-9280"]}
                />
              </div>
            </div>

            {/* ── Col 3 & 4: Account + Quick Links ── */}
            {footerSections.map((section) => (
              <div key={section.title} className="border-b border-gray-800 md:border-none">
                {/* Desktop */}
                <div className="hidden md:block">
                  <h4 className="font-semibold text-sm text-white tracking-wide mb-5">{section.title}</h4>
                  <ul className="flex flex-col gap-3">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Mobile accordion */}
                <div className="md:hidden">
                  <FooterAccordion title={section.title} links={section.links} />
                </div>
              </div>
            ))}

            {/* ── Col 5: Download App ── */}
            <div className="pt-6 md:pt-0">
              <h4 className="font-semibold text-sm text-white tracking-wide mb-4">Download App</h4>
              <p className="text-gray-500 text-[11px] mb-4 leading-relaxed">
                Save $3 with App — New Users Only
              </p>

              {/* QR + Store badges */}
              <div className="flex items-start gap-3 mb-6">
                {/* QR code */}
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1.5">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-black" fill="currentColor">
                    <rect x="10" y="10" width="35" height="35" rx="4" />
                    <rect x="55" y="10" width="35" height="35" rx="4" />
                    <rect x="10" y="55" width="35" height="35" rx="4" />
                    <rect x="18" y="18" width="19" height="19" fill="white" rx="2" />
                    <rect x="63" y="18" width="19" height="19" fill="white" rx="2" />
                    <rect x="18" y="63" width="19" height="19" fill="white" rx="2" />
                    <rect x="55" y="55" width="10" height="10" rx="2" />
                    <rect x="70" y="55" width="10" height="10" rx="2" />
                    <rect x="55" y="70" width="10" height="10" rx="2" />
                    <rect x="70" y="70" width="10" height="10" rx="2" />
                  </svg>
                </div>

                {/* Store buttons */}
                <div className="flex flex-col gap-2">
                  {[
                    { label: "GET IT ON", store: "Google Play" },
                    { label: "Download on the", store: "App Store" },
                  ].map(({ label, store }) => (
                    <a
                      key={store}
                      href="#"
                      className="flex items-center gap-2 border border-gray-700 rounded-lg px-3 py-1.5 hover:border-gray-500 transition-colors"
                    >
                      <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        {store === "Google Play"
                          ? <path d="M3.18 23.76A2 2 0 012 22V2a2 2 0 011.18-1.76l11.65 11.65L3.18 23.76zM20.29 10.35l-2.47-1.41-2.71 2.71 2.71 2.71 2.5-1.43a2 2 0 000-3.58zM4.34.28l13.1 7.47-2.72 2.72L4.34.28zM4.34 23.72l10.38-10.19 2.72 2.72-13.1 7.47z" />
                          : <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        }
                      </svg>
                      <div>
                        <p className="text-gray-500 text-[9px] leading-none">{label}</p>
                        <p className="text-white text-xs font-semibold leading-tight">{store}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {socials.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-8 h-8 rounded-full bg-gray-800 hover:bg-red-500 flex items-center justify-center transition-colors text-white"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ── Divider ── */}
          <div className="border-t border-gray-800 mt-10 sm:mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} <span className="text-gray-400 font-medium">Shopzy</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

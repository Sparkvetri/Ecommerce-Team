
import { useState, useEffect } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────
const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="22" y2="22" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const CartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronDown = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ── Nav Links ──────────────────────────────────────────────────────────────
const NAV_LINKS = ["Home", "Contact", "About", "Sign Up"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@700;800&display=swap');
        .font-logo { font-family: 'Syne', sans-serif; }
        .font-nav  { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* ── Announcement Bar ── */}
      <div className="bg-black text-white font-nav text-[11px] sm:text-xs md:text-sm flex items-center justify-center relative px-4 py-2.5 sm:py-3">
        <p className="font-light tracking-wide text-center">
          🔥 Summer Sale — All Swim Suits + Free Express Delivery&nbsp;
          <span className="font-semibold text-red-400">OFF 50%!</span>
        </p>
        <button className="ml-2 font-semibold underline underline-offset-2 hover:text-red-400 transition-colors whitespace-nowrap hidden sm:inline">
          Shop Now
        </button>
        {/* Language selector — desktop only */}
        <div className="hidden md:flex absolute right-8 items-center gap-1 cursor-pointer hover:text-gray-300 transition-colors">
          <span className="text-xs font-medium">English</span>
          <ChevronDown />
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <header
        className={`bg-white sticky top-0 z-50 border-b border-gray-100 font-nav transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto h-16 sm:h-18 md:h-20 flex items-center justify-between px-4 sm:px-6 md:px-8">

          {/* ── Logo ── */}
          <h1 className="font-logo text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 cursor-pointer select-none">
            Shop<span className="text-red-500">zy</span>
          </h1>

          {/* ── Desktop Nav Links ── */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => setActiveLink(link)}
                className={`relative text-sm font-medium pb-1 transition-colors duration-200 ${
                  activeLink === link
                    ? "text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-red-500 after:rounded-full"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* ── Right Side ── */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex items-center bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl w-60 xl:w-72 gap-2 focus-within:border-gray-400 focus-within:bg-white transition-all">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none text-sm flex-1 text-gray-700 placeholder:text-gray-400"
              />
            </div>

            {/* Mobile Search toggle */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-600"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <SearchIcon />
            </button>

            {/* Wishlist */}
            <button className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-700">
              <HeartIcon />
            </button>

            {/* Cart */}
            <button className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-700">
              <CartIcon />
              {/* Cart badge */}
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                2
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* ── Mobile Search Bar (slides down) ── */}
        {searchOpen && (
          <div className="lg:hidden px-4 pb-3 border-t border-gray-100">
            <div className="flex items-center bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-xl gap-2 mt-3 focus-within:border-gray-400 transition-all">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none text-sm flex-1 text-gray-700 placeholder:text-gray-400"
                autoFocus
              />
            </div>
          </div>
        )}
      </header>

      {/* ── Mobile Full-screen Menu Overlay ── */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white font-nav flex flex-col pt-24 px-6">

          {/* Nav Links */}
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => { setActiveLink(link); setMenuOpen(false); }}
                className={`text-left text-lg font-semibold py-3 px-4 rounded-xl transition-colors ${
                  activeLink === link
                    ? "bg-red-50 text-red-500"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="border-t border-gray-100 my-6" />

          {/* Extra info */}
          <div className="flex flex-col gap-3 text-sm text-gray-500 px-4">
            <p>🔥 Summer Sale — <span className="text-red-500 font-semibold">OFF 50%</span> on all swim suits</p>
            <p>🚚 Free Express Delivery on orders over $140</p>
            <p>💳 Money back guarantee within 30 days</p>
          </div>

          {/* CTA */}
          <div className="mt-8 px-4">
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm tracking-wide">
              Shop the Sale →
            </button>
          </div>
        </div>
      )}
    </>
  );
}

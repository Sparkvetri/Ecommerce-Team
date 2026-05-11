// NewArrival.jsx
// Sections: Featured label, heading, product grid (PS5, Women's, Speakers, Perfume), trust badges

const products = [
  {
    id: 1,
    name: "PlayStation 5",
    desc: "Black and White version of the PS5 coming out on sale.",
    tag: "Shop Now",
    size: "large", // spans 2 rows on left
    bg: "bg-gray-900",
    imgPlaceholder: "🎮",
  },
  {
    id: 2,
    name: "Women's Collections",
    desc: "Featured woman collections that give you another vibe.",
    tag: "Shop Now",
    size: "small-top",
    bg: "bg-gray-800",
    imgPlaceholder: "👒",
  },
  {
    id: 3,
    name: "Speakers",
    desc: "Amazon wireless speakers.",
    tag: "Shop Now",
    size: "small-bottom-left",
    bg: "bg-gray-900",
    imgPlaceholder: "🔊",
  },
  {
    id: 4,
    name: "Perfume",
    desc: "GUCCI INTENSE OUD EDP.",
    tag: "Shop Now",
    size: "small-bottom-right",
    bg: "bg-gray-800",
    imgPlaceholder: "🌹",
  },
];

const badges = [
  {
    icon: (
      <svg className="w-10 h-10 mx-auto mb-3 text-gray-800" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: (
      <svg className="w-10 h-10 mx-auto mb-3 text-gray-800" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
  },
  {
    icon: (
      <svg className="w-10 h-10 mx-auto mb-3 text-gray-800" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
  },
];

export default function NewArrival() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12 font-[Poppins,sans-serif]">

      {/* Section Label */}
      <div className="flex items-center gap-3 mb-3">
        <span className="w-4 h-8 rounded-sm bg-red-500 inline-block" />
        <span className="text-red-500 text-sm font-semibold tracking-wide">Featured</span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8">New Arrival</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[580px]">

        {/* PS5 — large, spans 2 rows */}
        <div className="row-span-2 bg-gray-900 rounded-xl relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center text-[120px] opacity-20 select-none">
            🎮
          </div>
          {/* Dark gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-6 left-6 z-10">
            <h3 className="text-white font-bold text-xl mb-1">PlayStation 5</h3>
            <p className="text-gray-300 text-xs mb-3 max-w-[180px] leading-relaxed">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="text-white text-sm font-semibold underline underline-offset-4 hover:text-red-400 transition-colors">
              Shop Now
            </button>
          </div>
          {/* Hover shine */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
        </div>

        {/* Women's Collections — top right */}
        <div className="bg-gray-800 rounded-xl relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-end pr-4 text-[90px] opacity-20 select-none">
            👒
          </div>
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-5 left-5 z-10">
            <h3 className="text-white font-bold text-base mb-1">Women's Collections</h3>
            <p className="text-gray-300 text-[11px] mb-2 max-w-[170px] leading-relaxed">
              Featured woman collections that give you another vibe.
            </p>
            <button className="text-white text-xs font-semibold underline underline-offset-4 hover:text-red-400 transition-colors">
              Shop Now
            </button>
          </div>
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
        </div>

        {/* Bottom right — 2 columns */}
        <div className="grid grid-cols-2 gap-4">

          {/* Speakers */}
          <div className="bg-gray-900 rounded-xl relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-[60px] opacity-20 select-none">
              🔊
            </div>
            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/75 to-transparent" />
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-white font-bold text-sm mb-0.5">Speakers</h3>
              <p className="text-gray-300 text-[10px] mb-2 leading-relaxed">
                Amazon wireless speakers.
              </p>
              <button className="text-white text-[11px] font-semibold underline underline-offset-4 hover:text-red-400 transition-colors">
                Shop Now
              </button>
            </div>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
          </div>

          {/* Perfume */}
          <div className="bg-gray-800 rounded-xl relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center text-[60px] opacity-20 select-none">
              🌹
            </div>
            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/75 to-transparent" />
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-white font-bold text-sm mb-0.5">Perfume</h3>
              <p className="text-gray-300 text-[10px] mb-2 leading-relaxed">
                GUCCI INTENSE OUD EDP.
              </p>
              <button className="text-white text-[11px] font-semibold underline underline-offset-4 hover:text-red-400 transition-colors">
                Shop Now
              </button>
            </div>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
          </div>

        </div>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-6 mt-16 border-t border-gray-200 pt-12">
        {badges.map((badge) => (
          <div key={badge.title} className="text-center px-4">
            {/* Circle icon */}
            <div className="w-16 h-16 rounded-full border-4 border-gray-200 bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <div className="text-gray-800">{badge.icon}</div>
            </div>
            <h4 className="font-bold text-sm text-gray-900 mb-1 tracking-wide">{badge.title}</h4>
            <p className="text-gray-500 text-xs">{badge.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

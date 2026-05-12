

const badges = [
  {
    icon: (
      <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
  },
];

const products = {
  ps5: {
    name: "PlayStation 5",
    desc: "Black and White version of the PS5 coming out on sale.",
    img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800&q=80&auto=format&fit=crop",
    fallback: "https://placehold.co/800x580/1c1c1c/ffffff?text=PlayStation+5",
  },
  women: {
    name: "Women's Collections",
    desc: "Featured woman collections that give you another vibe.",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80&auto=format&fit=crop",
    fallback: "https://placehold.co/900x285/2c2c2c/ffffff?text=Women%27s+Collections",
  },
  speakers: {
    name: "Speakers",
    desc: "Amazon wireless speakers.",
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80&auto=format&fit=crop",
    fallback: "https://placehold.co/600x285/1c1c1c/ffffff?text=Speakers",
  },
  perfume: {
    name: "Perfume",
    desc: "GUCCI INTENSE OUD EDP.",
    img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80&auto=format&fit=crop",
    fallback: "https://placehold.co/600x285/2c2c2c/ffffff?text=Perfume",
  },
};

export default function NewArrival() {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@700;800&display=swap');
        .font-logo { font-family: 'Syne', sans-serif; }
        .font-nav  { font-family: 'Inter', sans-serif; }
      `}</style>

      <section className="font-nav max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">

        {/* ── Section Label ── */}
        <div className="flex items-center gap-3 mb-2">
          <span className="w-3 sm:w-4 h-7 sm:h-8 rounded-sm bg-red-500 inline-block" />
          <span className="text-red-500 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Featured
          </span>
        </div>

        {/* ── Heading ── */}
        <h2 className="font-logo text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
          New Arrival
        </h2>

        {/* ── Product Grid ──
            Mobile  : single column stack
            Tablet  : 2 columns, PS5 top-left, Women top-right, Speakers + Perfume bottom row
            Desktop : PS5 tall left (full height), right col = Women + (Speakers | Perfume)
        ── */}

        {/* MOBILE & TABLET layout (hidden on lg+) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">

          {/* PS5 */}
          <div className="relative rounded-2xl overflow-hidden cursor-pointer group sm:col-span-2 h-56 sm:h-72">
            <img
              src={products.ps5.img}
              alt={products.ps5.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.target.src = products.ps5.fallback; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 z-10">
              <h3 className="text-white font-logo font-bold text-lg sm:text-xl mb-1">{products.ps5.name}</h3>
              <p className="text-gray-300 text-xs mb-2 max-w-[200px] leading-relaxed">{products.ps5.desc}</p>
              <button className="text-white text-xs font-semibold underline underline-offset-4 hover:text-red-400 transition-colors">
                Shop Now →
              </button>
            </div>
          </div>

          {/* Women's */}
          <div className="relative rounded-2xl overflow-hidden cursor-pointer group h-52 sm:h-60">
            <img
              src={products.women.img}
              alt={products.women.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.target.src = products.women.fallback; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-white font-logo font-bold text-base mb-0.5">{products.women.name}</h3>
              <p className="text-gray-300 text-[11px] mb-2 leading-relaxed max-w-[160px]">{products.women.desc}</p>
              <button className="text-white text-[11px] font-semibold underline underline-offset-4 hover:text-red-400 transition-colors">
                Shop Now →
              </button>
            </div>
          </div>

          {/* Speakers */}
          <div className="relative rounded-2xl overflow-hidden cursor-pointer group h-52 sm:h-60">
            <img
              src={products.speakers.img}
              alt={products.speakers.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.target.src = products.speakers.fallback; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-white font-logo font-bold text-base mb-0.5">{products.speakers.name}</h3>
              <p className="text-gray-300 text-[11px] mb-2 leading-relaxed">{products.speakers.desc}</p>
              <button className="text-white text-[11px] font-semibold underline underline-offset-4 hover:text-red-400 transition-colors">
                Shop Now →
              </button>
            </div>
          </div>

          {/* Perfume */}
          <div className="relative rounded-2xl overflow-hidden cursor-pointer group h-52 sm:h-60 sm:col-start-2">
            <img
              src={products.perfume.img}
              alt={products.perfume.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.target.src = products.perfume.fallback; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-white font-logo font-bold text-base mb-0.5">{products.perfume.name}</h3>
              <p className="text-gray-300 text-[11px] mb-2 leading-relaxed">{products.perfume.desc}</p>
              <button className="text-white text-[11px] font-semibold underline underline-offset-4 hover:text-red-400 transition-colors">
                Shop Now →
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP layout (hidden below lg) */}
        <div className="hidden lg:grid grid-cols-2 gap-4" style={{ gridTemplateRows: "580px" }}>

          {/* PS5 — full height left */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer bg-gray-900" style={{ height: "580px" }}>
            <img
              src={products.ps5.img}
              alt={products.ps5.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.target.src = products.ps5.fallback; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-white font-logo font-bold text-2xl mb-1">{products.ps5.name}</h3>
              <p className="text-gray-300 text-xs mb-3 max-w-[200px] leading-relaxed">{products.ps5.desc}</p>
              <button className="text-white text-sm font-semibold underline underline-offset-4 hover:text-red-400 transition-colors">
                Shop Now →
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="grid gap-4" style={{ gridTemplateRows: "285px 285px" }}>

            {/* Women's */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer bg-gray-800" style={{ height: "285px" }}>
              <img
                src={products.women.img}
                alt={products.women.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.src = products.women.fallback; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 z-10">
                <h3 className="text-white font-logo font-bold text-lg mb-1">{products.women.name}</h3>
                <p className="text-gray-300 text-xs mb-2 max-w-[210px] leading-relaxed">{products.women.desc}</p>
                <button className="text-white text-xs font-semibold underline underline-offset-4 hover:text-red-400 transition-colors">
                  Shop Now →
                </button>
              </div>
            </div>

            {/* Speakers + Perfume */}
            <div className="grid grid-cols-2 gap-4" style={{ height: "285px" }}>
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer bg-gray-900" style={{ height: "285px" }}>
                <img
                  src={products.speakers.img}
                  alt={products.speakers.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = products.speakers.fallback; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 z-10">
                  <h3 className="text-white font-logo font-bold text-sm mb-0.5">{products.speakers.name}</h3>
                  <p className="text-gray-300 text-[11px] mb-2 leading-relaxed">{products.speakers.desc}</p>
                  <button className="text-white text-[11px] font-semibold underline underline-offset-4 hover:text-red-400 transition-colors">
                    Shop Now →
                  </button>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden group cursor-pointer bg-gray-800" style={{ height: "285px" }}>
                <img
                  src={products.perfume.img}
                  alt={products.perfume.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = products.perfume.fallback; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 z-10">
                  <h3 className="text-white font-logo font-bold text-sm mb-0.5">{products.perfume.name}</h3>
                  <p className="text-gray-300 text-[11px] mb-2 leading-relaxed">{products.perfume.desc}</p>
                  <button className="text-white text-[11px] font-semibold underline underline-offset-4 hover:text-red-400 transition-colors">
                    Shop Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Trust Badges ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 sm:mt-16 border-t border-gray-100 pt-10 sm:pt-12">
          {badges.map((badge) => (
            <div key={badge.title} className="flex sm:flex-col items-center sm:text-center gap-5 sm:gap-0 px-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-full border-4 border-gray-100 bg-gray-50 flex items-center justify-center sm:mx-auto sm:mb-4 shadow-sm">
                {badge.icon}
              </div>
              <div>
                <h4 className="font-semibold text-xs sm:text-sm text-gray-900 mb-0.5 sm:mb-1 tracking-wide">
                  {badge.title}
                </h4>
                <p className="text-gray-400 text-xs">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}

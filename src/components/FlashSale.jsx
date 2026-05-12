import { useState, useEffect } from "react";
import gamepad from "../assets/gamepad.webp";
import keyboard from "../assets/keyboard.png";
import monitor from "../assets/monitor.png";
import chair from "../assets/chair.png";
import sofa from "../assets/sofa.png";
import iphone from "../assets/iphone.png";

const products = [
  { id: 1, name: "HAVIT HV-G92 Gamepad",    price: 120, original: 160,  discount: 40, rating: 4,   reviews: 88,  image: gamepad,  accent: "#6C63FF", lightAccent: "#EEEDFE" },
  { id: 2, name: "AK-900 Wired Keyboard",    price: 960, original: 1160, discount: 35, rating: 4,   reviews: 75,  image: keyboard, accent: "#E24B4A", lightAccent: "#FCEBEB" },
  { id: 3, name: "IPS LCD Gaming Monitor",   price: 370, original: 400,  discount: 30, rating: 5,   reviews: 99,  image: monitor,  accent: "#1D9E75", lightAccent: "#E1F5EE" },
  { id: 4, name: "S-Series Comfort Chair",   price: 375, original: 400,  discount: 25, rating: 3.5, reviews: 99,  image: chair,    accent: "#D85A30", lightAccent: "#FAECE7" },
  { id: 5, name: "S-Series Comfort Sofa",    price: 375, original: 400,  discount: 25, rating: 4.5, reviews: 88,  image: sofa,     accent: "#D4537E", lightAccent: "#FBEAF0" },
  { id: 6, name: "Apple iPhone",             price: 375, original: 400,  discount: 20, rating: 4.5, reviews: 880, image: iphone,   accent: "#378ADD", lightAccent: "#E6F1FB" },
];

/* ── inject keyframes once ── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&display=swap');

  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  @keyframes pulse-badge {
    0%, 100% { transform: scale(1); }
    50%       { transform: scale(1.08); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-6px); }
  }
  .fs-card {
    animation: fadeSlideUp 0.5s ease both;
    transition: transform 0.28s cubic-bezier(.34,1.56,.64,1),
                box-shadow 0.28s ease;
  }
  .fs-card:hover { transform: translateY(-8px) scale(1.02); }
  .fs-card:hover .fs-product-img { animation: float 2.4s ease-in-out infinite; }
  .fs-discount-badge { animation: pulse-badge 2.2s ease-in-out infinite; }
  .fs-add-btn {
    opacity: 0;
    transform: translateY(100%);
    transition: opacity 0.22s ease, transform 0.22s ease, background 0.18s;
  }
  .fs-card:hover .fs-add-btn { opacity: 1; transform: translateY(0); }
  .fs-wish-btn { transition: transform 0.18s ease, color 0.18s; }
  .fs-wish-btn:hover { transform: scale(1.18); }
  .fs-nav-btn { transition: background 0.18s, transform 0.15s; }
  .fs-nav-btn:hover:not(:disabled) { transform: scale(1.08); }
  .fs-view-btn { transition: background 0.22s, transform 0.15s, letter-spacing 0.22s; }
  .fs-view-btn:hover { letter-spacing: 0.12em; transform: scale(1.03); }
`;

function StarRating({ rating, accent }) {
  return (
    <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        const color = filled || half ? (accent || "#FFAD33") : "#d1d5db";
        return (
          <svg key={star} width="15" height="15" viewBox="0 0 24 24">
            {half ? (
              <>
                <defs>
                  <linearGradient id={`half-${star}-${accent}`}>
                    <stop offset="50%" stopColor={accent || "#FFAD33"} />
                    <stop offset="50%" stopColor="#d1d5db" />
                  </linearGradient>
                </defs>
                <polygon
                  points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                  fill={`url(#half-${star}-${accent})`} stroke="none"
                />
              </>
            ) : (
              <polygon
                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                fill={color} stroke="none"
              />
            )}
          </svg>
        );
      })}
    </div>
  );
}

function ProductCard({ product, index }) {
  const [wished, setWished] = useState(false);
  const { accent, lightAccent } = product;

  return (
    <div
      className="fs-card"
      style={{
        background: `linear-gradient(160deg, ${lightAccent} 0%, #ffffff 55%)`,
        borderRadius: "16px",
        overflow: "hidden",
        minWidth: "210px",
        flex: "0 0 210px",
        cursor: "pointer",
        border: `1.5px solid ${accent}22`,
        boxShadow: `0 4px 16px ${accent}22, 0 1px 4px rgba(0,0,0,0.06)`,
        position: "relative",
        animationDelay: `${index * 0.08}s`,
      }}
    >
      {/* Top colour strip */}
      <div style={{ height: "4px", background: accent, borderRadius: "16px 16px 0 0" }} />

      {/* Discount badge */}
      <div
        className="fs-discount-badge"
        style={{
          position: "absolute",
          top: "16px",
          left: "12px",
          background: accent,
          color: "#fff",
          fontSize: "11px",
          fontWeight: 700,
          borderRadius: "6px",
          padding: "3px 9px",
          zIndex: 2,
          fontFamily: "'DM Sans', sans-serif",
          boxShadow: `0 2px 8px ${accent}55`,
          letterSpacing: "0.03em",
        }}
      >
        -{product.discount}%
      </div>

      {/* Action icons */}
      <div style={{ position: "absolute", top: "14px", right: "10px", display: "flex", flexDirection: "column", gap: "6px", zIndex: 2 }}>
        <button
          className="fs-wish-btn"
          onClick={() => setWished(!wished)}
          style={{
            background: "#fff",
            border: `1.5px solid ${wished ? accent : "#e5e5e5"}`,
            borderRadius: "50%",
            width: "32px", height: "32px",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            boxShadow: wished ? `0 2px 8px ${accent}44` : "0 1px 4px rgba(0,0,0,0.10)",
            color: wished ? accent : "#888",
          }}
          aria-label="Wishlist"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill={wished ? accent : "none"} stroke={wished ? accent : "#888"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <button
          style={{
            background: "#fff", border: "1.5px solid #e5e5e5",
            borderRadius: "50%", width: "32px", height: "32px",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.10)", color: "#888",
          }}
          aria-label="Quick view"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div style={{
        background: "transparent",
        height: "175px",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden", padding: "16px 12px 0",
      }}>
        <img
          className="fs-product-img"
          src={product.image}
          alt={product.name}
          style={{
            width: "150px", height: "130px",
            objectFit: "contain",
            filter: `drop-shadow(0 8px 16px ${accent}33)`,
          }}
          onError={(e) => { e.target.style.display = "none"; }}
        />

        {/* Add to Cart overlay */}
        <div
          className="fs-add-btn"
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: accent,
            color: "#fff",
            textAlign: "center",
            padding: "10px 0",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Add To Cart
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "14px 14px 16px" }}>
        <p style={{
          margin: "0 0 8px",
          fontWeight: 600, fontSize: "13px",
          color: "#111",
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: 1.35,
        }}>
          {product.name}
        </p>
        <div style={{ display: "flex", gap: "10px", marginBottom: "8px", alignItems: "center" }}>
          <span style={{ color: accent, fontWeight: 700, fontSize: "15px", fontFamily: "'DM Sans', sans-serif" }}>
            ${product.price}
          </span>
          <span style={{ color: "#bbb", textDecoration: "line-through", fontSize: "12px" }}>
            ${product.original}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <StarRating rating={product.rating} accent={accent} />
          <span style={{ color: "#aaa", fontSize: "11px", fontFamily: "'DM Sans', sans-serif" }}>
            ({product.reviews})
          </span>
        </div>
      </div>
    </div>
  );
}

function CountdownUnit({ value, label }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "52px" }}>
      <span style={{
        fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em",
        color: "#aaa", textTransform: "uppercase", marginBottom: "2px",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {label}
      </span>
      <span style={{
        fontSize: "44px", color: "#111", lineHeight: 1,
        fontFamily: "'Bebas Neue', sans-serif",
      }}>
        {String(value).padStart(2, "0")}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", paddingBottom: "6px" }}>
      <span style={{ color: "#E24B4A", fontSize: "40px", lineHeight: 1, fontFamily: "'Bebas Neue', sans-serif" }}>:</span>
    </div>
  );
}

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 23, minutes: 19, seconds: 56 });
  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleCount = 4;

  useEffect(() => {
    /* inject styles */
    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);

    /* fonts */
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(style);
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return prev;
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const canPrev = scrollIndex > 0;
  const canNext = scrollIndex + visibleCount < products.length;

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      background: "linear-gradient(180deg, #FFF8F8 0%, #F9F6FF 50%, #F5FFFE 100%)",
      padding: "40px 48px",
      maxWidth: "1200px",
      margin: "0 auto",
      borderRadius: "24px",
    }}>

      {/* Today's label */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
        <div style={{ width: "14px", height: "34px", background: "#E24B4A", borderRadius: "3px", boxShadow: "0 2px 8px #E24B4A55" }} />
        <span style={{ color: "#E24B4A", fontWeight: 600, fontSize: "15px", letterSpacing: "0.3px", fontFamily: "'DM Sans', sans-serif" }}>
          Today's
        </span>
      </div>

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "40px", flexWrap: "wrap" }}>
          <h2 style={{
            margin: 0, fontSize: "52px", fontWeight: 400, color: "#111", lineHeight: 1,
            fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em",
          }}>
            Flash Sales
          </h2>

          {/* Countdown */}
          <div style={{
            display: "flex", alignItems: "flex-end", gap: "4px",
            background: "#fff",
            border: "1.5px solid #f0e8ff",
            borderRadius: "14px",
            padding: "10px 18px",
            boxShadow: "0 2px 12px rgba(108,99,255,0.08)",
          }}>
            <CountdownUnit value={timeLeft.days} label="Days" />
            <Divider />
            <CountdownUnit value={timeLeft.hours} label="Hours" />
            <Divider />
            <CountdownUnit value={timeLeft.minutes} label="Minutes" />
            <Divider />
            <CountdownUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>

        {/* Arrow buttons */}
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            className="fs-nav-btn"
            onClick={() => setScrollIndex((i) => Math.max(0, i - 1))}
            disabled={!canPrev}
            style={{
              width: "42px", height: "42px", borderRadius: "50%",
              background: canPrev ? "#fff" : "#f0f0f0",
              border: "1.5px solid #e8e8e8",
              cursor: canPrev ? "pointer" : "not-allowed",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: canPrev ? 1 : 0.4,
              boxShadow: canPrev ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
            }}
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="fs-nav-btn"
            onClick={() => setScrollIndex((i) => Math.min(products.length - visibleCount, i + 1))}
            disabled={!canNext}
            style={{
              width: "42px", height: "42px", borderRadius: "50%",
              background: "#1a1a1a",
              border: "none",
              cursor: canNext ? "pointer" : "not-allowed",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: canNext ? 1 : 0.4,
              boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
            onMouseEnter={(e) => { if (canNext) e.currentTarget.style.background = "#E24B4A"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1a1a"; }}
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Product cards */}
      <div style={{ overflow: "hidden", padding: "4px 2px 12px" }}>
        <div style={{
          display: "flex", gap: "18px",
          transform: `translateX(calc(-${scrollIndex} * 228px))`,
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}>
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{
        height: "2px",
        background: "linear-gradient(90deg, #E24B4A22, #6C63FF44, #1D9E7522)",
        borderRadius: "2px",
        margin: "28px 0",
      }} />

      {/* View All */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="fs-view-btn"
          style={{
            background: "linear-gradient(135deg, #E24B4A 0%, #c03535 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "14px 56px",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontFamily: "'DM Sans', sans-serif",
            boxShadow: "0 4px 18px #E24B4A44",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, #1a1a1a 0%, #333 100%)"; e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.22)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, #E24B4A 0%, #c03535 100%)"; e.currentTarget.style.boxShadow = "0 4px 18px #E24B4A44"; }}
        >
          View All Products
        </button>
      </div>
    </div>
  );
}
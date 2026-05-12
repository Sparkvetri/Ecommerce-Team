import { useState, useEffect } from "react";
import gamepad from "../assets/gamepad.webp";
import keyboard from "../assets/keyboard.png";
import monitor from "../assets/monitor.png";
import chair from "../assets/chair.png";
import sofa from "../assets/sofa.png";
import iphone from "../assets/iphone.png";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    original: 160,
    discount: 40,
    rating: 4,
    reviews: 88,
    image:gamepad,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    original: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
    image:keyboard,
    hovered: true,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    original: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
    image:monitor,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    original: 400,
    discount: 25,
    rating: 3.5,
    reviews: 99,
    image:chair,
  },
  {
    id: 5,
    name: "S-Series Comfort Sofa",
    price: 375,
    original: 400,
    discount: 25,
    rating: 4.5,
    reviews: 88,
    image:sofa,
  },
  {
    id: 6,
    name: "Apple I Phone",
    price: 375,
    original: 400,
    discount: 20,
    rating: 4.5,
    reviews: 880,
    image:iphone,
  },
];

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
      {[1, 2, 3, 4, 5, ].map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        return (
          <svg key={star} width="16" height="16" viewBox="0 0 24 24">
            {half ? (
              <>
                <defs>
                  <linearGradient id={`half-${star}`}>
                    <stop offset="50%" stopColor="#FFAD33" />
                    <stop offset="50%" stopColor="#d1d5db" />
                  </linearGradient>
                </defs>
                <polygon
                  points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                  fill={`url(#half-${star})`}
                  stroke="none"
                />
              </>
            ) : (
              <polygon
                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                fill={filled ? "#FFAD33" : "#d1d5db"}
                stroke="none"
              />
            )}
          </svg>
        );
      })}
    </div>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [wished, setWished] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "4px",
        overflow: "hidden",
        minWidth: "220px",
        flex: "0 0 220px",
        cursor: "pointer",
        transition: "box-shadow 0.2s",
        boxShadow: hovered ? "0 4px 20px rgba(0,0,0,0.12)" : "none",
        position: "relative",
      }}
    >
      {/* Discount badge */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          background: "#DB4444",
          color: "#fff",
          fontSize: "12px",
          fontWeight: 400,
          borderRadius: "4px",
          padding: "4px 8px",
          zIndex: 2,
          fontFamily: "inherit",
        }}
      >
        -{product.discount}%
      </div>

      {/* Action icons */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          zIndex: 2,
        }}
      >
        <button
          onClick={() => setWished(!wished)}
          style={{
            background: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "34px",
            height: "34px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={wished ? "#DB4444" : "none"} stroke={wished ? "#DB4444" : "#333"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <button
          style={{
            background: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "34px",
            height: "34px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </button>
      </div>

      {/* Image area */}
      <div
        style={{
          background: "#F5F5F5",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "180px",        
            height: "140px",
            maxHeight: "140px",
            maxWidth: "180px",
            objectFit: "contain",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentNode.style.background = "#eee";
          }}
        />
        {/* Add to Cart overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "#000",
            color: "#fff",
            textAlign: "center",
            padding: "10px 0",
            fontSize: "14px",
            fontWeight: 500,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(100%)",
            transition: "all 0.25s ease",
            cursor: "pointer",
            letterSpacing: "0.3px",
          }}
        >
          Add To Cart
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "12px 14px 16px" }}>
        <p style={{ margin: "0 0 6px", fontWeight: 500, fontSize: "14px", color: "#000", fontFamily: "inherit" }}>
          {product.name}
        </p>
        <div style={{ display: "flex", gap: "10px", marginBottom: "8px", alignItems: "center" }}>
          <span style={{ color: "#DB4444", fontWeight: 500, fontSize: "14px" }}>${product.price}</span>
          <span style={{ color: "#888", textDecoration: "line-through", fontSize: "14px" }}>${product.original}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <StarRating rating={product.rating} />
          <span style={{ color: "#888", fontSize: "13px" }}>({product.reviews})</span>
        </div>
      </div>
    </div>
  );
}

function CountdownUnit({ value, label }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "40px" }}>
      <span style={{ fontSize: "11px", color: "#000", fontWeight: 400, marginBottom: "2px", letterSpacing: "0.5px" }}>
        {label}
      </span>
      <span style={{ fontSize: "28px", fontWeight: 700, color: "#000", lineHeight: 1 }}>
        {String(value).padStart(2, "0")}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", paddingBottom: "4px" }}>
      <span style={{ color: "#DB4444", fontSize: "22px", fontWeight: 700, lineHeight: 1 }}>:</span>
    </div>
  );
}

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 23, minutes: 19, seconds: 56 });
  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleCount = 4;

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
    <div style={{ fontFamily: "'Poppins', 'Segoe UI', sans-serif", background: "#fff", padding: "40px 48px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Today's label */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
        <div style={{ width: "16px", height: "32px", background: "#DB4444", borderRadius: "3px" }} />
        <span style={{ color: "#DB4444", fontWeight: 600, fontSize: "15px", letterSpacing: "0.3px" }}>Today's</span>
      </div>

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "48px" }}>
          <h2 style={{ margin: 0, fontSize: "32px", fontWeight: 700, color: "#000", lineHeight: 1 }}>Flash Sales</h2>
          {/* Countdown */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
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
            onClick={() => setScrollIndex((i) => Math.max(0, i - 1))}
            disabled={!canPrev}
            style={{
              width: "40px", height: "40px", borderRadius: "50%",
              background: canPrev ? "#f5f5f5" : "#f5f5f5",
              border: "none", cursor: canPrev ? "pointer" : "not-allowed",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: canPrev ? 1 : 0.4, transition: "background 0.2s",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button
            onClick={() => setScrollIndex((i) => Math.min(products.length - visibleCount, i + 1))}
            disabled={!canNext}
            style={{
              width: "40px", height: "40px", borderRadius: "50%",
              background: "#f5f5f5", border: "none",
              cursor: canNext ? "pointer" : "not-allowed",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: canNext ? 1 : 0.4, transition: "background 0.2s",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>

      {/* Product cards */}
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            gap: "20px",
            transform: `translateX(calc(-${scrollIndex} * 240px))`,
            transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Divider line */}
      <div style={{ borderBottom: "1px solid #e8e8e8", margin: "32px 0 28px" }} />

      {/* View All Products */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            background: "#DB4444",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "14px 48px",
            fontSize: "15px",
            fontWeight: 500,
            cursor: "pointer",
            letterSpacing: "0.3px",
            transition: "background 0.2s",
            fontFamily: "inherit",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#c03535")}
          onMouseLeave={(e) => (e.target.style.background = "#DB4444")}
        >
          View All Products
        </button>
      </div>
    </div>
  );
}
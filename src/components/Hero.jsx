import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const petals = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 7 + Math.random() * 6,
  size: 10 + Math.random() * 16,
  rotate: Math.random() * 360,
}));

const cornerPath = (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 5 Q5 50 50 50 Q5 50 5 95" stroke="rgba(200,151,63,0.28)" strokeWidth="0.7" fill="none"/>
    <path d="M5 5 Q50 5 50 50 Q50 5 95 5" stroke="rgba(200,151,63,0.28)" strokeWidth="0.7" fill="none"/>
    <circle cx="5" cy="5" r="2.5" fill="rgba(200,151,63,0.4)"/>
    <circle cx="50" cy="50" r="1.5" fill="rgba(200,151,63,0.22)"/>
    <circle cx="95" cy="5" r="1.5" fill="rgba(200,151,63,0.22)"/>
    <circle cx="5" cy="95" r="1.5" fill="rgba(200,151,63,0.22)"/>
  </svg>
);

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero">
      {/* Corner ornaments */}
      <div className="hero-corner tl" aria-hidden>{cornerPath}</div>
      <div className="hero-corner tr" aria-hidden>{cornerPath}</div>
      <div className="hero-corner br" aria-hidden>{cornerPath}</div>
      <div className="hero-corner bl" aria-hidden>{cornerPath}</div>

      {/* Inner frame */}
      <div className="hero-frame" aria-hidden />

      {/* Falling petals */}
      <div className="petals-container" aria-hidden>
        {petals.map((p) => (
          <div
            key={p.id}
            className="petal"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              '--rotate': `${p.rotate}deg`,
            }}
          />
        ))}
      </div>

      <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.12}px)` }}>

        <motion.p
          className="hero-bismillah"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>

        <motion.div
          className="hero-floral-top"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="fl-line rev" />
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 2C10 6 6 6 6 10C6 13 9 14 12 12C15 14 18 13 18 10C18 6 14 6 12 2Z" fill="rgba(200,151,63,0.6)"/>
            <path d="M12 22C10 18 6 18 6 14C6 11 9 10 12 12C15 10 18 11 18 14C18 18 14 18 12 22Z" fill="rgba(200,151,63,0.35)"/>
          </svg>
          <div className="fl-line" />
        </motion.div>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Together with their families
        </motion.p>

        <motion.div
          className="hero-names"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1 }}
        >
          <span className="hero-name">Muhammed Hishan</span>
          <span className="hero-ampersand">— & —</span>
          <span className="hero-name">Fathima Zankab</span>
        </motion.div>

        <motion.div
          className="hero-ornament"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1.7 }}
        >
          <div className="orn-line" />
          <div className="hero-ornament-diamond" />
          <div className="orn-line" />
        </motion.div>

        <motion.p
          className="hero-invite-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
        >
          joyfully invite you to celebrate their Nikah
        </motion.p>

        <motion.div
          className="hero-date-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1 }}
        >
          <span className="hero-date-label">Sunday</span>
          <span className="hero-date-main">09 · 05 · 2026</span>
          <span className="hero-date-location">Kannur, Kerala</span>
        </motion.div>

        <motion.a
          href="#details"
          className="hero-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          View Invitation
        </motion.a>
      </div>

      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

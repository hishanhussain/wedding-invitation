import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg" aria-hidden />

      <motion.div
        className="footer-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9 }}
      >
        <div className="footer-card-border" aria-hidden />

        {/* Top floral */}
        <div className="footer-floral" aria-hidden>
          <div className="f-line" />
          <svg viewBox="0 0 48 24" fill="none" width="48" height="24">
            <path d="M24 2C18 2 12 9 12 15C12 20 18 22 24 14C30 22 36 20 36 15C36 9 30 2 24 2Z" fill="rgba(200,151,63,0.5)"/>
          </svg>
          <div className="f-line" />
        </div>

        <p className="footer-eyebrow">Friday · 15 August 2025</p>

        <div className="footer-names">
          <span>Muhammed Hishan</span>
          <span className="footer-amp">&</span>
          <span>Fathima Zankab</span>
        </div>

        <div className="footer-ornament" aria-hidden>
          <div className="f-orn-line" />
          <div className="f-orn-diamond" />
          <div className="f-orn-line" />
        </div>

        <blockquote className="footer-ayah">
          <p>"And He created between you affection and mercy."</p>
          <cite>— Quran 30:21</cite>
        </blockquote>

        <p className="footer-dua">
          May Allah bless this union and fill their home with love, peace, and happiness.
        </p>

        {/* Bottom floral */}
        <div className="footer-floral" style={{ marginTop: '2rem', marginBottom: 0 }} aria-hidden>
          <div className="f-line" />
          <svg viewBox="0 0 48 24" fill="none" width="48" height="24">
            <path d="M24 2C18 2 12 9 12 15C12 20 18 22 24 14C30 22 36 20 36 15C36 9 30 2 24 2Z" fill="rgba(200,151,63,0.5)"/>
          </svg>
          <div className="f-line" />
        </div>
      </motion.div>

      <p className="footer-copy">Made with love ♥</p>
    </footer>
  );
}

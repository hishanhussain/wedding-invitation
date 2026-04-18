import { motion } from 'framer-motion';
import './Families.css';

export default function Families() {
  return (
    <section className="families-section">
      <div className="families-bg-pattern" aria-hidden />

      <motion.div
        className="families-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
      >
        <div className="families-card-border" aria-hidden />

        {/* Top ornament */}
        <div className="fam-ornament top" aria-hidden>
          <div className="fam-orn-line" />
          <svg viewBox="0 0 40 20" fill="none" width="40" height="20">
            <path d="M20 2 C14 2 8 8 8 13 C8 17 14 18 20 10 C26 18 32 17 32 13 C32 8 26 2 20 2Z" fill="rgba(200,151,63,0.5)"/>
          </svg>
          <div className="fam-orn-line" />
        </div>

        <p className="section-eyebrow" style={{ textAlign: 'center', color: 'var(--rose)' }}>with the blessings of</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Our Families</h2>

        <div className="families-row">
          {/* Groom side */}
          <motion.div
            className="fam-side"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="fam-role">Groom</div>
            <h3 className="fam-name">Muhammed Hishan</h3>
            <div className="fam-parents-block">
              <p className="fam-son-of">Son of</p>
              <p className="fam-parent-name">Mr. Hussain Kunhi</p>
              <p className="fam-parent-name">& Mrs. Naseeba Hussain</p>
            </div>
            <p className="fam-location">Kannur, Kerala</p>
          </motion.div>

          {/* Center ornament */}
          <motion.div
            className="fam-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 160 }}
            aria-hidden
          >
            <div className="fam-center-ring">
              <svg viewBox="0 0 60 60" fill="none" width="54" height="54">
                <path d="M30 8 C22 8 14 16 14 24 C14 34 30 50 30 50 C30 50 46 34 46 24 C46 16 38 8 30 8Z" fill="rgba(194,115,140,0.75)"/>
              </svg>
            </div>
          </motion.div>

          {/* Bride side */}
          <motion.div
            className="fam-side right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="fam-role">Bride</div>
            <h3 className="fam-name">Fathima Zankab</h3>
            <div className="fam-parents-block">
              <p className="fam-son-of">Daughter of</p>
              <p className="fam-parent-name">Mr. Sheikh Shakir</p>
              <p className="fam-parent-name">& Mrs. Sameena P V</p>
            </div>
            <p className="fam-location">Kannur, Kerala</p>
          </motion.div>
        </div>

        {/* Bottom ornament */}
        <div className="fam-ornament bottom" aria-hidden>
          <div className="fam-orn-line" />
          <svg viewBox="0 0 40 20" fill="none" width="40" height="20">
            <path d="M20 2 C14 2 8 8 8 13 C8 17 14 18 20 10 C26 18 32 17 32 13 C32 8 26 2 20 2Z" fill="rgba(200,151,63,0.5)"/>
          </svg>
          <div className="fam-orn-line" />
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import './Gallery.css';

// Placeholder gradient tiles — replace with real photo URLs
const photos = [
  { bg: 'linear-gradient(135deg, #e8b4c2, #c2738c)', span: 'wide' },
  { bg: 'linear-gradient(135deg, #f5e6c8, #c8973f)', span: '' },
  { bg: 'linear-gradient(135deg, #d4a8b8, #8b3a52)', span: '' },
  { bg: 'linear-gradient(135deg, #f0ddd5, #c2738c)', span: '' },
  { bg: 'linear-gradient(135deg, #e8d5a3, #c8973f)', span: '' },
  { bg: 'linear-gradient(135deg, #f5c6d4, #e8b4c2)', span: 'wide' },
];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-eyebrow">moments together</p>
          <h2 className="section-title">Our Gallery</h2>
        </motion.div>

        <div className="gallery-grid">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              className={`gallery-tile ${p.span}`}
              style={{ background: p.bg }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="gallery-tile-overlay">
                <span className="gallery-tile-icon">✦</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="gallery-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Photos will be updated soon ✨
        </motion.p>
      </div>
    </section>
  );
}

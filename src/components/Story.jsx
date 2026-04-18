import { motion } from 'framer-motion';
import './Story.css';

const milestones = [
  { year: '2020', title: 'First Meeting', desc: 'Two souls crossed paths by destiny, and a beautiful story began to unfold.' },
  { year: '2022', title: 'Growing Together', desc: 'Through shared dreams and quiet moments, our bond grew deeper with every passing season.' },
  { year: '2024', title: 'He Asked', desc: 'Under a sky full of stars, he asked the one question that changed everything — and she said yes.' },
  { year: '2025', title: 'Forever Begins', desc: 'On 15 August 2025, two hearts will become one in the presence of Allah and those they love.' },
];

export default function Story() {
  return (
    <section className="story-section">
      <div className="story-container">
        <motion.div
          className="story-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-eyebrow">our journey</p>
          <h2 className="section-title">A Love Story</h2>
          <div className="story-ornament" aria-hidden>
            <div className="ornament-line" />
            <span>❧</span>
            <div className="ornament-line" />
          </div>
        </motion.div>

        <div className="timeline">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <div className="timeline-card">
                <span className="timeline-year">{m.year}</span>
                <h3 className="timeline-title">{m.title}</h3>
                <p className="timeline-desc">{m.desc}</p>
              </div>
              <div className="timeline-dot">
                <div className="timeline-dot-inner" />
              </div>
            </motion.div>
          ))}
          <div className="timeline-spine" />
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Countdown.css';

const WEDDING_DATE = new Date('2026-05-09T10:00:00');

function getTimeLeft() {
  const diff = WEDDING_DATE - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: time.days, label: 'Days' },
    { value: time.hours, label: 'Hours' },
    { value: time.minutes, label: 'Minutes' },
    { value: time.seconds, label: 'Seconds' },
  ];

  return (
    <section className="countdown-section">
      <div className="countdown-floral-bg" aria-hidden />

      <motion.div
        className="countdown-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9 }}
      >
        <div className="countdown-card-border" aria-hidden />

        <p className="section-eyebrow">counting down to</p>
        <h2 className="section-title">The Big Day</h2>

        <div className="countdown-divider" aria-hidden>
          <div className="cd-line" />
          <span>✦</span>
          <div className="cd-line" />
        </div>

        <div className="countdown-grid">
          {units.map((u, i) => (
            <div key={i} className="countdown-unit">
              <div className="countdown-number">
                {String(u.value).padStart(2, '0')}
              </div>
              <div className="countdown-label">{u.label}</div>
            </div>
          ))}
        </div>

        <p className="countdown-date-text">
          Sunday, 09 May 2026 &nbsp;·&nbsp; Kannur, Kerala
        </p>
      </motion.div>
    </section>
  );
}

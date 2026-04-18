import { motion } from 'framer-motion';
import './EventDetails.css';

const events = [
  {
    title: 'Nikah Ceremony',
    arabicTitle: 'النِّكَاح',
    date: 'Sunday, 09 May 2026',
    time: '11:00 AM',
    venue: 'Dinesh Auditorium',
    address: 'Kannur, Kerala — 670001',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="38" height="38">
        <path d="M24 4C16 4 10 11 10 19C10 30 24 44 24 44C24 44 38 30 38 19C38 11 32 4 24 4Z" fill="rgba(200,151,63,0.6)" />
        <circle cx="24" cy="19" r="5" fill="rgba(255,253,249,0.9)" />
      </svg>
    ),
  },
  {
    title: 'Wedding Reception',
    arabicTitle: 'الوَلِيمَة',
    date: 'Sunday, 09 May 2026',
    time: '12:00 PM',
    venue: 'Dinesh Auditorium',
    address: 'Kannur, Kerala — 670001',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="38" height="38">
        <path d="M8 38 L8 20 L24 8 L40 20 L40 38 Z" fill="rgba(200,151,63,0.55)" />
        <rect x="19" y="26" width="10" height="12" fill="rgba(255,253,249,0.85)" />
        <rect x="14" y="22" width="20" height="3" rx="1" fill="rgba(255,253,249,0.6)" />
      </svg>
    ),
  },
];

export default function EventDetails() {
  return (
    <section id="details" className="events-section">
      <div className="events-bg" aria-hidden />

      <div className="events-container">
        <motion.div
          className="events-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-eyebrow" style={{ color: 'rgba(232,180,194,0.7)' }}>join us for</p>
          <h2 className="section-title" style={{ color: '#fff' }}>The Celebrations</h2>
          <div className="events-header-divider" aria-hidden>
            <div className="ev-line" />
            <svg viewBox="0 0 24 12" fill="none" width="24" height="12">
              <path d="M12 1C8 1 4 5 4 8C4 11 8 11 12 7C16 11 20 11 20 8C20 5 16 1 12 1Z" fill="rgba(200,151,63,0.55)"/>
            </svg>
            <div className="ev-line" />
          </div>
        </motion.div>

        <div className="events-grid">
          {events.map((ev, i) => (
            <motion.div
              key={i}
              className="event-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
            >
              <div className="event-card-border" aria-hidden />

              <div className="event-icon-wrap">{ev.icon}</div>
              <p className="event-arabic">{ev.arabicTitle}</p>
              <h3 className="event-title">{ev.title}</h3>

              <div className="event-sep">
                <div className="ev-sep-line" />
                <div className="ev-sep-dot" />
                <div className="ev-sep-line" />
              </div>

              <div className="event-info">
                <div className="event-info-row">
                  <span className="event-info-label">Date</span>
                  <span className="event-info-value">{ev.date}</span>
                </div>
                <div className="event-info-row">
                  <span className="event-info-label">Time</span>
                  <span className="event-info-value">{ev.time}</span>
                </div>
                <div className="event-info-row">
                  <span className="event-info-label">Venue</span>
                  <span className="event-info-value">
                    <strong>{ev.venue}</strong>
                    <br />
                    <em>{ev.address}</em>
                  </span>
                </div>
              </div>

              {/* <div className="event-note">{ev.note}</div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

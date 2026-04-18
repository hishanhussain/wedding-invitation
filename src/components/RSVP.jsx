import { useState } from 'react';
import { motion } from 'framer-motion';
import './RSVP.css';

export default function RSVP() {
  const [form, setForm] = useState({ name: '', guests: '1', attending: 'yes', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="rsvp-section">
      <div className="rsvp-bg-decoration" aria-hidden />
      <div className="rsvp-container">
        <motion.div
          className="rsvp-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-eyebrow" style={{ color: 'rgba(232,180,194,0.7)' }}>kindly reply by</p>
          <h2 className="section-title" style={{ color: '#fff' }}>RSVP</h2>
          <p className="rsvp-subtitle">1 August 2025</p>
        </motion.div>

        {submitted ? (
          <motion.div
            className="rsvp-success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rsvp-success-icon">💌</div>
            <h3>Thank You, {form.name}!</h3>
            <p>We have received your response and look forward to celebrating with you.</p>
          </motion.div>
        ) : (
          <motion.form
            className="rsvp-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rsvp-field">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="rsvp-row">
              <div className="rsvp-field">
                <label>Number of Guests</label>
                <select name="guests" value={form.guests} onChange={handleChange}>
                  {[1, 2, 3, 4, 5].map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div className="rsvp-field">
                <label>Will you attend?</label>
                <select name="attending" value={form.attending} onChange={handleChange}>
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>
              </div>
            </div>

            <div className="rsvp-field">
              <label>Message for the couple <span>(optional)</span></label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Share your wishes..."
                rows={4}
              />
            </div>

            <motion.button
              type="submit"
              className="rsvp-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Send RSVP
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
}

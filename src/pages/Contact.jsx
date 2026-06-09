import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="contact-page">
      <section className="page-header text-center">
        <div className="page-header-bg">
          <img src="/images/experience-yacht.jpg" alt="Contact" loading="lazy" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container relative-content">
          <AnimatedSection>
            <h1 className="section-title text-champagne-gold">Reservations & Enquiries</h1>
            <div className="title-separator"></div>
            <p className="section-text text-pearl-ivory">
              We look forward to welcoming you to Aurelia Coast Resort. Please reach out with any questions or special requests.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="contact-content section bg-ivory">
        <div className="container">
          <div className="contact-grid">
            <AnimatedSection className="contact-info">
              <h2 className="text-obsidian mb-2">Get in Touch</h2>
              <div className="title-separator" style={{ margin: '0 0 2rem 0' }}></div>
              <p className="text-charcoal mb-4">
                Our dedicated concierge team is available around the clock to assist you in planning your perfect stay.
              </p>
              
              <div className="info-block">
                <h3 className="text-obsidian">Address</h3>
                <p className="text-charcoal">123 Paradise Cove<br/>Coastal Riviera, 90210</p>
              </div>
              
              <div className="info-block">
                <h3 className="text-obsidian">Contact Details</h3>
                <p className="text-charcoal">Phone: +1 (555) 123-4567<br/>Email: reserve@aureliacoast.com</p>
              </div>

              <div className="info-block">
                <h3 className="text-obsidian">Arrivals</h3>
                <p className="text-charcoal">Private transfers via helicopter or luxury vehicle can be arranged upon request.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="contact-form-container bg-obsidian">
              {formStatus === 'success' ? (
                <div className="success-message text-center">
                  <h3 className="text-champagne-gold mb-2">Enquiry Sent Successfully</h3>
                  <p className="text-pearl-ivory">Thank you for reaching out. Our reservations team will contact you within 24 hours.</p>
                  <button onClick={() => setFormStatus('idle')} className="btn btn-outline-gold mt-4">Send Another Enquiry</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3 className="text-pearl-ivory mb-4">Booking Enquiry</h3>
                  
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" required />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="checkin">Expected Check-in</label>
                      <input type="date" id="checkin" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="guests">Number of Guests</label>
                      <select id="guests">
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4+">4+ Guests</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Special Requests / Message</label>
                    <textarea id="message" rows="4"></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-gold w-100" disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

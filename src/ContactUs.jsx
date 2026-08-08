import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Yahan aap apni API call ya backend logic add kar sakti hain
  };

  const styles = {
    sectionWrapper: {
      padding: '100px 0 80px 0',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      backgroundColor: '#0f172a',
      minHeight: '100vh',
    },
    badge: {
      display: 'inline-block',
      backgroundColor: 'rgba(79, 70, 229, 0.15)',
      color: '#818cf8',
      fontSize: '0.75rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      padding: '8px 18px',
      borderRadius: '50px',
      marginBottom: '16px',
    },
    mainTitle: {
      fontSize: '2.8rem',
      fontWeight: '800',
      color: '#ffffff',
      lineHeight: '1.2',
      letterSpacing: '-1px',
      marginBottom: '24px'
    },
    text: {
      fontSize: '1.05rem',
      color: '#94a3b8', 
      lineHeight: '1.8',
      marginBottom: '20px',
    },
    card: {
      background: 'rgba(30, 41, 59, 0.4)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.06)',
      borderRadius: '20px',
      padding: '32px',
      height: '100%',
    },
    infoTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    infoText: {
      fontSize: '0.95rem',
      color: '#94a3b8',
      margin: 0,
    },
    input: {
      background: 'rgba(15, 23, 42, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '12px',
      padding: '14px 18px',
      color: '#ffffff',
      fontSize: '0.95rem',
      width: '100%',
      outline: 'none',
      transition: 'all 0.3s ease',
    },
    textarea: {
      background: 'rgba(15, 23, 42, 0.6)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '12px',
      padding: '14px 18px',
      color: '#ffffff',
      fontSize: '0.95rem',
      width: '100%',
      outline: 'none',
      minHeight: '140px',
      resize: 'vertical',
      transition: 'all 0.3s ease',
    },
    submitBtn: {
      backgroundColor: '#4f46e5',
      color: '#ffffff',
      fontWeight: '700',
      fontSize: '1rem',
      padding: '14px 28px',
      borderRadius: '12px',
      border: 'none',
      width: '100%',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4)',
    },
    successBox: {
      background: 'rgba(16, 185, 129, 0.1)',
      border: '1px solid rgba(16, 185, 129, 0.2)',
      borderRadius: '16px',
      padding: '24px',
      textAlign: 'center',
      color: '#34d399',
      fontWeight: '600',
    }
  };

  return (
    <div style={styles.sectionWrapper}>
      <div className="container">
        
        {/* Header Section */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span style={styles.badge}>Get In Touch</span>
            <h1 style={styles.mainTitle}>We’d Love to Hear From You</h1>
            <p style={styles.text}>
              Have questions about our footwear collection, sizing, or store outlets? Drop us a message or visit one of our locations. Our team is always here to help.
            </p>
          </div>
        </div>

        <div className="row g-5 align-items-start">
          
          {/* Left Side: Contact Information & Cards */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-4">
              
              {/* Location Card */}
              <div style={styles.card} className="contact-info-card">
                <h4 style={styles.infoTitle}>
                  <i className="bi bi-geo-alt-fill" style={{ color: '#f43f5e' }}></i> Flagship Store
                </h4>
                <p style={styles.infoText}>
                  Main Boulevard, Gulberg III, Lahore, Pakistan
                </p>
              </div>

              {/* Email Card */}
              <div style={styles.card} className="contact-info-card">
                <h4 style={styles.infoTitle}>
                  <i className="bi bi-envelope-fill" style={{ color: '#818cf8' }}></i> Email Support
                </h4>
                <p style={styles.infoText}>
                  support@stylofootwear.pk
                </p>
              </div>

              {/* Phone Card */}
              <div style={styles.card} className="contact-info-card">
                <h4 style={styles.infoTitle}>
                  <i className="bi bi-telephone-fill" style={{ color: '#10b981' }}></i> Call Helpline
                </h4>
                <p style={styles.infoText}>
                  +92 (42) 111-STYLO-PK
                </p>
              </div>

            </div>
          </div>

          {/* Right Side: Modern Contact Form */}
          <div className="col-lg-7">
            <div style={styles.card}>
              {submitted ? (
                <div style={styles.successBox}>
                  <i className="bi bi-check-circle-fill fs-2 mb-2 d-block"></i>
                  <h4>Thank You!</h4>
                  <p className="mb-0 text-light">Your message has been sent successfully. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label text-light fw-semibold mb-2" style={{ fontSize: '0.9rem' }}>Your Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Ayesha Khan" 
                        required 
                        style={styles.input}
                        className="custom-form-input"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-light fw-semibold mb-2" style={{ fontSize: '0.9rem' }}>Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="ayesha@example.com" 
                        required 
                        style={styles.input}
                        className="custom-form-input"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label text-light fw-semibold mb-2" style={{ fontSize: '0.9rem' }}>Subject</label>
                      <input 
                        type="text" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        placeholder="Inquiry about product sizing / Order status" 
                        required 
                        style={styles.input}
                        className="custom-form-input"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label text-light fw-semibold mb-2" style={{ fontSize: '0.9rem' }}>Your Message</label>
                      <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Write your message here..." 
                        required 
                        style={styles.textarea}
                        className="custom-form-input"
                      ></textarea>
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" style={styles.submitBtn} className="contact-submit-btn">
                        Send Message <i className="bi bi-send-fill ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* CUSTOM HOVER & INTERACTION STYLES */}
      <style>{`
        .contact-info-card:hover {
          transform: translateY(-4px);
          background: rgba(30, 41, 59, 0.6) !important;
          border-color: rgba(79, 70, 229, 0.4) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
          transition: all 0.4s ease;
        }
        .custom-form-input:focus {
          border-color: #818cf8 !important;
          background: rgba(15, 23, 42, 0.8) !important;
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.15) !important;
        }
        .contact-submit-btn:hover {
          background-color: #4338ca !important;
          transform: translateY(-2px);
          box-shadow: 0 15px 30px -5px rgba(79, 70, 229, 0.6) !important;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
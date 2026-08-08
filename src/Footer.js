import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const styles = {
    footerWrapper: {
      backgroundColor: '#0f172a', // Deep elegant slate
      color: '#94a3b8',
      padding: '80px 0 30px 0',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      marginTop: '80px'
    },
    brandTitle: {
      color: '#ffffff',
      fontSize: '1.4rem',
      fontWeight: '800',
      letterSpacing: '-0.5px',
      marginBottom: '16px'
    },
    heading: {
      color: '#ffffff',
      fontSize: '0.85rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      marginBottom: '24px',
    },
    link: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '0.92rem',
      display: 'block',
      marginBottom: '14px',
      transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
    },
    addressText: {
      fontSize: '0.92rem',
      lineHeight: '1.65',
      color: '#94a3b8',
      marginBottom: '12px',
      display: 'flex',
      alignItems: 'center'
    },
    socialIcon: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      color: '#ffffff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '12px',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    }
  };

  return (
    <footer style={styles.footerWrapper}>
      <div className="container">
        <div className="row g-5">
          
          {/* Brand Info Column */}
          <div className="col-md-5">
            <h4 style={styles.brandTitle}>HS PREMIUM FOOTWEAR</h4>
            <p style={{ ...styles.addressText, pr: '40px' }}>
              Experience unparalleled luxury, precision craftsmanship, and modern styling architectures designed for high-end lifestyle performance.
            </p>
            {/* Premium Social Channels */}
            <div className="mt-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.socialIcon} className="footer-social-link">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={styles.socialIcon} className="footer-social-link">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" style={styles.socialIcon} className="footer-social-link">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Navigation Hub */}
          <div className="col-md-3 col-6 offset-md-1">
            <h5 style={styles.heading}>Explore Hub</h5>
            <Link to="/" style={styles.link} className="footer-luxury-link">Home Base</Link>
            <Link to="/women" style={styles.link} className="footer-luxury-link">Women's Hub</Link>
            <Link to="/men" style={styles.link} className="footer-luxury-link">Men's Editorial</Link>
          </div>

          {/* Contact Infrastructure */}
          <div className="col-md-3 col-6">
            <h5 style={styles.heading}>Contact Channels</h5>
            <div style={styles.addressText}>
              <i className="bi bi-envelope-at text-white me-2" style={{ fontSize: '1.05rem' }}></i> 
              support@hsbrand.com
            </div>
            <div style={styles.addressText}>
              <i className="bi bi-telephone text-white me-2" style={{ fontSize: '1.05rem' }}></i> 
              +92 300 1234567
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <hr style={{ borderColor: 'rgba(255,255,255,0.06)', margin: '50px 0 25px 0' }} />
        
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center text-muted small">
          <div className="mb-2 mb-sm-0">
            © {new Date().getFullYear()} HS BRAND. All Rights Reserved.
          </div>
          <div style={{ letterSpacing: '0.5px', color: '#64748b' }}>
            Crafted with Premium Specifications.
          </div>
        </div>
      </div>

      {/* LUXURY INTERACTION MECHANICS */}
      <style>{`
        /* Smooth Text Slide & Glow Transition */
        .footer-luxury-link:hover {
          color: #ffffff !important;
          transform: translateX(6px);
        }

        /* Social Bubble Animations */
        .footer-social-link:hover {
          background-color: #4f46e5 !important; /* Premium Indigo Accent */
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
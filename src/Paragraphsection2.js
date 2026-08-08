import React from 'react';

const Paragraphsection2 = () => {
  // --- MODERN INTERNAL STYLES ---
  const styles = {
    container: {
      padding: '40px 0',
      fontFamily: "'Inter', sans-serif",
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#0f172a',
      textAlign: 'center',
      marginBottom: '8px',
      textTransform: 'uppercase',
    },
    subtitle: {
      fontSize: '1rem',
      color: '#64748b',
      textAlign: 'center',
      marginBottom: '48px',
    },
    card: {
      backgroundColor: '#ffffff',
      border: '1px solid rgba(226, 232, 240, 0.8)',
      borderRadius: '16px',
      padding: '28px',
      height: '100%',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    cardTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    cardText: {
      fontSize: '0.95rem',
      color: '#64748b',
      lineHeight: '1.6',
      margin: 0,
    },
    infoBanner: {
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      borderRadius: '20px',
      padding: '40px',
      color: '#ffffff',
      marginTop: '50px',
      boxShadow: '0 20px 40px rgba(15, 23, 42, 0.1)',
    },
    infoTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '10px',
      color: '#ffffff',
    },
    infoText: {
      fontSize: '1rem',
      color: '#cbd5e1',
      lineHeight: '1.6',
      margin: 0,
    }
  };

  return (
    <div style={styles.container}>
      {/* Headings */}
      <div>
        <h2 style={styles.sectionTitle}>Our Top Categories of Ladies’ Shoes</h2>
        <p style={styles.subtitle}>Explore our latest collections online and in stores. Here’s a look at our top-selling categories:</p>
      </div>

      {/* 4-Column Product Categories Grid */}
      <div className="row g-4">
        
        {/* Sneakers */}
        <div className="col-md-6 col-lg-3">
          <div style={styles.card} className="custom-feature-card">
            <h4 style={styles.cardTitle}>
              <i className="bi bi-activity text-primary"></i> All-Season Sneakers
            </h4>
            <p style={styles.cardText}>
              Looking for comfy and stylish everyday shoes? Our sneakers have you covered! Perfect for running errands or a casual vibe.
            </p>
          </div>
        </div>

        {/* Sandals */}
        <div className="col-md-6 col-lg-3">
          <div style={styles.card} className="custom-feature-card">
            <h4 style={styles.cardTitle}>
              <i className="bi bi-sun-fill text-warning"></i> Sandals for Summer
            </h4>
            <p style={styles.cardText}>
              Easy to slip on and super comfy! From casual flats to trendy strappy designs made for sunny days and everyday comfort.
            </p>
          </div>
        </div>

        {/* Heels */}
        <div className="col-md-6 col-lg-3">
          <div style={styles.card} className="custom-feature-card">
            <h4 style={styles.cardTitle}>
              <i className="bi bi-gem" style={{ color: '#ec4899' }}></i> Ladies Heels
            </h4>
            <p style={styles.cardText}>
              Step into confidence with sleek stilettos or comfy block heels. Perfect to turn heads on every special occasion.
            </p>
          </div>
        </div>

        {/* Pumps */}
        <div className="col-md-6 col-lg-3">
          <div style={styles.card} className="custom-feature-card">
            <h4 style={styles.cardTitle}>
              <i className="bi bi-award-fill text-success"></i> Classic Pumps
            </h4>
            <p style={styles.cardText}>
              A must-have for every wardrobe! Effortlessly stylish, whether you're dressing up for work or heading out for a special event.
            </p>
          </div>
        </div>

      </div>

      {/* Info Premium Banner Section (Size Guide & Outlets) */}
      <div style={styles.infoBanner}>
        <div className="row g-4 division-line">
          
          {/* Size Guide */}
          <div className="col-md-6 border-end-custom">
            <h4 style={styles.infoTitle}>
              <i className="bi bi-ruler me-2 text-info"></i> Not Sure About Your Size?
            </h4>
            <p style={styles.infoText}>
              No problem. Our easy-to-follow size guide helps you find the right fit. If you’re between sizes, we suggest going one size up for extra comfort.
            </p>
          </div>

          {/* Outlets */}
          <div className="col-md-6 ps-md-4">
            <h4 style={styles.infoTitle}>
              <i className="bi bi-geo-alt-fill me-2 text-danger"></i> Visit Us In-Store or Online
            </h4>
            <p style={styles.infoText}>
              With over 250+ outlets in Lahore, Karachi, Islamabad, Peshawar, and more. Prefer shopping from home? Our website is always updated.
            </p>
          </div>

        </div>
      </div>

      {/* Hover effects and responsive alignment hacks */}
      <style>{`
        .custom-feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06) !important;
          border-color: #4f46e5 !important;
        }
        .custom-feature-card i {
          font-size: 1.25rem;
        }
        @media (min-width: 768px) {
          .border-end-custom {
            border-right: 1px solid rgba(255, 255, 255, 0.15);
          }
        }
        @media (max-width: 767.98px) {
          .border-end-custom {
            margin-bottom: 24px;
            padding-bottom: 24px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          }
        }
      `}</style>
    </div>
  );
};

export default Paragraphsection2;
import React from 'react';

const Tablesection = () => {
  const comparisonData = [
    {
      feature: "Material Quality",
      hs: "Durable PU, Vegan Leather, Breathable Linings",
      other: "Rough Synthetic Materials",
      icon: "bi-gem"
    },
    {
      feature: "Comfort Index",
      hs: "Cushioned footbeds, active arch support",
      other: "Basic flat soles, no padding",
      icon: "bi-heart-pulse-fill"
    },
    {
      feature: "Design Pipeline",
      hs: "1000+ trend-setting designs per season",
      other: "Limited, mass-reproduced options",
      icon: "bi-lightning-charge-fill"
    },
    {
      feature: "Craftsmanship",
      hs: "Soft inner lining, seamless non-slip stitching",
      other: "Rough edges, standard pasting",
      icon: "bi-award-fill"
    },
    {
      feature: "Sizing Flexibility",
      hs: "True-to-size fit with adaptive half sizes",
      other: "Inconsistent scale options",
      icon: "bi-sliders"
    }
  ];

  return (
    <div style={styles.sectionWrapper}>
      <div className="container">
        
        {/* HEADER BLOCK */}
        <div className="text-center mb-5">
          <span style={styles.badge}>The Premium Edge</span>
          <h2 style={styles.sectionTitle}>Why Choose Hs?</h2>
          <p style={styles.sectionSub}>See how our uncompromising standards stack up against ordinary footwear brands.</p>
        </div>

        {/* MODERN COMPARISON GRID */}
        <div className="row g-4 justify-content-center">
          {comparisonData.map((item, index) => (
            <div className="col-12 col-lg-10" key={index}>
              <div className="premium-metric-card" style={styles.cardLayout}>
                
                {/* Feature Title with Icon */}
                <div style={styles.featureBlock}>
                  <div className="icon-shell" style={styles.iconContainer}>
                    <i className={`bi ${item.icon}`} style={styles.iconStyle}></i>
                  </div>
                  <h4 style={styles.featureTitle}>{item.feature}</h4>
                </div>

                {/* Grid Splitter for Comparison */}
                <div className="row w-100 g-3 align-items-center m-0 mt-2 mt-md-0">
                  
                  {/* Hs Premium Spec */}
                  <div className="col-12 col-md-6 px-md-3">
                    <div style={styles.hsShell}>
                      <span style={styles.brandTagHs}>Hs Premium</span>
                      <p style={styles.specTextHs}>
                        <i className="bi bi-check-circle-fill me-2" style={{ color: '#10b981' }}></i>
                        {item.hs}
                      </p>
                    </div>
                  </div>

                  {/* Other Brands Spec */}
                  <div className="col-12 col-md-6 px-md-3">
                    <div style={styles.otherShell}>
                      <span style={styles.brandTagOther}>Other Brands</span>
                      <p style={styles.specTextOther}>
                        <i className="bi bi-x-circle me-2" style={{ color: '#f43f5e' }}></i>
                        {item.other}
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LUXURY INTERACTION STYLES */}
      <style>{`
        .premium-metric-card {
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .premium-metric-card:hover {
          transform: translateY(-4px);
          border-color: rgba(79, 70, 229, 0.25) !important;
          background: rgba(30, 41, 59, 0.5) !important;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        .premium-metric-card:hover .icon-shell {
          background-color: #4f46e5 !important;
          box-shadow: 0 0 15px rgba(79, 70, 229, 0.4);
        }
      `}</style>
    </div>
  );
};

// Custom Luxury Glassmorphism Styles (Matching your premium dark aesthetic)
const styles = {
  sectionWrapper: {
    padding: '100px 0 80px 0',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    backgroundColor: '#0f172a', // Sleek dark slate premium background
    minHeight: '80vh',
  },
  badge: {
    backgroundColor: 'rgba(79, 70, 229, 0.15)',
    color: '#818cf8',
    letterSpacing: '2px',
    padding: '8px 16px',
    borderRadius: '30px',
    fontWeight: '600',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '-1px',
    marginTop: '12px',
  },
  sectionSub: {
    color: '#94a3b8',
    fontSize: '1.05rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  cardLayout: {
    background: 'rgba(30, 41, 59, 0.3)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  featureBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    minWidth: '240px',
  },
  iconContainer: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s',
  },
  iconStyle: {
    color: '#818cf8',
    fontSize: '1.25rem',
  },
  featureTitle: {
    color: '#ffffff',
    fontSize: '1.15rem',
    fontWeight: '700',
    margin: 0,
  },
  hsShell: {
    backgroundColor: 'rgba(16, 185, 129, 0.05)',
    border: '1px solid rgba(16, 185, 129, 0.1)',
    borderRadius: '14px',
    padding: '12px 16px',
    position: 'relative',
  },
  brandTagHs: {
    position: 'absolute',
    top: '-9px',
    left: '14px',
    fontSize: '0.65rem',
    backgroundColor: '#10b981',
    color: '#ffffff',
    padding: '1px 8px',
    borderRadius: '6px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  specTextHs: {
    color: '#e2e8f0',
    margin: 0,
    fontSize: '0.9rem',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
  },
  otherShell: {
    backgroundColor: 'rgba(244, 63, 94, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.03)',
    borderRadius: '14px',
    padding: '12px 16px',
    position: 'relative',
  },
  brandTagOther: {
    position: 'absolute',
    top: '-9px',
    left: '14px',
    fontSize: '0.65rem',
    backgroundColor: '#475569',
    color: '#cbd5e1',
    padding: '1px 8px',
    borderRadius: '6px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  specTextOther: {
    color: '#94a3b8',
    margin: 0,
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
  },
};

export default Tablesection;
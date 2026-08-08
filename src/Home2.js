import React from 'react';
import { Link } from 'react-router-dom';

const Home2 = () => {
  return (
    <div style={globalGridStyles.sectionWrapper}>
      {/* Header Block */}
      <div className="text-center mb-5">
        <span className="badge text-uppercase mb-2" style={globalGridStyles.badgeWomen}>Curated Trend</span>
        <h2 style={globalGridStyles.sectionTitle}>Shop by Categories</h2>
        <p style={globalGridStyles.sectionSub}>Elevate your style with our signature premium women's line.</p>
      </div>

      {/* Synchronized Row Layout */}
      <div className="row g-4 justify-content-center">
        <CategoryCard to="/category/heels" img="/heel.jpg" label="Heels" count="120+ Styles" size="col-md-4" />
        <CategoryCard to="/category/flats" img="/flat.jpg" label="Flats" count="85+ Styles" size="col-md-4" />
        <CategoryCard to="/category/khosa" img="/khosa.jpg" label="Eid Collection" count="Exclusive" size="col-md-4" />
        <CategoryCard to="/category/formal" img="/flat1.jpg" label="Formal Shoes" count="Featured" size="col-md-6" />
        <CategoryCard to="/category/ladiesboot" img="/bootgirls.jpg" label="Ladies Boot" count="Winter Special" size="col-md-6" />
      </div>

      {/* GLOBAL HOVER ARCHITECTURE */}
      <style>{globalGridStyles.sharedCSS}</style>
    </div>
  );
};

const CategoryCard = ({ to, img, label, count, size }) => {
  return (
    <div className={size}>
      <Link to={to} className="d-block position-relative overflow-hidden premium-luxury-card" style={globalGridStyles.cardLayout}>
        <div className="card-bg-img" style={{ ...globalGridStyles.cardBgImage, backgroundImage: `url(${img})` }}></div>
        <div style={globalGridStyles.gradientOverlay}></div>
        
        <div style={globalGridStyles.glassPanel} className="glass-panel">
          <div>
            <h4 style={globalGridStyles.panelTitle}>{label}</h4>
            <span style={globalGridStyles.panelSub}>{count}</span>
          </div>
          <div className="arrow-circle" style={globalGridStyles.arrowShell}>
            <i className="bi bi-arrow-up-right" style={globalGridStyles.arrowIcon}></i>
          </div>
        </div>
      </Link>
    </div>
  );
};

const globalGridStyles = {
  sectionWrapper: {
    padding: '60px 0 40px 0',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    backgroundColor: '#ffffff'
  },
  badgeWomen: {
    backgroundColor: '#e0e7ff',
    color: '#4f46e5',
    letterSpacing: '2px',
    padding: '8px 16px',
    borderRadius: '30px',
    fontWeight: '600',
    fontSize: '0.75rem'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#0f172a',
    letterSpacing: '-1px',
    marginTop: '8px'
  },
  sectionSub: {
    color: '#64748b',
    fontSize: '1.05rem',
  },
  cardLayout: {
    textDecoration: 'none'
  },
  cardBgImage: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
  },
  gradientOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0) 60%)'
  },
  glassPanel: {
    position: 'absolute',
    background: 'rgba(255, 255, 255, 0.07)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.3s'
  },
  panelTitle: {
    color: '#ffffff',
    margin: 0,
    fontWeight: '700'
  },
  panelSub: {
    color: '#94a3b8',
    fontWeight: '500'
  },
  arrowShell: {
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s'
  },
  arrowIcon: {
    color: '#0f172a',
    transition: 'transform 0.3s'
  },
  sharedCSS: `
    .premium-luxury-card {
      border-radius: 24px;
      height: 360px;
    }
    .premium-luxury-card .glass-panel {
      bottom: 20px; left: 20px; right: 20px; padding: 18px; border-radius: 16px;
    }
    .premium-luxury-card h4 { font-size: 1.2rem; }
    .premium-luxury-card span { font-size: 0.8rem; }
    .premium-luxury-card .arrow-circle { width: 38px; height: 38px; }
    .premium-luxury-card .arrow-circle i { font-size: 0.95rem; }

    .premium-luxury-card:hover .card-bg-img { 
      transform: scale(1.06); 
    }
    .premium-luxury-card:hover .glass-panel {
      background: rgba(255, 255, 255, 0.12) !important;
      border-color: rgba(255, 255, 255, 0.25) !important;
      transform: translateY(-2px);
    }
    .premium-luxury-card:hover .arrow-circle { 
      background-color: #4f46e5 !important; 
    }
    .premium-luxury-card:hover .arrow-circle i { 
      color: #ffffff !important; 
      transform: rotate(45deg); 
    }

    @media (max-width: 576px) {
      .premium-luxury-card { height: 280px !important; }
      .glass-panel { padding: 12px !important; bottom: 12px !important; left: 12px !important; right: 12px !important; }
      .glass-panel h4 { font-size: 1rem !important; }
      .glass-panel span { font-size: 0.75rem !important; }
    }
  `
};

export default Home2;
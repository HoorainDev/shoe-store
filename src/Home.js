import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={globalStyles.pageWrapper}>
      
      {/* 1. HERO BANNER SECTION */}
      <section style={globalStyles.heroSection}>
        <div className="container h-100 d-flex align-items-center">
          <div className="row w-100">
            <div className="col-lg-6 text-white" style={{ zIndex: 2 }}>
              <span className="badge text-uppercase mb-3" style={globalStyles.heroBadge}>New Season Launch</span>
              <h1 style={globalStyles.heroTitle}>Step Into <br /><span style={{ color: '#4f46e5' }}>Luxury Comfort</span></h1>
              <p style={globalStyles.heroSub}>Discover premium craftsmanship, seamless fit, and trend-setting designs crafted for everyday elegance.</p>
              <div className="d-flex gap-3 mt-4">
                <Link to="/shop" className="btn btn-primary px-4 py-3 border-0" style={globalStyles.primaryBtn}>Explore Collection</Link>
                <Link to="/about" className="btn btn-outline-light px-4 py-3" style={globalStyles.outlineBtn}>Our Story</Link>
              </div>
            </div>
          </div>
        </div>
        <div style={globalStyles.heroOverlay}></div>
      </section>

      {/* 2. PARAGRAPH / BANNER VALUE STRIP */}
      <section className="py-4" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="row justify-content-center text-center g-3">
            <div className="col-md-4">
              <h6 className="mb-1 text-dark fw-bold"><i className="bi bi-truck me-2 text-primary"></i> Free Shipping</h6>
              <p className="text-muted small mb-0">On all orders above PKR 3,000</p>
            </div>
            <div className="col-md-4" style={{ borderLeft: '1px solid #cbd5e1', borderRight: '1px solid #cbd5e1' }}>
              <h6 className="mb-1 text-dark fw-bold"><i className="bi bi-arrow-left-right me-2 text-primary"></i> 7-Day Exchange</h6>
              <p className="text-muted small mb-0">Easy returns, no questions asked</p>
            </div>
            <div className="col-md-4">
              <h6 className="mb-1 text-dark fw-bold"><i className="bi bi-shield-check me-2 text-primary"></i> 100% Premium</h6>
              <p className="text-muted small mb-0">Certified materials & premium comfort</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        @media (max-width: 768px) {
          h1 { font-size: 2.5rem !important; }
        }
      `}</style>
    </div>
  );
};

const globalStyles = {
  pageWrapper: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    backgroundColor: '#ffffff',
    color: '#0f172a',
    overflowX: 'hidden'
  },
  heroSection: {
    position: 'relative',
    height: '80vh',
    minHeight: '550px',
    backgroundImage: "url('https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 100%)',
    zIndex: 1
  },
  heroBadge: {
    backgroundColor: 'rgba(79, 70, 229, 0.2)',
    color: '#a5b4fc',
    letterSpacing: '2px',
    padding: '8px 16px',
    borderRadius: '30px',
    fontWeight: '600',
    fontSize: '0.75rem',
    border: '1px solid rgba(79, 70, 229, 0.3)'
  },
  heroTitle: {
    fontSize: '3.8rem',
    fontWeight: '800',
    letterSpacing: '-1.5px',
    lineHeight: '1.15'
  },
  heroSub: {
    color: '#94a3b8',
    fontSize: '1.1rem',
    marginTop: '15px',
    maxWidth: '500px',
    lineHeight: '1.6'
  },
  primaryBtn: {
    backgroundColor: '#4f46e5',
    fontWeight: '600',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(79, 70, 229, 0.3)'
  },
  outlineBtn: {
    fontWeight: '600',
    borderRadius: '12px',
    border: '2px solid rgba(255,255,255,0.4)'
  }
};

export default Home;
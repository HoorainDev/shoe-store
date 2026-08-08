import React from 'react';

const AboutUs = () => {
  // --- ELITE VISUAL RESHUFFLE & PREMIUM DARK THEME ---
  const styles = {
    sectionWrapper: {
      padding: '100px 0 80px 0',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      backgroundColor: '#0f172a', // Sleek dark aesthetic
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
    subTitle: {
      fontSize: '1.35rem',
      fontWeight: '700',
      color: '#818cf8',
      marginTop: '32px',
      marginBottom: '14px',
    },
    text: {
      fontSize: '1.05rem',
      color: '#94a3b8', 
      lineHeight: '1.8',
      marginBottom: '20px',
    },
    imageContainer: {
      position: 'relative',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
    },
    heroImg: {
      width: '100%',
      height: '480px',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
    },
    imgOverlay: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0))',
      padding: '32px',
    },
    sectionDivider: {
      fontSize: '2.20rem',
      fontWeight: '800',
      color: '#ffffff',
      textAlign: 'center',
      marginBottom: '8px',
      letterSpacing: '-0.5px'
    },
    sectionSub: {
      fontSize: '1rem',
      color: '#64748b',
      textAlign: 'center',
      marginBottom: '48px',
    },
    card: {
      background: 'rgba(30, 41, 59, 0.4)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.06)',
      borderRadius: '20px',
      padding: '32px',
      height: '100%',
      transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    cardText: {
      fontSize: '0.95rem',
      color: '#94a3b8',
      lineHeight: '1.6',
      margin: 0,
    },
    infoBanner: {
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '24px',
      padding: '44px',
      color: '#ffffff',
      marginTop: '64px',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
    },
    infoTitle: {
      fontSize: '1.35rem',
      fontWeight: '700',
      marginBottom: '12px',
      color: '#ffffff',
    },
    infoText: {
      fontSize: '0.98rem',
      color: '#cbd5e1',
      lineHeight: '1.7',
      margin: 0,
    }
  };

  return (
    <div style={styles.sectionWrapper}>
      <div className="container">
        
        {/* ================= SECTION 1: MODERN HERO SPLIT LAYOUT ================= */}
        <div className="row g-5 align-items-center mb-5 pb-5">
          
          {/* Left Column - Sticky Visual & Brand Statement */}
          <div className="col-lg-5">
            <div style={styles.imageContainer} className="brand-image-wrapper">
              <img 
                src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSdjuxgGEeLG7Nn5_F9J--uJKrGVAbmNSV5oAsVIE_XZcp1DNOhFZCa8FU3eFUxdZnGHOW5jxrpMWhjmZA" 
                alt="Stylo Premium Brand Display" 
                style={styles.heroImg}
                className="brand-hero-image"
              />
              <div style={styles.imgOverlay}>
                <span style={styles.badge}>Our Legacy</span>
                <h3 className="text-white fw-bold mb-0" style={{ letterSpacing: '-0.5px' }}>
                  Crafting Elegance Since Day One
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column - Clean Paragraph Content */}
          <div className="col-lg-7 ps-lg-5">
            <h1 style={styles.mainTitle}>
              Best Women &amp; Men's Shoes Brand in Pakistan
            </h1>
            
            <p style={styles.text}>
              Shopping for women's shoes should feel exciting, not overwhelming. With so many styles and options available, it’s easy to feel unsure about what to buy. That’s where Stylo comes in, your trusted online shop for stylish, comfortable, and affordable ladies’ shoes in Pakistan. With the widest variety of shoes under one roof, Stylo makes it easier than ever to find exactly what you’re looking for.
            </p>
            <p style={styles.text}>
              Whether you want something casual for everyday wear, something elegant for a formal event, or trendy fashion shoes to match your weekend plans, we’ve got it all.
            </p> 

            <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

            <h4 style={styles.subTitle}>Explore Comfortable and Stylish Footwear for Women</h4>
            <p style={styles.text}>
              We never compromise on quality or comfort. Every pair of shoes is carefully designed with durable soles, breathable linings, and smooth finishes because we believe you should never have to choose between looking good and feeling good.
            </p>

            <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

            <h4 style={styles.subTitle}>Why Women Across Pakistan Prefer Stylo Shoes</h4>
            <p style={styles.text}>
              What sets Stylo apart is not just the style, it’s the variety and trust we offer. With new designs added regularly, we make sure you always find something fresh. Whether you shop online or visit one of our 250-plus stores across Pakistan, you’ll experience the same promise: stylish shoes, reliable quality, and great prices.
            </p>
            <p style={styles.text}>
              We listen to our customers and constantly improve our collections based on your feedback. That’s why millions of women in Pakistan trust Stylo.
            </p>
          </div>
        </div>

        <hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />

        {/* ================= SECTION 2: TOP FEATURED CATEGORIES ================= */}
        <div className="mt-5">
          <h2 style={styles.sectionDivider}>Our Top Categories of Ladies’ Shoes</h2>
          <p style={styles.sectionSub}>Explore our latest collections online and in stores. Here’s a look at our top-selling categories:</p>
        </div>

        <div className="row g-4">
          {/* Sneakers */}
          <div className="col-md-6 col-lg-3">
            <div style={styles.card} className="about-feature-card">
              <h4 style={styles.cardTitle}>
                <i className="bi bi-activity" style={{ color: '#6366f1' }}></i> All-Season Sneakers
              </h4>
              <p style={styles.cardText}>
                Looking for comfy and stylish everyday shoes? Our sneakers have you covered! Perfect for running errands or a casual vibe.
              </p>
            </div>
          </div>

          {/* Sandals */}
          <div className="col-md-6 col-lg-3">
            <div style={styles.card} className="about-feature-card">
              <h4 style={styles.cardTitle}>
                <i className="bi bi-sun-fill" style={{ color: '#f59e0b' }}></i> Sandals for Summer
              </h4>
              <p style={styles.cardText}>
                Easy to slip on and super comfy! From casual flats to trendy strappy designs made for sunny days and everyday comfort.
              </p>
            </div>
          </div>

          {/* Heels */}
          <div className="col-md-6 col-lg-3">
            <div style={styles.card} className="about-feature-card">
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
            <div style={styles.card} className="about-feature-card">
              <h4 style={styles.cardTitle}>
                <i className="bi bi-award-fill" style={{ color: '#10b981' }}></i> Classic Pumps
              </h4>
              <p style={styles.cardText}>
                A must-have for every wardrobe! Effortlessly stylish, whether you're dressing up for work or heading out for a special event.
              </p>
            </div>
          </div>
        </div>

        {/* ================= SECTION 3: UTILITY BANNER (SIZE GUIDE & OUTLETS) ================= */}
        <div style={styles.infoBanner}>
          <div className="row g-4 generic-division-line">
            
            {/* Size Guide */}
            <div className="col-md-6 inline-border-end">
              <h4 style={styles.infoTitle}>
                <i className="bi bi-ruler me-2" style={{ color: '#0ea5e9' }}></i> Not Sure About Your Size?
              </h4>
              <p style={styles.infoText}>
                No problem. Our easy-to-follow size guide helps you find the right fit. If you’re between sizes, we suggest going one size up for extra comfort.
              </p>
            </div>

            {/* Outlets */}
            <div className="col-md-6 ps-md-4">
              <h4 style={styles.infoTitle}>
                <i className="bi bi-geo-alt-fill me-2" style={{ color: '#f43f5e' }}></i> Visit Us In-Store or Online
              </h4>
              <p style={styles.infoText}>
                With over 250+ outlets in Lahore, Karachi, Islamabad, Peshawar, and more. Prefer shopping from home? Our website is always updated.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* CORE CSS TRANSLATION & HOVER LAYERS */}
      <style>{`
        .brand-image-wrapper:hover .brand-hero-image {
          transform: scale(1.05);
        }
        .about-feature-card:hover {
          transform: translateY(-6px);
          background: rgba(30, 41, 59, 0.6) !important;
          border-color: rgba(79, 70, 229, 0.4) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
        }
        .about-feature-card i {
          font-size: 1.35rem;
        }
        @media (min-width: 768px) {
          .inline-border-end {
            border-right: 1px solid rgba(255, 255, 255, 0.1);
          }
        }
        @media (max-width: 767.98px) {
          .inline-border-end {
            margin-bottom: 24px;
            padding-bottom: 24px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
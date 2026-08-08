import React from 'react';

const Paragraphsection = () => {
  // --- MODERN SECTIONS STYLES ---
  const styles = {
    container: {
      padding: '40px 0',
      fontFamily: "'Inter', sans-serif",
    },
    badge: {
      display: 'inline-block',
      backgroundColor: 'rgba(79, 70, 229, 0.08)',
      color: '#4f46e5',
      fontSize: '0.75rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      padding: '6px 16px',
      borderRadius: '50px',
      marginBottom: '20px',
    },
    mainTitle: {
      fontSize: '2.25rem',
      fontWeight: '800',
      color: '#0f172a',
      lineHeight: '1.2',
      letterSpacing: '-0.5px',
    },
    subTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#1e293b',
      marginTop: '32px',
      marginBottom: '12px',
    },
    text: {
      fontSize: '1.05rem',
      color: '#475569', // Soft readability slate color
      lineHeight: '1.75',
      marginBottom: '16px',
    }
  };

  return (
    <div style={styles.container}>
      <div className="row g-5 align-items-start">
        
        {/* Left Column - Main Heading with Accent Badge */}
        <div className="col-lg-4">
          <div className="position-sticky" style={{ top: '120px' }}>
            <span style={styles.badge}>Our Legacy</span>
            <h1 style={styles.mainTitle}>
              Best Women & Men's Shoes Brand in Pakistan
            </h1>
          </div>
        </div>

        {/* Right Column - Clean Readable Paragraph Content */}
        <div className="col-lg-8 ps-lg-5">
          <p style={styles.text}>
            Shopping for women's shoes should feel exciting, not overwhelming. With so many styles and options available, it’s easy to feel unsure about what to buy. That’s where Stylo comes in, your trusted online shop for stylish, comfortable, and affordable ladies’ shoes in Pakistan. With the widest variety of shoes under one roof, Stylo makes it easier than ever to find exactly what you’re looking for.
          </p>
          <p style={styles.text}>
            Whether you want something casual for everyday wear, something elegant for a formal event, or trendy fashion shoes to match your weekend plans, we’ve got it all.
          </p> 

          <hr className="my-4 opacity-25" />

          <h4 style={styles.subTitle}>Explore Comfortable and Stylish Footwear for Women</h4>
          <p style={styles.text}>
            We never compromise on quality or comfort. Every pair of shoes is carefully designed with durable soles, breathable linings, and smooth finishes because we believe you should never have to choose between looking good and feeling good.
          </p>

          <hr className="my-4 opacity-25" />

          <h4 style={styles.subTitle}>Why Women Across Pakistan Prefer Stylo Shoes</h4>
          <p style={styles.text}>
            What sets Stylo apart is not just the style, it’s the variety and trust we offer. With new designs added regularly, we make sure you always find something fresh. Whether you shop online or visit one of our 250-plus stores across Pakistan, you’ll experience the same promise: stylish shoes, reliable quality, and great prices.
          </p>
          <p style={styles.text}>
            We listen to our customers and constantly improve our collections based on your feedback. That’s why millions of women in Pakistan trust Stylo.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Paragraphsection;
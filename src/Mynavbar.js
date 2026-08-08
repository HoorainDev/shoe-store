import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { WishlistContext } from "./Context/WishlistContext";
import { Link, useLocation } from 'react-router-dom';

import img1 from './Logo.png';



const Mynavbar = () => {
const { totalItems } = useContext(CartContext);
const { wishlist } = useContext(WishlistContext);
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll effect detect karne ke liye taaki background dynamic change ho

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {

        setScrolled(true);

      } else {

        setScrolled(false);

      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);



  // --- ULTRA MODERN AUTOMATIC INTEGRATION STYLES ---

  const styles = {

    navbar: {

      // Shuru me completely transparent rahega taaki hero banner se match kare, scroll par sharp blur dark bar banega

      background: scrolled ? 'rgba(15, 23, 42, 0.85)' : 'transparent',

      backdropFilter: scrolled ? 'blur(20px)' : 'none',

      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',

      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.05)',

      padding: scrolled ? '12px 0' : '20px 0', // Smooth padding transition on scroll

      position: 'fixed', // Fixed taaki page ke upar transparently overlay kare

      width: '100%',

      top: 0,

      zIndex: 1200,

      fontFamily: "'Plus Jakarta Sans', sans-serif",

      transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',

    },

    logo: {

      height: scrolled ? '38px' : '44px', // Sleek dynamic scaling

      objectFit: 'contain',

      filter: 'brightness(0) invert(1)', // Logo ko automatically white tone dene ke liye (agar dark logo hai)

      transition: 'all 0.3s ease',

    },

    navLink: {

      color: 'rgba(255, 255, 255, 0.75)', // Minimal crisp white-gray for high contrast

      fontWeight: '600',

      fontSize: '0.92rem',

      padding: '10px 18px',

      borderRadius: '12px',

      transition: 'all 0.25s ease',

      textDecoration: 'none',

    },

    activeLink: {

      color: '#ffffff',

      backgroundColor: 'rgba(79, 70, 229, 0.25)', // Premium purple container overlay

      border: '1px solid rgba(79, 70, 229, 0.4)',

    },

    cartBtn: {

      backgroundColor: 'transparent', // No background color

      color: 'rgba(255, 255, 255, 0.75)',

      fontWeight: '600',

      fontSize: '0.92rem',

      borderRadius: '12px',

      padding: '10px 18px',

      transition: 'all 0.25s ease',

      textDecoration: 'none',

    }

  };



  const isActive = (path) => location.pathname === path;



  return (

    <nav className="navbar navbar-expand-lg" style={styles.navbar}>

      <div className="container">

       

        {/* BRAND LOGO */}

        <Link className="navbar-brand d-flex align-items-center" to="/">

          <img src={img1} alt="Hs Brand" style={styles.logo} className="brand-logo" />

        </Link>



        {/* WHITE MINIMAL HAMBURGER TOGGLER */}

        <button
  className="navbar-toggler border-0 p-2 shadow-none custom-dark-hamburger"
  type="button"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-controls="premiumNavContent"
  aria-expanded={menuOpen}
  aria-label="Toggle navigation"
>

          <span className="dark-hamburger-box">

            <span className="dark-hamburger-inner"></span>

          </span>

        </button>



        {/* NAVIGATION LINKS */}

        <div
           className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
          id="premiumNavContent"
       >

         

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 mt-3 mt-lg-0" style={{ gap: '8px' }}>

            <li className="nav-item">

              <Link

                className="nav-link premium-link"

                style={isActive('/') ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}

                to="/"
                onClick={() => setMenuOpen(false)}

              >

                Home

              </Link>

            </li>

            <li className="nav-item">

              <Link

                className="nav-link premium-link"

                style={isActive('/about') ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}

                to="/about"
                onClick={() => setMenuOpen(false)}

              >

                About

              </Link>

            </li>

            <li className="nav-item">

              <Link

                className="nav-link premium-link"

                style={isActive('/shop') ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}

                to="/shop"
                onClick={() => setMenuOpen(false)}

              >

                Shop Collection

              </Link>

            </li>

            <li className="nav-item">

              <Link

                className="nav-link premium-link"

                style={isActive('/contact') ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}

                to="/contact"
                onClick={() => setMenuOpen(false)}

              >

                Contact Us

              </Link>

            </li>

          </ul>



          {/* RIGHT SIDE ITEMS (WISHLIST & ACTIVE BASKET) */}

          <ul className="navbar-nav ms-auto align-items-lg-center mt-2 mt-lg-0" style={{ gap: '16px' }}>

           

            <li className="nav-item">

              <Link

                className="nav-link d-inline-flex align-items-center premium-link"

                style={styles.navLink}

                to="/wishlist"
                onClick={() => setMenuOpen(false)}

              >

                <div className="position-relative d-flex align-items-center">

                  <i className="bi bi-heart" style={{ fontSize: '1.2rem', color: '#ff4b5c' }}></i>

                  <span className="badge bg-danger rounded-pill position-absolute" style={{ top: '-8px', right: '-10px', fontSize: '0.65rem' }}>{wishlist.length}</span>

                </div>

                <span className="d-lg-none ms-3">Wishlist</span>

              </Link>

            </li>



            <li className="nav-item">

              <Link

                className="nav-link d-inline-flex align-items-center premium-link premium-cart-action"

                style={styles.cartBtn}

                to="/cart"
                onClick={() => setMenuOpen(false)}

              >

                <div className="position-relative d-flex align-items-center">

                  <i className="bi bi-basket2-fill" style={{ fontSize: '1.2rem', color: '#ffffff' }}></i>

                  <span
                   className="badge bg-danger rounded-pill position-absolute"style={{ top: '-8px', right: '-10px', fontSize: '0.65rem' }}>{totalItems}
                  </span>
  

                </div>

                <span className="d-lg-none ms-3">Basket</span>

              </Link>

            </li>



          </ul>



        </div>

      </div>



      {/* CORE LUXURY INTERACTION STYLES */}

      <style>{`

        .premium-link:hover {

          color: #ffffff !important;

          background-color: rgba(255, 255, 255, 0.08);

          transform: translateY(-1px);

        }



        .premium-cart-action:hover {

          color: #ffffff !important;

          background-color: rgba(255, 255, 255, 0.08);

          transform: translateY(-1px);

        }



        /* Minimal White Toggler Line Architecture */

        .custom-dark-hamburger .dark-hamburger-inner {

          display: inline-block;

          width: 22px;

          height: 2px;

          background-color: #ffffff;

          position: relative;

          transition: all 0.2s ease;

        }

        .custom-dark-hamburger .dark-hamburger-inner::before,

        .custom-dark-hamburger .dark-hamburger-inner::after {

          content: '';

          position: absolute;

          width: 22px;

          height: 2px;

          background-color: #ffffff;

          left: 0;

          transition: all 0.2s ease;

        }

        .custom-dark-hamburger .dark-hamburger-inner::before { top: -6px; }

        .custom-dark-hamburger .dark-hamburger-inner::after { bottom: -6px; }



        /* Toggler Animation to X shape on Open */

        .custom-dark-hamburger[aria-expanded="true"] .dark-hamburger-inner {

          background-color: transparent;

        }

        .custom-dark-hamburger[aria-expanded="true"] .dark-hamburger-inner::before {

          transform: rotate(45deg);

          top: 0;

        }

        .custom-dark-hamburger[aria-expanded="true"] .dark-hamburger-inner::after {

          transform: rotate(-45deg);

          bottom: 0;

        }



        /* MOBILE OVERLAYS DESIGN BREAKPOINT */

        @media (max-width: 991.98px) {

          .navbar-collapse {

            background: rgba(15, 23, 42, 0.96) !important; /* Rich slate dark overlay on mobile menu */

            backdrop-filter: blur(24px);

            margin-top: 18px;

            padding: 24px;

            border-radius: 24px;

            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

            border: 1px solid rgba(255, 255, 255, 0.08);

          }

          .premium-link {

            padding: 12px 16px !important;

          }

          .premium-cart-action {

            width: 100%;

            padding: 12px 16px !important;

          }

        }

      `}</style>

    </nav>

  );

};



export default Mynavbar;
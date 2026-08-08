import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from "./Data/products";
import { CartContext } from "./Context/CartContext";
import { WishlistContext } from "./Context/WishlistContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('7');
  const [selectedColor, setSelectedColor] = useState('#4f46e5');
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');

  const { addToCart } = useContext(CartContext);
  const { addToWishlist, wishlist } = useContext(WishlistContext);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id.toString() === id.toString());
    if (foundProduct) {
      setProduct(foundProduct);
      const initialImg = (foundProduct.images && foundProduct.images.length > 0) ? foundProduct.images[0] : foundProduct.image;
      setMainImage(initialImg);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="text-center py-5 text-white" style={{ minHeight: '80vh', backgroundColor: '#0f172a', paddingTop: '150px' }}>
        <h2>Product not found!</h2>
        <Link to="/shop" className="btn btn-primary mt-3" style={{ backgroundColor: '#4f46e5', borderRadius: '12px' }}>Back to Shop</Link>
      </div>
    );
  }

  const isWishlisted = wishlist?.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart({ ...product, selectedSize, selectedColor, quantity, image: mainImage });
    alert('Product added to cart successfully!');
  };

  const styles = {
    wrapper: { padding: '140px 0 80px 0', fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: '#0f172a', minHeight: '100vh', color: '#ffffff' },
    mainImgContainer: { borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)', backgroundColor: 'rgba(30, 41, 59, 0.4)', height: '450px' },
    mainImg: { width: '100%', height: '100%', objectFit: 'cover' },
    badge: { backgroundColor: '#4f46e5', color: '#ffffff', padding: '6px 14px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600', display: 'inline-block', marginBottom: '12px' },
    title: { fontSize: '2.5rem', fontWeight: '800', marginBottom: '12px' },
    priceRow: { display: 'flex', alignItems: 'center', gap: '16px', margin: '20px 0' },
    currentPrice: { fontSize: '1.8rem', fontWeight: '800', color: '#818cf8' },
    oldPrice: { fontSize: '1.2rem', color: '#64748b', textDecoration: 'line-through' },
    sizeBtn: (isActive) => ({
      padding: '10px 18px',
      borderRadius: '12px',
      border: isActive ? '2px solid #4f46e5' : '1px solid rgba(255, 255, 255, 0.1)',
      backgroundColor: isActive ? 'rgba(79, 70, 229, 0.2)' : 'rgba(30, 41, 59, 0.5)',
      color: '#ffffff',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s'
    }),
    colorSwatch: (colorCode, isActive) => ({
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: colorCode,
      border: isActive ? '3px solid #ffffff' : '2px solid rgba(255, 255, 255, 0.2)',
      cursor: 'pointer',
      transition: 'all 0.3s'
    }),
    qtyBox: { display: 'flex', alignItems: 'center', backgroundColor: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', width: '130px', justifyContent: 'space-between', padding: '6px 12px' },
    actionBtn: { flex: 1, backgroundColor: '#4f46e5', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '14px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' },
    wishlistActionBtn: { width: '54px', height: '54px', borderRadius: '12px', backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' },
    featureBox: { background: 'rgba(30, 41, 59, 0.3)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '20px', marginTop: '30px' }
  };

  return (
    <div style={styles.wrapper}>
      <div className="container">
        <div className="row g-5 align-items-start">
          
          {/* Left Side: Images Gallery */}
          <div className="col-lg-6">
            <div style={styles.mainImgContainer} className="mb-3 shadow-lg">
              <img src={mainImage} alt={product.name} style={styles.mainImg} />
            </div>

            
          </div>

          {/* Right Side: Product Info */}
          <div className="col-lg-6">
            <div>
              <span style={styles.badge}>{product.badge || product.category}</span>
              <h1 style={styles.title}>{product.name}</h1>
              
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="text-warning">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <span className="text-muted fw-semibold">(4.9 / 120 Reviews)</span>
                <span className="ms-3 text-success fw-bold">• In Stock</span>
              </div>

              <div style={styles.priceRow}>
                <span style={styles.currentPrice}>
                  {typeof product.price === 'number' ? `$${product.price}` : product.price}
                </span>
                {product.oldPrice && <span style={styles.oldPrice}>${product.oldPrice}</span>}
              </div>

              <p className="text-secondary mb-3" style={{ lineHeight: '1.7' }}>
                Handcrafted using premium material. Designed to deliver absolute comfort, durability, and modern style.
              </p>

              <div className="mb-4">
                <label className="fw-bold mb-2 text-white-50 d-block">Available Colors</label>
                <div className="d-flex gap-3 align-items-center">
                  {['#6b1d2f', '#0f172a', '#4f46e5', '#c5a059'].map((code) => (
                    <div
                      key={code}
                      style={styles.colorSwatch(code, selectedColor === code)}
                      onClick={() => setSelectedColor(code)}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="fw-bold mb-2 text-white-50">Select Size (US)</label>
                <div className="d-flex gap-3">
                  {['6', '7', '8', '9', '10'].map((size) => (
                    <button
                      key={size}
                      style={styles.sizeBtn(selectedSize === size)}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="fw-bold mb-2 text-white-50">Quantity</label>
                <div style={styles.qtyBox}>
                  <button className="btn text-white p-0 border-0 shadow-none" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                    <i className="bi bi-dash-lg"></i>
                  </button>
                  <span className="fw-bold fs-5">{quantity}</span>
                  <button className="btn text-white p-0 border-0 shadow-none" onClick={() => setQuantity(q => q + 1)}>
                    <i className="bi bi-plus-lg"></i>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex gap-3 align-items-center">
                <button style={styles.actionBtn} onClick={handleAddToCart} className="cart-btn-hover">
                  Add to Basket
                </button>
                <button 
                  style={styles.wishlistActionBtn} 
                  onClick={() => addToWishlist(product)}
                  title="Save to Wishlist"
                >
                  <i className={`bi ${isWishlisted ? 'bi-heart-fill text-danger' : 'bi-heart text-white'} fs-5`}></i>
                </button>
              </div>

              <div style={styles.featureBox} className="row text-center">
  <div className="col-4">
    <i
      className="bi bi-truck fs-4"
      style={{ color: '#818cf8' }}
    ></i>
    <p className="small mt-2 mb-0 feature-text">
      Fast Delivery
    </p>
    <span className="feature-subtext">
      2-3 Business Days
    </span>
  </div>

  <div className="col-4 border-start border-end border-secondary border-opacity-25">
    <i
      className="bi bi-shield-check fs-4"
      style={{ color: '#818cf8' }}
    ></i>
    <p className="small mt-2 mb-0 feature-text">
      Secure Payment
    </p>
    <span className="feature-subtext">
      Safe &amp; Secure Checkout
    </span>
  </div>

  <div className="col-4">
    <i
      className="bi bi-arrow-counterclockwise fs-4"
      style={{ color: '#818cf8' }}
    ></i>
    <p className="small mt-2 mb-0 feature-text">
      Easy Returns
    </p>
    <span className="feature-subtext">
      7-Day Return Policy
    </span>
  </div>
</div>

            </div>
          </div>

        </div>
      </div>
      <style>{`
        .cart-btn-hover:hover { background-color: #4338ca !important; box-shadow: 0 10px 20px rgba(79, 70, 229, 0.4); transform: translateY(-2px); }
      `}</style>
    </div>
  );
};

export default ProductDetail;
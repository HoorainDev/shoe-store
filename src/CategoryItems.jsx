import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from "./Data/products";
import { CartContext } from "./Context/CartContext";

const CategoryItems = () => {
  const { categoryId } = useParams();
  useEffect(() => {
  window.scrollTo(0, 0);
}, [categoryId]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [wishlistIds, setWishlistIds] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
  if (categoryId) {
    const formattedParam = categoryId.toString().toLowerCase().trim();

    const categoryMap = {
      heels: "heels",
      flats: "flat",
      flat: "flat",

      eid: "khosa",
      khosa: "khosa",
      khussa: "khosa",

      formal: "formal",

      ladysboot: "ladiesboot",
      ladiesboot: "ladiesboot",

      boot: "boot",
      boots: "boot",

      chappal: "chappal",
      kheri: "kheri",

      sandal: "sandal",
      sandals: "sandal",

      sneakers: "sneakers"
    };

    const actualCategory =
      categoryMap[formattedParam] || formattedParam;

    const filtered = products.filter((prod) => {
      const prodCat = prod.category.toLowerCase().trim();

      return prodCat === actualCategory;
    });

    setFilteredProducts(filtered);
  } else {
    setFilteredProducts(products);
  }
}, [categoryId]);

  const toggleWishlist = (id) => {
    if (wishlistIds.includes(id)) {
      setWishlistIds(wishlistIds.filter(item => item !== id));
    } else {
      setWishlistIds([...wishlistIds, id]);
    }
  };

  const styles = {
    sectionWrapper: { padding: '120px 0 80px 0', fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: '#0f172a', minHeight: '100vh' },
    badge: { backgroundColor: 'rgba(79, 70, 229, 0.15)', color: '#818cf8', letterSpacing: '2px', padding: '8px 16px', borderRadius: '30px', fontWeight: '600', fontSize: '0.75rem', textTransform: 'uppercase' },
    title: { fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-1px', marginTop: '12px', textTransform: 'capitalize' },
    subText: { color: '#94a3b8', fontSize: '1.05rem' },
    productCard: { background: 'rgba(30, 41, 59, 0.4)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', overflow: 'hidden', transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)', display: 'flex', flexDirection: 'column', height: '100%' },
    imgContainer: { height: '300px', overflow: 'hidden', position: 'relative' },
    prodImg: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' },
    tagBadge: { position: 'absolute', top: '16px', left: '16px', backgroundColor: '#4f46e5', color: '#ffffff', fontSize: '0.75rem', fontWeight: '600', padding: '6px 12px', borderRadius: '12px', zIndex: 2 },
    wishlistBtn: { position: 'absolute', top: '16px', right: '16px', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 3 },
    quickViewBtn: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(0.9)', backgroundColor: '#4f46e5', color: '#ffffff', padding: '10px 20px', borderRadius: '12px', fontWeight: '600', fontSize: '0.9rem', border: 'none', opacity: 0, transition: 'all 0.3s ease', zIndex: 3, textDecoration: 'none' },
    cardBody: { padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' },
    categoryTag: { color: '#818cf8', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', marginBottom: '6px', display: 'block' },
    prodName: { color: '#ffffff', fontSize: '1.15rem', fontWeight: '700', margin: '0 0 8px 0', textDecoration: 'none', transition: 'color 0.3s' },
    priceRow: { display: 'flex', alignItems: 'center', gap: '12px', margin: '12px 0 18px 0' },
    currentPrice: { color: '#ffffff', fontSize: '1.25rem', fontWeight: '800' },
    oldPrice: { color: '#64748b', fontSize: '0.95rem', textDecoration: 'line-through', fontWeight: '600' },
    addBtn: { width: '100%', backgroundColor: '#4f46e5', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '12px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s' }
  };

  return (
    <div style={styles.sectionWrapper}>
      <div className="container">
        <div className="text-center mb-5">
          <span style={styles.badge}>Collection</span>
          <h2 style={styles.title}>
            {categoryId ? `${categoryId.replace('boys', 'men ').replace('ladys', 'ladies ')} Gallery` : 'All Collections'}
          </h2>
          <p style={styles.subText}>Discover premium elegance designed exclusively for you.</p>
        </div>

        <div className="row g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const isLiked = wishlistIds.includes(product.id);
              
              return (
                <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
                  <div style={styles.productCard} className="premium-product-tile">
                    
                    <div style={styles.imgContainer} className="position-relative overflow-hidden">
                      <span style={styles.tagBadge}>{product.badge || 'New'}</span>
                      
                      <button 
                        style={styles.wishlistBtn} 
                        onClick={() => toggleWishlist(product.id)}
                        title="Wishlist"
                      >
                        <i className={`bi ${isLiked ? 'bi-heart-fill text-danger' : 'bi-heart text-white'}`}></i>
                      </button>

                      <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.name} style={styles.prodImg} className="product-display-img" />
                      </Link>

                      <Link to={`/product/${product.id}`} style={styles.quickViewBtn} className="quick-view-trigger">
                        Quick View
                      </Link>
                    </div>

                    <div style={styles.cardBody}>
                      <div>
                        <span style={styles.categoryTag}>{product.category}</span>
                        <Link to={`/product/${product.id}`} className="text-decoration-none">
                          <h4 style={styles.prodName} className="product-title-text">{product.name}</h4>
                        </Link>

                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="text-warning small">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <span className="text-muted ms-1">(4.9)</span>
                          </div>
                          <span className="text-success small fw-semibold">In Stock</span>
                        </div>

                        <div style={styles.priceRow}>
                          <span style={styles.currentPrice}>
                            {typeof product.price === 'number' ? `$${product.price}` : product.price}
                          </span>
                          {product.oldPrice && <span style={styles.oldPrice}>${product.oldPrice}</span>}
                        </div>
                      </div>

                      <button style={styles.addBtn} className="basket-btn-hover" onClick={() => addToCart(product)}>
                        Add Basket
                      </button>
                    </div>

                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center w-100 py-5">
              <h5 className="text-white-50">No products found in this category.</h5>
              <Link to="/" className="btn text-white mt-3" style={{ backgroundColor: '#4f46e5', borderRadius: '12px' }}>Back to Home</Link>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .premium-product-tile:hover { transform: translateY(-6px); border-color: rgba(79, 70, 229, 0.3) !important; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3); background: rgba(30, 41, 59, 0.6) !important; }
        .premium-product-tile:hover .product-display-img { transform: scale(1.05); }
        .premium-product-tile:hover .product-title-text { color: #818cf8 !important; }
        .premium-product-tile:hover .quick-view-trigger { opacity: 1 !important; transform: translate(-50%, -50%) scale(1) !important; }
        .basket-btn-hover:hover { background-color: #4338ca !important; box-shadow: 0 8px 16px rgba(79, 70, 229, 0.4); transform: translateY(-2px); }
      `}</style>
    </div>
  );
};

export default CategoryItems;
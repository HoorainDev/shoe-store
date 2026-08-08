import React, { useState, useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { WishlistContext } from "./Context/WishlistContext";
import products from "./Data/products";
import { Link } from "react-router-dom";

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleWishlist = (product) => {
    const exists = wishlist.find(
      (item) => item.id === product.id
    );

    if (exists) {
      setWishlist(
        wishlist.filter((item) => item.id !== product.id)
      );
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "popular") return b.price - a.price;
    return b.id - a.id;
  });

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "80px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div className="container">

        {/* Page Heading */}
        <div className="text-center mb-5">
          <span
            style={{
              color: "#818cf8",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontWeight: "700",
              fontSize: "14px",
            }}
          >
            PREMIUM FOOTWEAR
          </span>

          <h1
            style={{
              color: "#fff",
              fontWeight: "800",
              fontSize: "50px",
              marginTop: "15px",
            }}
          >
            Shop Collection
          </h1>

          <p
            style={{
              color: "#94a3b8",
              maxWidth: "650px",
              margin: "20px auto",
              lineHeight: "30px",
            }}
          >
            Explore our premium handcrafted footwear collection designed for
            comfort, elegance and everyday luxury.
          </p>
        </div>

        {/* SEARCH + SORT */}
        <div
          className="row align-items-center mb-5"
          style={{
            background: "#1e293b",
            borderRadius: "20px",
            padding: "20px",
            border: "1px solid rgba(255,255,255,.08)"
          }}
        >
          <div className="col-lg-5 mb-3 mb-lg-0">
            <input
              type="text"
              className="form-control"
              placeholder="Search premium footwear..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                background: "#0f172a",
                border: "1px solid #334155",
                color: "white",
                borderRadius: "12px",
                padding: "14px"
              }}
            />
          </div>

          <div className="col-lg-3 mb-3 mb-lg-0">
            <select
              className="form-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              style={{
                background: "#0f172a",
                border: "1px solid #334155",
                color: "white",
                borderRadius: "12px",
                padding: "14px"
              }}
            >
              <option value="newest">Newest</option>
              <option value="popular">Popular</option>
              <option value="low">Price Low to High</option>
              <option value="high">Price High to Low</option>
            </select>
          </div>

          <div className="col-lg-4 text-lg-end">
            <h6
              style={{
                color: "#94a3b8",
                margin: 0
              }}
            >
              Total Products :
              <span
                style={{
                  color: "#818cf8",
                  marginLeft: "8px",
                  fontWeight: "700"
                }}
              >
                {filteredProducts.length}
              </span>
            </h6>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="row g-4">
          {sortedProducts.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div
                className="shop-card"
                style={{
                  background: "#1e293b",
                  borderRadius: "24px",
                  overflow: "hidden",
                  transition: ".4s",
                  border: "1px solid rgba(255,255,255,.05)"
                }}
              >
                <div style={{ position: "relative" }}>
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        cursor: "pointer"
                      }}
                    />
                  </Link>

                  {/* Quick View Button as Link */}
                  <div className="quick-view">
                    <Link
                      to={`/product/${item.id}`}
                      style={{
                        background: "#4f46e5",
                        color: "#fff",
                        border: "none",
                        padding: "12px 24px",
                        borderRadius: "12px",
                        fontWeight: "600",
                        textDecoration: "none"
                      }}
                    >
                      Quick View
                    </Link>
                  </div>

                  <span
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "15px",
                      background: "#4f46e5",
                      color: "#fff",
                      padding: "6px 14px",
                      borderRadius: "30px",
                      fontSize: "12px",
                      fontWeight: "600"
                    }}
                  >
                    {item.badge}
                  </span>

                  <button
                    onClick={() => toggleWishlist(item)}
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      border: "none",
                      background: "rgba(255,255,255,.15)",
                      backdropFilter: "blur(8px)",
                      color: "#fff",
                      fontSize: "18px",
                      cursor: "pointer",
                      transition: ".3s"
                    }}
                    className="wishlist-btn"
                  >
                    <i
                      className={
                        wishlist.find((p) => p.id === item.id)
                          ? "bi bi-heart-fill"
                          : "bi bi-heart"
                      }
                      style={{
                        color: wishlist.find((p) => p.id === item.id)
                          ? "#ef4444"
                          : "#ffffff",
                      }}
                    ></i>
                  </button>
                </div>

                <div className="p-4">
                  <small
                    style={{
                      color: "#818cf8"
                    }}
                  >
                    {item.gender}
                  </small>

                  <Link
                    to={`/product/${item.id}`}
                    style={{
                      textDecoration: "none"
                    }}
                  >
                    <h4
                      style={{
                        color: "#fff",
                        marginTop: "10px",
                        fontWeight: "700"
                      }}
                    >
                      {item.name}
                    </h4>
                  </Link>

                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div
                      style={{
                        color: "#fbbf24",
                        fontSize: "14px"
                      }}
                    >
                      ★★★★★
                      <span
                        style={{
                          color: "#94a3b8",
                          marginLeft: "8px",
                          fontSize: "13px"
                        }}
                      >
                        (4.9)
                      </span>
                    </div>

                    <span
                      style={{
                        color: "#22c55e",
                        fontSize: "13px",
                        fontWeight: "600"
                      }}
                    >
                      In Stock
                    </span>
                  </div>

                  <div className="d-flex align-items-center mt-3">
                    <h5
                      style={{
                        color: "#fff",
                        marginBottom: 0
                      }}
                    >
                      ${item.price}
                    </h5>

                    <del
                      style={{
                        color: "#64748b",
                        marginLeft: "12px"
                      }}
                    >
                      ${item.oldPrice}
                    </del>
                  </div>

                  <div className="d-flex justify-content-between mt-4">
                    <button
                      className="btn"
                      onClick={() => addToCart(item)}
                      style={{
                        background: "#4f46e5",
                        color: "#fff",
                        borderRadius: "12px",
                        padding: "10px 20px"
                      }}
                    >
                      Add Basket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .shop-card {
            transition: .4s;
          }
          .shop-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 25px 45px rgba(0,0,0,.35);
            border: 1px solid #4f46e5;
          }
          .shop-card img {
            transition: .5s;
          }
          .shop-card:hover img {
            transform: scale(1.08);
          }
          .btn:hover {
            transform: translateY(-2px);
            transition: .3s;
          }
          .wishlist-btn:hover {
            background: #ef4444 !important;
            transform: scale(1.1);
          }
          .quick-view {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(15,23,42,.55);
            opacity: 0;
            transition: .4s;
          }
          .shop-card:hover .quick-view {
            opacity: 1;
          }
          .quick-view a {
            transform: translateY(20px);
            transition: .35s;
          }
          .shop-card:hover .quick-view a {
            transform: translateY(0);
          }
        `}</style>
      </div>
    </div>
  );
};

export default Shop;
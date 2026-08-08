import React, { useContext } from "react";
import { WishlistContext } from "./Context/WishlistContext";
import { CartContext } from "./Context/CartContext";

const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };
  const moveToCart = (item) => {
  addToCart(item);

  setWishlist(
    wishlist.filter((product) => product.id !== item.id)
  );
};

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "60px",
      }}
    >
      <div className="container">

        <h1
          style={{
            color: "#fff",
            textAlign: "center",
            marginBottom: "40px",
            fontWeight: "700",
          }}
        >
          My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <h4
            style={{
              color: "#94a3b8",
              textAlign: "center",
            }}
          >
            ❤️ Your wishlist is empty
          </h4>
        ) : (
          <div className="row">
            {wishlist.map((item) => (
              <div className="col-lg-4 mb-4" key={item.id}>
                <div
                  style={{
                    background: "#1e293b",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "260px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="p-4">
                    <h4 style={{ color: "#fff" }}>{item.name}</h4>

                    <h5 style={{ color: "#818cf8" }}>
                      ${item.price}
                    </h5>

                    <div className="d-flex gap-2 mt-3">

                    <button
                     className="btn btn-primary w-50"
                     onClick={() => moveToCart(item)}
                      >
                     Move to Basket
                   </button>

                    <button
                    className="btn btn-danger w-50"
                    onClick={() => removeItem(item.id)}
                    >
                    Remove
                   </button>

</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Wishlist;
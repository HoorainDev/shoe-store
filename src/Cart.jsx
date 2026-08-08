import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./Context/CartContext";

const Cart = () => {
    const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
     clearCart,
  } = useContext(CartContext);

  return (
    <div className="container py-5 mt-5">
      <h2 className="mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div
  className="text-center py-5"
  style={{
    minHeight: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }}
>
  <div
    style={{
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      background: "#eef2ff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "55px",
      marginBottom: "25px",
    }}
  >
    🛒
  </div>

  <h2 className="fw-bold mb-3">
    Your Basket is Empty
  </h2>

  <p className="text-muted mb-4">
    Looks like you haven't added any premium products yet.
  </p>

  <button
    className="btn btn-primary px-4 py-2"
    onClick={() => navigate("/shop")}
  >
    Continue Shopping
  </button>
</div>
      ) : (
        <div className="row">

  {/* LEFT SIDE - CART ITEMS */}
  <div className="col-lg-8">

    {cart.map((item) => (
      <div className="card mb-3 shadow-sm border-0" key={item.id}>
        <div className="card-body">

          <div className="row align-items-center">

            <div className="col-md-2 text-center">
              <img
                src={item.image}
                alt={item.name}
                className="img-fluid"
                style={{ height: "170px",width:"170px",borderRadius:"12px", objectFit: "contain"}}
              />
              <p className="text-muted mb-0">
               Premium Collection
            </p>
            </div>

            <div className="col-md-4">
              <h5 className="fw-bold mb-2">
              {item.name}
             </h5>
              <p className="text-muted mb-1">
                ${item.price}
              </p>
            </div>

            <div className="col-md-3">

              <button
                className="btn btn-outline-dark"
                onClick={() => decreaseQty(item.id)}
              >
                -
              </button>

              <span className="mx-3 fw-bold">
                {item.quantity}
              </span>

              <button
                className="btn btn-outline-dark"
                onClick={() => increaseQty(item.id)}
              >
                +
              </button>

            </div>

            <div className="col-md-2 fw-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </div>

            <div className="col-md-1">

              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>

            </div>

          </div>

        </div>
      </div>
    ))}

  </div>

  {/* RIGHT SIDE - ORDER SUMMARY */}

  <div className="col-lg-4">

    <div className="card shadow border-0 sticky-top" style={{ top: "100px" }}>

      <div className="card-body">

        <h4 className="mb-4">
          Order Summary
        </h4>
        <div
  className="alert alert-success py-2 text-center"
  style={{
    borderRadius: "12px",
    fontWeight: "600",
  }}
>
  🚚 Free Shipping Available
</div>

        <div className="d-flex justify-content-between mb-3">
          <span>Subtotal</span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <span>Shipping</span>
          <strong className="text-success">
            Free
          </strong>
        </div>

        <hr />

        <div className="d-flex justify-content-between mb-4">
          <h5>Total</h5>
          <h5>${totalPrice.toFixed(2)}</h5>
        </div>

        <button
        className="btn btn-success w-100 mb-2"
        onClick={() => navigate("/checkout")}
         >
         Checkout
         </button>
        <button
          className="btn btn-outline-danger w-100"
          onClick={clearCart}
        >
          Clear Cart
        </button>

      </div>

    </div>

  </div>

</div>
        
      )}
    </div>
  );
};

export default Cart;
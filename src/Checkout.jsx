import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./Context/CartContext";


const Checkout = () => {
    const navigate = useNavigate();
    const { clearCart } = useContext(CartContext);
    const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  city: "",
  address: "",
  postalCode: "",
  payment: "Cash on Delivery",
});
const handleChange = (e) => {

  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.fullName ||
    !formData.email ||
    !formData.phone ||
    !formData.city ||
    !formData.address ||
    !formData.postalCode
  ) {
    alert("Please fill all fields.");
    return;
  }

  alert("🎉 Order Placed Successfully!");

clearCart();

setFormData({
  fullName: "",
  email: "",
  phone: "",
  city: "",
  address: "",
  postalCode: "",
  payment: "Cash on Delivery",
});

navigate("/");
};
  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="card shadow border-0">

            <div className="card-body p-4">
             <form onSubmit={handleSubmit}>
              <h2 className="mb-4 text-center">
                Checkout
              </h2>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label>Full Name</label>
                 <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  name="fullName"
                  value={formData.fullName}
                   onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Email</label>
                  <input
                  type="email"
                  className="form-control"
                   placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                     />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                     placeholder="03xxxxxxxxx"
                     name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                        />
                </div>

                <div className="col-md-6 mb-3">
                  <label>City</label>
                       <input
                        type="text"
                        className="form-control"
                        placeholder="Your city"
                        name="city"
                         value={formData.city}
                         onChange={handleChange}
                         />
                </div>

                <div className="col-12 mb-3">
                  <label>Address</label>
                 <textarea
                     className="form-control"
                     rows="3"
                      placeholder="Enter your address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      ></textarea>
                </div>

                <div className="col-md-6 mb-3">
                  <label>Postal Code</label>
                  <input
                   type="text"
                    className="form-control"
                    placeholder="54000"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Payment Method</label>

                  <select
                  className="form-select"
                 name="payment"
                 value={formData.payment}
                 onChange={handleChange}
                  >
                  <option>Cash on Delivery</option>
                  <option>Credit Card</option>
                     <option>Debit Card</option>
                   </select>
                </div>

              </div>

              <button
              type="submit"
              className="btn btn-success w-100 mt-3"
               >
                Place Order
              </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    
    </div>
  );
};

export default Checkout;
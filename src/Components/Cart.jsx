import React from "react";
import Product from "./Product";

const Cart = () => {
  return (
    <section className="cart">
      <div className="head">
        <p>Cart</p>
      </div>
      <hr />
      <div className="cart-content">
        <Product />
        <button className="checkout">checkout</button>
      </div>
    </section>
  );
};

export default Cart;

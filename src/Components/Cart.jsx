import React from "react";
import Product from "./Product";

const Cart = ({ onOrderedQuant, onReset, onShow }) => {
  return (
    <section className="cart">
      <div className="head">
        <p>Cart</p>
      </div>
      <hr />
      <div className="cart-content">
        {onOrderedQuant ? (
          <>
            <Product onOrderedQuant={onOrderedQuant} onReset={onReset} />
            <button
              className="checkout"
              onClick={() => {
                onReset();
                onShow(false);
              }}
            >
              checkout
            </button>
          </>
        ) : (
          "Your Cart Is Empty"
        )}
      </div>
    </section>
  );
};

export default Cart;

import React from "react";
import plus from "../Pictures/icon-plus.svg";
import minus from "../Pictures/icon-minus.svg";
import cart from "../Pictures/icon-cart.svg";

const Description = () => {
  return (
    <section className="description">
      <p>sneaker company</p>
      <h1>fall limited edition sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer
      </p>
      <div className="price">
        <div className="main-tag">
          <p>$125.00</p>
          <p>50%</p>
        </div>
        <s>$250.00</s>
      </div>
      <div className="buttons">
        <div className="amount">
          <button className="plus">
            <img src={plus} alt="icon-plus" />
          </button>
          <p>0</p>
          <button className="minus">
            <img src={minus} alt="icon-minus" />
          </button>
        </div>
        <button className="add-to-cart">
          <img src={cart} alt="shopping-cart-icon" />
          add-to-cart
        </button>
      </div>
    </section>
  );
};

export default Description;

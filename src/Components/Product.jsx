import { IconButton } from "@mui/material";
import React from "react";
import thumb1 from "../Pictures/image-product-1-thumbnail.jpg";
import deleteIcon from "../Pictures/icon-delete.svg";

const Product = () => {
  return (
    <div className="product">
      <img src={thumb1} alt="product-thumbnail" />
      <div className="info">
        <p>fall limited edition sneakers</p>
        <div className="price">
          <span>$125.00 x 3</span>
          <span>$375.00</span>
        </div>
      </div>
      <IconButton className="delete-button" size="small" disableRipple>
        <img src={deleteIcon} alt="delete-item" />
      </IconButton>
    </div>
  );
};

export default Product;

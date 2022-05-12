import React, { useState, useEffect } from "react";
import { Backdrop, IconButton } from "@mui/material";
import prod1 from "../Pictures/image-product-1.jpg";
import prod2 from "../Pictures/image-product-2.jpg";
import prod3 from "../Pictures/image-product-3.jpg";
import prod4 from "../Pictures/image-product-4.jpg";

import thumb1 from "../Pictures/image-product-1-thumbnail.jpg";
import thumb2 from "../Pictures/image-product-2-thumbnail.jpg";
import thumb3 from "../Pictures/image-product-3-thumbnail.jpg";
import thumb4 from "../Pictures/image-product-4-thumbnail.jpg";

const IMAGES = [prod1, prod2, prod3, prod4];
const THUMBS = [thumb1, thumb2, thumb3, thumb4];
const BackdropGallery = ({ open, handleClose, currentPassedImage }) => {
  const [backdropImage, setBackdropImage] = useState(currentPassedImage);
  useEffect(() => {
    setBackdropImage(currentPassedImage);
    console.log("ttttt");
  }, [currentPassedImage]);
  const handleClick = (index = null) => {
    setBackdropImage(IMAGES[index]);
  };

  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        display: "flex",
        flexDirection: "column",
      }}
      open={open}
    >
      <IconButton
        onClick={handleClose}
        sx={{ color: "#fff", bgcolor: "transparent" }}
      >
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#fff"
            fillRule="evenodd"
          />
        </svg>
      </IconButton>
      <div className="image">
        <img src={backdropImage} alt="selected-product" />
      </div>
      <div className="thumbnails">
        {THUMBS.map((th, index) => {
          return (
            <img
              key={index}
              src={th}
              alt="product-1"
              onClick={() => {
                handleClick(index);
              }}
            />
          );
        })}
      </div>
    </Backdrop>
  );
};

export default BackdropGallery;

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

import CloseIcon from "./Icons/CloseIcon";
import PreviousIcon from "./Icons/PreviousIcon";
import NextIcon from "./Icons/NextIcon";

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
      className="backdrop"
      sx={{
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <section className="backdrop-content">
        <IconButton
          onClick={handleClose}
          sx={{ color: "#fff", bgcolor: "transparent", alignSelf: "flex-end" }}
        >
          <CloseIcon />
        </IconButton>
        <div className="image">
          <IconButton
            className="icon-button-prev"
            disableRipple
            sx={{
              height: "42px",
              width: "42px",
              bgcolor: "#fff",
            }}
          >
            <PreviousIcon />
          </IconButton>
          <IconButton
            className="icon-button-next"
            disableRipple
            sx={{
              height: "42px",
              width: "42px",
              bgcolor: "#fff",
            }}
          >
            <NextIcon />
          </IconButton>
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
      </section>
    </Backdrop>
  );
};

export default BackdropGallery;

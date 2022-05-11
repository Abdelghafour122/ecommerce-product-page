import React, { useState } from "react";
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

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(prod1);
  const handleClick = (index) => {
    setCurrentImage(IMAGES[index]);
  };
  return (
    <section className="gallery">
      <div className="image">
        <img src={currentImage} alt="product-1" />
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
  );
};

export default Gallery;

import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "./Icons/CloseIcon";

const MobileLinksDrawer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (val) => {
    setOpen(val);
  };
  return (
    <Drawer
      className="hide-in-desktop"
      anchor="left"
      transitionDuration={400}
      open={open}
      onClose={() => {
        handleOpen(false);
      }}
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        height: "100vh",
      }}
    >
      <section className="closing">
        <IconButton>
          <CloseIcon />
        </IconButton>
      </section>
      <section className="mobile-links">
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </section>
    </Drawer>
  );
};

export default MobileLinksDrawer;

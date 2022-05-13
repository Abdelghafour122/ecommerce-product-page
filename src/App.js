import React, { useState, useEffect } from "react";
import "./App.css";
import { Container } from "@mui/material";
import Navbar from "./Components/Navbar";
import Gallery from "./Components/Gallery";
import Description from "./Components/Description";

function App() {
  const [quant, setQuant] = useState(0);
  const [orderedQuant, setOrderedQuant] = useState(0);

  const addQuant = () => {
    setQuant(quant + 1);
  };

  const removeQuant = () => {
    setQuant(quant - 1);
  };

  const resetQuant = () => {
    setQuant(0);
    setOrderedQuant(0);
  };
  return (
    <main className="App">
      <Container component="section">
        <Navbar onOrderedQuant={orderedQuant} onReset={resetQuant} />
        <section className="core">
          <Gallery />
          <Description
            onQuant={quant}
            onAdd={addQuant}
            onRemove={removeQuant}
            onSetOrderedQuant={setOrderedQuant}
          />
        </section>
      </Container>
      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Abdelghafour122" rel="noreferrer">
          Abdelghafour122
        </a>
        .
      </footer>
    </main>
  );
}

export default App;

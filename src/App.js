import "./App.css";
import Navbar from "./Components/Navbar";
import Gallery from "./Components/Gallery";
import Description from "./Components/Description";

function App() {
  return (
    <main className="App">
      <Navbar />
      <section className="core">
        <Gallery />
        <Description />
      </section>
      <footer class="attribution">
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

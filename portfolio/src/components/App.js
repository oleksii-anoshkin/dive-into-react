// styles
import "../css/App.css";

// components
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

export default function App() {
  const topBgClass = "max-container top-bg";

  return (
    <>
      <div className={topBgClass}>
        <Header />
        <Hero />
      </div>
      <main>
        <About />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

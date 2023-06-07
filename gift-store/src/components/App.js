// styles
import "../css/App.css";

// components
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import SingUp from "./SingUp";
import Services from "./Services";
import Blogs from "./Blogs";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <SingUp />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}

import "./App.css";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Portfolio from "@/components/sections/portfolio/Portfolio";
import Footer from "@/components/sections/footer/Footer";
function App() {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;

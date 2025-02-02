import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Insights from "./components/Insights";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import backgroundImage from "./assets/bg.jpg";

const App = () => {
  return (
    <div
      className="bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <Hero />
      <Insights />
      <Stats />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;

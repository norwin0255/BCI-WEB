// import { Route, Routes } from "react-router-dom";
import Intro from "../components/Intro";
import Products from "../components/Products";
import Services from "../components/Services";
import NewsEvents from "../components/News_Events";
import AboutUs from "../components/AboutUs";


function Home() {
  return (
    <>
      {/* bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 */}
      
      
        <section id="intro" className="h-[calc(100vh-72px)] flex grid grid-flow-row">
          <Intro />
        </section>
        <section id="products" className="h-auto">
          <Products />
        </section>
        <section id="services" className="flex h-[500px]">
          <Services />
        </section>
        <section id="news" className="lg:h-[500px] h-auto">
          <NewsEvents />
        </section>
        <section id="aboutus" className="h-auto">
          <AboutUs />
        </section>
    </>
  );
}

export default Home;
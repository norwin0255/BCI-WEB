import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header";
import Intro from "./pages/Intro";
import Products from "./pages/Products";
import Services from "./pages/Services";
import News_Events from "./pages/News_Events";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Seperator from "./components/Seperator";

function App() {
  return (
    <>


      <Navbar />
      <div className="pt-[72px]">

      </div>


      <Intro />
      <Seperator />
      <Products />
        <Seperator />
      <Services />
        <Seperator />
      <News_Events />
        <Seperator />
      <AboutUs />
        <Seperator />
      <ContactUs />

      {/* <div className="bg-[#0C59C3] h-[500px] w-full overflow-visible"> {/* pt-16 to offset fixed navbar height */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* </Routes> */}
      {/* </div> */}
      {/* <Routes>




            <Route path="/" element={<Intro />} />
            <Route path="/Products" element={<Products />} />
        </Routes> */}

    </>
  );
}

export default App;


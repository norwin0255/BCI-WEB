import {Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import NewsEventsPage from "./pages/NewsEventsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import BookServicePage from "./pages/BookServicePage";
import Navbar from "./components/Header";
import ProductPage from "./pages/ProductsPage";
import ContactUs from "./components/ContactUs";
import ProductReefer from "./pages/Products/ProductReefer"


function App() {
  return (
    <>
      {/* bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 */}
        <Navbar />
        <main className="pt-[72px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Products" element={<ProductPage />} />
          <Route path="/Products/Reefer" element={<ProductReefer />} />
          <Route path="/Products/PortableAirconDL1800" element={<ProductPage />} />
          <Route path="/Products/PortableAirconDL2600F" element={<ProductPage />} />
          <Route path="/Products/PortableAirconDL2600FT" element={<ProductPage />} />
          <Route path="/Products/CampingTent" element={<ProductPage />} />
          <Route path="/Products/Genset" element={<ProductPage />} />
          <Route path="/Products/Parts" element={<ProductPage />} />

          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/NewsEvents" element={<NewsEventsPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/ContactUs" element={<ContactUsPage />} />
          <Route path="/Appointment" element={<BookServicePage />} />
        </Routes>
        <section id="contactus" className="lg:h-[300px] flex w-full h-auto">
          <ContactUs />
        </section>
        </main>
        <footer className="flex w-full h-[30px] bg-gray-800">
        <p className="h-full mx-auto text-left text-white text-xs">
          © All rights reserved 2018 | Bestchill Inc.
        </p>
      </footer>
    </>
  );
}

export default App;


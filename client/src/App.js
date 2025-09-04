import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header";
import Home from "./pages/Fst";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="bg-slate-900 fixed w-full z-10">
          <Navbar />
        </div>
        {/* <div className="bg-[#0C59C3] h-[500px] w-full overflow-visible"> {/* pt-16 to offset fixed navbar height */}
        {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* </Routes> */}
        {/* </div> */}

        <div className="flex pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;


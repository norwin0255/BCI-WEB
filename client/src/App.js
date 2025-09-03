import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-slate-900 fixed w-full z-10">
        <Navbar />
      </div>
    </div>

  );
}

export default App;

import Counter from "./components/Counter";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import TopOfer from "./components/TopOfer";
import TopSales from "./components/TopSales";

import { topsales, featured } from "./data/data";

function App() {
  return (
    <div className="App">
      <div className="flex-col bg-primayBackground overflow-hidden">
        <Navbar />
        <TopOfer />
        <Slider />
        <Counter />
        <TopSales endpoint={topsales} />
        <Featured endpoint={featured} />
        <Footer />
      </div>
    </div>
  );
}

export default App;

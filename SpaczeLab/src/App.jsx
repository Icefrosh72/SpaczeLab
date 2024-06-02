import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
    </>
  );
};

export default App;

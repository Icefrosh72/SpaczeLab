import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import FeatureSection from "./component/featureSection";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
      </div>
    </>
  );
};

export default App;

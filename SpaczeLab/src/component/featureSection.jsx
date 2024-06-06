import { features } from "../constants";
const FeatureSection = () => {
  return (
    <>
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px">
        <div className="text-center">
          <span className="bg-netrual-900 text-blue-500 rounded-full h-6 text-sm font-meduim px-2 py-1 uppercase">
            feature
          </span>
          <h2 className="text-3xl sm:text-sxl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Easily Build
            <span className="bg-gradient-to-r from-purple-500 to-blue-300 text-transparent bg-clip-text">
              {" "}
              your code.
            </span>
          </h2>
        </div>
        <div className="flex "></div>
      </div>
    </>
  );
};

export default FeatureSection;

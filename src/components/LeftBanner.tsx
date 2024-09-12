

import { bannerImg } from "../assets";
import { FadeIn } from "./FadeIn";

const RightBanner = () => {
  return (
    <FadeIn className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="mb-12 shadow-[0_10px_16px_rgba(255,_255,_255,_0.7)] max-w-xs transition duration-300 ease-in-out hover:scale-60 w-[400px] h-[400px] lgl:w-[400px] lgl:h-[450px] z-10  "
        src={bannerImg}
        alt="bannerImg"
      />
    
    </FadeIn>
  );
};

export default RightBanner;

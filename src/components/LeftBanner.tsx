

import { bannerImg } from "../assets";
import { FadeIn } from "./FadeIn";

const RightBanner = () => {
  return (
    <FadeIn className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="mb-12 max-w-xs transition duration-300 ease-in-out hover:scale-60 w-[100px] h-[100px] lgl:w-[50px] lgl:h-[100px] z-10 "
        src={bannerImg}
        alt="bannerImg"
      />
    
    </FadeIn>
  );
};

export default RightBanner;

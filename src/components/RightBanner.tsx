import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp,FaTwitter, } from "react-icons/fa";

import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["As Attorny & Arbitator,", "The Court room Strategist,", "Ensuring Justice Prevails."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
    
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-bold">Advocate  </h4>
        <h1 className="text-4xl font-bold text-white">
        Naseer<span className="text-designColor capitalize"> Khan Yousafzai</span>
        </h1>
        <h2 className="text-2xl font-bold text-white">
          <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        Your legal ally for courtroom battles & legal consultations. Justice is always within reach—just a click away.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base  font-titleFont mb-4">
          Available at:
          </h2>
          <div className="flex gap-4">
          <a href="https://wa.me/+923159475131" target="_blank" rel="noopener noreferrer">
  <span className="bannerIcon">
    <FaWhatsapp />
  </span>
</a>
            <a
              href="https://www.linkedin.com/in/naseer-khan-941a27291/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://x.com/naseer_khan07" target="_blank">
              <span className="bannerIcon">
                <FaTwitter />
                
              </span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100030416370455&mibextid=ZbWKwL" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF/>
              </span>
            </a>
          </div>
        </div>
        
      </div>
    </FadeIn>
  );
};

export default LeftBanner;



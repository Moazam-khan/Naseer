import { FaFacebookF, FaLinkedinIn, FaWhatsapp} from "react-icons/fa";

import { FadeIn } from "./FadeIn";

const Footer = () => {
  return (
    <FadeIn className="w-full py-20 h-auto border-t-[1px] border-t-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Logo and Social Media */}
      <div className="w-full h-full flex flex-col gap-8">
      <h1 className="text-5xl font-extrabold text-white hover:text-gray-100 transition duration-300 ease-in-out transform hover:scale-105 hover:drop-shadow-2xl">
  NKY
</h1>
        <div className="flex gap-4">
        <a href="https://wa.me/9159475131" target="https://wa.me/9159475131" rel="https://wa.me/9159475131">
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
          <a href="https://www.facebook.com/profile.php?id=100030416370455&mibextid=ZbWKwL" target="_blank">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Contact Info
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6">
          <li className="text-lg">Phone: 03159475131</li>
          <li className="text-lg">Email: naseerkhany32@gmail.com</li>
          <li className="text-lg">Address: Flat 4, Opposite Miniso, Jadoon  Phase II, Abbottabad </li>
        </ul>
      </div>

      {/* Location Map */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Location
        </h3>
        <div className="w-full h-64">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13289.828539885583!2d73.23640483357967!3d34.19083382094724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDExJzI3LjAiTiA3M8KwMTQnMTAuOSJF!5e0!3m2!1sen!2s!4v1694510123456"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen={false}
  loading="lazy"
  title="Exact Location"
/>
        </div>
      </div>
    </FadeIn>
  );
};

export default Footer;

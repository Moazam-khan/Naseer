import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

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
          <a href="https://www.youtube.com/@reactjsBD" target="_blank">
            <span className="bannerIcon">
              <FaYoutube />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://www.facebook.com/Noorlalu143/" target="_blank">
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
          <li className="text-lg">Phone: +92 123 456 7890</li>
          <li className="text-lg">Email: naseer.lawyer@example.com</li>
          <li className="text-lg">Address: 123 Lawyer Street, Peshawar, Pakistan</li>
        </ul>
      </div>

      {/* Location Map */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Location
        </h3>
        <div className="w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_LINK_HERE"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title="Lawyer Location"
          ></iframe>
        </div>
      </div>
    </FadeIn>
  );
};

export default Footer;

import React from "react";
import unlimited from "../assets/unlimited.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.avif";
import p5 from "../assets/p5.webp";
import p6 from "../assets/p6.avif";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-screen pb-10">
      {/* Main title */}
      <div data-aos="fade-up" className="pt-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Connect Communities</h1>
        <p className="text-sm md:text-[19.4px] text-[#666666] mt-4">
          Bridging gaps between faiths with tech and a dash of fun!
        </p>
      </div>

      {/* hero left , right side */}
      <div className="w-full grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr] items-center justify-center">
        {/* left side */}
        <div className="flex flex-col items-center md:items-start md:gap-2 text-2xl md:text-5xl font-bold pt-6">
          <img src={unlimited} alt="badges" data-aos="fade-up" className="w-48" />
          <div data-aos="fade-up" className="flex items-center gap-2">
            <h1>Unite, Innovate,</h1>
            <img src={p1} alt="p1" className="w-20 md:w-24 object-cover" />
          </div>
          <div data-aos="fade-up" className="flex items-center gap-2">
            <img src={p2} alt="p1" className="w-16 md:w-20 object-cover" />
            <h1>Connect, Inspires,</h1>
          </div>
          <div data-aos="fade-up" className="flex items-center gap-3">
            <h1>Together,</h1>
            <img src={p3} alt="p1" className="w-30 object-cover" />
          </div>
          <p data-aos="fade-up" className="w-full text-justify text-[15px] leading-5 py-6 md:pt-3 font-normal max-w-md ">
            Join us to be part of a community where spirituality meets
            innovation. Together, we'll build a world that's more inclusive,
            engaging, and connected than ever before!
          </p>
          <Link data-aos="fade-up" to="/events" className="w-full flex justify-center md:justify-start">
            <div className="w-52 rounded-2xl text-white px-3 py-2 bg-[#333333] flex items-center justify-center font-semibold gap-3 cursor-pointer transition transform active:scale-95 mt-6 ">
              <span className="text-[16px] leading-[18px]">
                CTA
              </span>
              <img src={arrow} alt="arrow" className="w-6" />
            </div>
          </Link>
        </div>
        {/* right side */}
        <div className="w-full h-full grid grid-cols-3 items-center justify-center gap-2 max-h-[405px] mt-8 md:mt-0">
          <div data-aos="fade-up" className="w-full h-auto md:w-[90%] md:h-[405px] pt-4 ">
            <img
              src={p4}
              alt="person"
              className="w-full cursor-pointer p-2 h-[90%] object-cover rounded-[30px] border-black transition ease-in-out transform hover:-translate-y-3 hover:border"
            />
          </div>
          <div data-aos="fade-up" className="w-full h-auto md:w-[90%] md:h-[405px] -mb-24">
            <img
              src={p5}
              alt="person"
              className="w-full cursor-pointer p-2 h-[90%] object-cover rounded-[30px] border-black transition ease-in-out transform hover:-translate-y-3 hover:border"
            />
          </div>
          <div data-aos="fade-up" className="w-full h-auto md:w-[90%] md:h-[405px] pt-4">
            <img
              src={p6}
              alt="person"
              className="w-full cursor-pointer p-2 h-[90%] object-cover rounded-[30px] border-black transition ease-in-out transform hover:-translate-y-3 hover:border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

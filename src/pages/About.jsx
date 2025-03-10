import React from "react";
import about from "../assets/p4.avif"

const About = () => {
  return (
    <div className="w-full">
      <div className="text-center text-2xl md:text-4xl font-semibold py-8">
        <p data-aos="fade-up" className="text-[#333333] ">About Us</p>
        <p data-aos="fade-up" className="text-blue-600 pt-3">
          ✦ We Helped Communities Connect & Flourish
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mt-5">
        <div data-aos="fade-up" >
          <img src={about} alt="about-banner" className="w-full object-cover rounded-xl"/>
        </div>
        <div data-aos="fade-up" className="self-start font-medium pb-5">
          <p className="text-gray-700 text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptate impedit praesentium at nesciunt tempore molestiae nobis quaerat fugiat exercitationem possimus labore corrupti neque ut magnam quas veniam laboriosam eaque saepe, aut ipsam architecto ad ipsum vitae. Reiciendis blanditiis neque ipsa ipsum expedita beatae, quod, maiores, facere magni placeat quis!</p>
          <p className="text-gray-700 pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae consequuntur officiis asperiores facilis tempore esse nam minima quas ullam doloremque!</p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.png";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdownMenu,setDropDownMenu]=useState(false)
  return (
    <div className="w-full px-5 bg-white border-b py-5 sticky top-0 z-40 ">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between ">
        <Link to="/" className="">
          <img src={logo} alt="logo" className="w-44" />
        </Link>
        <div className="hidden md:flex items-center gap-14 text-gray-800 text-[16px] font-semibold transition">
          <Link
            to={"/"}
            className=" hover:text-blue-600  transition transform active:scale-95"
          >
            Home
          </Link>
          <div className="relative">
          <Link
            to={"/events"}
            className=" hover:text-blue-600 transition transform active:scale-95"
            // onClick={()=>setDropDownMenu(true)}
          >
            Events
          </Link>
          <div className={`w-56 absolute py-3 rounded-md flex flex-col bg-blue-50 transition-all overflow-hidden z-50 ${dropdownMenu?"top-12":"-top-32"}`}>
            <Link to="/event-list" className="border-b py-2 px-4 hover:bg-blue-100" onClick={()=>setDropDownMenu(false)}>Upcoming events</Link>
            <Link to="/create-event" className=" py-2 px-4 hover:bg-blue-100">Create event</Link>
          </div>
          </div>
          <Link
            to={"/about"}
            className=" hover:text-blue-600 transition transform active:scale-95"
          >
            About
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <p
            className="cursor-pointer text-gray-700 hover:text-blue-600"
            title="User"
          >
            <FaCircleUser size={25} />
          </p>
          <p
            className="md:hidden cursor-pointer text-gray-700 transition transform active:scale-95"
            onClick={() => setMobileMenu(true)}
          >
            <TbMenuDeep size={25} />
          </p>
        </div>
      </div>

      {/* For mobile devices */}

      {mobileMenu && (
        <div
        data-aos="fade-right" 
          className={`fixed bottom-0 right-0 left-0 top-0 overflow-hidden bg-white transition-all z-50${
            mobileMenu ? "w-full" : "w-0"
          }`}
        >
          <div className="w-full px-5">
            <div className="flex items-center justify-between h-[70px] mb-5">
              <img src={logo} alt="logo" className="w-44" />
              <p
                className="text-gray-700 cursor-pointer transition transform active:scale-95"
                onClick={() => setMobileMenu(false)}
              >
                <IoMdClose size={25} />
              </p>
            </div>
            <div className="flex flex-col gap-3 font-semibold text-[16px] text-gray-800">
              <Link to="/" className=" transition transform active:scale-95 hover:text-blue-600" onClick={()=>setMobileMenu(false)}>
                Home
              </Link>
              <Link
                to="/events"
                className="w-full flex items-center justify-between py-2 border-b  transition transform active:scale-95 hover:text-blue-600" onClick={()=>setMobileMenu(false)}
              >
                <span>Events</span>
                <span>
                  <MdKeyboardArrowRight size={18} />
                </span>
              </Link>
              <Link
                to="/about"
                className="w-full flex items-center justify-between py-2 border-b  transition transform active:scale-95 hover:text-blue-600" onClick={()=>setMobileMenu(false)}
              >
                <span>About</span>
                <span>
                  <MdKeyboardArrowRight size={18} />
                </span>
              </Link>
              <Link
                to="/"
                className="w-full flex items-center justify-between py-2 border-b  transition transform active:scale-95 hover:text-blue-600" onClick={()=>setMobileMenu(false)}
              >
                <span>Communities</span>
                <span>
                  <MdKeyboardArrowRight size={18} />
                </span>
              </Link>
              <Link
                to="/"
                className="w-full flex items-center justify-between py-2 border-b  transition transform active:scale-95 hover:text-blue-600" onClick={()=>setMobileMenu(false)}
              >
                <span>Support</span>
                <span>
                  <MdKeyboardArrowRight size={18} />
                </span>
              </Link>
              <button className="p-2 mt-8 w-full rounded-md bg-[#333333] text-white cursor-pointer transition transform active:scale-95">Sign in</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

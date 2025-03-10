import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import event1 from "../assets/event1.webp";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div data-aos="fade-up" className="w-full md:max-w-80 border rounded-lg p-3">
      <div className="h-full max-h-52 relative overflow-hidden">
        <img
          src={event1}
          alt="avatar"
          className="w-full h-full object-cover rounded-lg hover:scale-110 transition ease-in-out"
        />
        <span className="flex flex-col items-center justify-center px-4 py-1 rounded-xl bg-slate-100 absolute top-4 right-4 cursor-pointer">
          <span className="text-gray-700 font-semibold text-sm">Mar</span>
          <span className="font-bold text-2xl -mt-1">14</span>
        </span>
      </div>
      <div className="py-4">
        <span className="px-5 py-[6px] rounded-lg bg-green-200 text-green-900 cursor-pointer text-sm font-semibold">
          FREE
        </span>
        <h2 className="text-[20px] leading-[40px] my-5 font-semibold text-[#1a1a1a]">
          {event?.title}
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <span>
              <FaRegCalendarAlt size={20} />
            </span>
            <span className="text-sm">{event.dateTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="">
              <FaLocationDot size={23} />
            </span>
            <span className="text-sm">{event?.location}</span>
          </div>

          <div className="flex items-center gap-2 py-5">
            <p className="truncate">{event.description}</p>
          </div>

          <Link to={`/events/${event?.id}`} className="flex items-center justify-center gap-2 w-full p-3 rounded-md bg-[#1f2a37] text-white cursor-pointer transition transform active:scale-90 text-[16px]">
            <span>Event Details</span>
            <span>
              <MdArrowOutward size={22} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

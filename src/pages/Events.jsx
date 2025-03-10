import React, { useEffect, useState } from "react";
import { MdCreate } from "react-icons/md";
import EventCard from "../components/EventCard";
import Overlay from "../components/Overlay";
import EventForm from "../components/EventForm";
import { useEventContext } from "../context/Context";

const Events = () => {
  const { events, popup, setPopup, currentPage, setCurrentPage } =
    useEventContext();
  const [cate, setCat] = useState("");
  const [filteredEvents, setFilteredEvenets] = useState([]);
  const category = ["All", "Social", "Religious", "Charity","Humanity","Culture"];
  const perPage = 8;
 

  const filterEvents = () => {
    if (!events || events.length === 0) return;

    let copyEvents = events.length > 0 && events.slice();
    copyEvents = copyEvents.filter((event) => {
      if (cate === "All" || cate === "") return event;
      if (cate !== event.category) [];
      return event.category.toLowerCase().includes(cate.toLowerCase());
    });

    setFilteredEvenets(copyEvents);
  };

  let startIndex = currentPage * perPage;
  let endIndex = startIndex + perPage;
  const numOfPage = Math.ceil(filteredEvents?.length / perPage);

  useEffect(() => {
    filterEvents();
  }, [cate]);

  useEffect(()=>{
    setFilteredEvenets(events)
  },[events])


  return (
    <div className="w-full">
      <div className="text-center text-2xl md:text-4xl font-semibold py-8">
        <p data-aos="fade-up" className="text-[#333333]">
          We Helped Communities Connect & Flourish
        </p>
        <p data-aos="fade-up" className="text-blue-600 pt-3">
          ✦ Upcoming Events
        </p>
      </div>
      <div className="w-full flex justify-center flex-wrap gap-4 mt-8">
        {category.map((cat) => (
          <span
            key={cat}
            className={`py-2 px-3 select-none rounded-full cursor-pointer text-sm border bg-blue-50 text-gray-700 transition-all transform active:scale-90 ${
              cat === cate && "bg-blue-500 text-white"
            }`}
            onClick={() => setCat(cat)}
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="mt-5 md:mt-0">
        <div
          className="w-full max-w-fit px-4 py-2 rounded-lg bg-blue-600 text-white cursor-pointer transition transform active:scale-90 flex items-center gap-2"
          onClick={() => setPopup(true)}
        >
          <span className="text-sm font-semibold">Create Events</span>
          <span>
            <MdCreate size={23} />
          </span>
        </div>
        {popup && (
          <Overlay>
            <EventForm setPopup={setPopup} />
          </Overlay>
        )}
      </div>

      {/* Listing events */}
      {filteredEvents?.length === 0 && (
        <p className="text-center text-xl py-6">No event found, add a event</p>
      )}

      <div className="mt-7 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-x-3 gap-y-5 pt-5 pb-10">
        {filteredEvents?.length > 0 &&
          filteredEvents
            ?.slice(startIndex, endIndex)
            ?.map((event, index) => <EventCard key={index} event={event} />)
            .reverse()}
      </div>
      {numOfPage <= 1 ? null : (
        <div className="py-10 w-full flex justify-center gap-3">
          <button
            disabled={currentPage <= 0}
            className="px-3 py-1 rounded-md bg-[#1f2a37] text-white cursor-pointer transition transform active:scale-90 hover:bg-gray-900"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>
          <button>
            {currentPage + 1} / {numOfPage}
          </button>
          <button
            className="px-3 py-1 rounded-md bg-[#1f2a37] text-white cursor-pointer transition transform active:scale-90 hover:bg-gray-900"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === numOfPage - 1}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Events;

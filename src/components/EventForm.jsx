import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useEventContext } from "../context/Context";

const EventForm = ({ setPopup }) => {
  const { setEvents,events } = useEventContext();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    dateTime: "",
    category: "",
  });

  const addEvent = (e) => {
    e.preventDefault();
    setEvents((prev) => [...prev, { ...formData }]);

    localStorage.setItem(
      "events",
      JSON.stringify([...events,{...formData}])
    );
    setFormData({
      title: "",
      location: "",
      description: "",
      dateTime: "",
      category: "",
    });
    setPopup(false)
  };
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      id: crypto.randomUUID(),
    }));
  };
  
  return (
    <div
    data-aos="fade-up" 
      className="w-full max-w-2xl mx-auto p-4 rounded-lg bg-blue-100 border-1 border-gray-950"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between my-3 text-gray-700">
        <h1 className="text-[18px] font-semibold pb-3 ">Add Events</h1>
        <span
          onClick={() => {
            setPopup(false);
          }}
          className="cursor-pointer transition transform active:scale-90"
        >
          <IoMdClose size={25} />
        </span>
      </div>
      <form
        onSubmit={addEvent}
        className="w-full flex flex-col gap-4 items-center"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={inputHandler}
          required
          className="w-full p-3 outline-none border bg-white rounded-md text-black text-xl"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={inputHandler}
          required
          className="w-full p-3 outline-none border bg-white  rounded-md text-black text-xl"
        />
        <textarea
          name="description"
          id=""
          placeholder="Description"
          value={formData.description}
          onChange={inputHandler}
          rows={4}
          required
          className="w-full text-xl rounded-md p-3 outline-none border bg-white "
        ></textarea>
        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          onChange={inputHandler}
          required
          className="w-full p-3 outline-none border bg-white  rounded-md text-black text-xl"
        />
        <select
          name="category"
          id=""
          value={formData.category}
          onChange={inputHandler}
          required
          className="w-full p-3 outline-none border bg-white  rounded-md text-black text-xl"
        >
          <option value="" hidden>
            Select Category
          </option>

          <option value="Social">Social</option>
          <option value="Religious">Religious</option>
          <option value="Charity">Charity</option>
        </select>

        <button
          type="submit"
          className="w-[200px] ml-auto my-4 py-3 rounded-md bg-gray-800 cursor-pointer text-balance font-semibold text-white transition transform active:scale-90 hover:bg-gray-800 "
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;

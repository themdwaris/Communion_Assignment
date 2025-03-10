import React from "react";
import { useEventContext } from "../context/Context";

const Overlay = ({ children }) => {
  const {popup,setPopup}=useEventContext()
  return (
    <div
      className={`w-full h-screen fixed top-0 bottom-0 left-0 right-0 transition-all flex items-center justify-center p-5 z-50 backdrop-blur-sm`}
      onClick={(e) => {
        e.stopPropagation();
        setPopup(false);
      }}
    >
      {children}
    </div>
  );
};

export default Overlay;

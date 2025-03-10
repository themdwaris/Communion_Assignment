import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || []
  );
  const [popup, setPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, currentPage]);

  const value = {
    events,
    setEvents,
    popup,
    setPopup,
    currentPage,
    setCurrentPage,
  };

  // console.log(events);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useEventContext = () => useContext(AppContext);

export { AppContext, AppContextProvider, useEventContext };

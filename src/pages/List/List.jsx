import  { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import "./List.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(
    location.state?.destination || ""
  );
  const [date, setDate] = useState(location.state?.date || [{}]); // Initialize as an empty array
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options || {
    adult: 1,
    children: 0,
    room: 1,
  });

  // Helper function to format the date
  const formatDate = (startDate, endDate) => {
    if (startDate && endDate) {
      return `${format(startDate, "MM/dd/yyyy")} to ${format(endDate, "MM/dd/yyyy")}`;
    }
    return "Select Dates";
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="siItem">
              <label htmlFor="/">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="siItem">
            <label htmlFor="/">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {formatDate(date[0]?.startDate, date[0]?.endDate)}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="siItem">
              <label htmlFor="">Options</label>
              <div className="lsOption">
                <div className="lsOptionItem">
                  <span className="lsOptionTitle">
                    min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionTitle">
                    max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionTitle">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionTitle">children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionTitle">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

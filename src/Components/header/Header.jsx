import "./Header.css";
import {
  FaBed,
  FaCalendar,
  FaCar,
  FaPlane,
  FaTaxi,
  FaPersonBooth,
} from "react-icons/fa";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption =(name,operation)=>{
    setOptions((prev)=>{
        return {
            ...prev,
            [name] : operation ==="i" ? options[name] + 1 : options[name] -1
        }
    })
  }
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FaBed size={25} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FaPlane size={25} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FaCar size={25} />
            <span>Car rental</span>
          </div>
          <div className="headerListItem">
            <FaBed size={25} />
            <span>attraction</span>
          </div>
          <div className="headerListItem">
            <FaTaxi size={25} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discount?its genius</h1>
        <p className="headerDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          molestias modi nesciunt eaque, repellendus illo. <br />
          Accusamus molestias modi nesciunt eaque, repellendus illo.
        </p>
        <button className="headerButton">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FaBed className="headerIcon" />
            <input
              type="text"
              placeholder="where are you going"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FaCalendar className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FaPersonBooth className="headerIcon" />
            <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">
              {`${options.adult} adult . ${options.children} children . ${options.room} room`}
            </span>
            {openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button disabled={options.adult <= 1} onClick={()=>handleOption("adult","d")} className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button onClick={()=>handleOption("adult","i")} className="optionCounterButton">+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button disabled={options.children <= 0} onClick={()=>handleOption("children","d")}className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button onClick={()=>handleOption("children","i")} className="optionCounterButton">+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button disabled={options.room <= 1} onClick={()=>handleOption("room","d")}className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button onClick={()=>handleOption("room","i")} className="optionCounterButton">+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerButton">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

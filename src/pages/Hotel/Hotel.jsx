import "./Hotel.css";
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaLocationArrow,
} from "react-icons/fa";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const hotelPhoto = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1661676056771-f6c2711249e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const handleImage = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber;

    if (direction === "l") {
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSliderNumber)
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <MdCancel className="close" onClick={() => setOpen(false)} />
            <FaArrowCircleLeft
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={hotelPhoto[slideNumber].img}
                alt=""
                className="sliderImg"
              />
            </div>
            <FaArrowCircleRight
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FaLocationArrow />
            <span>Elton st 123 new york</span>
          </div>
          <span className="hotelDistance">Lorem ipsum dolor sit amet.</span>
          <span className="hotelPriceHighlight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            dicta!
          </span>
          <div className="hotelImages">
            {hotelPhoto.map((photo, i) => (
              <div key={photo.id} className="hotelImgWrapper">
                <img
                  onClick={() => handleImage(i)}
                  src={photo.img}
                  alt=""
                  className="hotelImage"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailText">
              <h1 className="hotelTitle">Stay in the heart of know</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                ad quam. Eaque libero unde quasi atque, ea, vero magnam natus
                expedita temporibus cumque facilis eveniet voluptatem doloribus
                modi minima velit, iusto culpa debitis aliquid ut? Corporis
                ipsam ut maiores assumenda sequi dolorum, quisquam facere
                impedit fuga magnam quia blanditiis vel. Lorem ipsum dolor sit
                amet consectetur, <br /> <br /> adipisicing elit. Dolor,
                voluptatum maiores. Sint perspiciatis assumenda officiis
                suscipit repellat eos voluptatibus quisquam consequuntur eius at
                adipisci atque ipsum velit similique, facilis, odit explicabo
                dolorem beatae ea qui, quae doloribus iure? Ad impedit
                architecto ea unde magnam fuga eum nesciunt sit, sequi aperiam.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>perfect for a 9-night stay!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti non tempore magni, aperiam recusandae est. Molestiae
                reprehenderit quis repudiandae ab.
              </p>
              <h2>
                <b>$948</b> 9 nights
              </h2>
              <button>Book now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="homeContainer">
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;

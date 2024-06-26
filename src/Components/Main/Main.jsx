import React, { useEffect } from "react";
import "./main.css";
import img from "../../Assets/img.jpg";
import img2 from "../../Assets/img (2).jpg";
import img3 from "../../Assets/img (3).jpg";
import img4 from "../../Assets/img (4).jpg";
import img5 from "../../Assets/img (5).jpg";
import img6 from "../../Assets/img (6).jpg";
import img7 from "../../Assets/img (7).jpg";
import img8 from "../../Assets/img (8).jpg";
import img9 from "../../Assets/img (9).jpg";
import img10 from "../../Assets/img (10).jpg";
import img11 from "../../Assets/img (11).jpg";
import img12 from "../../Assets/img (12).jpg";
import img13 from "../../Assets/img (13).jpg";
import img14 from "../../Assets/img (14).jpg";

import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Bali",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus arcu. Pellentesque et nulla a elit dignissim eleifend.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Maldives",
    location: "Maladewa",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus arcu. Pellentesque et nulla a elit dignissim eleifend.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Lucky Bay",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus arcu. Pellentesque et nulla a elit dignissim eleifend.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Castaways Beach",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$550",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus arcu. Pellentesque et nulla a elit dignissim eleifend.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Baia Formosa",
    location: "Brazil",
    grade: "CULTURAL RELAX",
    fees: "$850",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus arcu. Pellentesque et nulla a elit dignissim eleifend.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Navosa",
    location: "Fiji",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus arcu. Pellentesque et nulla a elit dignissim eleifend.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Levanto",
    location: "Italia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus arcu. Pellentesque et nulla a elit dignissim eleifend.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Zakynthos",
    location: "Greece",
    grade: "CULTURAL RELAX",
    fees: "$850",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus arcu. Pellentesque et nulla a elit dignissim eleifend.",
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: "Arugam Bay",
    location: "SriLanka",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus arcu. Pellentesque et nulla a elit dignissim eleifend.",
  },
  {
    id: 11,
    imgSrc: img11,
    destTitle: "Waimea",
    location: "United States",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus arcu. Pellentesque et nulla a elit dignissim eleifend.",
  },
  {
    id: 12,
    imgSrc: img12,
    destTitle: "Jeju",
    location: "South Korea",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus arcu. Pellentesque et nulla a elit dignissim eleifend.",
  },
  {
    id: 13,
    imgSrc: img13,
    destTitle: "Alega",
    location: "American Samoa",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus arcu. Pellentesque et nulla a elit dignissim eleifend.",
  },
  {
    id: 14,
    imgSrc: img14,
    destTitle: "Ibiza",
    location: "SPain",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lacus arcu. Pellentesque et nulla a elit dignissim eleifend.",
  }
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;

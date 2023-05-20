import github from "../assets/img/github.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css-3.png";
import tailwind from "../assets/img/tailwind.png";
import bootsrap from "../assets/img/bootstrap.png";
import nodejs from "../assets/img/nodejs.png";
import npm from "../assets/img/npm.png";
import javascript from "../assets/img/javascript.png";
import typescript from "../assets/img/typescript.png"
import react from "../assets/img/react.png";
import nextjs from "../assets/img/nextjs.svg"
import mongodb from "../assets/img/mongodb.png";
import express from "../assets/img/express.png";
import figma from "../assets/img/figma.png";
import prisma from "../assets/img/prisma.svg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-circular-progressbar/dist/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                These are the tech stack I'm most proficient in<br></br> I am also committed to staying up-to-date with the latest industry trends and continuously improving my skills..
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={react} alt="" srcset="" />
                </div>
                <div>
                  <img src={nextjs} alt="" />
                </div>
                <div>
                  <img src={typescript} alt="" style={{height: "159px", width: "159px"}} />
                </div>
                <div>
                  <img src={prisma} alt="" style={{height: "165px", width: "165px"}} />
                </div>
                <div className="item">
                  <img src={github} alt="" srcset="" />
                </div>
                <div className="item">
                  <img src={nodejs} alt="" srcset="" />
                </div>
                <div className="item">
                  <img src={npm} alt="" srcset="" />
                </div>
                <div className="item">
                  <img src={express} alt="" srcset="" />
                </div>
                <div className="item">
                  <img src={html} alt="" srcset="" />
                </div>
                <div className="item">
                  <img src={css} alt="" srcset="" />
                </div>
                <div className="item">
                  <img src={javascript} alt="" srcset="" />
                </div>
                <div className="item">
                  <img src={tailwind} alt="" srcset="" />
                </div>
                <div className="item">
                  <img src={bootsrap} alt="" srcset="" />
                </div>
                <div className="item">
                  <img src={mongodb} alt="" srcset="" />
                </div>
                {/* <div className="item">
                  <img src={figma} alt="" srcset="" />
                </div> */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};

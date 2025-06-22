import React, { useState, useEffect } from "react";
import "./Home.css";
import AnimatedLetters from "../AnimatedL/AnimatedL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFileAlt,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import photo from "../../../assets/chhavi.jpg";

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedHome");

    if (!hasVisited) {
      setShowAnimation(true);
      sessionStorage.setItem("hasVisitedHome", "true");
    } else {
      setShowAnimation(false);
    }
  }, []);
  // trying

  // const [letterClass, setLetterClass] = useState("text-animate");
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover"); // Switch to hover after animation
    }, 4000); // Adjust based on your animation duration
    return () => clearTimeout(timer);
  }, []);

  const nameArray = [" ", " ", "C", "h", "h", "a", "v", "i"];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  const positions = [
    "Full Stack Web Developer",
    "Software Developer",
    "Coder",
    "Freelancer",
    "Software Engineer",
    "Java Developer",
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setLetterClass("text-animate");
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover"); // Switch to hover class
    }, 4000); // Adjust timing to match animation duration
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const currentJob = positions[currentJobIndex];

    const typeEffect = () => {
      if (typing) {
        if (charIndex < currentJob.length) {
          setDisplayText((prev) => prev + currentJob[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTyping(false);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setTyping(true);
          setCurrentJobIndex((prev) => (prev + 1) % positions.length);
        }
      }
    };

    const timer = setTimeout(typeEffect, typing ? 150 : 100);
    return () => clearTimeout(timer);
  }, [charIndex, typing, currentJobIndex]);

  return (
    // <div className="homepage">
    <div className={`homepage ${showAnimation ? "animate" : ""}`}>
      <div className="home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i, </span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <p>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services, and
            online stores. I design and develop services for customers of all
            sizes, specializing in creating stylish, modern websites, web
            services, and online stores.
          </p>
          <div className="buttons">
            <button className="button view-work">
              <span className="button-text">View Resume</span>
              <a
                className=" download-icon"
                href="/ChhaviKashyapResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <FontAwesomeIcon icon={faDownload} className="download-icon" /> */}
                <FontAwesomeIcon icon={faArrowDown} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 449.306 449.306"
                  style={{ enableBackground: "new 0 0 449.306 449.306" }}
                  xmlSpace="preserve"
                  className="fn__svg replaced-svg"
                >
                  <path
                    d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771
,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z"
                  />
                </svg>
              </a>
            </button>
            {/* <a href="mailto:youremail@gmail.com">
  <button className="button contact-me">Contact Me</button>
</a> */}
{/* <a href="mailto:youremail@gmail.com" className="button contact-me">Contact Me</a> */}
<button
  onClick={() => window.location.href = 'mailto:chhavi0419@gmail.com'}
  className="button contact-me"
>
  Contact Me
</button>


          </div>
          <div className="social-icons">
            <div>
              <h5>Follow me</h5>
            </div>
            <div className="soc-icons">
              <a
                href="https://www.linkedin.com/in/chhavi-kashyap7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/chhaviKas07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="mailto:chhavi0419@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <div className="resume-icon">
                <a
                  href="/ChhaviKashyapResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFileAlt} />
                </a>
              </div>
              <a
                href="https://discord.com/users/chhavi07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a
                href="https://leetcode.com/u/kchhavi19/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: '10px' }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  style={{
                    width: '20px',
                    height: '20px',
                    margin: '0px',
                    padding: '0px',
                    position: 'relative',
                    left: '-10px',
                    filter: 'brightness(0) invert(1)', // This makes the logo white
                    verticalAlign: 'middle',
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="right_in">
          <div className="right_top">
            <div className="border1" />
            <div className="border2" />
            <div className="img_holder">
              <img src={photo} alt="photo" className="myimg" />
              {/* <img
                src="https://frenify.com/work/envato/frenify/html/resumo/1/img/thumb/square.jpg"
                alt="Thumbnail"
              /> */}
              {/* <div className="abs_img" /> */}
              {/* <img
                src="https://frenify.com/work/envato/frenify/html/resumo/1/img/right.jpg"
                alt="Hero Image"
              /> */}
            </div>
            <div className="title_holder">
              <h2>I'm a</h2>
              <h3>
                <span id="dynamic-position animated_title">{displayText}</span>
                <span className="cursor typed-cursor">|</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

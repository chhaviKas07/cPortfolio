import React, { useState ,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./About.css";
import img1 from "../../../assets/aileft.png"; // Replace with your image path
import img2 from "../../../assets/airight.png"; // Replace with your image path
import { faBuildingColumns, faClock } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faSass,
  faJava,
  faGit,
  faGithub,
  faJsSquare,
  faPython,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faServer,
  faMicrochip,
  faCode,
  faCloud,
  faBolt,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [hoveredSection, setHoveredSection] = useState("");
  const [activeTab, setActiveTab] = useState("education");

  const educationAndExperience = [
    {
      year: "2019 - 2020",
      degree: "Class X",
      institution: "CBSE Board",
    },
    {
      year: "2020 - 2023",
      degree: "Diploma in CSE",
      institution: "Ambedkar Institute of Technology",
    },
    {
      year: "Feb'23 - May'23",
      role: "Web Developer Intern",
      company: "Planet E-com Solutions",
    },
    {
      year: "2023 - 2026",
      degree: "Bachelor Degree in IT",
      institution: "Maharaja Surajmal Institute of Technology",
    },
    {
      year: "Jul'24 - Aug'24",
      role: "AI Intern",
      company: "IBM Skillsbuild",
    },
    //  {
    //   year: "Jul'24 - Aug'24",
    //   role: "AAAAAAAA Intern",
    //   company: "Planet E-com Solutions",
    // },
    //  {
    //   year: "Jul'24 - Aug'24",
    //   role: "ABBBBBBBI Intern",
    //   company: "Planet E-com Solutions",
    // },
  ];

  const skills = [
    { name: "React.js", icon: faReact, percentage: 90 },
    { name: "Express.js", icon: faNodeJs, percentage: 85 },
    { name: "MongoDB", icon: faDatabase, percentage: 90 },
    { name: "API", icon: faCloud, percentage: 90},
    { name: "Thunder Client", icon: faBolt, percentage: 95 },
    { name: "Bootstrap", icon: faBootstrap, percentage: 95 },
    { name: "Tailwind CSS", icon: faWind, percentage: 90 },
    { name: "Git", icon: faGit, percentage: 85 },
    { name: "GitHub", icon: faGithub, percentage: 85 },
    { name: "C++", icon: faCode, percentage: 85 },
    { name: "Java", icon: faJava, percentage: 90 },
    { name: "JavaScript", icon: faJsSquare, percentage: 90},
    { name: "Python", icon: faPython, percentage: 70 },
    { name: "DBMS", icon: faDatabase, percentage: 85 },
    { name: "Computer Networks", icon: faServer, percentage: 85 },
    { name: "Operating System", icon: faMicrochip, percentage: 85 },
  ];


  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="about-sec">
      {/* <div className="tab-switch">
        <div className="tabline">
          <div className="btnline"></div>
        <button
          className={activeTab === "education" ? "active" : ""}
          onClick={() => setActiveTab("education")}
          >
          Education
        </button>
        <button
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => setActiveTab("skills")}
          >
          Skills
        </button>
          </div>
      </div> */}
      <div className="tab-switch">
  <div className="tabline">
    <div className="btnline"></div>
    <button
      className={`left-button ${activeTab === "education" ? "active" : ""}`}
      onClick={() => setActiveTab("education")}
    >
      Education
    </button>
    <button
      className={`right-button ${activeTab === "skills" ? "active" : ""}`}
      onClick={() => setActiveTab("skills")}
    >
      Skills
    </button>
  </div>
</div>


      <div className="horizontal-scroll-container">
        {/* Education Section */}
        {/* <div
          className={`scroll-section edusec ${
            hoveredSection === "education" ? "full-width" : ""
          }`}
          onMouseEnter={() => setHoveredSection("education")}
          onMouseLeave={() => setHoveredSection("")}
        > */}
        {/* <div
          className={`scroll-section edusec ${hoveredSection === "education" && !isMobile ? "full-width" : ""
            }`}
          onMouseEnter={!isMobile ? () => setHoveredSection("education") : undefined}
          onMouseLeave={!isMobile ? () => setHoveredSection("") : undefined}
        > */}
        <div
          className={`scroll-section edusec ${(hoveredSection === "education" || (isMobile && activeTab === "education"))
              ? "full-width"
              : isMobile && activeTab !== "education"
                ? "hidden"
                : ""
            }`}
          onMouseEnter={!isMobile ? () => setHoveredSection("education") : undefined}
          onMouseLeave={!isMobile ? () => setHoveredSection("") : undefined}
        >


          {/* Cover Photo */}
          <div className="cover-photo">
            <img src={img1} alt="" />
            <div class="overlay-text"><h1>Education <br />& <br />Experience</h1></div>
          </div>
          {/* Content */}
          <div className="content">
            <div className="timeline">
              <h1>Education & Experience</h1>
              <ol>
                {educationAndExperience.map((item, index) => (
                  <li key={index} className="education fade-in-animation">
                    <div>
                      {item.degree && <h4>{item.degree}</h4>}
                      {item.role && <h4>{item.role}</h4>}
                      <p>
                        <FontAwesomeIcon icon={faClock} /> {item.year}
                      </p>

                      {/* Show institution if it exists */}
                      {item.institution && (
                        <p>
                          <FontAwesomeIcon icon={faBuildingColumns} />{" "}
                          {item.institution}
                        </p>
                      )}

                      {/* Show company if it exists */}
                      {item.company && (
                        <p>
                          <FontAwesomeIcon icon={faBuilding} /> {item.company}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        {/* <div
          className={`scroll-section skillsec ${hoveredSection === "skills" ? "full-width pos" : ""
            }`}
          onMouseEnter={() => setHoveredSection("skills")}
          onMouseLeave={() => setHoveredSection("")}
        > */}
        {/* <div
  className={`scroll-section skillsec ${
    hoveredSection === "skills" && !isMobile ? "full-width" : ""
  }`}
  onMouseEnter={!isMobile ? () => setHoveredSection("education") : undefined}
  onMouseLeave={!isMobile ? () => setHoveredSection("") : undefined}
> */}
        <div
          className={`scroll-section skillsec ${(hoveredSection === "skills" || (isMobile && activeTab === "skills"))
              ? "full-width"
              : isMobile && activeTab !== "skills"
                ? "hidden"
                : ""
            }`}
          onMouseEnter={!isMobile ? () => setHoveredSection("skills") : undefined}
          onMouseLeave={!isMobile ? () => setHoveredSection("") : undefined}
        >


          <div className="cover-photo">
            <img src={img2} alt="" />
            <div class="overlay-text2">
             <h1>My Skills</h1> 
               {/* <h1 style={{ position: "relative", left: "-350px" }}>My Skills</h1>*/}
            </div>
          </div>
                <h1> Skills</h1>
          <div className="content">
            <div className="skills">
              <div className="skills-content">
                {skills.map((skill, index) => (
                  <div
                  key={index}
                  className="skill-item"
                  style={{ "--percentage": skill.percentage }}
                  >
                    <div className="posbox">
                      <div className="">
                        {typeof skill.icon === "string" ? (
                          <img
                            src={skill.icon}
                            alt={`${skill.name} logo`}
                            className="skill-icon"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={skill.icon}
                            className="skill-icon"
                          />
                        )}
                        <div className="percentage">{skill.percentage}%</div>
                        {/* <div key={index} className="skill-item" style={{ "--percentage": skill.percentage }}> */}
                      </div>
                      <div className="skill-name">{skill.name}</div>
                    </div>
                    {/* Name below the box */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

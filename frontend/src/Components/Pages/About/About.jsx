// download cv button

// import React, { useEffect, useRef, useState } from "react";
// import "./About.css";
// import img1 from "../../../assets/img1.jpeg"; // Replace with your image path
// import img2 from "../../../assets/img2.jpeg"; // Replace with your image path

// const About = () => {
//   const educationRef = useRef(null);
//   const experienceRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const [skillsVisible, setSkillsVisible] = useState(true);
//   const [hoveredSection, setHoveredSection] = useState("");

//   const education = [
//     {
//       year: "2019 - 2020",
//       degree: "Class X",
//       institution: "CBSE Board",
//     },
//     {
//       year: "2020 - 2023",
//       degree: "Diploma",
//       institution: "Ambedkar Institute of Technology",
//     },
//     {
//       year: "2023 - 2026",
//       degree: "Bachelor Degree in IT",
//       institution: "Maharaja Surajmal Institute of Technology",
//     },
//     {
//       year: "Feb'23 - May'23",
//       degree: "Web Developer Intern",
//       institution: "Planet E-com solutions",
//     },
//     {
//       year: "Jul'24 - Aug'24",
//       degree: "AI Intern",
//       institution: "Planet E-com solutions",
//     },
//     {
//       year: "Jul'24 - Aug'24",
//       degree: "AI Intern",
//       institution: "Planet E-com solutions",
//     },
//   ];
//   const skills = [
//     { name: "WordPress", icon: "fab fa-wordpress" },
//     { name: "Angular JS", icon: "fab fa-angular" },
//     { name: "React JS", icon: "fab fa-react" },
//     { name: "Node JS", icon: "fab fa-node" },
//     { name: "jQuery", icon: "fab fa-js-square" },
//     { name: "Drupal", icon: "fab fa-drupal" },
//     { name: "Docker", icon: "fab fa-docker" },
//     { name: "Sass", icon: "fab fa-sass" },
//   ];
//   return (
//     <div className="about-sec">
//       <div className="horizontal-scroll-container">
//         {/* Education Section */}
//         <div
//           className={`scroll-section edusec ${
//             hoveredSection === "education" ? "full-width" : ""
//           }`}
//           onMouseEnter={() => setHoveredSection("education")}
//           onMouseLeave={() => setHoveredSection("")}
//         >
//           {/* Cover Photo */}
//           <div className="cover-photo">
//             <img
//               src="https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP"
//               alt="Education Cover"
//             />
//           </div>
//           {/* Content */}
//           <div className="content">
//             <div className="timeline">
//               <ol>
//                 {education.map((item, index) => (
//                   <li key={index} className="education fade-in-animation">
//                     <div>
//                       <h4>{item.degree}</h4>
//                       <p>
//                         <i className="fa-regular fa-clock"></i>
//                         {item.institution}
//                       </p>
//                       <p>
//                         {" "}
//                         <i className="fa-regular fa-building"></i>
//                         {item.year}
//                       </p>
//                     </div>
//                   </li>
//                 ))}
//               </ol>
//             </div>
//           </div>
//         </div>

//         {/* Skills Section */}
//         <div
//           className={`scroll-section skillsec ${
//             hoveredSection === "skills" ? "full-width" : ""
//           }`}
//           onMouseEnter={() => setHoveredSection("skills")}
//           onMouseLeave={() => setHoveredSection("")}
//         >
//           <div className="cover-photo">
//             <img
//               src="https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP"
//               alt="Skills Cover"
//             />
//           </div>
//           <div className="content">
//             <div className="skills">
//               <div className="skills-content">
//                 <div>
//                   <div className="skill-item">
//                     <span className="icon">
//                       <i className="devicon-wordpress-plain"></i>
//                     </span>
//                     <h4>Wordpress</h4>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="skill-item">
//                     <span className="icon">
//                       <i className="fa-solid fa-paintbrush"></i>
//                     </span>
//                     <h4>Design</h4>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="skill-item">
//                     <span className="icon">
//                       <i className="fa-solid fa-paintbrush"></i>
//                     </span>
//                     <h4>Design</h4>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="skill-item">
//                     <span className="icon">
//                       <i className="fa-solid fa-paintbrush"></i>
//                     </span>
//                     <h4>Design</h4>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="skill-item">
//                     <span className="icon">
//                       <i className="fa-solid fa-paintbrush"></i>
//                     </span>
//                     <h4>Design</h4>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="skill-item">
//                     <span className="icon">
//                       <i className="fa-solid fa-paintbrush"></i>
//                     </span>
//                     <h4>Design</h4>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="skill-item">
//                     <span className="icon">
//                       <i className="fa-solid fa-paintbrush"></i>
//                     </span>
//                     <h4>Design</h4>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="skill-item">
//                     <span className="icon">
//                       <i className="fa-solid fa-paintbrush"></i>
//                     </span>
//                     <h4>Design</h4>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="skill-item">
//                     <span className="icon">
//                       <i className="fa-solid fa-paintbrush"></i>
//                     </span>
//                     <h4>Design</h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useState } from "react";
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
      company: "Planet E-com Solutions",
    },
  ];

  // const skills = [
  //   { name: "React.js", icon: faReact }, // Express.js doesn't have an official FA icon, using Node.js
  //   { name: "Express.js", icon: faNodeJs }, // Express.js doesn't have an official FA icon, using Node.js
  //   { name: "MongoDB", icon: faDatabase },
  //   { name: "API", icon: faCloud }, // Represents cloud-based APIs
  //   { name: "Thunder Client", icon: faBolt }, // Represents speed & testing
  //   { name: "Bootstrap", icon: faBootstrap },
  //   { name: "Tailwind CSS", icon: faWind }, // No official Tailwind FA icon, using wind icon instead
  //   { name: "Git", icon: faGit },
  //   { name: "GitHub", icon: faGithub },
  //   { name: "C++", icon: faCode }, // No official C++ icon, but code icon represents programming
  //   { name: "Java", icon: faJava },
  //   { name: "JavaScript", icon: faJsSquare },
  //   { name: "Python", icon: faPython },
  //   { name: "DBMS", icon: faDatabase },
  //   { name: "Computer Networks", icon: faServer }, // CN uses server & networking concept
  //   { name: "Operating System", icon: faMicrochip }, // OS relates to hardware/memory management
  // ];

  // <div
  //   className={"scroll-section edusec education"}
  //   // onMouseEnter={() => setHoveredSection("education")}
  //   // onMouseLeave={() => setHoveredSection("")}
  // >
  //   {/* Cover Photo */}
  //   <div className="cover-photo">
  //     <img
  //       src="https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP"
  //       alt="Education Cover"
  //     />
  //   </div>
  //   {/* Content */}
  //   <div className="content">
  //     <div className="timeline">
  //       <h1>Education & Experience</h1>
  //       <ol>
  //         {educationAndExperience.map((item, index) => (
  //           <li key={index} className="education fade-in-animation">
  //             <div>
  //               {item.degree && <h4>{item.degree}</h4>}
  //               {item.role && <h4>{item.role}</h4>}
  //               <p>
  //                 <FontAwesomeIcon icon={faClock} /> {item.year}
  //               </p>

  //               {/* Show institution if it exists */}
  //               {item.institution && (
  //                 <p>
  //                   <FontAwesomeIcon icon={faBuildingColumns} />{" "}
  //                   {item.institution}
  //                 </p>
  //               )}

  //               {/* Show company if it exists */}
  //               {item.company && (
  //                 <p>
  //                   <FontAwesomeIcon icon={faBuilding} /> {item.company}
  //                 </p>
  //               )}
  //             </div>
  //           </li>
  //         ))}
  //       </ol>
  //     </div>
  //   </div>
  // // </div>;
  // {skills.map((skill, index) => (
  //   <div key={index} className="skill-item">
  //     <div>
  //       {/* Check if icon is FontAwesome (object) or an image (string) */}
  //       {typeof skill.icon === "string" ? (
  //         <img
  //           src={skill.icon}
  //           alt={`${skill.name} logo`}
  //           className="skill-icon"
  //         />
  //       ) : (
  //         <FontAwesomeIcon
  //           icon={skill.icon}
  //           className="skill-icon"
  //         />
  //       )}
  //     </div>

  //     <div>
  //       <h4>{skill.name}</h4>
  //     </div>
  //   </div>
  // ))}
  const skills = [
    { name: "React.js", icon: faReact, percentage: 85 },
    { name: "Express.js", icon: faNodeJs, percentage: 80 },
    { name: "MongoDB", icon: faDatabase, percentage: 75 },
    { name: "API", icon: faCloud, percentage: 70 },
    { name: "Thunder Client", icon: faBolt, percentage: 60 },
    { name: "Bootstrap", icon: faBootstrap, percentage: 85 },
    { name: "Tailwind CSS", icon: faWind, percentage: 90 },
    { name: "Git", icon: faGit, percentage: 85 },
    { name: "GitHub", icon: faGithub, percentage: 80 },
    { name: "C++", icon: faCode, percentage: 85 },
    { name: "Java", icon: faJava, percentage: 75 },
    { name: "JavaScript", icon: faJsSquare, percentage: 85 },
    { name: "Python", icon: faPython, percentage: 70 },
    { name: "DBMS", icon: faDatabase, percentage: 80 },
    { name: "Computer Networks", icon: faServer, percentage: 70 },
    { name: "Operating System", icon: faMicrochip, percentage: 75 },
  ];
  return (
    <div className="about-sec">
      <div className="horizontal-scroll-container">
        {/* Education Section */}
        <div
          className={`scroll-section edusec ${
            hoveredSection === "education" ? "full-width" : ""
          }`}
          onMouseEnter={() => setHoveredSection("education")}
          onMouseLeave={() => setHoveredSection("")}
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
        <div
          className={`scroll-section skillsec ${
            hoveredSection === "skills" ? "full-width pos" : ""
          }`}
          onMouseEnter={() => setHoveredSection("skills")}
          onMouseLeave={() => setHoveredSection("")}
        >
          {/* <div
          className={"scroll-section skillsec full-width"}
          // onMouseEnter={() => setHoveredSection("skills")}
          // onMouseLeave={() => setHoveredSection("")}
        > */}
          <div className="cover-photo">
            <img src={img2} alt="" />
            <div class="overlay-text"><h1>My Skills</h1></div>
          </div>
          <h1>MY SKIILS</h1>
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

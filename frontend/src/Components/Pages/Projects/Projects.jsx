import React, { useState, useEffect } from "react";
import "./Projects.css";
const projects = [
  {
    coverImage:
      "https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/linkletter.png",
    title: "Project 1",
    type: "Web Design / Development",
    description:
      "This is a website where you can sell the eco-friendly products and ask about your queries. This is a website where you can sell the eco-friendly products and ask about your queries. This is a website where you can sell the eco-friendly products and ask about your queries",
    imageUrl:
      "https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/screenshots/hipimage.jpg",
    technologies: [
      { name: "MERN" },
      { name: "Restful API" },
      { name: "Thunderclient" },
      { name: "IBM Cloud Watson" },
      { name: "NLP" },
    ],
    links: {
      demo: "https://project1-demo-link.com",
      repository: "https://github.com/user/project1",
    },
    name: "Eco-friendly Marketplace",
  },
  {
    coverImage:
      "https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/linkletter.png",
    title: "Project 2",
    type: "Web Design/Development",
    description:
      "This is a website where you can sell the eco-friendly products and ask about your queries. This is a website where you can sell the eco-friendly products and ask about your queries. This is a website where you can sell the eco-friendly products and ask about your queries",
    imageUrl:
      "https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/screenshots/hipimage.jpg",
    technologies: [
      { name: "MERN" },
      { name: "Restful API" },
      { name: "Thunderclient" },
      { name: "IBM Cloud Watson" },
      { name: "NLP" },
    ],
    links: {
      demo: "https://project1-demo-link.com",
      repository: "https://github.com/user/project1",
    },
    name: "Eco-friendly Marketplace",
  },
   {
    coverImage:
      "https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/linkletter.png",
    title: "Project 1",
    type: "Web Design / Development",
    description:
      "This is a website where you can sell the eco-friendly products and ask about your queries. This is a website where you can sell the eco-friendly products and ask about your queries. This is a website where you can sell the eco-friendly products and ask about your queries",
    imageUrl:
      "https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/screenshots/hipimage.jpg",
    technologies: [
      { name: "MERN" },
      { name: "Restful API" },
      { name: "Thunderclient" },
      { name: "IBM Cloud Watson" },
      { name: "NLP" },
    ],
    links: {
      demo: "https://project1-demo-link.com",
      repository: "https://github.com/user/project1",
    },
    name: "Eco-friendly Marketplace",
  },  {
    coverImage:
      "https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/linkletter.png",
    title: "Project 1",
    type: "Web Design / Development",
    description:
      "This is a website where you can sell the eco-friendly products and ask about your queries. This is a website where you can sell the eco-friendly products and ask about your queries. This is a website where you can sell the eco-friendly products and ask about your queries",
    imageUrl:
      "https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/screenshots/hipimage.jpg",
    technologies: [
      { name: "MERN" },
      { name: "Restful API" },
      { name: "Thunderclient" },
      { name: "IBM Cloud Watson" },
      { name: "NLP" },
    ],
    links: {
      demo: "https://project1-demo-link.com",
      repository: "https://github.com/user/project1",
    },
    name: "Eco-friendly Marketplace",
  },  {
    coverImage:
      "https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/linkletter.png",
    title: "Project 1",
    type: "Web Design / Development",
    description:
      "This is a website where you can sell the eco-friendly products and ask about your queries. This is a website where you can sell the eco-friendly products and ask about your queries. This is a website where you can sell the eco-friendly products and ask about your queries",
    imageUrl:
      "https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/screenshots/hipimage.jpg",
    technologies: [
      { name: "MERN" },
      { name: "Restful API" },
      { name: "Thunderclient" },
      { name: "IBM Cloud Watson" },
      { name: "NLP" },
    ],
    links: {
      demo: "https://project1-demo-link.com",
      repository: "https://github.com/user/project1",
    },
    name: "Eco-friendly Marketplace",
  },  {
    coverImage:
      "https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/linkletter.png",
    title: "Project 1",
    type: "Web Design / Development",
    description:
      "This is a website where you can sell the eco-friendly products and ask about your queries. This is a website where you can sell the eco-friendly products and ask about your queries. This is a website where you can sell the eco-friendly products and ask about your queries",
    imageUrl:
      "https://denisechandler.com/wp-content/themes/denise_chandler_2024/images/screenshots/hipimage.jpg",
    technologies: [
      { name: "MERN" },
      { name: "Restful API" },
      { name: "Thunderclient" },
      { name: "IBM Cloud Watson" },
      { name: "NLP" },
    ],
    links: {
      demo: "https://project1-demo-link.com",
      repository: "https://github.com/user/project1",
    },
    name: "Eco-friendly Marketplace",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  // const handleCloseModal = () => {
  //   setSelectedProject(null);
  // };


  // animation
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    if (selectedProject) {
      setTimeout(() => setIsModalVisible(true), 10); // allow animation trigger
    } else {
      setIsModalVisible(false);
    }
  }, [selectedProject]);

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      setSelectedProject(null); // close modal after animation
    }, 300); // duration must match your CSS
  };

  useEffect(() => {
  const navbar = document.querySelector('.c-hamburger');
  if (navbar) {
    navbar.style.display = isModalVisible ? 'none' : '';
  }
}, [isModalVisible]);
 

  return (
    // <div className="projects-container">
    //   <h1>Projects</h1>
    //   <div className="cards">
    //     {projects.map((project, index) => (
    //       <div className="card" key={index}>
    //         <div className="card-image">
    //           <div className="project-card">
    //             <img
    //               src={project.imageUrl}
    //               alt={project.title}
    //               onClick={(e) => e.currentTarget.classList.toggle("tilt")}
    //             />
    //             <div className="overlay">
    //               <h3>Piggment</h3>
    //               <p>The Gradients and colors for the next smart creator</p>
    //               <ul>
    //                 <li>
    //                   <p>HTML</p>
    //                 </li>
    //               </ul>
    //               <a href="#" className="view-button">
    //                 View
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   {selectedProject && (
    //     <div className="modal">
    //       <div className="modal-content">
    //         <button
    //           className="close-btn"
    //           onClick={() => setSelectedProject(null)}
    //         >
    //           Close
    //         </button>
    //         <h2>{selectedProject.title}</h2>
    //         <p>{selectedProject.description}</p>
    //         <img src={selectedProject.imageUrl} alt={selectedProject.title} />

    //         <h3>Technologies Used:</h3>
    //         <ul>
    //           {selectedProject.technologies.map((tech, index) => (
    //             <li key={index}>{tech}</li>
    //           ))}
    //         </ul>

    //         <div className="project-links">
    //           <a
    //             href={selectedProject.links.demo}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             View Demo
    //           </a>
    //           <a
    //             href={selectedProject.links.repository}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             View Repository
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div className="projects-container">
      <h1>PROJECTS</h1>
      <div className="cards">
        {projects.map((project, index) => (
          <div
            className="card"
            key={index}
            onClick={() => handleCardClick(project)}
          >
            <div className="card-image">
              <div className="project-card">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="project-image"
                />
                {/* <div className="overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.technologies.map((tech, index) => (
                      <li key={index}>
                        <p>{tech}</p>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="view-button">
                    View
                  </a>
                </div> */}
              </div>
            </div>
            <h2>{project.name}</h2>
          </div>
        ))}
      </div>
      {selectedProject && (
        // <div className="modal">
        <div className={`modal  ${isModalVisible ? 'show' : 'hide'}`}>
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              X
            </button>
            <div className="modal-cont">
              <div className="modal-img">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="modal-image"
                />
              </div>
              <div className="modal-text">
                <h1>{selectedProject.name}</h1>
                <h2>{selectedProject.type}</h2>
                <p>{selectedProject.description}</p>
                {/* <div className="techs">
                  <h2>Technologies Used:</h2>
                  {selectedProject.technologies &&
                    Object.keys(selectedProject.technologies).map(
                      (techCategory, idx) => (
                        <div key={idx} className="tech-item">
                        <h4>{techCategory.toUpperCase()}</h4>
                        <ul className="tech-list">
                        {Array.isArray(
                          selectedProject.technologies[techCategory]?.stack
                          ) &&
                          selectedProject.technologies[
                                techCategory
                              ].stack.map((tech, id) => (
                                <li key={id} className="tech-name">
                                  <span>{tech.name}</span>
                                  <div className="tech-hover">
                                    <img
                                      src={tech.logo} // Fetch the logo URL dynamically
                                      alt={`${tech.logo} logo`}
                                    />
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>
                      )
                    )}
                </div> */}
                <div className="techs">
                  <h2>Technologies Used:</h2>
                  <div className="tech-columns">
                    {selectedProject.technologies &&
                      selectedProject.technologies.map((tech, idx) => (
                        <div key={idx} className="tech-item">
                          <img
                            src="https://cdn2.iconfinder.com/data/icons/bullet-points-1/64/Bulletpoint_Bullet_Listicon_Shape_Bulletfont_Glyph_Typography_Bullet_Point_Customshape_Wingding_Custom_Direction_Right_Circle-512.png"
                            alt={tech.name}
                            className="tech-list icon"
                          />

                          <h4>{tech.name}</h4>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="project-links">
                  <button className="modal-button">
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Demo
                    </a>
                  </button>
                  <button className="modal-button">
                    <a
                      href={selectedProject.links.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Repository
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

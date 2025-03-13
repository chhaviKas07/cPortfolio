import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Chatbot from "../Chatbox/Chatbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();
  const [isChatbotOpen, setChatbotOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChatbotOpen = () => {
    if (!isChatbotOpen) {
      setChatbotOpen(true); // Open the chatbot only if it's not already open
    }
  };

  const closeChatbot = () => {
    setChatbotOpen(false); // Close the chatbot when the close button in Chatbot is clicked
  };
  const handleCloseNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className={`menuHolder ${isOpen ? "show-menu" : ""}`}>
      {/* Hamburger Button */}
      <button className="c-hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
      </button>

      {/* Expanding Circular Menu */}
      <div className="menu-wrap">
        <nav className="menu">
          <ul>
            <li>
              <Link to="/" onClick={handleCloseNavbar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleCloseNavbar}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleCloseNavbar}>
                Projects
              </Link>
            </li>
            <li>
              <button
                className="contact-btn"
                onClick={() => {
                  handleChatbotOpen();
                  handleCloseNavbar();
                }}
              >
                Contact
              </button>
            </li>
          </ul>
          {/* <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:your.email@example.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <div className="resume-icon">
              <a
                href="/your-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFileAlt} />
              </a>
            </div>
          </div> */}
          {location.pathname !== "/" && (
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCloseNavbar}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCloseNavbar}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="mailto:your.email@example.com"
                onClick={handleCloseNavbar}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <div className="resume-icon">
                <a
                  href="/your-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCloseNavbar}
                >
                  <FontAwesomeIcon icon={faFileAlt} />
                </a>
              </div>
            </div>
          )}
          {/* <Chatbot isOpen={isChatbotOpen} onClose={closeChatbot} /> */}
          {isChatbotOpen && (
            <Chatbot isOpen={isChatbotOpen} onClose={closeChatbot} />
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

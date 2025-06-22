import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Chatbox.css";
import botlogo from "../../../assets/smile.png";
import typing from "../../../assets/peeking.png";

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [showButtons, setShowButtons] = useState(true);
  const [showOtherOptions, setShowOtherOptions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const endOfChatRef = useRef(null);

  const chatbotVariants = {
    hidden: { scale: 0.8, opacity: 0 }, // Shrinks and fades out
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    }, // Expands smoothly
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    }, // Shrinks smoothly when closing
  };

  const handleResponse = (userText) => {
    let botResponses = [];
    setMessages((prev) => [...prev, { text: userText, type: "user" }]);
    setIsTyping(true);

    switch (userText.trim()) {
      case "Just saying hello!":
        botResponses = [
          "Hello!",
          "Thanks for saying hi 😁",
          "I hope you've enjoyed browsing my work.",
          "Can I help you with anything else?",
        ];
        break;
      case "Can I see your work":
        botResponses = [
          "You can check out my projects in the 'Projects' section of my portfolio.",
        ];
        break;
      case "Let’s team up":
        botResponses = [
          "I'd be happy to work with you.",
          "Send me a message and let's chat further!",
        ];
        setShowOtherOptions(false);
        break;
      case "We'd like to hire you":
        botResponses = [
          "Ok great!",
          "Send me a message and let's chat further!",
        ];
        setShowOtherOptions(false);
        break;
      default:
        botResponses = ["How can I assist you today?"];
    }

    setTimeout(() => {
      setIsTyping(false);
      botResponses.forEach((response, index) => {
        setTimeout(() => {
          setMessages((prev) => [...prev, { text: response, type: "bot" }]);
          if (index === botResponses.length - 1) {
            if (
              userText.trim() !== "We'd like to hire you" &&
              userText.trim() !== "Let’s team up"
            ) {
              setShowButtons(true);
            } else {
              setShowButtons(false);
            }
          }
        }, (index + 1) * 1000);
      });
    }, 2000);

    setShowButtons(false);
  };

  const sendMail = () => {
    window.location.href =
      "mailto:chhavi0419@gmail.com?subject=Hello&body=How are you?";
  };

  useEffect(() => {
    if (endOfChatRef.current) {
      endOfChatRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, showOtherOptions]);

  if (!isOpen) return null;
// trying menu
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('chatbot-open');
    } else {
      document.body.classList.remove('chatbot-open');
    }

    // Optional cleanup
    return () => {
      document.body.classList.remove('chatbot-open');
    };
  }, [isOpen]);

  return (
    // <div className="botlogo">
    //   <img src={botlogo} alt="Chatbot Logo" className="bot-logo-tilt" />
    //   <div className="chatbox-container">
    //     <div className="chatbot-header">
    //       <button className="close-button" onClick={onClose}>
    //         X
    //       </button>
    //     </div>
    //     <div className="chatbox-content">
    //       <div className="chat-item-text">
    //         <br />
    //         <div className="chat-item bot">Hi!</div>
    //         <div className="chat-item bot">
    //           I'm <strong>cBot</strong>. I'm here to help you with inquiries you
    //           might have about Chhavi's work.
    //         </div>
    //         <div className="chat-item bot">How can I help you today?</div>
    //       </div>
    //       {messages.map((message, index) => (
    //         <div key={index} className={`chat-item ${message.type}`}>
    //           {message.text}
    //         </div>
    //       ))}
    //       {isTyping && (
    //         <div className="bot">
    //           {/* <h1>...</h1> */}
    //           <div className="typing-dots">
    //             <span>.</span>
    //             <span>.</span>
    //             <span>.</span>
    //           </div>
    //           <img src={typing} alt="Typing..." />
    //         </div>
    //       )}

    //       {showButtons && !showOtherOptions && (
    //         <div className="button-group">
    //           <button
    //             className="chat-button"
    //             onClick={() => handleResponse(" Can I see your work")}
    //           >
    //             Can I see your work
    //           </button>
    //           <button
    //             className="chat-button"
    //             onClick={() => handleResponse("Just saying hello!")}
    //           >
    //             Just saying hello!
    //           </button>
    //           <button
    //             className="chat-button"
    //             onClick={() => handleResponse("   Let’s team up")}
    //           >
    //             Let’s team up
    //           </button>
    //           <button
    //             className="chat-button"
    //             onClick={() => handleResponse("We'd like to hire you")}
    //           >
    //             We'd like to hire you
    //           </button>
    //         </div>
    //       )}
    //       {messages.length > 0 &&
    //         messages[messages.length - 1].text ===
    //           "Send me a message and let's chat further!" &&
    //         !showOtherOptions && (
    //           <div className="button-group">
    //             <button
    //               className="send-message-button chat-button"
    //               onClick={sendMail}
    //             >
    //               Send Message
    //             </button>
    //             <button
    //               className="chat-button"
    //               onClick={() => setShowOtherOptions(true)}
    //             >
    //               Other Options
    //             </button>
    //           </div>
    //         )}
    //       {showOtherOptions && (
    //         <div className="button-group">
    //           <button
    //             className="chat-button"
    //             onClick={() => {
    //               handleResponse("Can I see your work");
    //               setShowOtherOptions(false);
    //             }}
    //           >
    //             Can I see your work
    //           </button>
    //           <button
    //             className="chat-button"
    //             onClick={() => {
    //               handleResponse("Just saying hello!");
    //               setShowOtherOptions(false);
    //             }}
    //           >
    //             Just saying hello!
    //           </button>
    //           <button
    //             className="chat-button"
    //             onClick={() => {
    //               handleResponse("  Let’s team up");
    //               setShowOtherOptions(false);
    //             }}
    //           >
    //             Let’s team up
    //           </button>
    //           <button
    //             className="chat-button"
    //             onClick={() => {
    //               handleResponse("We'd like to hire you");
    //               setShowOtherOptions(false);
    //             }}
    //           >
    //             We'd like to hire you
    //           </button>
    //         </div>
    //       )}
    //       <div ref={endOfChatRef} />
    //     </div>
    //   </div>
    // </div>
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key={isOpen} // Ensures animation runs when state changes
          className="chatbox-container"
          variants={chatbotVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="chatbot-header">
            <button className="close-button" onClick={onClose}>
              X
            </button>
          </div>

          {/* Your Logo Restored */}
          <div className="botlogo">
            <img src={botlogo} alt="Chatbot Logo" className="bot-logo-tilt" />
          </div>

          <div className="chatbox-content">
            <div className="chat-item-text">
              <br />
              <div className="chat-item bot">Hi!</div>
              <div className="chat-item bot">
                I'm <strong>cBot</strong>. I'm here to help you with inquiries
                you might have about Chhavi's work.
              </div>
              <div className="chat-item bot">How can I help you today?</div>
            </div>

            {messages.map((message, index) => (
              <div key={index} className={`chat-item ${message.type}`}>
                {message.text}
              </div>
            ))}

            {isTyping && (
              <div className="bot">
                <div className="typing-dots">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
                <img src={typing} alt="Typing..." />
              </div>
            )}

            {showButtons && !showOtherOptions && (
              <div className="button-group">
                <button
                  className="chat-button"
                  onClick={() => handleResponse("Can I see your work")}
                >
                  Can I see your work
                </button>
                <button
                  className="chat-button"
                  onClick={() => handleResponse("Just saying hello!")}
                >
                  Just saying hello!
                </button>
                <button
                  className="chat-button"
                  onClick={() => handleResponse("Let’s team up")}
                >
                  Let’s team up
                </button>
                <button
                  className="chat-button"
                  onClick={() => handleResponse("We'd like to hire you")}
                >
                  We'd like to hire you
                </button>
              </div>
            )}

            {messages.length > 0 &&
              messages[messages.length - 1].text ===
                "Send me a message and let's chat further!" &&
              !showOtherOptions && (
                <div className="button-group">
                  <button
                    className="send-message-button chat-button"
                    onClick={sendMail}
                  >
                    Send Message
                  </button>
                  <button
                    className="chat-button"
                    onClick={() => setShowOtherOptions(true)}
                  >
                    Other Options
                  </button>
                </div>
              )}

            {showOtherOptions && (
              <div className="button-group">
                <button
                  className="chat-button"
                  onClick={() => {
                    handleResponse("Can I see your work");
                    setShowOtherOptions(false);
                  }}
                >
                  Can I see your work
                </button>
                <button
                  className="chat-button"
                  onClick={() => {
                    handleResponse("Just saying hello!");
                    setShowOtherOptions(false);
                  }}
                >
                  Just saying hello!
                </button>
                <button
                  className="chat-button"
                  onClick={() => {
                    handleResponse("Let’s team up");
                    setShowOtherOptions(false);
                  }}
                >
                  Let’s team up
                </button>
                <button
                  className="chat-button"
                  onClick={() => {
                    handleResponse("We'd like to hire you");
                    setShowOtherOptions(false);
                  }}
                >
                  We'd like to hire you
                </button>
              </div>
            )}
            <div ref={endOfChatRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;

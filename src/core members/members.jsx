import React, { useState, useRef, useEffect } from "react";
import "./members.css";
import pic from "../assets/core/prassana.jpg";
import pic1 from "../assets/core/suppriya.jpg";
import pic2 from "../assets/core/tarakesh.jpg";
import pic3 from "../assets/core/rajaguru.jpg";
import pic4 from "../assets/core/avatar.jpg";
import { FaLinkedin, FaGithub, FaInstagram, FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Members = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.backgroundAttachment = "fixed";
      sectionRef.current.style.backgroundSize = "cover";
      sectionRef.current.style.backgroundPosition = "center";
      // Replace 'your_image_url.jpg' with the correct URL or path to your image
      sectionRef.current.style.backgroundImage =
        "url(your_background_image.jpg)";

      // Optional: Background Color
      sectionRef.current.style.backgroundColor = "#ffffff";
    }
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      name: "Rajaguru",
      role: "Flutter Developer",
      image: pic3,
      quote:
        "Code with passion, build with Flutter. The possibilities are endless.",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Prasanna",
      role: "Front End Developer",
      image: pic,
      quote: "Turning coffee into code and dreams into reality.",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Supriya",
      role: "UI/UX Designer",
      image: pic1,
      quote: "Design is not just what it looks like, it's how it works.",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Tarakesh",
      role: "Full Stack Developer",
      image: pic2,
      quote: "Building the future one line of code at a time.",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Tony",
      role: "Digital Marketer",
      image: pic4,
      quote: "Content is fire, social media is gasoline.",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Prassana",
      role: "Front End Developer",
      image: pic4,
      quote: "The best way to predict the future is to create it.",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Prasanth",
      role: "Flutter Developer",
      image: pic4,
      quote: "Code is like humor. When you have to explain it, it's bad.",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Raja Surya",
      role: "Full Stack Developer",
      image: pic4,
      quote:
        "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <div className="members-section" ref={sectionRef}>
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Our Core Members
      </motion.h1>

      <motion.div
        className="cards-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className={`member-card ${hoveredCard === index ? "hovered" : ""}`}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-inner">
              <div
                className="card-front"
                style={{ backgroundImage: `url(${member.image})` }}
              >
                <div className="card-overlay">
                  <h2 className="member-name">{member.name}</h2>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
              <div className="card-back">
                <FaQuoteLeft className="quote-icon" />
                <p className="member-quote">{member.quote}</p>
                <div className="social-links">
                  <a
                    href={member.social.linkedin}
                    className="social-icon linkedin"
                  >
                    <FaLinkedin />
                  </a>
                  <a href={member.social.github} className="social-icon github">
                    <FaGithub />
                  </a>
                  <a
                    href={member.social.instagram}
                    className="social-icon instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Members;

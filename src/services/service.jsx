import React from "react";
import "./service.css";
import TeamImage from "../assets/ourservices.png";
import {
  FaLaptopCode,
  FaMobile,
  FaPaintBrush,
  FaRobot,
  FaRocket,
  FaBullhorn,
} from "react-icons/fa";

function Service() {
  console.log(TeamImage)
  const services = [
    {
      title: "Website Development",
      icon: <FaLaptopCode size={24} />,
      color: "#f0f5e9",
    },
    {
      title: "Mobile App Development",
      icon: <FaMobile size={24} />,
      color: "#f0f5e9",
    },
    {
      title: "UI/UX Design",
      icon: <FaPaintBrush size={24} />,
      color: "#f0f5e9",
    },
    {
      title: "AI & Automation",
      icon: <FaRobot size={24} />,
      color: "#f0f5e9",
    },
    {
      title: "Tech Modernization",
      icon: <FaRocket size={24} />,
      color: "#f0f5e9",
    },
    {
      title: "Digital Marketing",
      icon: <FaBullhorn size={24} />,
      color: "#f0f5e9",
    },
  ];

  return (
    <div className="services-section">
      <h1 className="services-title">Our Services</h1>

      <div className="services-grid">
        <div className="services-list">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item ${
                service.highlight ? "highlighted" : ""
              } ${service.isGreen ? "green-text" : ""}`}
            >
              <div style={{ marginRight: "12px" }}>{service.icon}</div>
              {service.title}
            </div>
          ))}
        </div>

        <div className="services-image">
          <img src={TeamImage} alt="Team collaboration illustration" />
        </div>
      </div>
    </div>
  );
}

export default Service;

// src/components/EmployeeItem.jsx
import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Employee.css";

const EmployeeItem = ({ employee, index }) => {
  const itemRef = useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [scrollOffset, setScrollOffset] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!itemRef.current) return;
      const rect = itemRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const offset = rect.top - viewportHeight / 2; // Center-based offset
      setScrollOffset(offset * 0.2); // Parallax speed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { opacity, transform, scale, blur } = useSpring({
    opacity: isHovered ? 1 : 0,
    scale: isHovered ? 1.15 : 1, // Slightly more zoom
    blur: isHovered ? 5 : 0,
    transform: `rotateX(${isHovered ? 0 : 90}deg)`,
    config: { mass: 5, tension: 700, friction: 100 }, // Smoother, slightly faster
  });

  const parallaxStyle = {
    transform: `translateY(${scrollOffset}px)`,
    backgroundImage: `url(${employee.profilePicture})`,
  };

  return (
    <div
      ref={itemRef}
      className="employee-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <animated.div className="employee-parallax" style={parallaxStyle} />
      <animated.div
        className="employee-details"
        style={{
          opacity,
          filter: blur.interpolate((b) => `blur(${b}px)`),
          transform: transform.interpolate(
            (t) => `${t} rotate(${0}deg) scale(${scale})`
          ),
        }}
      >
        <h2>{employee.name}</h2>
        <h3>{employee.jobTitle}</h3>
        <p>{employee.bio}</p>
        {/* Add more details as needed */}
      </animated.div>
    </div>
  );
};

export default EmployeeItem;

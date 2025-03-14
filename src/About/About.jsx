// src/App.jsx
import React from "react";
import EmployeeItem from "./employee";
import "./About.css";

const employeesData = [
  {
    name: "John Doe",
    jobTitle: "Software Engineer",
    profilePicture: "/john-doe.jpg",
    bio: "Passionate about coding...",
  },
  {
    name: "Jane Smith",
    jobTitle: "UX Designer",
    profilePicture: "/jane-smith.jpg",
    bio: "Loves creating user-friendly interfaces...",
  },
  {
    name: "David Lee",
    jobTitle: "Project Manager",
    profilePicture: "/david-lee.jpg",
    bio: "Expert in leading teams...",
  },
  // Add more employees here
];

function About() {
  return (
    <div className="app-container">
      {employeesData.map((employee, index) => (
        <EmployeeItem key={index} employee={employee} index={index} />
      ))}
    </div>
  );
}

export default About;

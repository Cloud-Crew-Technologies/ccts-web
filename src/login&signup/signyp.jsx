import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import sign from "../assets/signin.jpg";
import axios from "axios";
import "./login.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobileno: "",
    domain: "it",
    address: "",
    pancard: "",
    dob: "",
    skills: ["devops", "develop"],
    college: "",
    degree: "",
    yearofstudying: "",
    yearofpassing: "",
    github: "",
    linkedin: "",
    resume: null,
    uniqueid: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    generateUniqueId();
  }, []);

  const generateUniqueId = () => {
    const randomId = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    setFormData({
      ...formData,
      uniqueid: randomId.toString(),
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) {
      tempErrors.name = "Name is required";
    }
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.mobileno) {
      tempErrors.mobileno = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileno)) {
      tempErrors.mobileno = "Invalid mobile number";
    }

    if (!formData.address) {
      tempErrors.address = "Address is required";
    }

    if (!formData.pancard) {
      tempErrors.pancard = "Pancard is required";
    }

    if (!formData.dob) {
      tempErrors.dob = "Date of birth is required";
    }

    if (!formData.college) {
      tempErrors.college = "College is required";
    }

    if (!formData.degree) {
      tempErrors.degree = "Degree is required";
    }

    if (!formData.yearofstudying) {
      tempErrors.yearofstudying = "Year of studying is required";
    }

    if (!formData.yearofpassing) {
      tempErrors.yearofpassing = "Year of passing is required";
    }

    if (!formData.github) {
      tempErrors.github = "Github link is required";
    }

    if (!formData.linkedin) {
      tempErrors.linkedin = "Linkedin link is required";
    }

    if (!formData.uniqueid) {
      tempErrors.uniqueid = "Unique ID is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const formDataToSend = new FormData();
        for (const key in formData) {
          formDataToSend.append(key, formData[key]);
        }
        if (formData.resume) {
          formDataToSend.append("resume", formData.resume);
        }

        const response = await axios.post(
          "https://uijk846a.up.railway.app/api/signup",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Signup successful:", response.data);
        navigate("/login");
      } catch (error) {
        console.error(
          "Signup failed:",
          error.response ? error.response.data : error.message
        );
        setErrors({
          api: error.response ? error.response.data.message : error.message,
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      resume: file,
    });
  };

  const handleSkillsChange = (e) => {
    const selectedSkills = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData({
      ...formData,
      skills: selectedSkills,
    });
  };

  return (
    <div className="container">
      <div className="login-card">
        <h1 className="title">SIGN UP</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="input-field"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Username or Email Id"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="mobileno"
              className="input-field"
              placeholder="Mobile Number"
              value={formData.mobileno}
              onChange={handleChange}
            />
            {errors.mobileno && (
              <div className="error-message">{errors.mobileno}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="address"
              className="input-field"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && (
              <div className="error-message">{errors.address}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="pancard"
              className="input-field"
              placeholder="PanCard"
              value={formData.pancard}
              onChange={handleChange}
            />
            {errors.pancard && (
              <div className="error-message">{errors.pancard}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="date"
              name="dob"
              className="input-field"
              placeholder="dob"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <div className="error-message">{errors.dob}</div>}
          </div>
          <div className="form-group">
            <select
              name="skills"
              className="input-field"
              multiple
              value={formData.skills}
              onChange={handleSkillsChange}
            >
              <option value="devops">DevOps</option>
              <option value="develop">Develop</option>
              <option value="design">Design</option>
              <option value="testing">Testing</option>
            </select>
            {errors.skills && (
              <div className="error-message">{errors.skills}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="college"
              className="input-field"
              placeholder="College"
              value={formData.college}
              onChange={handleChange}
            />
            {errors.college && (
              <div className="error-message">{errors.college}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="degree"
              className="input-field"
              placeholder="Degree"
              value={formData.degree}
              onChange={handleChange}
            />
            {errors.degree && (
              <div className="error-message">{errors.degree}</div>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="yearofstudying"
              className="input-field"
              placeholder="Year of studying"
              value={formData.yearofstudying}
              onChange={handleChange}
            />
            {errors.yearofstudying && (
              <div className="error-message">{errors.yearofstudying}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="yearofpassing"
              className="input-field"
              placeholder="Year of passing"
              value={formData.yearofpassing}
              onChange={handleChange}
            />
            {errors.yearofpassing && (
              <div className="error-message">{errors.yearofpassing}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="github"
              className="input-field"
              placeholder="Git hub Link"
              value={formData.github}
              onChange={handleChange}
            />
            {errors.github && (
              <div className="error-message">{errors.github}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="linkedin"
              className="input-field"
              placeholder="Linkedin Link"
              value={formData.linkedin}
              onChange={handleChange}
            />
            {errors.linkedin && (
              <div className="error-message">{errors.linkedin}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="file"
              name="resume"
              className="input-field"
              placeholder="Upload Resume"
              onChange={handleFileChange}
            />
            {errors.resume && (
              <div className="error-message">{errors.resume}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            SIGN UP
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <button type="button" className="btn social-btn">
            <FaGoogle className="icon" /> Continue with Google
          </button>

          <button type="button" className="btn social-btn">
            <AiFillApple className="icon" /> Continue with Apple
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

import React, { useEffect, useRef } from "react";
import "./whychoose.css";

function Choose() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="why-section"
      ref={sectionRef}
      style={{
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>Why choose Us?</h1>
      <div className="wcontent">
        <p className="content">
          We bridge the gap between businesses and cutting-edge technology by
          delivering cost-effective, high-quality digital solutions.
        </p>
      </div>

      <div className="cards-container">
        <div className="card">
          <div className="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              fill="#2E7D32"
              className="bi bi-check2-circle"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
          </div>
          <h2>Affordable & Scalable Solutions</h2>
          <p>
            Get Premium Services at <strong>Half the Industry Cost</strong>
          </p>
        </div>

        <div className="card">
          <div className="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              fill="#2E7D32"
              className="bi bi-person-workspace"
              viewBox="0 0 16 16"
            >
              <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
            </svg>
          </div>
          <h2>Expert-Guided Freshers Model</h2>
          <p>
            Skilled interns work under <strong>Expert supervision</strong> for
            Quality assurance
          </p>
        </div>

        <div className="card">
          <div className="icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              fill="#2E7D32"
              className="bi bi-laptop"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
            </svg>
          </div>
          <h2>Remote-First, Future-Ready</h2>
          <p>Efficient Operations with a centralized data hub</p>
        </div>
      </div>
    </div>
  );
}

export default Choose;

import React from "react";
import "./works.css";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";

const Works = () => {
  return (
    <>
      <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">
          I'm a dedicated web developer with expertise in HTML, CSS, JavaScript,
          Java, C++, and Python. Specializing in both frontend and backend
          development, I create responsive and user-friendly web experiences. My
          skills in problem-solving and clear communication ensure the delivery
          of high-quality projects that prioritize functionality and aesthetics.
        </span>
        <div className="worksImgs">
          <img src={p1} alt="Project1" className="worksImg" />
          <img src={p2} alt="project2" className="worksImg" />
            <img src={p3} alt="project3" className="worksImg" />
          <img src={p4} alt="project4" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
      </section>
    </>
  );
};

export default Works;

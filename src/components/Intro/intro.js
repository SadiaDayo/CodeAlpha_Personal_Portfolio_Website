import React from "react";
import "./intro.css";
import bg from "../../assets/profile.jpeg";
import btnImg from "../../assets/hire.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,👋</span>
        <span className="introText">
          I'm <span className="introName">Sadia</span>
          <br />
          'Software Engineer'&#128187;
        </span>
        <p className="introPara">
          I am a dedicated software engineer <br />with a passion for problem-solving and innovation.<br /> With expertise in various programming languages and<br /> a deep understanding of software development principles, <br />I strive to create robust and scalable solutions<br /> that meet the evolving needs of users and businesses.
        </p>
        <a href="https://www.linkedin.com/in/sadia-dayo/">
          <button className="btn">
            <img src={btnImg} alt="hire me" className="btnImg" /> Hire Me
          </button>
        </a>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;

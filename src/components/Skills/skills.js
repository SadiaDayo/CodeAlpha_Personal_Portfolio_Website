import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui.png";
import WebDesin from "../../assets/website.png";
import AppDesign from "../../assets/appdesign.jpg";
import VC from "../../assets/VersionC.png";
import Design from "../../assets/design.png";
import SE from "../../assets/SE.png";
import PS from "../../assets/problem.png";
import Com from "../../assets/communication.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        As a dedicated web developer, I specialize in crafting dynamic and
        user-friendly web experiences. With expertise in both front-end and
        back-end development, I create responsive websites and applications that
        seamlessly combine form and function. My skill set includes proficiency
        in languages such as HTML, CSS, JavaScript, Java, C++, and Python. I'm
        adept at utilizing frameworks like React.js and Bootstrap for frontend
        development, while also leveraging Node.js for backend
        tasks. Additionally, I have experience with SQL for database management
        and Git/GitHub for version control. I excel in problem-solving,
        debugging, and troubleshooting, ensuring smooth project execution.
        Moreover, I value clear communication, effective collaboration, and
        meticulous documentation throughout the development lifecycle. With a
        passion for innovation and a commitment to excellence, I continuously
        seek to enhance my skills and stay abreast of the latest industry
        trends. My goal is to deliver high-quality solutions that meet and
        exceed client expectations while providing engaging user experiences.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UI Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Experienced in creating intuitive user interfaces.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppDesign} alt="Coding" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Programming Languages</h2>
            <p>Java, C++, HTML, Python</p>
            <p>JavaScript, CSS, SQL</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesin} alt="Website" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>Frontend: HTML5, CSS3, JavaScript</p>
            <p>Frameworks/Libraries: React.js, Bootstrap</p>
            <p>Backend: Node.js</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={VC} alt="version control" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Version Control</h2>
            <p>Git, GitHub</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={Design} alt="Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Design and Collaboration Tools</h2>
            <p>Figma & Miro</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={SE} alt="SE" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Software Engineering Concepts</h2>
            <p>Object-Oriented Programming (OOP)</p>
            <p>Data Structures and Algorithms</p>
            <p>Software Development Lifecycle (SDLC), Agile Methodologies</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={PS} alt="App design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Problem Solving</h2>
            <p>Analytical thinking , Debugging & Troubleshooting</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={Com} alt="communication" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Communication</h2>
            <p>Team collaboration</p>
            <p>Clear documentation</p>
            <p>Effective presentation skills</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

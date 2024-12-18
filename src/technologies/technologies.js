import React from "react";
import "./TechnologiesMaster.css"; // CSS file for styling

// Array of technologies
const technologies = [
  { id: 1, name: "Node Js", logo: "https://nodejs.org/static/images/logo.svg" },
  { id: 2, name: "Flutter", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
  { id: 3, name: "Laravel", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" },
  { id: 4, name: "Android", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" },
  { id: 5, name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { id: 6, name: "Magento", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Magento_Logo.svg" },
  { id: 7, name: "iOS", logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/IOS_logo.svg" },
  { id: 8, name: "Wordpress", logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" },
];

const TechnologiesMaster = () => {
  return (
    <div className="technologies-container">
      <h2>Technologies We Master</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div key={tech.id} className="technology-card">
            <img src={tech.logo} alt={tech.name} className="technology-logo" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesMaster;





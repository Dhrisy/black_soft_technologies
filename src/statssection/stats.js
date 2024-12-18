import React from 'react';
import CountUp from 'react-countup';
import './StatsSection.css'; // Add custom styles here

function StatsSection() {
  return (
    <div className="stats-container">
      <div className="stats-item">
        <h2 className="stats-number">
          <CountUp start={0} end={30} duration={3} separator="," />+
        </h2>
        <p className="stats-label">Happy Clients</p>
      </div>
      <div className="stats-item">
        <h2 className="stats-number">
          <CountUp start={0} end={50} duration={3} separator="," />+
        </h2>
        <p className="stats-label">Projects Completed</p>
      </div>
    </div>
  );
}

export default StatsSection;

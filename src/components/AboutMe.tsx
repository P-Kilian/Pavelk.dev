import React from "react";

const AboutMe = () => {
  return (
    <div className="container-rounded">
      <div>
        <h2>Bio</h2>
        <ul>
          <li>x - x Studies</li>
          <li>x - x Work</li>
        </ul>
      </div>
      <div>
        <h2>Interests</h2>
        <ul className="flex flex-row gap-5">
          <li>Programming</li>
          <li>Reading</li>
          <li>Hiking</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;

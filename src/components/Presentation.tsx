import React from "react";

const Presentation = () => {
  return (
    <section className="flex flex-col w-full flex-grow justify-between">
      <h1 className="w-full">Pavel Kilian</h1>
      <h3> Front-end Developer</h3>
      <div className="w-full">
        <h2>About me</h2>
        <p>
          Junior web developer with 1 year experience focused on front-end.
          Highly adaptable and able to work independently to deliver
          high-quality results that meet clients needs and exceed their
          expectations. Proficient in HTML, CSS (SCSS), JavaScript and React.
          Skilled in optimizing websites for SEO and improving user engagement.
          Strong collaboration and problem-solving abilities.
        </p>
      </div>
      <div className="flex justify-center w-full gap-20">
        <button className="bg-red-500 rounded-full p-1">Portolio</button>
        <button className="bg-red-500 rounded-full p-1">Github</button>
      </div>
    </section>
  );
};

export default Presentation;

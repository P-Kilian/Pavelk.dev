import Link from "next/link";
import React from "react";

const Presentation = () => {
  return (
    <section className="flex flex-col w-full flex-grow justify-center gap-5">
      <div className="container-rounded">
        <h1>Pavel Kilian</h1>
        <h3> Front-end Developer</h3>
      </div>
      <div className="flex flex-col container-rounded gap-5">
        <h2>About me</h2>
        <p>
          Junior web developer with 1 year experience focused on front-end.
          Highly adaptable and able to work independently to deliver
          high-quality results that meet clients needs and exceed their
          expectations. Proficient in HTML, CSS (SCSS), JavaScript and React.
          Skilled in optimizing websites for SEO and improving user engagement.
          Strong collaboration and problem-solving abilities.
        </p>
        <div className="flex justify-center w-full gap-20">
          <Link
            className="bg-accent rounded-xl py-2 px-5"
            href={"https://github.com/P-Kilian"}
          >
            Portolio
          </Link>
          <Link
            className="bg-accent rounded-xl py-2 px-5"
            href={"https://github.com/P-Kilian"}
            target="_blank"
          >
            Github
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Presentation;

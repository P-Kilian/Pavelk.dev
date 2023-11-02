import React from "react";

interface SocialsProps {
  links: {
    [key: string]: string;
  };
}

const Socials: React.FC<SocialsProps> = ({ links }) => {
  const socials = Object.keys(links);

  return (
    <div>
      {socials.map((social) => (
        <a
          key={social}
          href={links[social]}
          target="_blank"
          rel="noopener noreferrer"
        />
      ))}
    </div>
  );
};

export default Socials;

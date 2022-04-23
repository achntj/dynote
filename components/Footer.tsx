import React from "react";
var config = require('../config.json');

const socials = config.socials

const Footer: React.FC = () => {

  return (
    <div className="px-4">
      <h3>Find Me Here!</h3>
        <p>
          <a href={socials.website}>Website</a>
          {" | "}
          <a href={socials.github}>GitHub</a>
          {" | "}
          <a href={socials.twitter}>Twitter</a>
        </p>
    </div>
  );
};

export default Footer;

import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";


function Footer() {
  return (
    <footer>
      <h2>Made by Skye Heredia©</h2>
      <p>
        <ul>
          <a href="https://github.com/skye143">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/skye-h-988a7a221">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;

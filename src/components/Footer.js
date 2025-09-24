import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiHackerrank, SiLeetcode } from "react-icons/si"; // Import HackerRank & LeetCode icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a
          href="https://github.com/17Pranali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/pranali-kshirsagar17/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.hackerrank.com/profile/ipranalikshirsa1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiHackerrank />
        </a>
        <a
          href="https://leetcode.com/u/pranali_kshirsagar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode />
        </a>
        <a href="mailto:ipranalikshirsagar@gmail.com">
          <FaEnvelope />
        </a>
        <a href="tel:+917507244861">
          <FaPhone />
        </a>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Created by <span>Pranali Kshirsagar</span></p>
      </div>
    </footer>
  );
};

export default Footer;

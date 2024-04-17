import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "kharif" },
    { id: 4, link: "rabi" },
    { id: 5, link: "zaid" },
    { id: 6, link: "allcrops" },
    { id: 7, link: "contact" },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>SoilMate</div>
      
      <ul className={`hidden md:flex ${styles.menu}`}>
        {links.map(({ id, link }) => (
          <li key={id} className={styles.menuItem}>
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className={styles.menuIcon}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className={styles.fullMenu}>
          {links.map(({ id, link }) => (
            <li key={id} className={styles.fullMenuItem} onClick={() => setNav(false)}>
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

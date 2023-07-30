import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../styles/Nav.module.css';   

const Nav = () => {
  return (
    <>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? `${styles.activado}` : null)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${styles.activado}` : null)}
          to="/atanagildo"
        >
          Atanagildo
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${styles.activado}` : null)}
          to="/ataulfo"
        >
          Ataúlfo
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${styles.activado}` : null)}
          to="/ervigio"
        >
          Ervigio
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${styles.activado}` : null)}
          to="/leovigildo"
        >
          Leovigildo
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${styles.activado}` : null)}
          to="/recesvinto"
        >
          Recesvinto
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${styles.activado}` : null)}
          to="/sisebuto"
        >
          Sisebuto
        </NavLink>
      </nav>
    </>
  );
};

export default Nav;

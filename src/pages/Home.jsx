import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Home.module.css'  

const Home = () => {
  const reyes = ["atanagildo","ataulfo","ervigio","leovigildo","recesvinto","sisebuto"]
  return (
    <>
      <ul className={styles.homeList}>
        {reyes.map((nombre)=>(
          <li key={nombre} className={styles.homeListItem}>
            <Link to={`/${nombre}`} className={styles.homeLink}>
            <img src={`https://www.html6.es/img/rey_${nombre}.png`} alt="" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

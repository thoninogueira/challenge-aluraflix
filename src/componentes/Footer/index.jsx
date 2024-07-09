import React, { useState } from "react";
import styles from "./Footer.module.css";
import logo from "./../Header/logo.png";
import homeIcon from "./../Header/home.png"; 
import newVideoIcon from "./../Header/novo-video.png"; 
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };

  return (
    <footer className={styles.footerContainer}>
      <img src={logo} alt="Logo da Alura Latam" />
      <p>Desafio Oracle Next Education - ONE + Alura Latam feito por Thoni Nogueira</p>
      <div className={styles.linkContainer}>
        <Link
          to="/"
          className={`${styles.footerLink} ${activeButton === 'home' ? styles.clicked : ""}`}
          onClick={() => handleButtonClick('home')}
        >
          <img src={homeIcon} alt="Home" className={styles.icon} />
          {activeButton === 'home' && <span>HOME</span>}
        </Link>
        <Link
          to="/novo-video"
          className={`${styles.footerLink} ${activeButton === 'newVideo' ? styles.clicked : ""}`}
          onClick={() => handleButtonClick('newVideo')}
        >
          <img src={newVideoIcon} alt="Novo Vídeo" className={styles.icon} />
          {activeButton === 'newVideo' && <span>NOVO VÍDEO</span>}
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "./../Header/logo.png";
import homeIcon from "./../Header/home.png";
import newVideoIcon from "./../Header/novo-video.png";

const Footer = () => {
  const location = useLocation();

  // Função para determinar se o botão deve ser ativado com base na URL
  const isActive = (path) => location.pathname === path;

  return (
    <footer className={styles.footerContainer}>
      <img src={logo} alt="Logo da Alura Latam" />
      <p>Desafio Oracle Next Education - ONE + Alura Latam feito por Thoni Nogueira</p>
      <div className={styles.linkContainer}>
        <Link
          to="/"
          className={`${styles.footerLink} ${isActive('/') ? styles.clicked : ""}`}
        >
          <img src={homeIcon} alt="Home" className={styles.icon} />
          {isActive('/') && <span>HOME</span>}
        </Link>
        <Link
          to="/novo-video"
          className={`${styles.footerLink} ${isActive('/novo-video') ? styles.clicked : ""}`}
        >
          <img src={newVideoIcon} alt="Novo Vídeo" className={styles.icon} />
          {isActive('/novo-video') && <span>NOVO VÍDEO</span>}
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styles from "./Destaques.module.css";
import youtubeIcon from './youtube.png';

const Destaques = ({ video }) => {

  const container = {
    background: `url(${video.imagem})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    boxShadow: 'inset 5px 0px 29px 0px rgba(34, 113, 209, 0.7)',
    width: '100%',
    height: '532px',
    display: 'flex',
    justifyContent: 'space-around',
  };

  const estiloCombinadoImg = {
    background: `url(${video.imagem})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '600px',
    height: '350px',
    marginTop: '140px',
    marginRight: '40px',
    boxShadow: `inset 5px 0px 29px 0px ${video.area === "backend" ? "#00C86F" : video.area === "mobile" ? "#FFBA05" : "rgba(34, 113, 209, 0.7)"}`,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const estiloAreaDestaque = {
    textAlign: "center",
    color: "#fff",
    textTransform: "uppercase",
    padding: "10px",
    borderRadius: "10px",
    width: "60%",
    backgroundColor: video.area === "frontend" ? "#6BD1FF" : video.area === "backend" ? "#00C86F" : video.area === "mobile" ? "#FFBA05" : "inherit"
  };

  const formatarArea = (area) => {
    return area === "frontend" ? "front end" : area === "backend" ? "back end" : area;
  };

  return (
    <div className={styles.sombra} style={container}>
      <div className={styles.infoContainer}>
        <h1 style={estiloAreaDestaque}>{formatarArea(video.area)}</h1>
        <h1>{video.titulo}</h1>
        <p>{video.descricao}</p>
      </div>
      <Link style={{ zIndex: 1 }} to={`video/${video.id}`}>
        <div className={styles.sombraImgVideo} style={estiloCombinadoImg}>
          <img src={youtubeIcon} alt="Ícone do youtube" />
        </div>
      </Link>
    </div>
  );
}

Destaques.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired
  }).isRequired
};

export default Destaques;

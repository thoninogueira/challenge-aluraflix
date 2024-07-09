import PropTypes from 'prop-types';
import styles from './CardVideo.module.css';
import excluirBtn from './excluir.png';
import editarBtn from './editar.png';
import { Link } from 'react-router-dom';

const CardVideo = ({ video, aoDeletar, aoVideoSelecionado, videoBorderColor, btnColor }) => {

  async function excluirVideo(id) {
    try {
      const response = await fetch(`http://localhost:3000/videos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Erro ao excluir o vídeo');
      }
      aoDeletar(id);
      // alert('Vídeo excluído com sucesso!');
    } catch (error) {
      alert('Erro ao excluir vídeo');
      console.error('Erro ao excluir vídeo:', error);
    }
  }

  const rolarPraCimaESelecionarVideo = (video) => {
    aoVideoSelecionado(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.gcontainer}>
      <Link to={`video/${video.id}`}>
        <div className={styles.imgContainer} style={{ borderColor: videoBorderColor, boxShadow: `0 0 13px ${videoBorderColor}` }}>
          <img src={video.imagem} alt={video.area} />
        </div>
      </Link>
      <div className={styles.btnContainer} style={{ boxShadow: `0 0 13px ${btnColor}` }}>
        <button className={styles.btn} onClick={() => excluirVideo(video.id)}>
          <img src={excluirBtn} alt='Botão de excluir' />EXCLUIR
        </button>
        <button className={styles.btn} onClick={() => rolarPraCimaESelecionarVideo(video)}>
          <img src={editarBtn} alt='Botão de editar' />EDITAR
        </button>
      </div>
    </div>
  );
}

CardVideo.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired
  }).isRequired,
  aoDeletar: PropTypes.func.isRequired,
  aoVideoSelecionado: PropTypes.func.isRequired,
  videoBorderColor: PropTypes.string,
  btnColor: PropTypes.string
};

export default CardVideo;

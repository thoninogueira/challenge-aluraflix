import React from 'react';
import PropTypes from 'prop-types';
import styles from './CampoTexto.module.css';

const CampoTexto = (props) => {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className={styles.gContainer} style={props.withCampoTexto}>
      <label style={props.estiloCorLabel}>{props.label}</label>
      <input 
        type={props.type} 
        placeholder={props.placeholder} 
        required={props.obrigatorio} 
        value={props.valor} 
        onChange={aoDigitado} 
        style={props.estiloCorCampo} 
      />
    </div>
  );
};

CampoTexto.propTypes = {
  aoAlterado: PropTypes.func.isRequired,
  withCampoTexto: PropTypes.object,
  estiloCorLabel: PropTypes.object,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  obrigatorio: PropTypes.bool,
  valor: PropTypes.string,
  estiloCorCampo: PropTypes.object
};

export default CampoTexto;

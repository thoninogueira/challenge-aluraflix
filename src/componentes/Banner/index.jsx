import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Banner.module.css"

const Banner = ({ children }) => {
  return (
    <div className={styles.banner}>
      {children}
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Banner;

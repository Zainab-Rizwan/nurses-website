import React from 'react';
import PropTypes from 'prop-types';
import "./style.module.scss";
import styles from "./style.module.scss";


const Button = ({value, onClick}) => (
    <button
    className={styles['app-button']}
        onClick={(event) => onClick(event)}>
        {value}
    </button>
);

Button.propTypes = {
    styleClass: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    styleClass: 'btn-primary'
};

export default Button;
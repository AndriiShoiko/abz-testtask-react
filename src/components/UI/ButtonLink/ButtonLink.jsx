import React from 'react';
import s from './ButtonLink.module.scss';

const ButtonLink = ({ children, ...props }) => {
    return (
        <button {...props} className={s.buttonLink}>
            {children}
        </button>
    )
}

export default ButtonLink;

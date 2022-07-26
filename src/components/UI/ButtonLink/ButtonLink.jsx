import React from 'react';
import s from './ButtonLink.module.scss';

const ButtonLink = ({ children, href }) => {
    return (
        <a href={href} className={s.buttonLink}>
            {children}
        </a>
    )
}

export default ButtonLink;

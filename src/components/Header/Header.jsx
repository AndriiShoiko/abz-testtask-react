import React from 'react';
import SvgSelector from '../../assets/icons/svg/SvgSelector';
import ButtonLink from '../UI/ButtonLink/ButtonLink';
import s from './Header.module.scss';

const Header = () => {
    return (
        <header className={s.wrapper}>
            <div className={s.logo}>
                <a href="/">
                    <SvgSelector id='main-logo' />
                </a>
            </div>

            <nav className={s.menu}>
                <ul>
                    <li>
                        <ButtonLink className={s.ButtonLink} href='#!'>Users</ButtonLink>
                    </li>
                    <li>
                        <ButtonLink className={s.ButtonLink} href='#!'>Sign up</ButtonLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

import React from 'react';
import ButtonLink from '../UI/ButtonLink/ButtonLink';
import s from './Preview.module.scss';

const Preview = () => {
    return (
        <div className={s.preview}>
            <section className={s.bcg_text}>
                <h1>Test assignment for front-end developer</h1>
                <h2>
                    What defines a good front-end developer is one that has skilled
                    knowledge of HTML, CSS, JS with a vast understanding of User
                    design thinking as they'll be building web interfaces with
                    accessibility in mind. They should also be excited to learn, as
                    the world of Front-End Development keeps evolving.
                </h2>
                <ButtonLink className={s.ButtonLink} href='#!'>Sign up</ButtonLink>
            </section>
        </div>
    )
}

export default Preview;

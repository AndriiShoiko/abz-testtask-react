import React from 'react';
import Participant from '../Participant/Participant';
import ButtonLink from '../UI/ButtonLink/ButtonLink';
import s from './WorkingWithGetRequest.module.scss';

const WorkingWithGetRequest = () => {
    return (
        <section className={s.get_request}>

            <div className={s.wrap}>
                <h1>Working with GET request</h1>
            </div>

            <div className={s.team_container} id="participants">
                <Participant key='6095' id='6095' name='Andry Ivanovich' position='Lawyer' email='andry1@gmail.com'
                    phone='+380997828513' photo='https://frontend-test-assignment-api.abz.agency/images/users/62dfe462311216095.jpg' />
                <Participant key='6096' id='6095' name='Salvador Stewart Flynn Thomas Salva Salve Salva Salve' position='Lawyer' email='andry1@gmail.com'
                    phone='+380997828513' photo='https://frontend-test-assignment-api.abz.agency/images/users/62dfe462311216095.jpg' />
                <Participant key='6097' id='6095' name='Andry Ivanovich' position='Lawyer' email='andry1@gmail.com'
                    phone='+380997828513' photo='https://frontend-test-assignment-api.abz.agency/images/users/62dfe462311216095.jpg' />
                <Participant key='6098' id='6095' name='Andry Ivanovich' position='Lawyer' email='andry1@gmail.com'
                    phone='+380997828513' photo='https://frontend-test-assignment-api.abz.agency/images/users/62dfe462311216095.jpg' />
                <Participant key='6099' id='6095' name='Andry Ivanovich' position='Lawyer' email='andry1@gmail.com'
                    phone='+380997828513' photo='https://frontend-test-assignment-api.abz.agency/images/users/62dfe462311216095.jpg' />
                <Participant key='60910' id='6095' name='Andry Ivanovich' position='Lawyer' email='andry1@gmail.com'
                    phone='+380997828513' photo='https://frontend-test-assignment-api.abz.agency/images/users/62dfe462311216095.jpg' />
            </div>
            <div className={s.wrap}>
                <div className={s.show_more}>
                    <ButtonLink className={s.ButtonLink} href='#!'>Show more</ButtonLink>
                </div>
            </div>

        </section>
    )
}

export default WorkingWithGetRequest;

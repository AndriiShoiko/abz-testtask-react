import React from 'react';
import PreloaderPhoto from '../UI/PreloaderPhoto/PreloaderPhoto';
import s from './Participant.module.scss';

const Participant = ({ id, photo, name, position, email, phone }) => {
  return (
    <div className={s.participant}>
      <PreloaderPhoto />
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>{position}</p>
      <p>
        <a href="#!" className={s.mail}> {email} </a>
      </p>
      <p>{phone}</p>
    </div>
  )
}

export default Participant;

import React from 'react';
import s from './RadioButton.module.scss';

const RadioButton = ({register, ...props }) => {
    return (
        <div className={s.radio_button}>
            <input
                {...props}
                {...register(props.name)}
                type="radio"
                className={s.input}
            />
            <label htmlFor={props.id} className={s.label}>
                {props.labeltext}
            </label>
        </div>
    )
}

export default RadioButton;

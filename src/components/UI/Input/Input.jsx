import React from 'react';
import s from './Input.module.scss';

const Input = ({ ...props }) => {
    return (
        <div
            className={s.input + " " + props.className}
        >
            <input
                {...props}
                className={s.text}
                required
                error={props.error}
            />

            <div className={s.label_frame} error={props.error}>
                {props.placeholder}
            </div>

            <label className={s.prompt} htmlFor={props.name} error={props.error}>
                {props.labelframetext}
            </label>
        </div>
    )
}

export default Input;

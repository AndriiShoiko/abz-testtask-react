import React, { useState } from 'react';
import s from './Input.module.scss';

const Input = ({ register, req, ...props }) => {

    const [valueInput, setvalueInput] = useState('');

    const onChange = (e) => {
        setvalueInput(e.target.value);
    }

    return (
        <div className={s.input + " " + props.className}>
            <input
                {...props}

                className={s.text}
                error={props.error}
                {...register(props.name, req)}
                onChange={onChange}
            />

            <div className={(valueInput) ? s.label_frame : s.label_frame + " " + s.display_none}
                error={props.error}>
                {props.placeholder}
            </div>

            <label className={s.prompt} htmlFor={props.name} error={props.error}>
                {props.labelframetext}
            </label>
        </div>
    )
}

export default Input;

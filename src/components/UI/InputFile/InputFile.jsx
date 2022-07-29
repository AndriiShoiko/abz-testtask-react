import React from 'react';
import s from './InputFile.module.scss';

const InputFile = ({ ...props }) => {
    return (
        <div className={s.input_file + " " + props.className} id="inputFile">
            <input
                className={s.hidden}
                type="file"
                id={props.id + "Hidden"}
                name={props.id + "Hidden"}
            />
            <label
                htmlFor={props.id + "Hidden"}
                className={s.file}
                id={props.id}>
                {props.labeltext}
            </label>
            <label
                className={s.file_rect}
                id={props.id + "Rect"}
                htmlFor={props.id + "Hidden"}>
                Upload
            </label>
            <label
                htmlFor={props.id + "Hidden"}
                className={s.label_prompt}
                id={props.id + "promptPhoto"} >
                {props.labelframetext}
            </label>
        </div>
    )
}

export default InputFile;

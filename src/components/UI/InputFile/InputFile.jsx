import React, { useRef, useState } from 'react';
import s from './InputFile.module.scss';

const InputFile = ({ register, validateFunc, ...props }) => {

    const [selectFile, setSelectFile] = useState(null);

    const onChangeFile = (event) => {
        if (event.target.files.length > 0) {
            setSelectFile(event.target.files[0]);
        } else {
            setSelectFile(null);
        }
    }

    return (
        <div className={s.input_file + " " + props.className} id="inputFile">
            <input
                {...props}
                className={s.hidden}
                type="file"
                id={props.name + "Hidden"}
                {...register(props.name, { required: true, validate: validateFunc })}
                onChange={onChangeFile}
            />
            <label
                htmlFor={props.name + "Hidden"}
                className={s.file} error={props.error}>
                {(selectFile) ? selectFile.name : props.labelframetext}
            </label>
            <label
                className={s.file_rect}
                htmlFor={props.name + "Hidden"} error={props.error}>
                Upload
            </label>
            <label
                htmlFor={props.name + "Hidden"}
                className={s.label_prompt} error={props.error}>
                {props.labelframetext}
            </label>
        </div>
    )
}

export default InputFile;

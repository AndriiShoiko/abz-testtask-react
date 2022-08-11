import React from 'react';
import Input from '../UI/Input/Input';
import InputFile from '../UI/InputFile/InputFile';
import RadioButton from '../UI/RadioButton/RadioButton';
import ButtonLink from '../UI/ButtonLink/ButtonLink';

import { useForm } from 'react-hook-form';

import s from './WorkingWithPostRequest.module.scss';
import SvgSelector from '../../assets/icons/svg/SvgSelector';

const WorkingWithPostRequest = () => {

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset
    } = useForm({ mode: 'all' });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    const validateSelectFile = (value) => {

        let result = true;

        if (value.length > 0) {
            if (value[0].size > 5242880) { result = false }
            if (!(value[0].type === "image/jpeg" || value[0].type === "image/jpg")) { result = false }
        }

        console.log(result);
        return result;
    }

    return (
        <section className={s.post_request}>
            <div className={s.wrap_header}>
                <h1>Working with POST request</h1>
            </div>

            <div className={s.wrap_form}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Input className={s.input} type="text" placeholder="Your name"
                        register={register} req={{ required: true, minLength: 2, maxLength: 60 }}
                        labelframetext="Enter your name" name="name" error={"" + errors.hasOwnProperty("name")} />

                    <Input className={s.input} type="text" placeholder="Email"
                        register={register} req={{ required: true, minLength: 2, maxLength: 100, pattern: /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/ }}
                        labelframetext="Enter your email" name="email" error={"" + errors.hasOwnProperty("email")} />

                    <Input className={s.input} type="text" placeholder="Phone"
                        register={register} req={{ required: true, pattern: /^[\+]{0,1}380([0-9]{9})$/ }}
                        labelframetext="+38 (XXX) XXX - XX - XX" name="phone" error={"" + errors.hasOwnProperty("phone")} />

                    <fieldset className={s.select_position}>
                        <legend className={s.legend_position}>Select your position</legend>
                        <RadioButton id="lawyer" name="position" value="1" defaultChecked labeltext="Lawyer" register={register} />
                        <RadioButton id="contentManager" name="position" value="2" labeltext="Content manager" register={register} />
                        <RadioButton id="security" name="position" value="3" labeltext="Security" register={register} />
                        <RadioButton id="designer" name="position" value="4" labeltext="Designer" register={register} />
                    </fieldset>

                    <InputFile labeltext="Upload your photo" labelframetext="Upload your photo"
                        className={s.input_file} name="uploadPhoto"
                        register={register} accept=".jpg,.jpeg" validateFunc={validateSelectFile}
                        error={"" + errors.hasOwnProperty("uploadPhoto")} />

                    <div className={s.button_wrap}>
                        <ButtonLink type="submit" disabled={!isValid}>Sign up</ButtonLink>
                    </div>
                </form>
            </div>

            <div className={s.sucessfull_request}>
                <SvgSelector id="sucessfull_request" />
            </div>

        </section>
    )
}

export default WorkingWithPostRequest;

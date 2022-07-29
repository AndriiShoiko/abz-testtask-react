import React from 'react';
import Input from '../UI/Input/Input';
import InputFile from '../UI/InputFile/InputFile';
import RadioButton from '../UI/RadioButton/RadioButton';
import ButtonLink from '../UI/ButtonLink/ButtonLink';

import s from './WorkingWithPostRequest.module.scss';
import SvgSelector from '../../assets/icons/svg/SvgSelector';

const WorkingWithPostRequest = () => {
    return (
        <section className={s.post_request}>
            <div className={s.wrap_header}>
                <h1>Working with POST request</h1>
            </div>

            <div className={s.wrap_form}>
                <form
                    action="script.php" method="POST" className={s.submitForm}
                    noValidate encType="multipart/form-data">

                    <Input className={s.input} type="text" placeholder="Your name"
                        labelframetext="Enter your name" name="name" id="name" error="false" />
                    <Input className={s.input} type="text" placeholder="Email"
                        labelframetext="Enter your email" name="email" id="email" error="false" />
                    <Input className={s.input} type="text" placeholder="Phone"
                        labelframetext="+38 (XXX) XXX - XX - XX" name="phone" id="phone" error="false" />

                    <fieldset className={s.select_position}>
                        <legend className={s.legend_position}>Select your position</legend>

                        <RadioButton id="frontend" name="position" defaultValue="1" defaultChecked labeltext="Frontend developer" />
                        <RadioButton id="backend" name="position" defaultValue="2" labeltext="Backend developer" />
                        <RadioButton id="designer" name="position" defaultValue="3" labeltext="Designer" />
                        <RadioButton id="QA" name="position" defaultValue="4" labeltext="QA" />
                    </fieldset>

                    <InputFile labeltext="Upload your photo" labelframetext="Upload your photo" id="inputPhoto" className={s.input_file} />

                    <div className={s.button_wrap}>
                        <ButtonLink disabled>Sign up</ButtonLink>
                    </div>
                </form>
            </div>

            <div className={s.sucessfull_request}>
                <SvgSelector id="sucessfull_request"/>
            </div>

        </section>
    )
}

export default WorkingWithPostRequest;

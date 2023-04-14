import React, { useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import Input from '../Input';
import {PinkButton} from '../Button';
import Modal from './Modal';

const Login = (props) => {
    return (
        <Modal>
            <div className='flex flex-row justify-between items-center'>
                <div className='text-white text-[18px] font-medium'>Вход</div>
                <button
                    onClick={()=>props.setState('register')}
                    className='text-white text-[14px] opacity-[0.5] transition-all hover:opacity-[1]'>Зарегистрироваться</button>
            </div>
            <form onSubmit={() => props.setState('userSelect')}>
                <div className='mb-[24px]'></div>
                <div className='flex flex-col gap-[16px]'>
                    <Input placeholder='Логин'/>
                    <Input type='phone' placeholder='Пароль'/>
                </div>
                <PinkButton type='submit' className='w-full p-[13px] mt-[24px] text-[18px]'>Войти</PinkButton>
            </form>
            <div className='mb-[16px]'></div>
            <button className='text-white text-[14px] opacity-[0.5] transition-all hover:opacity-[1]'>Забыли пароль?</button>
            <div className='mb-[24px]'></div>
            <div className='flex flex-row items-center gap-[16px]'>
                <span className='text-[14px] text-white opacity-[0.5]'>Войти через</span>
                <img className='w-[32px] h-[32px]' src='svg/google.svg' alt=''/> 
                <img className='w-[32px] h-[32px]' src='svg/yandex.svg' alt=''/>
                <img className='w-[32px] h-[32px]' src='svg/facebook.svg' alt=''/>
            </div>
            <ReCAPTCHA
                sitekey='6Lcz24UlAAAAAGWCizoCTpx03Wxus4YKawCJ7NY2'
                className='pt-[25px] m-auto table'
            />
        </Modal>
    );
};

export default Login;
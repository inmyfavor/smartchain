import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import Input from '../Input';
import {PinkButton} from '../Button';
import Modal from './Modal';
// import handleSubmit from './handleSubmit';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth';

const Login = (props) => {
    const navigate = useNavigate();
    const auth = useAuth();

    function handleSubmit(event) {
        event.preventDefault();
    
        const user = props.selectedUser === 'Прохожий' ? 'stranger' : 'owner'
        auth.signin(user);
        const to = props.selectedUser === 'Прохожий' ? '/' : '/devices';
        navigate(to, { replace: true });
    }

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
                <PinkButton 
                    type='submit' 
                    className='w-full p-[13px] mt-[24px] text-[18px]'
                    onClick={handleSubmit}
                    >
                        Войти
                    </PinkButton>
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
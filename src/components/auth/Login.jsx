import React, { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import Input from '../Input';
import { PinkButton}  from '../Button';
import Modal from './Modal';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth';

import * as api from '../../api';

const Login = (props) => {
    const navigate = useNavigate();
    const auth = useAuth();

    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        let userData;
        try {
            userData = await api.login(data.get('username'), data.get('password'));
        } catch(e) {
            setError(''+e);
            return
        }
        const userType = props.selectedUser === 'Прохожий' ? 'stranger' : 'owner'
        auth.signin({...userData, type: userType});

        // const owner = (await api.getRegisterInfo()).owner;
       
        // if ((owner === 0 && userType === 'owner') || (owner === 1 && userType === 'stranger')) {
        //     auth.signin(null);
        //     setError('Роль пользователя не совпадает с выбранной');
        //     return;
        // }

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
            <form onSubmit={handleSubmit} onChange={() => setError(null)}>
                <div className='mb-[24px]'></div>
                <div className='flex flex-col gap-[16px]'>
                    <Input name="username" type="email" placeholder='Логин'/>
                    <Input name="password" type='password' placeholder='Пароль'/>
                </div>
                <PinkButton 
                    type='submit' 
                    className='w-full p-[13px] mt-[24px] text-[18px]'
                    >
                        Войти
                    </PinkButton>
            </form>
            <div className='mb-[16px]'></div>
            { error && <div className='text-[red] text-center mb-[5px]'>{error}</div> }
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
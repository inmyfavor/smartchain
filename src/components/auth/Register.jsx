import React, { useState } from 'react';

import Input from '../Input';
import { PinkButton } from '../Button';
import Modal from './Modal';
import ReCAPTCHA from 'react-google-recaptcha';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth';

import * as api from '../../api';

function isEmpty(obj) {
    for (let key in obj) {
        if (obj[key] === '') {
            return false;
        }
    }
    return true;
}

const Register = (props) => {
    const navigate = useNavigate();
    const auth = useAuth();

    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target).entries());
        if (isEmpty(data)) {
            let userData;
            try {
                data.owner = props.selectedUser !== 'Прохожий';
                userData = await api.register(data);
                console.log(userData);
            } catch(e) {
                setError(''+e);
                return
            }
            const userType = props.selectedUser === 'Прохожий' ? 'stranger' : 'owner'
            auth.signin({...userData, type: userType});
            const to = props.selectedUser === 'Прохожий' ? '/' : '/devices';
            navigate(to, { replace: true });
        }
    }

    return (
        <Modal>
            <div className='flex flex-row justify-between items-center'>
                <div className='text-white text-[18px] font-medium'>Регистрация</div>
                <button
                    onClick={()=>props.setState('login')}
                    className='text-white text-[14px] opacity-[0.5] transition-all hover:opacity-[1]'>Войти в аккаунт</button>
            </div>
            <form onSubmit={handleSubmit} onChange={() => setError(null)}>
                <div className='mb-[24px]'></div>
                <div className='flex flex-col gap-[16px]'>
                    <Input name='email' type='email' placeholder='Логин'/>
                    <Input name='password' type='password' placeholder='Пароль'/>
                    <Input name='firstname' placeholder='Имя'/>
                    { 
                        props.selectedUser === 'Владелец' &&
                            <>
                            <Input name='lastname' placeholder='Фамилия'/>
                            <Input name='company' placeholder='Компания'/> 
                            <Input name='tech_tel' type='phone' placeholder='Технический телефон'/>
                            </> 
                    }
                    <Input name='phone' type='phone' placeholder='Номер телефона'/>
                </div>
                <PinkButton 
                    type='submit' 
                    className='w-full p-[13px] mt-[24px] text-[18px]'
                    >
                        Зарегистрироваться
                    </PinkButton>
            </form>
            <div className='mb-[24px]'></div>
            { error && <div className='text-[red] text-center mb-[5px]'>{error}</div> }
            <div className='flex flex-row items-center gap-[16px]'>
                <span className='text-[14px] text-white opacity-[0.5]'>Зарегистрировать через</span>
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

export default Register;
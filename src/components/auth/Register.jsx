import React from 'react';

import Input from '../Input';
import { PinkButton } from '../Button';
import Modal from './Modal';
import ReCAPTCHA from 'react-google-recaptcha';


const Register = (props) => {
    // const handleSubmit = useSubmit(props.selectedUser);
    function handleSubmit(event) {

    }
    return (
        <Modal>
            <div className='flex flex-row justify-between items-center'>
                <div className='text-white text-[18px] font-medium'>Регистрация</div>
                <button
                    onClick={()=>props.setState('login')}
                    className='text-white text-[14px] opacity-[0.5] transition-all hover:opacity-[1]'>Войти в аккаунт</button>
            </div>
            <form>
                <div className='mb-[24px]'></div>
                <div className='flex flex-col gap-[16px]'>
                    <Input type='email' placeholder='Логин'/>
                    <Input type='password' placeholder='Пароль'/>
                    <Input placeholder='Имя'/>
                    { 
                        props.selectedUser === 'Владелец' &&
                            <>
                            <Input placeholder='Фамилия'/>
                            <Input placeholder='Компания'/> 
                            </> 
                    }
                    <Input type='phone' placeholder='Номер телефона'/>
                </div>
                <PinkButton 
                    type='submit' 
                    className='w-full p-[13px] mt-[24px] text-[18px]'
                    onClick={handleSubmit}
                    >
                        Зарегистрироваться
                    </PinkButton>
            </form>
            <div className='mb-[24px]'></div>
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
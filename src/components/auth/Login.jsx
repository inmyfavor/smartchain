import React from 'react';

import Input from '../Input';
import {PinkButton} from '../Button';

const Login = (props) => {
    return (
        <div className='absolute flex w-full h-full justify-center items-center z-[1]'>
            <div className='flex flex-col min-h-[200px] w-[448px] rounded-[16px] shadow-md bg-header-blue p-[32px]'>
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
            </div>
        </div>
    );
};

export default Login;
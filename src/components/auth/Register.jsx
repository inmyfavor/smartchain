import React from 'react';

import Input from '../Input';

const Register = (props) => {
    return (
        <div className='absolute flex w-full h-full justify-center items-center z-[1]'>
            <div className='flex flex-col min-h-[200px] w-[448px] rounded-[16px] shadow-md bg-header-blue p-[32px]'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='text-white text-[18px] font-medium'>Регистрация</div>
                    <button
                        onClick={()=>props.setState('login')}
                        className='text-white text-[14px] opacity-[0.5] transition-all hover:opacity-[1]'>Войти в аккаунт</button>
                </div>
                <form onSubmit={() => props.setState('congratulations')}>
                    <div className='mb-[24px]'></div>
                    <div className='flex flex-col gap-[16px]'>
                        <Input placeholder='ФИО'/>
                        <Input type='phone' placeholder='Номер телефона'/>
                        <Input type='email' placeholder='Почта'/>
                    </div>
                    <button type='submit' className='bg-gradient-to-br from-[#ffe555] to-[#fa5ddb] w-full py-[13px] 
                    text-center mt-[24px] text-white text-[18px] font-medium rounded-[8px]'>
                        Зарегистрироваться
                    </button>
                </form>
                <div className='mb-[24px]'></div>
                <div className='flex flex-row items-center gap-[16px]'>
                    <span className='text-[14px] text-white opacity-[0.5]'>Зарегистрировать через</span>
                    <img className='w-[32px] h-[32px]' src='svg/google.svg' alt=''/> 
                    <img className='w-[32px] h-[32px]' src='svg/yandex.svg' alt=''/>
                    <img className='w-[32px] h-[32px]' src='svg/facebook.svg' alt=''/>
                </div>
            </div>
        </div>
    );
};

export default Register;
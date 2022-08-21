import React from 'react';
import { PinkOutlineButton } from '../Button';

const Congratulations = (props) => {
    return (
        <div className='absolute flex w-full h-full justify-center items-center z-[1]'>
            <div className='flex flex-col min-h-[200px] w-[448px] rounded-[16px] shadow-md bg-dark-blue px-[56px] py-[96px]'>
                <div className='text-center text-white text-[24px] font-medium'>Спасибо за регистрацию</div>
                <div className='text-center text-white my-[24px] text-[16px] font-medium opacity-[0.5]'>
                    Пожалуйста, подтвердите регистрацию. 
                    <br/>
                    На вашу почту придет письмо
                    <br/>
                    с ссылкой и паролем от аккаунта
                </div>
                <PinkOutlineButton className='w-full' onClick={() => props.setState('login')}>
                    <div className='py-[13px]'>
                        Хорошо, спасибо
                    </div>
                </PinkOutlineButton> 
            </div>
        </div>
    );
};

export default Congratulations;
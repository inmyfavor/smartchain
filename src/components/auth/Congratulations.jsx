import React from 'react';

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
                <div className='bg-gradient-to-br from-[#ffe555] to-[#fa5ddb] p-[1px] w-full rounded-[8px]'>
                        <button 
                            onClick={() => props.setState('login')}
                            className='bg-dark-blue w-full py-[13px] 
                        text-center text-white text-[18px] font-medium rounded-[8px]'>
                            Хорошо, спасибо
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Congratulations;
import React from 'react';
import { PinkOutlineButton } from '../Button';
import Modal from './Modal';

const Congratulations = (props) => {
    return (
        <Modal>
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
        </Modal>
    );
};

export default Congratulations;
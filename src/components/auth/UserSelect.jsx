import React from 'react';

import classNames from 'classnames';

import {PinkButton} from '../Button';
import Modal from './Modal';


const User = (props) => {
    return (
        <div
            className='w-1/2 cursor-pointer select-none flex flex-col items-center'
            onClick={() => props.setSelectedUser(props.name)}
        >
            <div className={classNames('w-[128px] p-[4px] rounded-full transition-all', {
                    'bg-gradient-to-br from-[#ffe555] to-[#fa5ddb]': props.name === props.selectedUser
                })}>
                <div className='flex justify-center items-center rounded-full bg-dark-blue w-[120px] h-[120px]'>{props.icon}</div>
            </div>
            <div className='mb-[16px]'></div>
            <div className='mb-[8px] text-white text-[18px] font-medium text-center'>{props.name}</div>
            <div className='text-[12px] text-center text-white font-light'>{props.text}</div>
        </div>
    );
};

const UserSelect = (props) => {
    return (
        <Modal>
            <div className='text-white text-[18px] font-medium text-center'>Выбор пользователя</div>
            <div className='mb-[38px]'></div>
            <div className='flex gap-[40px]'>
                <User 
                    name='Прохожий' 
                    text='Вы сможете подключаться к устройствам, рисовать и 
                    играть или размещать рекламу'
                    icon={<img src='images/user.svg' alt='Пользователь' className='h-[70px]'/>} 
                    selectedUser={props.selectedUser} 
                    setSelectedUser={props.setSelectedUser} />
                <User 
                    name='Владелец' 
                    text='Вы сможете управлять своими устройствами и 
                    принимать рекламу'
                    icon={<img src='images/company.svg' alt='Владелец' className='h-[60px]'/>} 
                    selectedUser={props.selectedUser} 
                    setSelectedUser={props.setSelectedUser} />                    
            </div>
            <div className='mb-[24px]'></div>
            <div className='flex justify-center'>
                <PinkButton
                    onClick={() => {props.selectedUser !== null && props.setState('login')}}
                    type='submit'
                    className='w-[176px] p-[8px] mt-[24px] text-[18px]'
                >
                    Выбрать
                </PinkButton>
            </div>
        </Modal>
    );
};

export default UserSelect;
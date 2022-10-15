import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import classNames from 'classnames';

import { useAuth } from '../../auth';
import {PinkButton} from '../Button';


const User = (props) => {
    return (
        <div
            className='cursor-pointer'
            onClick={() => props.setSelectedUser(props.name)}
        >
            <div className={classNames('p-[4px] rounded-full transition-all', {
                'bg-gradient-to-br from-[#ffe555] to-[#fa5ddb]': props.name === props.selectedUser
            })}>
                <div className='flex justify-center items-center rounded-full bg-dark-blue w-[120px] h-[120px]'>{props.icon}</div>
            </div>
            <div className='mb-[16px]'></div>
            <div className='text-white text-[18px] font-medium text-center'>{props.name}</div>
        </div>
    );
};

const UserSelect = () => {
    const navigate = useNavigate();
    // чтобы сохранить страницу с которой пришел
    // const location = useLocation();
    // let from = location.state?.from?.pathname || "/";
    const auth = useAuth();

    function handleSubmit(event) {
        event.preventDefault();

        const user = selectedUser === 'Прохожий' ? 'stranger' : 'owner'
        auth.signin(user);
        const to = selectedUser === 'Прохожий' ? '/' : '/devices';
        navigate(to, { replace: true });
    }

    const [selectedUser, setSelectedUser] = useState(null);
    return (
        <div className='absolute flex w-full h-full justify-center items-center z-[1]'>
            <div className='flex flex-col min-h-[200px] w-[448px] rounded-[16px] shadow-md bg-header-blue p-[32px]'>
                <div className='text-white text-[18px] font-medium text-center'>Выбор пользователя</div>
                <div className='mb-[38px]'></div>
                <div className='flex justify-center gap-[90px]'>
                    <User name='Прохожий' icon={<img src='images/user.png' alt='Пользователь' className='h-[70px]'/>} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
                    <User name='Владелец' icon={<img src='images/company.png' alt='Владелец' className='h-[60px]'/>} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>                    
                </div>
                <div className='mb-[24px]'></div>
                <div className='flex justify-center'>
                    <PinkButton
                        onClick={handleSubmit}
                        type='submit'
                        className='w-[176px] p-[8px] mt-[24px] text-[18px]'
                    >
                        Выбрать
                    </PinkButton>
                </div>
            </div>
        </div>
    );
};

export default UserSelect;
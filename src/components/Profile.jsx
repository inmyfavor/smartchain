import React, { useState } from 'react';

import { PinkButton } from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import PageNav from '../components/PageNav.jsx';

import { useAuth } from '../auth';

const tabsOwner = {
    'profileOwner': 'Профиль',
    'contentOwner': 'Контент'
};

const tabsStranger = {
    'profileStranger': 'Профиль',
    'contentStranger': 'Контент'
};

const Line = (props) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='w-1/2 text-[18px] text-white'>{props.title}</div>
            <Input style={{width: '50%'}}/>
        </div>
    );
};

const Modal = (props) => {
    return (
        <div className='flex flex-col justify-end w-full min-h-[320px] bg-header-blue rounded-[16px] p-[16px]'>
            {props.children}
        </div>
    );
};

const ProfileOwner = () => {
    return (
        <Modal>
            <div className='flex flex-col gap-[8px] mb-[24px]'>
                <Line title='Логин'/>
                <Line title='Пароль'/>
                <Line title='Имя'/>
                <Line title='Фамилия'/>
                <Line title='Компания'/>
                <Line title='Технический телефон'/>
                <Line title='Номер телефона'/>
            </div>
            <PinkButton className='w-1/4 h-[40px]'>Сохранить</PinkButton>
        </Modal>
    );
};

const ProfileStranger = () => {
    return (
        <Modal>
            <div className='flex flex-col gap-[8px] mb-[24px]'>
                <Line title='Логин'/>
                <Line title='Пароль'/>
                <Line title='Имя'/>
                <Line title='Номер телефона'/>
            </div>
            <PinkButton className='w-1/4 h-[40px]'>Сохранить</PinkButton>
        </Modal>
    );
};

const Profile = () => {
    const auth = useAuth();
    const prof = auth.user?.type === 'owner' ? 'profileOwner' : 'profileStranger'
    const [tab, setTab] = useState(prof);
    return (
        <div className='mx-[72px] my-[50px]'>
            <div className='flex flex-col'>
                <div className='text-white text-[24px] font-medium mb-[40px]'>Личный кабинет</div>
                    <div className='flex flex-row gap-[120px]'>
                        <PageNav 
                            tab={tab} 
                            setTab={setTab} 
                            tabs={ auth.user?.type === 'owner' ? tabsOwner : tabsStranger } 
                            gap='16px' 
                            text='20px' 
                            flex='column'/>
                        {
                            tab === 'profileOwner'
                                ? <ProfileOwner />
                            : tab === 'contentOwner'
                                ? <Modal />
                            : tab === 'profileStranger'
                                ? <ProfileStranger />
                            : tab === 'contentStranger'
                                ? <Modal />
                            : null
                        }
                    </div>
            </div>
        </div>
    );
};

export default Profile;
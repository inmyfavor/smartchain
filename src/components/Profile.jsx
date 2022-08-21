import React, { useState } from 'react';

import PageNav from './PageNav.jsx';
import Input from './Input.jsx';

const tabs = {
    'profile': 'Профиль',
    'content': 'Контент'
};

const Modal = (props) => {
    return (
        <div className='flex flex-col justify-end w-full min-h-[320px] bg-header-blue rounded-[16px] p-[16px]'>
            <div className='flex flex-col gap-[8px] mb-[24px]'>
                <Input style={{width: '50%'}} placeholder={props.placeholder_1}/>
                <Input style={{width: '50%'}} placeholder={props.placeholder_2}/>
                <Input style={{width: '50%'}} placeholder={props.placeholder_3}/>
                <Input style={{width: '50%'}} placeholder={props.placeholder_4}/>
            </div>
        <button className='rounded-[8px] w-1/4 h-[40px] bg-gradient-to-br from-[#ffe555] to-[#fa5ddb]'></button>
        </div>
    );
};

const Profile = () => {
    const [tab, setTab] = useState('profile');
    return (
        <div className='mx-[72px] my-[50px]'>
            <div className='flex flex-col'>
                <div className='text-white text-[24px] font-medium mb-[40px]'>Личный кабинет</div>
                    <div className='flex flex-row gap-[120px]'>
                        <PageNav tab={tab} setTab={setTab} tabs={tabs} gap='16px' text='20px' flex='column'/>
                        {
                            tab === 'profile'
                                ? <Modal />
                            : tab === 'content'
                                ? <Modal />
                            : null
                        }
                    </div>
            </div>
        </div>
    );
};

export default Profile;
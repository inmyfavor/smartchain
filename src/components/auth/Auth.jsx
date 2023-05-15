import React, { useState } from 'react';

import Page from '../Page';

import Background from './Background';
import Congratulations from './Congratulations';
import Login from './Login';
import Register from './Register';
import UserSelect from './UserSelect';


const HeaderDescr = () => {
    return (
        <span className='text-white opacity-[0.5] font-normal text-left text-[12px] leading-none'>
            Интерактивные устройства<br/>для умного города
        </span>
    );
};

const Modal = () => {
    const [state, setState] = useState('userSelect');
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        state==='login' 
            ? <Login setState={setState}/> 
        : state === 'register' 
            ? <Register setState={setState} selectedUser={selectedUser}/>
        : state === 'userSelect'
            ? <UserSelect setState={setState} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
        : state === 'congratulations'
            ? <Congratulations setState={setState}/>
        : null 
    );
};

const Auth = () => {
    return (
       <Page header={<HeaderDescr/>}>
            <Background/>
            <Modal/>
       </Page>
    );
};

export default Auth;
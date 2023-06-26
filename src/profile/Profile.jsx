import React, { useEffect, useMemo, useState } from 'react';

import { BlueButton } from '../components/Button.jsx';
import Input from '../components/Input.jsx';
// import PageNav from '../components/PageNav.jsx';

import { useAuth } from '../auth';
import { getRegisterInfo, updateProfileInfo } from '../api.js';
import Tippy from '@tippyjs/react';
import classNames from 'classnames';
import Confirm from './Confirm.jsx';

const Avatar = (props) => {
    const auth = useAuth();
    const user = auth.user.type;
    return (
        <div className='flex flex-row items-center gap-[15px] mb-[28px]'>
            <div className='w-[80px] h-[80px] rounded-[40px] overflow-hidden 
            flex justify-center items-center bg-dark-blue'>
                { user === 'owner'
                    ? <img src='images/company.svg' alt='' className='h-[40px]'/>
                : <img src='images/user.svg' alt='' className='h-[50px]'/>
                }
            </div>
            <div className='flex flex-col gap-[4px]'>
                <div className='text-white font-medium text-[18px]'>{props.name}</div>
                <button className='text-text-gray text-[14px] underline cursor-pointer'>
                    Изменить аватарку
                </button>
            </div>
        </div>
    );
};

const UserType = () => {
    const auth = useAuth();
    const user = auth.user.type;
    const [modal, setModal] = useState(null);
    return (
        <>
            <div className='flex flex-row mb-[24px] items-center'>
                <div className='text-text-gray text-[16px] mr-[8px]'>Тип пользователя:</div>
                <div className={classNames('text-white text-[16px] mr-[28px]', {
                    'mr-[28px]' : user === 'owner',
                    'mr-[12px]' : user === 'stranger'
                })}>
                    {auth.user?.type === 'owner' ? 'Владелец' : 'Прохожий'}
                </div>
                <Tippy
                    content={
                        <div className='w-[264px] text-[12px]'>
                            { user === 'owner' 
                                ? 'Прохожие не могут владеть устройствами, управлять ими и принимать рекламу'
                            : 'Владельцы покупают устройство, могут им управлять и принимать рекламу'}
                        </div>
                    }
                    theme="dark-blue"
                    animation="shift-away-subtle"
                    duration={[450, 125]}
                >
                    <div 
                        className='text-text-gray text-[12px] underline cursor-pointer'
                        onClick={() => setModal('changeUser')}>
                        Стать {user === 'owner' ? 'прохожим' : 'владельцем'}
                        </div>
                </Tippy>
            </div>
            { modal !== null &&
            <div className='fixed z-[10] w-full h-full top-0 left-0 flex justify-center items-center bg-[rgba(67,68,111,0.7)]'>
                <div onClick={() => setModal(null)}  className='absolute w-full h-full z-[0]'></div>
                <Confirm 
                    close={() => setModal(null)}
                    title='Сменить профиль'
                    text={`Вы уверены, что хотите стать ${user === 'owner' ? 'Прохожим' : 'Владельцем'}`}
                    modal={modal}/>
            </div> }
        </>
    );
};

const ModalInput = (props) => {
    return (
        <div className='flex flex-col gap-[4px]'>
            <div className='text-text-gray text-[16px]'>{props.title}</div>
            <Input 
                style={{fontSize: '16px', width: '100%'}}
                value={props.value}
                onChange={e => props.setValue(e.target.value)}
                type={props.type}/>
        </div>
    );
};

const Modal = () => {
    const auth = useAuth();
    const user = auth.user.type;
    const [pending, setPending] = useState(false);
    const [data, setData] = useState({});
    const [initData, setInitData] = useState({});
    const [passType, setPassType] = useState('password');

    const isValid = useMemo(() => {
        for (let key in data) {
            if (initData[key] && data[key] === '') {
                return false;
            }
        }
        if (data['company']) {
            if (initData['company']?.name ? data['company'].name !== initData['company']?.name : data['company'].name) {
                return true;
            }
        }
        for (let key in data) {
            if (key === 'company') continue;
            if (initData[key] ? data[key] !== initData[key] : data[key]) {
                return true;
            }
        }
     }, [data, initData]);
    
    useEffect(() => {
       (async () => {
            const info = await getRegisterInfo();
            setData(info);
            let initData = Object.assign({}, info);
            if (initData.company) initData.company = Object.assign({}, initData.company);
            setInitData(initData);
       })()
    }, []);

    function dispatch(field) {
        return (value) => {
            const newData = Object.assign({}, data);
            let obj = newData;
            let path = field.split('.');
            path.forEach((f, i) => {
                if (i === path.length-1) {
                    obj[f] = value;
                } else {
                    if (!obj[f]) obj[f] = {}
                    obj = obj[f];
                }
            });
            setData(newData);
        }
    }

    return (
        <div className={classNames('bg-header-blue rounded-[16px] p-[32px] flex flex-col', {
            'max-w-[800px]' : user === 'owner',
            'w-[416px]' : user === 'stranger'
        })}>
            <Avatar name={data.firstname}/>
            <UserType/>
            <div className='flex flex-row gap-[32px]'>
                <div className='flex flex-col gap-[8px] w-full'>
                    <ModalInput title='ФИО' value={data.firstname} setValue={dispatch('firstname')}/>
                    <ModalInput title='Номер телефона' value={data.phone} setValue={dispatch('phone')}/>
                    <ModalInput title='Email' value={data.email} setValue={dispatch('email')}/>
                    <div className='flex flex-col gap-[4px] mb-[24px]'>
                        <div className='relative'>
                            <ModalInput title='Пароль' value={data.password} setValue={dispatch('password')} type={passType}/>
                            <img 
                                className='absolute top-[44px] right-[15px] cursor-pointer' 
                                src='svg/visibility.svg' 
                                alt=''
                                onClick={passType === 'password' ? () => setPassType('text') : () => setPassType('password')}
                                />
                        </div>
                        <div className='text-[14px] self-center text-text-gray underline cursor-pointer'>
                            Изменить пароль?
                        </div>
                    </div>
                </div>
                { user === 'owner' &&
                <div className='flex flex-col gap-[8px] w-full'>
                    <ModalInput title='Юр.название компании' value={data.company?.name} setValue={dispatch('company')}/>
                    <ModalInput title='ИНН' value={data.tin} setValue={dispatch('tin')}/>
                    <ModalInput title='Привязка карты' value={'0000 0000 0000 0000'} setValue={dispatch('card')}/>
                    <div className='text-[14px] text-text-blue underline cursor-pointer pl-[16px]'>
                        Привязать карту
                    </div>
                </div> }
            </div>
            <BlueButton 
                className='h-[52px] text-[16px] profile-modal:w-[352px]'
                disabled={!isValid||pending}
                onClick={() => {
                    updateProfileInfo(data).then(() => setInitData(data)).finally(() => setPending(false));
                    setPending(true);
                }}>
                    {pending ? 'Обновление...' : 'Сохранить'}
            </BlueButton>
        </div>
    );
};

const Profile = () => {
    const [modal, setModal] = useState(null);
    return (
        <>
            <div className='mx-[72px] my-[36px]'>
                <div className='w-[176px] h-[52px] flex items-center justify-center text-white 
                font-medium text-[24px] bg-dark-blue rounded-[30px] mb-[40px]'>
                    Профиль
                </div>
                <div className='text-white text-[24px] font-medium mb-[24px]'>
                    Настройки профиля
                </div>
                <Modal/>
                <button
                    className='mt-[16px] text-text-gray text-[14px] cursor-pointer'
                    onClick={() => setModal('logout')}>
                    Выйти из профиля
                </button>
            </div>
            { modal !== null &&
            <div className='fixed z-[10] w-full h-full top-0 left-0 flex justify-center items-center bg-[rgba(67,68,111,0.7)]'>
                <div onClick={() => setModal(null)}  className='absolute w-full h-full z-[0]'></div>
                <Confirm 
                    close={() => setModal(null)}
                    title='Выйти из профиля'
                    text='Вы уверены, что хотите выйти из профиля?'
                    modal={modal}/>
            </div> }
        </>
    );
};

export default Profile;
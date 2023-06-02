import React, { useEffect, useMemo, useState } from 'react';

import { PinkButton } from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import PageNav from '../components/PageNav.jsx';

import { useAuth } from '../auth';
import { getRegisterInfo, updateProfileInfo } from '../api.js';

const tabs = {
    'profile': 'Профиль',
    'content': 'Контент'
};

const Line = (props) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='w-1/2 text-[18px] text-white'>{props.title}</div>
            <Input 
                style={{width: '50%'}} 
                value={props.value}
                onChange={e => props.setValue(e.target.value)} />
        </div>
    );
};

const ModalProfile = (props) => {

    const [data, setData] = useState({});
    const [initData, setInitData] = useState({});
    const isValid = useMemo(() => {
        for (let key in data) {
            if (initData[key] && data[key] === '') {
                return false;
            }
        }
        if (data['company']) {
            if (initData['company'].name ? data['company'].name !== initData['company'].name : data['company'].name) {
                return true;
            }
        }
        for (let key in data) {
            if (initData[key] ? data[key] !== initData[key] : data[key]) {
                return true;
            }
        }
     }, [data, initData]);
    const [pending, setPending] = useState(false);
    useEffect(() => {
       (async () => {
            const info = await getRegisterInfo();
            setData(info);
            setInitData(info);
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
        <div className='flex flex-col justify-end w-full min-h-[320px] bg-header-blue rounded-[16px] p-[16px]'>
            <div className='flex flex-col gap-[8px] mb-[24px]'>
                <Line title='Логин' value={data.email} setValue={dispatch('email')}/>
                {/* <Line title='Пароль' value={data.password} setValue={dispatch('password')}/> */}
                <Line title='Имя' value={data.firstname} setValue={dispatch('firstname')}/>
                { props.userType === 'owner' &&
                    <>
                        <Line title='Фамилия' value={data.lastname} setValue={dispatch('lastname')}/>
                        <Line title='Компания' value={data.company?.name} setValue={dispatch('company.name')}/>
                        <Line title='Технический телефон' value={data.tech_tel} setValue={dispatch('tech_tel')}/>
                    </>
                }
                <Line title='Номер телефона' value={data.phone} setValue={dispatch('phone')}/>
            </div>
            <PinkButton 
                className='w-1/4 h-[40px]'
                onClick={() => {
                    updateProfileInfo(data).then(() => setInitData(data)).finally(() => setPending(false));
                    setPending(true);
                }}
                disabled={!isValid||pending}>
                    {pending ? 'Обновление...' : 'Сохранить'}
            </PinkButton>
        </div>
    );
};

const Profile = () => {
    const auth = useAuth();
    const [tab, setTab] = useState('profile');
    return (
        <div className='mx-[72px] my-[50px]'>
            <div className='flex flex-col'>
                <div className='text-white text-[24px] font-medium mb-[40px]'>Личный кабинет</div>
                    <div className='flex flex-row gap-[120px]'>
                        <PageNav 
                            tab={tab} 
                            setTab={setTab} 
                            tabs={tabs} 
                            gap='16px' 
                            text='20px' 
                            flex='column'/>
                        {
                            tab === 'profile'
                                ? <ModalProfile userType={auth.user?.type}/>
                            : tab === 'content'
                                ? <></>
                            : null
                        }
                    </div>
            </div>
        </div>
    );
};

export default Profile;
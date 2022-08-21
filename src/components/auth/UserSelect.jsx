import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import classNames from 'classnames';


const User = (props) => {
    return (
        <div
            className='cursor-pointer'
            onClick={() => props.setSelectedUser(props.name)}
        >
            <div className={classNames('p-[4px] rounded-full transition-all', {
                'bg-gradient-to-br from-[#ffe555] to-[#fa5ddb]': props.name === props.selectedUser
            })}>
                <div className='rounded-full bg-dark-blue w-[120px] h-[120px]'></div>
            </div>
            <div className='mb-[16px]'></div>
            <div className='text-white text-[18px] font-medium text-center'>{props.name}</div>
        </div>
    )
}

const UserSelect = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const navigate = useNavigate();
    return (
        <div className='absolute flex w-full h-full justify-center items-center z-[1]'>
            <div className='flex flex-col min-h-[200px] w-[448px] rounded-[16px] shadow-md bg-header-blue p-[32px]'>
                <div className='text-white text-[18px] font-medium text-center'>Выбор пользователя</div>
                <div className='mb-[38px]'></div>
                <div className='flex justify-center gap-[90px]'>
                    <User name='Прохожий' selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
                    <User name='Владелец' selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>                    
                </div>
                <div className='mb-[24px]'></div>
                <div className='flex justify-center'>
                    <button
                        onClick={selectedUser==='Прохожий' ? () => navigate('/stranger/mycontent') : () => navigate('/owner/mycontent')}
                        type='submit' className='bg-gradient-to-br from-[#ffe555] to-[#fa5ddb] py-[8px] 
                        text-center w-[176px] mt-[24px] text-white text-[18px] font-medium rounded-[8px]'
                    >
                        Выбрать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserSelect;
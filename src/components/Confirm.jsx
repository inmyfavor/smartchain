import classNames from 'classnames';
import React from 'react';
import { useAuth } from '../auth';

function logout() {
    localStorage.clear();
    window.location.href = '/'
}

// const auth = useAuth();
// function changeUser() {
//     if (auth.user.type === 'owner') {
//         changeUserType('stranger')
//     } else {
//         changeUserType('owner')
//     }
// }

const Confirm = (props) => {
    const auth = useAuth();
    function changeUser() {
        auth.changeType(auth.user.type === 'owner' ? 'stranger' : 'owner');
        props.close()
    }
    return (
        <div className='relative w-[384px]'>
            <div className='flex flex-col bg-dark-blue h-[118px] rounded-t-[8px] border-b border-[#ffffff66] px-[67px]'>
                <span className='text-white text-[18px] font-medium text-center mt-[19px] mb-[8px]'>{props.title}</span>
                <span className='text-white text-[16px] text-center'>{props.text}</span>
            </div>
            <div className='flex flex-row bg-dark-blue h-[43px] rounded-b-[8px]'>
                <button 
                    onClick={props.close}
                    className='font-medium text-[18px] text-text-blue w-1/2 border-r-[0.5px] border-[#ffffff66]'>НЕТ</button>
                <button
                    onClick={props.modal === 'logout' ? logout : changeUser}
                    className={classNames('font-medium text-[18px] text-text-gray w-1/2', {
                        'text-text-gray' : props.modal === 'logout',
                        'text-text-blue' : props.modal === 'changeUser'
                    })}>
                        ДА
                    </button>
            </div>
        </div>
    );
};

export default Confirm;
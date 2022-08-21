import React from 'react';

import {ReactComponent as TrashIcon} from '../../icons/trash.svg';

const Saved = () => {
    let number = '3';
    let date = '1/04/2021 18:23';
    let num = '0001';
    return (
        <div className='flex flex-col gap-[12px]'>
            <div className='flex flex-row items-center'>
                <img className='mr-[9px]' src='svg/save.svg' alt=''/>
                <span className='mr-[34px] text-white text-[16px]'>Уровень {number}</span>
                <img className='mr-[10px]' src='svg/calendar.svg' alt=''/>
                <span className='mr-[32px] text-text-gray text-[14px]'>{date}</span>
                <span className='mr-[68px] text-text-blue text-[14px]'>Скамейка №{num}</span>
                <button>
                    <TrashIcon className='transition-all text-text-gray hover:text-white'/>
                </button>
            </div>
        </div>
    );
};

export default Saved;
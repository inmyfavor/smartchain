import React from 'react';

import {ReactComponent as TrashIcon} from '../../icons/trash.svg';

const Saved = (props) => {
    return (
        <div className='flex flex-col gap-[12px]'>
            <div className='flex flex-row items-center'>
                <img className='mr-[9px]' src='svg/save.svg' alt=''/>
                <span className='mr-[34px] text-white text-[16px]'>Уровень {props.level}</span>
                <img className='mr-[10px]' src='svg/calendar.svg' alt=''/>
                <span className='mr-[32px] text-text-gray text-[14px]'>{props.date}</span>
                <span className='mr-[32px] text-text-blue text-[14px]'>
                    Скамейка №{ props.id.length !== 4 ? '0'.repeat(4-props.id.length) + props.id : props.id }
                </span>
                <span className='w-[200px] mr-[68px] text-text-blue text-[14px]'>{props.address}</span>
                <button>
                    <TrashIcon className='transition-all text-text-gray hover:text-white'/>
                </button>
            </div>
        </div>
    );
};

export default Saved;
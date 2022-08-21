import React from 'react';

const Placement = (props) => {
    return (
        <div className='flex flex-row gap-[34px]'>
            <div className='text-white text-[16px] font-medium'>
                Скамейка №{ props.id.length !== 4 ? '0'.repeat(4-props.id.length) + props.id : props.id }
            </div>
            <div className='flex flex-row items-center gap-[10px]'>
            <img src='svg/calendar.svg' alt=''/>
                <span className='text-[12px] text-text-gray'>{props.date}</span>
            </div>
            <div className='flex flex-row items-center gap-[11px]'>
                <img src='svg/location.svg' alt=''/>
                <span className='text-[12px] text-text-blue'>{props.location}</span>
            </div>
        </div>
    );
};

export default Placement;
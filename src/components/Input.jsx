import React from 'react';

const Input = (props) => {
    return (
        <input className='bg-dark-blue px-[16px] py-[10px] rounded-[8px] text-white text-[14px] outline-none
        placeholder:text-white placeholder:opacity-[0.5] placeholder:text-[14px]'
        {...props}/>
    );
};

export default Input;
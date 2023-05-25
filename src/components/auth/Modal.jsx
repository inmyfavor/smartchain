import React from 'react';

const Modal = (props) => {
    return (
        <div className='absolute flex w-full h-full justify-center items-center z-[1]'>
            <div className='flex flex-col min-h-[200px] w-[500px] rounded-[16px] shadow-md bg-header-blue p-[32px]'>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;
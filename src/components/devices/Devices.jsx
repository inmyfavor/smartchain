import React from 'react';

import Device from './Device';

import { deviceInfo } from '../owner/Data';

import { GreenButton } from '../Button';

const Devices = () => {
    return (
        <div className='flex flex-col py-[50px] px-[72px]'>
            <div className='flex items-center'>
                <div className='font-medium text-white text-[24px]'>Мои устройства</div>
                <GreenButton className='relative py-[8px] px-[8px] ml-[24px]'>
                    <img className='w-[16px] h-[16px]' src='svg/plus.svg' alt=''/>
                </GreenButton>
            </div>
            <div className='flex flex-col gap-[10px] mt-[24px]'>
                {deviceInfo.map(device => <Device key={'device:'+device.id} {...device}/>)}
            </div>
        </div>
    );
};

export default Devices;
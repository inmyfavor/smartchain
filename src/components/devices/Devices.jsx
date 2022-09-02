import React from 'react';

import Device from './Device';

import { deviceInfo } from '../owner/Data';

import { GreenButton } from '../Button';

const Devices = () => {
    return (
        <div className='flex flex-col py-[120px] px-[72px]'>
            <div className='font-medium text-white text-[24px] mb-[24px]'>Ваши устройства</div>
            <div className='flex flex-col gap-[10px]'>
                {deviceInfo.map(device => <Device key={'device:'+device.id} {...device}/>)}
                <div className='flex flex-row-reverse w-full xl:w-1/2'>
                    <GreenButton className='relative w-[210px] mt-[14px] py-[10px] pr-[8px] pl-[40px] text-[14px]'>
                        <img className='w-[20px] h-[20px] absolute left-[10px] top-[10px]' src='svg/plus.svg' alt=''/>
                        Добавить устройство
                    </GreenButton>
                </div>
            </div>
        </div>
    );
};

export default Devices;
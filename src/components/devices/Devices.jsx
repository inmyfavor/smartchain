import React, { useState } from 'react';

import Device from './Device';

import { deviceInfo } from '../owner/Data';

const Devices = () => {
    const [panel, setPanel] = useState([]);
    return (
        <div className='flex flex-col py-[120px] px-[72px]'>
            <div className='font-medium text-white text-[24px] mb-[24px]'>Ваши устройства</div>
            <div className='flex flex-col gap-[10px]'>
                {deviceInfo.map(device => <Device panel={panel} setPanel={setPanel} key={'device:'+device.id} {...device}/>)}
                <div className='flex flex-row-reverse w-full xl:w-1/2'>
                    <button className='relative w-[210px] bg-gradient-to-br from-[#3aed97] to-[#00ffe0] mt-[14px] py-[10px] pr-[8px] pl-[40px] 
                    font-medium text-white text-[14px] rounded-[8px]'>
                        <img className='w-[20px] h-[20px] absolute left-[10px] top-[10px]' src='svg/plus.svg' alt=''/>
                        Добавить устройство
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Devices;
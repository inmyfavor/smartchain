import React, { useEffect, useState } from 'react';

import Device from './Device';

// import { deviceInfo } from '../owner/Data';

import { GreenButton } from '../Button';

import { getBenches } from '../../api';

const Devices = () => {
    const [benches, setBenches] = useState([]);

    useEffect(() => {
        (async () => {
            const benches = await getBenches();
            setBenches(Array.from(benches));
        })()
    }, []);

    return (
        <div className='flex flex-col py-[50px] px-[72px]'>
            <div className='flex items-center'>
                <div className='font-medium text-white text-[24px]'>Мои устройства</div>
                <GreenButton className='relative py-[8px] px-[8px] ml-[24px]'>
                    <img className='w-[16px] h-[16px]' src='svg/plus.svg' alt=''/>
                </GreenButton>
            </div>
            <div className='flex flex-col gap-[10px] mt-[24px]'>
                {benches?.map(bench => <Device key={'bench:'+bench.id} {...bench}/>)}
            </div>
        </div>
    );
};

export default Devices;
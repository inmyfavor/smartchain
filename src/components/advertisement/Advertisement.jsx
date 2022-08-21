import React, { useState } from 'react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away-subtle.css';

import { initialModeration } from '../stranger/Data';

import YourAd from './YourAd';
import BuyAd from './BuyAd';
import Placement from './Placement';

const Advertisement = () => {
    const [moderation, setModeration] = useState(initialModeration);
    const [isDisabled, setIsDisabled] = useState(true);
    const [files, setFiles] = useState([]);
    const [name, setName] = useState('');
    return (
        <div className='flex flex-col mx-[72px] my-[50px] gap-[32px]'>
            <div className='font-medium text-[24px] text-white'>Ваша реклама</div>
            <YourAd setModeration={setModeration} moderation={moderation}/>
            <div className='font-medium text-[24px] text-white mt-[18px]'>Купить рекламу</div>
            <div className='flex flex-row gap-[72px]'>
                <BuyAd name={name} setName={setName} setIsDisabled={setIsDisabled} files={files} setFiles={setFiles}/>
                <div className='flex flex-col'>
                    <div className='text-white text-[16px] mb-[8px]'>Нет материалов для рекламы?</div>
                    <div className='text-text-gray text-[16px] mb-[16px]'>Закажите материалы у нас</div>
                    <div className='flex items-center justify-center w-[240px] h-[40px] bg-gradient-to-br from-[#3aed97] to-[#00ffe0] rounded-[8px]'>
                        <button className='flex items-center justify-center w-[238px] h-[38px] text-white font-medium text-[16px] rounded-[8px] bg-main-blue'>
                            Заказать
                        </button>
                    </div>
                </div>
            </div>
            <Placement addModeration={(m) => {
                setModeration([...moderation, {name, files, ...m}]);
                setName('');
                setFiles([]);
                setIsDisabled(true);
            }} isDisabled={isDisabled} files={files}/>
        </div>
    );
};

export default Advertisement;
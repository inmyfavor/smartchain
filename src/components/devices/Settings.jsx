import React, { useState } from 'react';

import classNames from 'classnames';

import { useNavigate } from 'react-router-dom';

import Map from '../Map';

import { deviceInfo } from '../owner/Data';
import { BlueButton } from '../Button';

const Check = (props) => {
    const [checked, setChecked] = useState(false);
    return (
        <div className='flex flex-row items-center'>
            <div className='w-3/5 font-medium text-white text-[16px]'>{props.name}</div>
            <div className='w-2/5'>
                <div
                    onClick={()=>setChecked(!checked)} 
                    className={classNames(
                        'relative h-[20px] w-[36px] rounded-[16px]',
                        'before:content-[""] before:h-[16px] before:w-[16px] before:bg-white before:rounded-[16px] before:absolute before:cursor-pointer', { 
                        'bg-gradient-to-br from-[#ffe555] to-[#fa5ddb] before:top-[2px] before:right-[2px]' : checked,
                        'bg-[#bbbbc2] before:top-[2px] before:left-[2px]' : !checked 
                    })}>
                </div>
            </div>
        </div>
        
    );
};

const Settings = (props) => {
    const navigate = useNavigate();
    return (
        <div className='relative w-full xl:w-1/2 min-h-[900px] flex flex-col bg-header-blue rounded-[16px] pt-[24px] pb-[92px] px-[16px]'>
            <div className='text-white text-[18px] font-medium mb-[24px]'>Настройки устройства №{props.number}</div>
            <div className='flex flex-row gap-[22px] mb-[32px]'>
                <div className='w-1/2 h-[180px] rounded-[8px] overflow-hidden'><Map markers={deviceInfo[props.id].markers}/></div>
                <div className='w-1/2 flex flex-col'>
                    <div className='font-medium text-white text-[16px] mb-[8px]'>Адрес установки:</div>
                    <div className='text-[14px] text-text-gray mb-[24px]'>{deviceInfo[props.id].address}</div>
                    <div className='flex flex-row gap-[8px] mb-[8px]'>
                        <div className='font-medium text-white text-[16px]'>Версия ПО:</div>
                        <div className='font-medium text-text-gray text-[16px]'>{deviceInfo[props.id].version}</div>
                    </div>
                    <div className='font-medium text-text-blue text-[14px] mb-[24px]'>ОБНОВИТЬ</div>
                    <div className='flex flex-row items-center gap-[8px]'>
                        <div className='font-medium text-white text-[16px]'>Статус:</div>
                        <div className='flex justify-center items-center bg-main-blue h-[16px] w-[16px] rounded-[16px]'>
                            <div className='w-[8px] h-[8px] rounded-[8px] bg-gradient-to-br from-[#6fff2c] to-[#29eee7]'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[24px] mb-[24px]'>
                <Check name='Дата и время'/>
                <Check name='Температура рядом'/>
                <Check name='Погода сейчас'/>
                <Check name='Погода через 3 часа'/>
                <Check name='Погода через 6 часов'/>
                <Check name='Погода через 9 часов'/>
                <Check name='Реклама'/>
                <Check name='Курс валют: USD/RUB'/>
                <Check name='Курс валют: EUR/RUB'/>
                <Check name='Галерея'/>
            </div>
            <div className='flex flex-row gap-[120px] mb-[4px]'>
                <div className='font-medium text-white text-[16px]'>Галерея:</div>
                <button 
                    onClick={()=>navigate('/')}
                    className='font-medium text-text-blue text-[14px]'>
                        ОТКРЫТЬ
                </button>
            </div>
            <div className='text-[14px] text-text-gray'>10 фотографий</div>
            <BlueButton className='absolute left-[16px] bottom-[16px] w-[280px] h-[52px] text-[18px]'>
                Сохранить
            </BlueButton>
            <button 
                onClick={()=>props.setPanel([])}
                className='absolute right-[19px] bottom-[16px] text-[16px] text-text-gray opacity-[0.5]'>
                    Свернуть
            </button>
        </div>
    );
};

export default Settings;
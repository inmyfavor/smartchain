import React, { useState } from 'react';

import Map from '../../Map';

import {ReactComponent as ExitIcon} from '../../icons/exit.svg';
import classNames from 'classnames';

const deviceInfo = [
    { id: '1', price: '1000', version: 2, update: 3 },
    { id: '2', price: '3000', version: 2, update: 3 },
    { id: '3', price: '6000', version: 2, update: 3 },
    { id: '4', price: '2000', version: 2, update: 3 },
];

const markers = [
    { id: 1, lat: 55.751999, lon: 37.717734 },
    { id: 2, lat: 55.951997, lon: 37.617734 },
    { id: 3, lat: 55.751999, lon: 37.917634 },
    { id: 4, lat: 55.851989, lon: 37.617624 },
];

const show = [
    { id: 1, name: 'ООО "Газпром"', wasted: '200 / 300', date: '24/11/2019-28/11/2019'},
];

const request = [
    { id: 1, name: 'ООО "Газпром"', date: '24/11/2019-28/11/2019', budget: '300' },
    { id: 2, name: 'ООО "Газпром"', date: '24/11/2019-28/11/2019', budget: '500' },
];

const wait = [
    { id: 1, name: 'ООО "Газпром"', date: '24/11/2019-28/11/2019', budget: '300' },
]

const Device = (props) => {
    const [openedId, panel] = props.panel;
    function createSetPanel(newPanel) {
        return () => {
            if (openedId === props.id && panel === newPanel) {
                props.setPanel([]);
            } else {
                props.setPanel([props.id, newPanel]);
            }
        }
    }
    return (
        <>
            <div className={classNames(
                'flex flex-row h-[46px] rounded-[16px] py-[12px] px-[16px] w-full xl:w-1/2',
                (openedId === props.id && panel != null) ? 'bg-dark-blue' : 'bg-header-blue'
            )}>
                <div className='w-1/4 text-white text-[16px] font-medium'>Скамейка №{(props.id.length < 4) ? '0'.repeat(4-props.id.length)+props.id : props.id}</div>
                <div className='w-1/4 text-white text-[16px] font-medium flex justify-end'>{props.price} руб</div>
                <div className='w-1/4 flex flex-row gap-[42px] justify-end'>
                    <div className='text-text-gray font-medium text-[16px'>{props.version}</div>
                    <div className='text-text-blue font-mediun text-[16px]'>{props.update}</div>
                </div>
                <div className='w-1/4 flex flex-row gap-[8px] justify-end'>
                    <button
                        onClick={createSetPanel('about')}
                        className={classNames(
                            'flex items-center justify-center w-[24px] h-[24px] rounded-[24px] shrink-0',
                            (openedId === props.id && panel === 'about') ? 'bg-header-blue' : 'bg-gradient-to-br from-[#ffe555] to-[#fa5ddb]'
                        )}
                    >
                        <img src='svg/money.svg' alt=''/>
                    </button>
                    <button
                        onClick={createSetPanel('settings')}
                        className={classNames(
                            'flex items-center justify-center w-[24px] h-[24px] rounded-[24px] shrink-0',
                            (openedId === props.id && panel === 'settings') ? 'bg-header-blue' : 'bg-gradient-to-br from-[#7093ff] to-[#5bf0ee]'
                        )}
                    >
                        <img src='svg/settings.svg' alt=''/>
                    </button>
                </div>
            </div>
            {
                openedId !== props.id
                    ? null
                : panel === 'about'
                    ? <AboutDevice />
                : panel === 'settings'
                    ? <Settings/>
                : null
            }
        </>
    );
};

const Settings = () => {

}

const Each = (props) => {
    const result = [];
    for (let i = 0; i < props.children.length; i++) {
        result.push(props.children[i]);
        if (i < props.children.length-1) {
            result.push(<div key={'del:'+Math.random()}>{props.delimeter}</div>)
        }
    }
    return result;
}

const AboutDevice = () => {
    return (
        <div className='flex flex-col w-full min-h-[800px] rounded-[16px] bg-header-blue px-[16px] py-[24px]'>
            <div className='text-white text-[18px] font-medium mb-[16px]'>Статистика скамейки</div>
            <div className='flex flex-row mb-[24px] gap-[16px]'>
                <div className='w-3/5 h-[252px] bg-dark-blue rounded-[8px]'></div>
                <div className='w-2/5 h-[252px] rounded-[8px] overflow-hidden'><Map markers={markers}/></div>
            </div>
            <div className='text-white text-[18px] font-medium mb-[16px]'>Сейчас показывает</div>
            <div className='flex flex-row'>
                <div className='bg-dark-blue w-full xl:w-3/5 min-h-[56px] rounded-[8px] mb-[24px] px-[16px] pt-[16px]'>
                    {show.map(show => {
                        return (
                            <div key={'show:'+show.id} className='flex flex-row justify-between align-center mb-[16px]'>
                                <div className='font-medium text-[16px] text-white'>{show.id}. {show.name}</div>
                                <div className='font-medium text-[14px] text-white mt-[3px]'>{show.wasted}</div>
                                <div className='font-medium text-[14px] text-text-blue mt-[3px]'>{show.date}</div>
                            </div>
                        )
                    })}
                </div>
                <div className='xl:w-2/5 xl:ml-[16px]'></div>
            </div>
            <div className='text-white text-[18px] font-medium mb-[16px]'>Рекламные заявки</div>
            <div className='flex flex-row'>
                <div className='bg-dark-blue w-full xl:w-3/5 min-h-[118px] rounded-[8px] mb-[24px] px-[16px]'>
                    <Each delimeter={<hr className='border border-header-blue opacity-[0.1]'/>}>
                        {request.map(req => {
                            return (
                                <div key={'req:'+req.id} className='relative flex flex-col mt-[16px]'>
                                    <div className='mb-[8px] font-medium text-[16px] text-white'>{req.id}. {req.name}</div>
                                    <div className='flex flex-row gap-[13px] mb-[16px]'>
                                        <img src='svg/img.svg' alt=''/>
                                        <div className='font-medium text-[14px] text-text-blue'>{req.date}</div>
                                    </div>
                                    <div className='font-medium text-[14px] text-white mb-[16px]'>Бюджет: {req.budget} р</div>
                                    <div className='absolute right-0 bottom-[16px] p-[1px] w-[40px] h-[40px] rounded-[8px] bg-gradient-to-br from-[#7093ff] to-[#5bf0ee]'>
                                        <button className='p-[8px] w-[38px] h-[38px] bg-dark-blue rounded-[8px]'>
                                            <img className='w-[24px] h-[24px]' src='svg/pen.svg' alt=''/>
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </Each>
                </div>
                <div className='xl:w-2/5 xl:ml-[16px]'></div>
            </div>
            <div className='text-white text-[18px] font-medium mb-[16px]'>Ожидает одобрения</div>
            <div className='flex flex-row'>
                <div className='bg-dark-blue w-full xl:w-3/5 min-h-[118px] rounded-[8px] px-[16px]'>
                    <Each delimeter={<hr className='border border-header-blue opacity-[0.1]'/>}>
                    {wait.map(wait => {
                        return (
                            <div key={'wait:'+wait.id} className='relative flex flex-col mt-[16px]'>
                                <div className='mb-[8px] font-medium text-[16px] text-white'>{wait.id}. {wait.name}</div>
                                <div className='flex flex-row gap-[13px] mb-[16px]'>
                                    <img src='svg/img.svg' alt=''/>
                                    <div className='font-medium text-[14px] text-text-blue'>{wait.date}</div>
                                </div>
                                <div className='font-medium text-[14px] text-white mb-[16px]'>Бюджет: {wait.budget} р</div>
                                <div className='absolute right-0 bottom-[16px] flex flex-row gap-[8px]'>
                                    <button className='w-[80px] h-[40px] flex justify-center items-center rounded-[8px] bg-gradient-to-br from-[#3aed97] to-[#00ffe0]'>
                                        <img src='svg/checkmark.svg' alt=''/>
                                    </button>
                                    <button className='w-[80px] h-[40px] flex justify-center items-center rounded-[8px] bg-gradient-to-br from-[#ff7285] to-[#ff8b59]'>
                                        <ExitIcon className='text-white w-[15px] h-[15px]'/>
                                    </button>
                                    <button className='w-[80px] h-[40px] flex justify-center items-center rounded-[8px] bg-gradient-to-br from-[#7093ff] to-[#5bf0ee]'>
                                        <img className='w-[20px] h-[20px]' src='svg/pen.svg' alt=''/>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    </Each>
                </div>
                <div className='xl:w-2/5 xl:ml-[16px]'></div>
            </div>
        </div>
    );
};

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
import React from 'react';

import {ReactComponent as ExitIcon} from '../icons/exit.svg';

import Map from '../Map';

import { show, request, wait, deviceInfo } from '../owner/Data';

const Each = (props) => {
    const result = [];
    for (let i = 0; i < props.children.length; i++) {
        result.push(props.children[i]);
        if (i < props.children.length-1) {
            result.push(<div key={'del:'+Math.random()}>{props.delimeter}</div>)
        }
    }
    return result;
};

const AboutDevice = (props) => {
    return (
        <div className='relative flex flex-col w-full min-h-[800px] rounded-[16px] bg-header-blue px-[16px] py-[24px]'>
            <div className='text-white text-[18px] font-medium mb-[16px]'>Статистика скамейки</div>
            <div className='flex flex-row mb-[24px] gap-[16px]'>
                <div className='w-3/5 h-[252px] bg-dark-blue rounded-[8px]'></div>
                <div className='w-2/5 h-[252px] rounded-[8px] overflow-hidden'><Map markers={deviceInfo[props.id].markers}/></div>
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
            <button 
                onClick={()=>props.setPanel([])}
                className='absolute right-[19px] bottom-[16px] text-[16px] text-text-gray opacity-[0.5]'>
                    Свернуть
            </button>
        </div>
    );
};

export default AboutDevice;
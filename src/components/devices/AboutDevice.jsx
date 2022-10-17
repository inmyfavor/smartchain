import React from 'react';
import { BlueButton, BlueOutlineButton, GreenButton, RedButton } from '../Button';

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

const Show = (props) => {
    return (
        <div className='flex flex-row justify-between align-center mb-[16px]'>
            <div className='font-medium text-[16px] text-white'>{props.id}. {props.name}</div>
            <div className='font-medium text-[14px] text-white mt-[3px]'>{props.wasted}</div>
            <div className='font-medium text-[14px] text-text-blue mt-[3px]'>{props.date}</div>
        </div>
    );
};

const Request = (props) => {
    return (
        <div className='relative flex flex-col mt-[16px]'>
            <div className='mb-[8px] font-medium text-[16px] text-white'>{props.id}. {props.name}</div>
            <div className='flex flex-row gap-[13px] mb-[16px]'>
                <img src='svg/img.svg' alt=''/>
                <div className='font-medium text-[14px] text-text-blue'>{props.date}</div>
            </div>
            <div className='font-medium text-[14px] text-white mb-[16px]'>Бюджет: {props.budget} р</div>
            <BlueOutlineButton className='absolute right-0 bottom-[16px] w-[40px] h-[40px]'>
                <img className='w-[20px] h-[20px]' src='svg/pen.svg' alt=''/>
            </BlueOutlineButton>
        </div>
    );
};

const Wait = (props) => {
    return (
        <div className='relative flex flex-col mt-[16px]'>
            <div className='mb-[8px] font-medium text-[16px] text-white'>{props.id}. {props.name}</div>
            <div className='flex flex-row gap-[13px] mb-[16px]'>
                <img src='svg/img.svg' alt=''/>
                <div className='font-medium text-[14px] text-text-blue'>{props.date}</div>
            </div>
            <div className='font-medium text-[14px] text-white mb-[16px]'>Бюджет: {props.budget} р</div>
            <div className='absolute right-0 bottom-[16px] flex flex-row gap-[8px]'>
                <GreenButton className='w-[80px] h-[40px]'>
                    <img src='svg/checkmark.svg' alt=''/>
                </GreenButton>
                <RedButton className='w-[80px] h-[40px]'>
                    <ExitIcon className='text-white w-[15px] h-[15px]'/>
                </RedButton>
                <BlueButton className='w-[80px] h-[40px]'>
                    <img className='w-[20px] h-[20px]' src='svg/pen.svg' alt=''/>
                </BlueButton>
            </div>
        </div>
    );
};

const AboutDevice = (props) => {
    return (
        <div className='relative flex flex-col w-full xl:w-3/4 rounded-[16px] bg-header-blue px-[16px] py-[24px] mt-[8px]'>
            <div className='text-white text-[18px] font-medium mb-[16px]'>Статистика скамейки</div>
            <div className='flex flex-row mb-[24px] gap-[16px]'>
                <div className='w-3/5 h-[252px] bg-dark-blue rounded-[8px]'></div>
                <div className='w-2/5 h-[252px] rounded-[8px] overflow-hidden'>
                    <Map markers={deviceInfo[props.id].markers}/>
                </div>
            </div>
            <div className='text-white text-[18px] font-medium mb-[16px]'>Сейчас показывает</div>
            <div className='flex flex-row'>
                <div className='bg-dark-blue w-full xl:w-3/5 min-h-[56px] rounded-[8px] mb-[24px] px-[16px] pt-[16px]'>
                    {show.map(show => <Show key={'show:'+show.id} {...show}/>)}
                </div>
                <div className='xl:w-2/5 xl:ml-[16px]'></div>
            </div>
            <div className='text-white text-[18px] font-medium mb-[16px]'>Рекламные заявки</div>
            <div className='flex flex-row'>
                <div className='bg-dark-blue w-full xl:w-3/5 min-h-[118px] rounded-[8px] mb-[24px] px-[16px]'>
                    <Each delimeter={<hr className='border border-header-blue opacity-[0.1]'/>}>
                        {request.map(req => <Request key={'req:'+req.id} {...req}/>)}
                    </Each>
                </div>
                <div className='xl:w-2/5 xl:ml-[16px]'></div>
            </div>
            <div className='text-white text-[18px] font-medium mb-[16px]'>Ожидает одобрения</div>
            <div className='flex flex-row'>
                <div className='bg-dark-blue w-full xl:w-3/5 min-h-[118px] rounded-[8px] px-[16px]'>
                    <Each delimeter={<hr className='border border-header-blue opacity-[0.1]'/>}>
                        {wait.map(wait => <Wait key={'wait:'+wait.id} {...wait}/>)}
                    </Each>
                </div>
                <div className='xl:w-2/5 xl:ml-[16px]'></div>
            </div>
            <div className='min:h-[30px] min:w-full min:bg-light-blue'></div>
            <button 
                onClick={()=>props.setPanel([])}
                className='absolute right-[19px] bottom-[16px] text-[16px] text-text-gray opacity-[0.5]'>
                    Свернуть
            </button>
        </div>
    );
};

export default AboutDevice;
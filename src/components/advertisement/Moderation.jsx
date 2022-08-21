import React from 'react';

import {ReactComponent as ExitIcon} from '../icons/exit.svg';

import Tippy from '@tippyjs/react';
import {inlinePositioning} from 'tippy.js';

const Moderation = (props) => {
    return (
        <div className='flex flex-row'>
            <div className='text-white text-[16px] w-1/3'>{props.index}. {props.name}</div>
            <img className='mr-[9px]' src='svg/img.svg' alt=''/> 
            <div className='text-text-blue font-medium text-[14px] w-1/3'>{props.date}</div>
            <div className='font-medium text-white text-[14px] w-1/6'>{props.price} руб</div>
            <div className='w-1/6 flex flex-row justify-end'>
            { 
                    <Tippy
                        content={
                            props.status === 'rejected'
                                ? <div className='flex flex-col'>
                                    <div className='text-[14px] mb-[8px]'>Объявление отклонено владельцем по причине:</div>
                                    <div className='text-[13px] text-text-gray mb-[16px]'>Реклама не соответствует правилам</div>
                                    <div className='text-[13px] text-text-gray'>Пожалуйста, ознакомьтесь</div>
                                    <div className='text-[13px] text-text-gray cursor-pointer underline hover:text-white'>
                                        с правилами размещения рекламных объявлений
                                    </div>
                                </div>
                            : props.status==='accepted'
                                ? 'Объявление принято'
                            : props.status==='checking'
                                ? 'Объявление находится на проверке'
                            : null
                        }
                        theme="dark"
                        arrow={true}
                        placement="bottom"
                        animation="shift-away-subtle"
                        duration={[450, 125]}
                        inlinePositioning={true}
                        plugins={[inlinePositioning]}
                    >
                        {
                        props.status === 'accepted'
                            ? <div className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px] shrink-0'>
                                <div className='h-[12px] w-[12px] rounded-[12px] bg-[#00ff75]'></div>
                            </div>
                        : props.status==='rejected'
                            ? <div className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px] shrink-0'>
                                <div className='h-[12px] w-[12px] rounded-[12px] bg-[#f83939]'></div>
                            </div>
                        : props.status==='checking'
                            ? <div className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px] shrink-0'>
                                <div className='h-[12px] w-[12px] rounded-[12px] bg-[#FFE555]'></div>
                            </div>
                        : null
                        }
                        
                    </Tippy> 
            }
                <button
                    onClick={() => props.setCenter(props.areaId)}
                    className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px] shrink-0 hover:bg-gradient-to-br from-[#7093ff] to-[#5bf0ee]'
                >
                    <img src='svg/location-white.svg' alt=''/>
                </button>
                <button className='flex items-center justify-center h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px] shrink-0'>
                    <img src='svg/pen.svg' alt=''/>
                </button>
                <button onClick={() => props.remove(props.id)} className='relative h-[24px] w-[24px] rounded-[8px] bg-header-blue
                        bg-gradient-to-br from-[#ff7285] to-[#ff8b59] shrink-0'
                >
                    <div
                        className='absolute font-medium whitespace-nowrap text-white text-[14px] h-[24px] w-[24px] hover:w-[154px] duration-500 rounded-[8px] bg-header-blue
                            bg-gradient-to-br from-[#ff7285] to-[#ff8b59] top-0 right-0 overflow-hidden'
                    >
                        <div className='absolute top-0 left-0 flex flex-row gap-[8px] ml-[-4px] items-center justify-center h-[24px] w-[154px]'>
                            <ExitIcon className='text-white h-[12px] w-[12px]'/>
                            <div>Отменить заявку</div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Moderation;
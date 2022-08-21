import React from 'react';

import Tippy from '@tippyjs/react';
import {inlinePositioning} from 'tippy.js';

const Show = (props) => {
    return (
        <div className='flex flex-row'>
            <div className='text-white text-[16px] w-1/3'>{props.id}. {props.name}</div>
            <img className='mr-[9px]' src='svg/img.svg' alt=''/> 
            <div className='text-text-blue font-medium text-[14px] w-1/3'>{props.date}</div>
            <div className='font-medium text-white text-[14px] w-1/6'>
                <Tippy
                    content={'Потрачено рекламного бюджета'}
                    theme="light"
                    arrow={true}
                    placement="bottom"
                    animation="shift-away-subtle"
                    duration={[450, 125]}
                    inlinePositioning={true}
                    plugins={[inlinePositioning]}
                >
                    <span>{props.wasted} руб</span>
                </Tippy>
            </div>
            
            <div className='w-1/6 flex flex-row justify-end'>
                <button
                    onClick={() => props.setCenter(props.areaId)}
                    className='p-[5px] h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px]
                    hover:bg-gradient-to-br from-[#7093ff] to-[#5bf0ee] shrink-0 cursor-pointer'
                >
                    <img src='svg/location-white.svg' alt=''/>
                </button>
                <button className='p-[5px] h-[24px] w-[24px] rounded-[24px] bg-header-blue mr-[16px] shrink-0'>
                    <img src='svg/pen.svg' alt=''/>
                </button>
                <button className='p-[5px] h-[24px] w-[24px] rounded-[24px] bg-header-blue shrink-0'>
                    <img src='svg/settings.svg' alt=''/>
                </button>
            </div>
        </div>
    );
};

export default Show;
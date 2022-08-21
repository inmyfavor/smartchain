import React, { useState, useRef } from 'react';

import {
    useFloating,
    offset,
    shift,
    arrow
  } from '@floating-ui/react-dom';

import {ReactComponent as TrashIcon} from '../icons/trash.svg';
import {ReactComponent as ExitIcon} from '../icons/exit.svg';

const achievements = [
    {
        id: '1',
        image: 'images/ach-1.png',
        gradientFrom: '#FFBCA8',
        gradientTo: '#FF43C4',
        cups: 13,
    },
    {
        id: '2',
        image: 'images/ach-2.png',
        gradientFrom: '#7093FF',
        gradientTo: '#5ED7CE',
        cups: 3,
    },
    {
        id: '3',
        image: 'images/ach-3.png',
        gradientFrom: '#D96FFF',
        gradientTo: '#6437FA',
        cups: 31
    },
];

let opened;
const Card = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const arrowRef = useRef(null);
    const {x, y, reference, floating, strategy, middlewareData} = useFloating({
        placement: 'bottom',
        middleware: [offset(32), shift(), arrow({element: arrowRef})],
    });
    return <>
        <div
            onClick={()=>{
                if (opened) opened();
                opened = () => setIsModalVisible(false);
                setIsModalVisible(true)
            }}
            ref={reference}
            style={{
                '--tw-gradient-from': props.gradientFrom,
                '--tw-gradient-to': props.gradientTo,
                '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
                boxShadow: `-1px -1px 6px 0px ${props.gradientFrom}, 1px 1px 6px 0px ${props.gradientTo}`
            }}
            className='cursor-pointer relative flex items-end justify-end w-[128px] h-[142px] bg-gradient-to-br rounded-[16px]'
        >
            <div className='absolute w-full h-full flex items-center justify-center'>
                <img src={props.image} alt=''/>
            </div>
            <div className='flex items-center justify-center gap-[2px] rounded-br-[16px] rounded-tl-[3px] w-[44px] h-[30px] bg-white'>
                <span className='text-14px text-dark-blue mt-[2px]'>{props.cups}</span>
                <img src='svg/cup.svg' alt=''/>
            </div>
        </div>
        
        {
            isModalVisible &&
            <>
                <div
                    ref={floating}
                    style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0,
                    }}
                >
                    <div
                        className='text-dark-blue'
                        style={{
                            position: strategy,
                            top: middlewareData?.arrow?.y ?? 0,
                            left: middlewareData?.arrow?.x ?? 0,
                            background: 'currentColor',
                            width: '64px',
                            height: '64px',
                            transform: 'rotate(45deg)'
                        }}
                        ref={arrowRef} />
                    <Modal close={() => setIsModalVisible(false)}/>
                    
                </div>
            </>   
        }
    </>
};

const Saved = () => {
    let number = '3';
    let date = '1/04/2021 18:23';
    let num = '0001';
    return (
        <div className='flex flex-col gap-[12px]'>
            <div className='flex flex-row items-center'>
                <img className='mr-[9px]' src='svg/save.svg' alt=''/>
                <span className='mr-[34px] text-white text-[16px]'>Уровень {number}</span>
                <img className='mr-[10px]' src='svg/calendar.svg' alt=''/>
                <span className='mr-[32px] text-text-gray text-[14px]'>{date}</span>
                <span className='mr-[68px] text-text-blue text-[14px]'>Скамейка №{num}</span>
                <button>
                    <TrashIcon className='transition-all text-text-gray hover:text-white'/>
                </button>
            </div>
        </div>
    );
};

const Modal = (props) => {
    return <>
        <div className='relative flex flex-col bg-dark-blue justify-left relative w-[592px] min-h-[300px] p-[32px] rounded-[16px]'>
            <button
            className='absolute right-[20px] top-[20px]'>
                <ExitIcon onClick={props.close} className='transition-all text-text-gray hover:text-white'/>
            </button>
            <div className='flex flex-row gap-[24px] mb-[26px]'>
                <span className='font-medium text-[18px] text-white'>Сохранения игры</span>
                <span className='font-medium text-[18px] text-white'>Игровые достижения</span>
            </div>
            <Saved/>
        </div>
    </>
};

const Achievements = () => {
    return (
        <div className='flex flex-row flex-wrap gap-[32px]'>
            {achievements.map(ach => <Card key={'ach:'+ach.id} {...ach}/>)}
        </div>
    );
};

export default Achievements;
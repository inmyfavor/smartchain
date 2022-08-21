import React, { useState, useRef, useMemo } from 'react';

import {
    useFloating,
    autoUpdate,
    offset,
    shift,
    arrow,
    FloatingPortal,
    flip
} from '@floating-ui/react-dom-interactions';

import {ReactComponent as TrashIcon} from '../icons/trash.svg';
import {ReactComponent as ExitIcon} from '../icons/exit.svg';
import {ReactComponent as CupIcon} from '../icons/cup.svg';

import PageNav from '../PageNav.jsx';

const Card = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const arrowRef = useRef(null);
    const {x, y, placement, reference, floating, refs, strategy, middlewareData} = useFloating({
        whileElementsMounted: autoUpdate,
        placement: 'bottom',
        middleware: [offset(32), flip(), shift({ padding: 32 }), arrow({element: arrowRef})],
    });

    const staticSide = useMemo(() => ({
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
    }[placement.split('-')[0]]), [placement]);

    function closeModal(event) {
        if (event.path.indexOf(refs.reference.current) !== -1) {
            return
        }
        setIsModalVisible(false);
        window.removeEventListener('click', closeModal);
    }
    
    return <>
        <div
            onClick={() => {
                window.addEventListener('click', closeModal);
                setIsModalVisible(true);
            }}
            ref={reference}
            style={{
                '--tw-gradient-from': props.gradientFrom,
                '--tw-gradient-to': props.gradientTo,
                '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
                boxShadow: `-1px -1px 6px 0px ${props.gradientFrom}, 1px 1px 6px 0px ${props.gradientTo}`
            }}
            className='cursor-pointer relative flex items-end justify-end w-[128px] h-[142px] bg-gradient-to-br rounded-[16px] z-10'
        >
            <div className='absolute w-full h-full flex items-center justify-center pb-[15px]'>
                <img src={props.image} alt=''/>
            </div>
            <div className='flex items-center justify-center gap-[2px] rounded-br-[16px] rounded-tl-[3px] w-[44px] h-[30px] bg-white'>
                <span className='text-14px text-dark-blue mt-[2px]'>{props.cups}</span>
                <CupIcon className='text-gold'/>
            </div>
        </div>
        
        <FloatingPortal>
            {
                isModalVisible &&
                <>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        ref={floating}
                        style={{
                            position: strategy,
                            top: y ?? 0,
                            left: x ?? 0,
                        }}
                    >
                        <div
                            className='text-dark-blue z-10'
                            style={{
                                position: strategy,
                                top: middlewareData?.arrow?.y ?? '',
                                left: middlewareData?.arrow?.x ?? '',
                                background: 'currentColor',
                                width: '64px',
                                height: '64px',
                                transform: 'rotate(45deg)',
                                [staticSide]: '-4px',
                            }}
                            ref={arrowRef} />
                        <Modal close={() => setIsModalVisible(false)}  gameAch={props.gameAch}/>
                        
                    </div>
                </>   
            }
        </FloatingPortal>
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

const GameAchievements = (props) => {
    let curPoints = 150;
    return (
        <div className='flex flex-row justify-between items-start mr-[200px] mb-[12px]'>
            <div className='flex flex-row items-center gap-[8px]'>
                {props.icon}
                <span className='text-white text-[16px]'>{props.name}</span>
            </div>
            <div className='flex flex-col gap-[4px]'>
                <div className='h-[16px] w-[136px] rounded-[8px] border border-text-blue'>
                    <div style={{width: (curPoints/props.points)*136}} className='h-full rounded-[8px] bg-text-blue'></div>
                </div>
                <div className='text-text-blue text-[10px] text-center'>{curPoints} / {props.points} очков</div>
            </div>
        </div>
    );
};

const tabs = {
    'saved': 'Мои рисунки',
    'gameAchievements': 'Игровые достижения'
};

const Modal = (props) => {
    const [tab, setTab] = useState('saved');
    return (
        <div className='relative flex flex-col bg-dark-blue justify-left relative w-[592px] min-h-[300px] p-[32px] rounded-[16px] z-10'>
            <button
            className='absolute right-[20px] top-[20px]'>
                <ExitIcon onClick={props.close} className='transition-all text-text-gray hover:text-white'/>
            </button>
            <div>
            <div className='mb-[26px]'>
                <PageNav tab={tab} setTab={setTab} tabs={tabs} gap='80px' text='18px' flex='row'/>
            </div>
                {
                    tab === 'saved'
                        ? <Saved />
                    : tab === 'gameAchievements'
                        ? props.gameAch.map(gAch => <GameAchievements key={'gAch:'+gAch.id} {...gAch}/>)
                    : null
                }
            </div>
        </div>
    );

};

const Achievements = (props) => {
    return (
        <div className='flex flex-row flex-wrap gap-[32px]'>
            {props.achievements.map((ach, index) => <Card key={'ach:'+index} {...ach}/>)}
        </div>
    );
};

export default Achievements;
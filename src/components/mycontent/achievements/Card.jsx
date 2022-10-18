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

import {ReactComponent as CupIcon} from '../../icons/cup.svg';

import Modal from './Modal';

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
        const path = event.composedPath();
        if (path.indexOf(refs.reference.current) !== -1) {
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
                        <Modal close={() => setIsModalVisible(false)} gameAch={props.gameAch} saved={props.saved}/>
                        
                    </div>
                </>   
            }
        </FloatingPortal>
    </>
};

export default Card;
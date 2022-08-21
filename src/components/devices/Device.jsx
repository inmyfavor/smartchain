import React, { useLayoutEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import AboutDevice from './AboutDevice';
import Settings from './Settings';

const Device = (props) => {
    const [panel, setPanel] = useState(null);
    function createSetPanel(newPanel) {
        return () => {
            if (newPanel === null || newPanel === panel) {
                ref.current.style['max-height'] = '0px';
                setTimeout(() => {
                    setPanel(null);
                }, 200);
            } else {
                setPanel(newPanel);
            }
        }
    }
    const number = (props.id.length < 4) ? '0'.repeat(4-props.id.length)+props.id : props.id

    const ref = useRef();
    useLayoutEffect(() => {
        ref.current.style['max-height'] = ref.current.firstChild.offsetHeight + 48 + 'px';
    });

    return (
        <>
            <div className={classNames(
                'transition-all flex flex-row h-[46px] rounded-[16px] py-[12px] px-[16px] w-full xl:w-1/2',
                (panel != null) ? 'bg-dark-blue' : 'bg-header-blue'
            )}>
                <div className='w-1/4 text-white text-[16px] font-medium'>Скамейка №{number}</div>
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
                            (panel === 'about') ? 'bg-header-blue' : 'bg-gradient-to-br from-[#ffe555] to-[#fa5ddb]'
                        )}
                    >
                        <img src='svg/money.svg' alt=''/>
                    </button>
                    <button
                        onClick={createSetPanel('settings')}
                        className={classNames(
                            'flex items-center justify-center w-[24px] h-[24px] rounded-[24px] shrink-0',
                            (panel === 'settings') ? 'bg-header-blue' : 'bg-gradient-to-br from-[#7093ff] to-[#5bf0ee]'
                        )}
                    >
                        <img src='svg/settings.svg' alt=''/>
                    </button>
                </div>
            </div>
            <div ref={ref} className='transition-all max-h-[0px] overflow-hidden'>
                <div>
                    {
                        panel === 'about'
                            ? <AboutDevice id={props.id-1} setPanel={createSetPanel(null)}/>
                        : panel === 'settings'
                            ? <Settings id={props.id-1} number={number} setPanel={createSetPanel(null)}/>
                        : null
                    }
                </div>
            </div>
        </>
    );
};

export default Device;
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import AboutDevice from './AboutDevice';
import Settings from './Settings';
import DeviceType from '../DeviceType';

import { getBenchInfo } from '../../api';

export const Status = (props) => {
    return (
        <div className='flex justify-center items-center bg-main-blue h-[16px] w-[16px] rounded-[16px]'>
            <div className={classNames('w-[8px] h-[8px] rounded-[8px] bg-gradient-to-br', props.gradient)}></div>
        </div>
    );
};

const IconStatus = (props) => {
    return (
        <div className='flex justify-center items-center bg-main-blue h-[24px] w-[24px] rounded-[24px]'>
            <div>{props.icon}</div>
        </div>
    );
};

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

    const ref = useRef();
    useLayoutEffect(() => {
        ref.current.style['max-height'] = ref.current.firstChild.offsetHeight + 48 + 'px';
    });

    const [benchInfo, setBenchInfo] = useState({});

    useEffect(() => {
        (async () => {
            const benchInfo = await getBenchInfo(props.id);
            setBenchInfo(benchInfo);
        })()
    }, []);

    return (
        <div className={classNames({'brightness-[.6]': !props.settings_available})}>
            <div className={classNames(
                'transition-all flex flex-row h-[78px] rounded-[16px] py-[12px] px-[16px] w-full xl:w-3/4',
                (panel != null) ? 'bg-dark-blue' : 'bg-header-blue'
            )}>
                
                <div className='flex flex-col gap-[8px] w-1/3'>
                    <div className='flex items-center gap-[8px] text-white text-[16px] font-medium'>
                        <IconStatus icon={ <DeviceType name={props.type} status={props.status}/> } />
                        {props.title} 
                        {/* №{props.number} */}
                    </div>
                    { props.settings_available &&
                    <div className='flex flex-row items-center gap-[11px]'>
                        <img src='svg/location.svg' alt=''/>
                        <span className='text-[12px] text-text-blue'>{benchInfo.address}</span>
                    </div>
                    } 
                </div>
                <div className='flex-1'></div>
                <div className='flex flex-row gap-[50px] justify-center ml-[16px] w-1/2'>
                    <div className='flex flex-col gap-[8px] items-center'>
                        <div className='text-text-gray text-[14px]'>Объявления</div>
                        <div className='text-white font-medium text-[16px]'>
                            {/* {props.ad} */}
                            0
                        </div>
                    </div>
                    <div className='flex flex-col gap-[8px] items-center'>
                        <div className='text-text-gray text-[14px]'>Заявки</div>
                        <div className='text-text-blue font-mediun text-[16px]'>
                            {/* {props.application} */}
                            0
                        </div>
                    </div>
                    <div className='flex flex-col gap-[8px] items-center'>
                        <div className='text-text-gray text-[14px]'>Доход</div>
                        <div className='text-white text-[16px] font-medium min-w-[120px] text-center'>
                            {/* {props.income} руб */}
                            0 руб
                            </div>
                    </div>
                </div>
                <div className='flex-1'></div>
                <div className='flex flex-row gap-[8px] justify-end w-1/6'>
                    <button
                        disabled={props.status === 'offline'}
                        onClick={createSetPanel('about')}
                        className={classNames(
                            'flex items-center justify-center w-[24px] h-[24px] rounded-[24px] shrink-0',
                            (panel === 'about') ? 'bg-header-blue' : 'bg-gradient-to-br from-[#ffe555] to-[#fa5ddb]'
                        )}
                    >
                        <img src='svg/money.svg' alt=''/>
                    </button>
                    <button
                        disabled={props.status === 'offline'}
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
                            ? <AboutDevice 
                                id={props.id-1} 
                                setPanel={createSetPanel(null)}
                                // name={props.name}
                                // status={props.status}
                                />
                        : panel === 'settings'
                            ? <Settings 
                                id={props.id-1} 
                                setPanel={createSetPanel(null)} 
                                // name={props.name}
                                // status={props.status}
                                />
                        : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Device;
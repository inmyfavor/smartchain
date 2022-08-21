import React from 'react';

import classNames from 'classnames';

import AboutDevice from './AboutDevice';
import Settings from './Settings';

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
    const number = (props.id.length < 4) ? '0'.repeat(4-props.id.length)+props.id : props.id
    return (
        <>
            <div className={classNames(
                'flex flex-row h-[46px] rounded-[16px] py-[12px] px-[16px] w-full xl:w-1/2',
                (openedId === props.id && panel != null) ? 'bg-dark-blue' : 'bg-header-blue'
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
                    ? <AboutDevice id={props.id-1} setPanel={props.setPanel}/>
                : panel === 'settings'
                    ? <Settings id={props.id-1} number={number} setPanel={props.setPanel}/>
                : null
            }
        </>
    );
};

export default Device;
import React, { useEffect, useState } from 'react';

import {ReactComponent as ExitIcon} from '../icons/exit.svg';

import Map from '../Map';

const AreaPlacements = (props) => {
    const [map, setMap] = useState(null);
    useEffect(() => {
        if (!map || props.placements.length === 0) return;
        const marker = props.placements[0];
        const center = [marker.lat, marker.lon];
        map.setView(center, 12);
    }, [map, props.placements])
    return (
        <div className='max-w-[800px] p-[16px] bg-header-blue rounded-[16px]'>
            <div className='text-white font-medium text-[18px] mb-[16px]'>Выберите площадку</div>
            <div className='flex flex-row gap-[16px]'>
                <div className='w-3/5 rounded-[8px]'>
                    <div className='w-full h-[40px] font-medium text-[14px] bg-dark-blue p-[10px] rounded-[8px] flex flex-row items-center gap-[8px] text-white'>
                        <button onClick={() => props.setIsSelecting(true)} className='flex items-center justify-center h-[24px] w-[24px] rounded-[8px] bg-header-blue'>
                            <img className='w-[12px] h-[12px]' src='svg/plus.svg' alt=''/>
                        </button>
                        Добавить площадку
                    </div>
                    <div className='mt-[16px]'/>
                    {props.placements.map((ar, index) =>
                        <div key={'ar:'+ar.id} className='bg-dark-blue rounded-[8px] p-[16px] mb-[8px]'>
                            <div className='flex flex-row'>
                                <div className='font-[18px] text-white font-medium'>
                                    Площадка {index+1}
                                </div>
                                <div className='flex-1'/>
                                <button
                                    onClick={() => props.setPlacements(props.placements.filter(a => a.id !== ar.id))}
                                    className='flex items-center justify-center h-[24px] w-[24px] rounded-[8px] bg-header-blue'>
                                    <ExitIcon className='flex-shrink-0 text-white w-[10px] h-[10px]'/>
                                </button>
                            </div>
                            <div className='flex flex-row items-center mt-[8px]'>
                                <div className='flex justify-center items-center rounded-full bg-main-blue w-[16px] h-[16px]'>
                                    <div className='rounded-full bg-gradient-to-br from-[#6FFF2C] to-[#29EEE7] w-[8px] h-[8px]'/>
                                </div>
                                <div className='font-medium text-white text-[16px] ml-[8px]'>
                                    Скамейка №{(ar.id.length < 4) ? '0'.repeat(4-ar.id.length)+ar.id : ar.id}
                                </div>
                                <div className='flex flex-row gap-[8px] ml-[24px]'>
                                    <img src='svg/location.svg' alt=''/>
                                    <div className='text-text-blue text-[12px]'>{ar.address}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='w-2/5 rounded-[8px] overflow-hidden'>
                    <div className='h-full min-h-[280px]'>
                        <Map setMap={setMap} markers={props.placements}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AreaPlacements;
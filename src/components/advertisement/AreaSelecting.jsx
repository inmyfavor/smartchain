import React, { useState, useMemo, useEffect } from 'react';

import Map from '../Map';

import { area } from '../stranger/Data';

const AreaSelecting = (props) => {
    const [input, setInput] = useState('');
    const [map, setMap] = useState(null);
    const markers = useMemo(() => area.filter(a=>a.address.toLowerCase().includes(input.toLowerCase())), [input]);
    useEffect(() => {
        if (!map || markers.length === 0) return;
        const marker = markers[0];
        const center = [marker.lat, marker.lon];
        map.setView(center, 12);
    }, [map, markers]);
    return (
        <div className='max-w-[800px] p-[16px] bg-header-blue rounded-[16px]'>
            <div className='text-white font-medium text-[18px] mb-[16px]'>Выберите площадку</div>
            <div className='relative mb-[24px]'>
                <img className='absolute left-[15px] top-[12px]' src='svg/search.svg' alt=''/>
                <input
                    value={input}
                    onInput={(e) => setInput(e.target.value)}
                    className='outline-none w-full h-[40px] text-white text-[14px] bg-dark-blue p-[13px] rounded-[8px] pl-[40px] placeholder:text-[rgba(255,255,255,0.5)]' 
                    placeholder='Адрес / номер скамейки'
                />
            </div>
            <div className='flex flex-row gap-[16px]'>
                <div className='flex flex-col gap-[12px] w-2/5 bg-dark-blue p-[16px] rounded-[8px]'>
                    {markers.map(ar => {
                            return (
                                <div
                                    onClick={() => {
                                        props.setPlacements([...props.placements, ar]);
                                        props.setIsSelecting(false);
                                    }}
                                    key={'ar:'+ar.id} className='flex flex-col gap-[4px] cursor-pointer'
                                >
                                    <div className='font-medium text-white text-[16px]'>
                                        Скамейка №{(ar.id.length < 4) ? '0'.repeat(4-ar.id.length)+ar.id : ar.id}
                                    </div>
                                    <div className='flex flex-row gap-[8px]'>
                                        <img src='svg/location.svg' alt=''/>
                                        <div className='text-text-blue text-[12px]'>{ar.address}</div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
                <div className='w-3/5 rounded-[8px] overflow-hidden'>
                    <div className='h-full min-h-[280px]'>
                        <Map setMap={setMap} markers={markers}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AreaSelecting;
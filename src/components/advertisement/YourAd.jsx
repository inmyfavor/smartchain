import React, { useMemo, useState } from 'react';

import { show, area } from '../stranger/Data';

import Show from './Show';
import Moderation from './Moderation';

import Map from '../Map';

const YourAd = (props) => {
    function removeModeration(id) {
        props.setModeration(props.moderation.filter(m => m.id !== id));
    }

    const [map, setMap] = useState(null);

    function setCenter(areaId) {
        if (!areaId) return;
        const marker = area.find(a => a.id === areaId);
        const center = [marker.lat, marker.lon];
        map.setView(center, 12)
    }

    const markers = useMemo(() => {
        const unionAreas = show.map(sh => sh.areaId).concat(props.moderation.filter(m => m.areaId).map(m => m.areaId));
        return [...new Set(unionAreas)].map(id => area.find(a => a.id === id))
    }, [props.moderation]);

    return (
        <div className='flex flex-col xl:flex-row gap-[19px] w-full min-h-[300px] bg-header-blue rounded-[16px] p-[16px]'>
            <div className='w-full xl:w-2/3 flex flex-col gap-[16px]'>
                <div className='font-medium text-[18px] text-white'>Сейчас показывает</div>
                <div className='flex flex-col gap-[16px] w-full min-h-[40px] bg-dark-blue rounded-[8px] p-[8px]'>
                    {show.map(sh => <Show setCenter={setCenter} key={'sh:'+sh.id} {...sh}/>)}
                </div>
                <div className='font-medium text-[18px] text-white'>На проверке</div>
                { props.moderation.length !== 0 &&
                    <div className='flex flex-col gap-[16px] w-full min-h-[40px] bg-dark-blue rounded-[8px] p-[8px]'>
                        {props.moderation.map((mod, index) => 
                            <Moderation setCenter={setCenter} key={'mod:'+mod.id} {...mod} index={index+1} remove={removeModeration}/>)}
                    </div>
                }
            </div>
            <div className='w-full xl:w-1/3 flex flex-col gap-[16px]'>
                <div className='font-medium text-[18px] text-white'>Устройства на карте</div>
                <div className='w-full h-full min-h-[300px] rounded-[8px] bg-dark-blue overflow-hidden relative'>
                    <div className='w-full h-full absolute'>
                        <Map setMap={setMap} markers={markers}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourAd;
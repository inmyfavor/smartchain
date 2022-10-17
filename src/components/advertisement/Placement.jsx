import React, { useState } from 'react';

import AreaSelecting from './AreaSelecting';
import AreaPlacements from './AreaPlacements';
import DateRange from './DateRange';

import {PinkButton} from '../Button';

function formatDate(date) {
    return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth()+1).padStart(2, '0')}/${date.getFullYear()}`;
};

const Area = (props) => {
    const [isSelecting, setIsSelecting] = useState(false);
    return isSelecting
        ? <AreaSelecting setIsSelecting={setIsSelecting} placements={props.placements} setPlacements={props.setPlacements}/>
        : <AreaPlacements setPlacements={props.setPlacements} placements={props.placements} setIsSelecting={setIsSelecting}/>;
};

const Dates = (props) => {
    return (
        <div className='flex flex-col max-w-[800px] p-[16px] bg-header-blue rounded-[16px]'>
            <div className='font-medium text-white text-[18px] mb-[16px]'>
                Выберите даты размещения рекламы
            </div>
            <DateRange onChange={props.onChange}/>
        </div>
    );
};

const Placement = (props) => {
    const [placements, setPlacements] = useState([]);
    let date = 'Не назначено', start = '', end = '';
    return (
        <div className='flex flex-col gap-[24px]'>
            {
                !props.isDisabled && props.files.length!==0 
                    ? <div className='flex flex-col gap-[40px]'>
                        <Area placements={placements} setPlacements={setPlacements}/>
                        <Dates onChange={(val) => {
                            if (val[0] === null) {
                                date = 'Не назначено';
                            } else if (+val[0] === val[1] || val[1] === null) {
                                date = formatDate(val[0]);
                                start = val[0];
                            } else {
                                start = val[0];
                                end = val[1];
                                date = `${formatDate(val[0])} - ${formatDate(val[1])}`
                            }
                        }}/>
                    </div>
                : <div className='flex flex-col gap-[24px]'>
                    <div className='max-w-[800px] h-[56px] rounded-[16px] p-[16px] bg-dark-blue text-white text-[18px] font-medium placeholder:text-text-gray opacity-[0.5]'>
                        Выберите площадку
                    </div>
                    <div className='max-w-[800px] h-[56px] rounded-[16px] p-[16px] bg-dark-blue text-white text-[18px] font-medium placeholder:text-text-gray opacity-[0.5]'>
                        Выберите даты размещения рекламы
                    </div>
                </div> 
            }
            <PinkButton 
                onClick={()=>props.addModeration({
                    markers: [],
                    id: Math.random(),
                    date, price: '2000', status: 'checking',
                    start, end,
                    areaId: placements.length ? placements[0].id : undefined
                })}
                className='h-[52px] w-[280px] text-[18px]'
                disabled={props.isDisabled}
                isDisabled={props.isDisabled}
            >
                Разместить
            </PinkButton>
        </div>
    );
};

export { Area };

export default Placement;
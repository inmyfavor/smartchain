import React from 'react';

import {ReactComponent as ExitIcon} from '../../icons/exit.svg';

import Placement from './Placement';

const Info = (props) => {
    return (
        <div className='flex flex-col bg-dark-blue justify-left relative w-[592px] min-h-[200px] p-[32px] rounded-[16px]'>
            <button onClick={props.close}
            className='absolute right-[20px] top-[20px]'>
                <ExitIcon className='transition-all text-text-gray hover:text-white'/>
            </button>
            <span className='text-white font-medium text-[18px] mb-[24px]'>Информация о рисунке {props.card.name}</span>
            <span className='text-white text-[16px] mb-[17px]'>Этот рисунок был расположен на устройствах:</span>
            <div className='flex flex-col gap-[8px]'>
                { props.card.placements.map(pl => <Placement key={'placement:'+pl.id} {...pl}/>)}
            </div>
        </div>
    );
};

export default Info;
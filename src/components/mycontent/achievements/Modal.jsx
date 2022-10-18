import React, { useState } from 'react';

import {ReactComponent as ExitIcon} from '../../icons/exit.svg';

import PageNav from '../../PageNav';
import Saved from './Saved';
import GameAchievements from './GameAchievements';

const tabs = {
    'saved': 'Мои рисунки',
    'gameAchievements': 'Игровые достижения'
};

const Modal = (props) => {
    const [tab, setTab] = useState('saved');
    return (
        <div className='relative flex flex-col bg-dark-blue justify-left relative min-w-[792px] min-h-[300px] p-[32px] rounded-[16px] z-10'>
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
                        ? props.saved.map(saved => <Saved key={'saved:'+saved.id} {...saved}/>)
                    : tab === 'gameAchievements'
                        ? props.gameAch.map(gAch => <GameAchievements key={'gAch:'+gAch.id} {...gAch}/>)
                    : null
                }
            </div>
        </div>
    );

};

export default Modal;
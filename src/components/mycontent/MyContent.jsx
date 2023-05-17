import React, { useState } from 'react';

import Drawings from './drawings/Drawings.jsx';
import Achievements from './achievements/Achievements.jsx';
import PageNav from '../PageNav.jsx';

import { initialCardsStr, achievementsStr } from '../stranger/Data';
import { initialCardsOwn, achievementsOwn } from '../owner/Data';
import { useAuth } from '../../auth.js';

import { savedOwn } from '../owner/Data';
import { savedStr } from '../stranger/Data';

const tabs = {
    'drawings': 'Мои рисунки',
    'achievements': 'Мои игровые достижения'
}

const MyContent = () => {
    const auth = useAuth();
    const initialCards = auth.user?.type === 'owner' ? initialCardsOwn : initialCardsStr;
    const achievements = auth.user?.type === 'owner' ? achievementsOwn : achievementsStr;
    const saved = auth.user?.type === 'owner' ? savedOwn : savedStr;
    const [tab, setTab] = useState('drawings');
    return (
        <div className='mx-[72px] my-[50px]'>
            <div className='mb-[40px]'>
                <PageNav tab={tab} setTab={setTab} tabs={tabs} gap='85px' text='20px' flex='row'/>
            </div>
            {
                tab === 'drawings'
                    ? <Drawings initialCards={initialCards}/>
                : tab === 'achievements'
                    ? <Achievements achievements={achievements} saved={saved}/>
                : null
            }
        </div>
    );
};

export default MyContent;
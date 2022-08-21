import React, { useState } from 'react';

import Drawings from './Drawings.jsx';
import Achievements from './Achievements.jsx';
import PageNav from '../PageNav.jsx';

const tabs = {
    'drawings': 'Мои рисунки',
    'achievements': 'Мои игровые достижения'
}

const MyContent = (props) => {
    const [tab, setTab] = useState('drawings');
    return (
        <div className='mx-[72px] my-[50px]'>
            <div className='mb-[40px]'>
                <PageNav tab={tab} setTab={setTab} tabs={tabs} gap='85px' text='20px' flex='row'/>
            </div>
            {
                tab === 'drawings'
                    ? <Drawings initialCards={props.initialCards}/>
                : tab === 'achievements'
                    ? <Achievements achievements={props.achievements} gameAch={props.gameAch}/>
                : null
            }
        </div>
    );
};

export default MyContent;
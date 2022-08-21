import React, { useState } from 'react';

import Page from '../Page.jsx';
import HeaderNav from '../HeaderNav.jsx';

import Drawings from './Drawings.jsx';
import Achievements from './Achievements.jsx';
import PageNav from '../PageNav.jsx';

const tabs = {
    'drawings': 'Мои рисунки',
    'achievements': 'Мои игровые достижения'
}

const MyContent = () => {
    const [tab, setTab] = useState('drawings');
    return (
        <Page header={<HeaderNav/>}>
            <div className='mx-[72px] my-[50px]'>
                <div className='mb-[40px]'>
                    <PageNav tab={tab} setTab={setTab} tabs={tabs} gap='85px' text='20px' flex='row'/>
                </div>
                {
                    tab === 'drawings'
                        ? <Drawings />
                    : tab === 'achievements'
                        ? <Achievements />
                    : null
                }
            </div>
        </Page>
    );
};

export default MyContent;
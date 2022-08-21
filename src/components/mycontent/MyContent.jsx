import React, { useState } from 'react';

import classNames from 'classnames';

import Page from '../Page.jsx';
import HeaderNav from '../HeaderNav.jsx';

import Drawings from './Drawings.jsx';
import Achievements from './Achievements.jsx';

const tabs = {
    'drawings': 'Мои рисунки',
    'achievements': 'Мои игровые достижения'
}

const PageNav = (props) => {
    return (
        <div className='flex flex-row gap-[85px] mt-[50px] mb-[40px]'>
            {Object.entries(tabs).map(([key, value]) =>
                <button
                    key={'pagenav:'+key}
                    onClick={()=>props.setTab(key)}
                    className={classNames(
                        props.tab === key ? 'text-white' : 'text-text-gray',
                        'transition-all hover:text-white font-medium text-[20px]'
                    )}
                >
                    {value}
                </button>    
            )}
        </div>
    );
};

const MyContent = () => {
    const [tab, setTab] = useState('drawings');
    return (
        <Page header={<HeaderNav/>}>
            <div className='mx-[72px]'>
                <PageNav tab={tab} setTab={setTab}/>
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
import React from 'react';

import classNames from 'classnames';

const PageNav = (props) => {
    return (
        <div style={{gap: props.gap, flexDirection: props.flex}} className='flex'>
            {Object.entries(props.tabs).map(([key, value]) =>
                <button
                    key={'pagenav:'+key}
                    onClick={()=>props.setTab(key)}
                    style={{fontSize: props.text}}
                    className={classNames(
                        props.tab === key ? 'text-white' : 'text-text-gray',
                        'transition-all hover:text-white font-medium text-left'
                    )}
                >
                    {value}
                </button>    
            )}
        </div>
    );
};

export default PageNav;
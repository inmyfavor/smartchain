import classNames from 'classnames';
import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

const links = {
    '/mycontent': 'Мой конент',
    '/advertisment': 'Реклама'
}

const HeaderNav = () => {
    let location = useLocation();
    let navigate = useNavigate();
    return (
        <div className='flex flex-row gap-[60px] ml-[71px]'>
            {Object.entries(links).map(([key, value]) =>
                <button
                    onClick={()=>navigate(key)}
                    className={classNames(
                        location.pathname === key ? 'text-white' : 'text-text-gray',
                        'transition-all hover:text-white text-[14px]'
                    )}
                    key={'headnav:'+key}>{value}</button>
            )}
        </div>
    );
};

export default HeaderNav;
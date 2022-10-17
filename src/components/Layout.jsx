import React from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';

import classNames from 'classnames';

import Page from './Page';
import { useAuth } from '../auth';

import { links as strangerLinks } from './stranger/Data';
import { links as ownerLinks } from './owner/Data';

const HeaderNav = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    return (
        <div className='flex flex-row lg:gap-[60px] lg:ml-[71px] md:gap-[40px] md:ml-[41px]'>
            {Object.entries(props.links).map(([key, value]) =>
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

const Layout = () => {
    const { user } = useAuth();
    const links = user === 'owner' ? ownerLinks : strangerLinks;
    return (
        <Page header={<HeaderNav links={links}/>}>
            <Outlet/>
        </Page>
    )
};

export default Layout;
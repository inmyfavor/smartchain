import React from 'react';
import { useLocation, Link, Outlet } from 'react-router-dom';

import classNames from 'classnames';

import Page from './Page';
import { useAuth } from '../auth';

import { links as strangerLinks } from './stranger/Data';
import { links as ownerLinks } from './owner/Data';

const HeaderNav = (props) => {
    let location = useLocation();
    return (
        <div className='flex flex-row xl:gap-[60px] xl:ml-[71px] md:gap-[40px] md:ml-[41px]'>
            {Object.entries(props.links).map(([key, value]) =>
                <Link
                    to={key}
                    className={classNames(
                        location.pathname === key ? 'text-white' : 'text-text-gray',
                        'transition-all hover:text-white text-[14px]'
                    )}
                    key={'headnav:'+key}>{value}</Link>
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
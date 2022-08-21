import React from 'react';
import { Outlet } from 'react-router-dom';

import Page from '../Page';
import HeaderNavStr from './HeaderNavStr';

const Stranger = () => {
    return (
        <Page header={<HeaderNavStr/>}>
            <Outlet/>
        </Page>
    );
};

export default Stranger;
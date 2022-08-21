import React from 'react';

import { Outlet } from 'react-router-dom';

import Page from '../Page';
import HeaderNavOwn from './HeaderNavOwn';

const Owner = () => {
    return (
        <Page header={<HeaderNavOwn/>}>
            <Outlet/>
        </Page>
    );
};

export default Owner;
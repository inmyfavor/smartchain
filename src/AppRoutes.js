import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Advertisement from './components/stranger/advertisement/Advertisement.jsx';
import Auth from './components/auth/Auth.jsx';
import MyContent from './components/mycontent/MyContent.jsx';
import Owner from './components/owner/Owner.jsx';
import ProfileOwn from './components/owner/ProfileOwn.jsx';
import ProfileStr from './components/stranger/ProfileStr.jsx';
import Stranger from './components/stranger/Stranger.jsx';
import Devices from './components/owner/devices/Devices.jsx';
import BuyAdvertisement from './components/owner/advertisement/BuyAdvertisement.jsx';

import { initialCardsStr, achievementsStr } from './components/stranger/data/DataStr';
import { initialCardsOwn, achievementsOwn } from './components/owner/data/DataOwn';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <Auth /> } /> 
                <Route path='/owner' element={ <Owner/> }>
                    <Route path='mycontent' element={ <MyContent initialCards={initialCardsOwn} achievements={achievementsOwn} /> } />
                    <Route path='profile' element={ <ProfileOwn /> } />
                    <Route path='advertisement' element={ <BuyAdvertisement /> } />
                    <Route path='devices' element={ <Devices /> } />
                </Route>
                <Route path='/stranger' element={ <Stranger/> }>
                    <Route path='mycontent' element={ <MyContent initialCards={initialCardsStr} achievements={achievementsStr}/> } />
                    <Route path='profile' element={ <ProfileStr /> } />
                    <Route path='advertisement' element={ <Advertisement /> } />
                </Route>
            </Routes> 
        </Router>
    );
};

export default AppRoutes;
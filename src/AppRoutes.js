import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthProvider, RequireAuth } from './auth';

import Advertisement from './components/advertisement/Advertisement.jsx';
import MyContent from './components/mycontent/MyContent.jsx';
import Profile from './components/Profile.jsx';
import Devices from './components/devices/Devices.jsx';
import Layout from './components/Layout';
import Auth from './components/auth/Auth';

const AppRoutes = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path='/login' element={ <Auth/> } />
                    <Route element={<RequireAuth><Layout /></RequireAuth>}>
                        <Route path='/' element={ <MyContent/> } />
                        <Route path='/devices' element={ <Devices /> } />
                        <Route path='/profile' element={ <Profile /> } />
                        <Route path='/advertisement' element={ <Advertisement /> } />
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;
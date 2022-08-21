import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Advertisement from './components/Advertisement.jsx';
import Auth from './components/auth/Auth.jsx';
import MyContent from './components/mycontent/MyContent.jsx';
import Profile from './components/Profile.jsx';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <Auth /> } /> 
                <Route path='/mycontent' element={ <MyContent /> } />
                <Route path='/profile' element={ <Profile /> } />
                <Route path='/advertisement' element={ <Advertisement /> } />
            </Routes> 
        </Router>
    );
};

export default AppRoutes;
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/auth/Auth.jsx';
import MyContent from './components/mycontent/MyContent.jsx';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <Auth /> } /> 
                <Route path='/mycontent' element={ <MyContent /> } />
            </Routes> 
        </Router>
    );
};

export default AppRoutes;
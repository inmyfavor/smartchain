import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/auth/Index.jsx';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <Index /> } /> 
            </Routes> 
        </Router>
    );
};

export default AppRoutes;
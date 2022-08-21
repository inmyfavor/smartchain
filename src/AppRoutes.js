import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './auth/Index.jsx';

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
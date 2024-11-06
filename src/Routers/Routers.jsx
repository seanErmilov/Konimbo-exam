import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import {HomePage} from "../pages/index";

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
        </Router>
    );
};

export default Routers;
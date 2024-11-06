import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { HomePage } from "../pages/index"
import { DetailsPage } from '../pages/Details/DetailsPage'

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:id" element={<DetailsPage />} />
                {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
        </Router>
    )
}

export default Routers
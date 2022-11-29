import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LayoutHOC from './hoc/layout/layout.hoc'
import Home from './pages/home'
import TrackDetail from './pages/track-details'

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<LayoutHOC />}>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/:id' element={<TrackDetail />}></Route>
                </Route>

                <Route path='*' element={<Navigate to={"/home"} />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
import  {Spin}  from "antd";
import { Suspense, lazy as ReactLazy } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LayoutHOC from './hoc/layout/layout.hoc'

const Home = ReactLazy(() => import("./pages/home"));
const TrackDetail = ReactLazy(() => import("./pages/track-details"));


function AppRoutes() {
    return (
        <Suspense fallback={<Spin size="large"/>}>
            <Router>
                <Routes>
                    <Route element={<LayoutHOC />}>
                        <Route path='/home' element={<Home />}></Route>
                        <Route path='/:id' element={<TrackDetail />}></Route>
                    </Route>

                    <Route path='*' element={<Navigate to={"/home"} />} />
                </Routes>
            </Router>
        </Suspense>

    )
}

export default AppRoutes
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RouteNav from "./RouteNav"
import RouteLogin from "./RouteLogin"
import RouteJoin from "./RouteJoin"
const MemberMain = () => {
  return (
    <BrowserRouter>
        <RouteNav /> 
        <Routes>
            <Route path="/login" element={<RouteLogin />}></Route>
            <Route path="/join" element={<RouteJoin />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default MemberMain

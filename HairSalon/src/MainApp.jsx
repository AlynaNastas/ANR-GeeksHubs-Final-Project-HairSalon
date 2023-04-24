import { Route, Routes } from "react-router-dom"
import { FooterPage } from "./components/Footer/FooterPage"
import { NavbarPage } from "./components/Navbar/NavbarPage"
import { AllUsers } from "./layout/adminSeeUsers/AllUsers"
import { AllAppoint } from "./layout/StylistViewAppoint/AllAppoint"
import { SeeAppoint } from "./layout/adminViewAppoint/SeeAppoint"
import { Home } from "./layout/Home"
import { Login } from "./layout/Login/Login"
import { UniqueProfile } from "./layout/Profile/UniqueProfile"
import { Register } from "./layout/Register/Register"



export const MainApp = () => {
  return (
    <>
    <NavbarPage/>
    <Routes>
    <Route path= '/' element={<Home/>}/>
    <Route path= '/login' element={<Login/>}/>
    <Route path= '/register' element={<Register/>}/>
    <Route path= '/profile' element={<UniqueProfile/>}/>
    <Route path= '/viewusers' element={<AllUsers/>}/>
    <Route path= '/viewapp' element={<AllAppoint/>}/>
    <Route path= '/viewadminapp' element={<SeeAppoint/>}/>
    </Routes>
    <FooterPage/>
    </>
  )
};

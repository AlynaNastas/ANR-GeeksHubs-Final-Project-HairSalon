import { Route, Routes } from "react-router-dom"
import { FooterPage } from "./components/Footer/FooterPage"
import { NavbarPage } from "./components/Navbar/NavbarPage"
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
    </Routes>
    <FooterPage/>
    </>
  )
};

import { Route, Routes } from "react-router-dom"
import { FooterPage } from "./components/Footer/FooterPage"
import { NavbarPage } from "./components/Navbar/NavbarPage"
import { Home } from "./layout/Home"
import { Login } from "./layout/Login/Login"
import { Register } from "./layout/Register/Register"



export const MainApp = () => {
  return (
    <>
    <NavbarPage/>
    <Routes>
    <Route path= '/' element={<Home/>}/>
    <Route path= '/login' element={<Login/>}/>
    <Route path= '/register' element={<Register/>}/>
    </Routes>
    <FooterPage/>
    </>
  )
};

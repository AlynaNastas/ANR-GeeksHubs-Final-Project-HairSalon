import { Route, Routes } from "react-router-dom"
import { FooterPage } from "./components/Footer/FooterPage"
import { NavbarPage } from "./components/Navbar/NavbarPage"
import { Home } from "./layout/Home"
import { Login } from "./layout/Login/Login"



export const MainApp = () => {
  return (
    <>
    <NavbarPage/>
    <Routes>
    <Route path= '/' element={<Home/>}/>
    <Route path= '/login' element={<Login/>}/>
    </Routes>
    <FooterPage/>
    </>
  )
};

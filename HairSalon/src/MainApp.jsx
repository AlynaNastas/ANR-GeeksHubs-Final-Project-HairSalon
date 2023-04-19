import { Route, Routes } from "react-router-dom"
import { FooterPage } from "./components/Footer/FooterPage"
import { NavbarPage } from "./components/Navbar/NavbarPage"
import { Home } from "./layout/Home"



export const MainApp = () => {
  return (
    <>
    <NavbarPage/>
    <Routes>
    <Route path= '/' element={<Home/>}/>
    </Routes>
    <FooterPage/>
    </>
  )
}

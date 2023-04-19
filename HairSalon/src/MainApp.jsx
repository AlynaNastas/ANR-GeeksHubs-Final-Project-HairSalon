import { Route, Routes } from "react-router-dom"
import { FooterPage } from "./components/Footer/FooterPage"
import { Home } from "./layout/Home"



export const MainApp = () => {
  return (
    <>

    <Routes>
    <Route path= '/home' element={<Home/>}/>


    </Routes>
    <FooterPage/>
    </>
  )
}

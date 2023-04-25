import { Route, Routes } from "react-router-dom"
import { FooterPage } from "./components/Footer/FooterPage"
import { NavbarPage } from "./components/Navbar/NavbarPage"
import { AllUsers } from "./layout/admin/AllUsers"
import { AllAppoint } from "./layout/stylist/AllAppoint"
import { SeeAppoint } from "./layout/admin/SeeAppoint"
import { Home } from "./layout/Home"
import { Login } from "./layout/Login/Login"
import { UniqueProfile } from "./layout/user/UniqueProfile"
import { Register } from "./layout/Register/Register"
import { CreateAppoint } from "./layout/user/createAppoint"
import { ViewUserRole } from "./layout/admin/ViewUserRole"
import { UserAppoint } from "./layout/user/UserAppoint"
import { SeeUsers } from "./layout/stylist/SeeUsers"
import { UpdateProfile } from "./layout/user/UpdateProfile"




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
    <Route path= '/scheduleappointment' element={<CreateAppoint/>}/>
    <Route path= '/roles' element={<ViewUserRole/>}/>
    <Route path= '/appointments' element={<UserAppoint/>}/>
    <Route path= '/usersbystylist' element={<SeeUsers/>}/>
    <Route path= '/updateprofile' element={<UpdateProfile/>}/>
  
    </Routes>
    <FooterPage/>
    </>
  )
};

import { Route, Routes } from "react-router-dom";
import { FooterPage } from "./components/Footer/FooterPage";
import { NavbarPage } from "./components/Navbar/NavbarPage";
import { AllUsers } from "./layout/admin/AllUsers";
import { AllAppoint } from "./layout/stylist/AllAppoint";
import { SeeAppoint } from "./layout/admin/SeeAppoint";
import { Home } from "./layout/Home";
import { Login } from "./layout/Login/Login";
import { UniqueProfile } from "./layout/user/UniqueProfile";
import { Register } from "./layout/Register/Register";
import { CreateAppoint } from "./layout/user/createAppoint";
import { UserAppoint } from "./layout/user/UserAppoint";
import { SeeUsers } from "./layout/stylist/SeeUsers";
import { UpdateProfile } from "./layout/user/UpdateProfile";
import { Team } from "./layout/Team";
import { Services } from "./layout/Services";
import { Treatments } from "./layout/Treatments";
import { Reviews } from "./layout/Reviews";
import { Ourhistry } from "./layout/Ourhistry";




export const MainApp = () => {
  return (
    <>
      <NavbarPage />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<UniqueProfile />} />
        <Route path='/viewusers' element={<AllUsers />} />
        <Route path='/viewapp' element={<AllAppoint />} />
        <Route path='/viewadminapp' element={<SeeAppoint />} />
        <Route path='/scheduleappointment' element={<CreateAppoint />} />
        <Route path='/appointments' element={<UserAppoint />} />
        <Route path='/usersbystylist' element={<SeeUsers />} />
        <Route path='/updateprofile' element={<UpdateProfile />} />
        <Route path='/team' element={<Team />} />
        <Route path='/services' element={<Services />} />
        <Route path='/treatments' element={<Treatments />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/history' element={<Ourhistry />} />
      </Routes>
      <FooterPage />
    </>
  );
};

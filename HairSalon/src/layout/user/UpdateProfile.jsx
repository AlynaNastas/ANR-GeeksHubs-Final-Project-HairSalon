import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UpdatePro } from "../../services/apiCalls";
import { userData } from "../../userSlice";

export const UpdateProfile = () => {

    const ReduxCredentials = useSelector(userData);
    const ReduxAppointment = useSelector(appointmentData)
    const [welcome, setWelcome] = useState("");
    const navigate = useNavigate();
    console.log(ReduxAppointment, "this is Redux Appointment")
    let params = ReduxAppointment.choosenAppointment.id
 
    const [appointments, setAppointments] = useState({
        id: params,
        name:"",
        surname:"",
        email:"",
        password:"",
        birth_date:"",
        phone:""
      });
      const inputHandler = (e) => {
        setAppointments((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
    const checkError = (e) => { }
    const updateAppoinment = () => {
        UpdatePro(params, appointments, ReduxCredentials.credentials.token)
      .then( (resultado) => {
              setAppointments(resultado.data)
              setWelcome(`Appointment modify correctly: ${appointments.date}`);
              setTimeout(()=>{
                  navigate('/appointment');
              },3500);
          })
          .catch(error => {
              setAppointments(error.message);
          });
  }

}

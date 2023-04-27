import { useState } from "react";
import { useSelector } from "react-redux";
import { UpdatePro } from "../../services/apiCalls";
import { userData } from "../../userSlice";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { InputPage } from "../../components/Input/InputPage";
import { Navigate, useNavigate } from "react-router-dom";

export const UpdateProfile = () => {

    const credentialRdx = useSelector(userData)

    
    const navigate = useNavigate();


    console.log(credentialRdx)

 
    const [profile, setProfile] = useState({
        id: credentialRdx.credentials.usuario.userId,
        // name:"",
        // surname:"",
        //email:"",
        //password:"",
        // birth_date:"",
        phone:""
      });
      const inputHandler = (e) => {
        setProfile((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
    const checkError = (e) => { }
    const buttonUp = () => {
        UpdatePro(profile, credentialRdx?.credentials?.token)
      .then(navigate('/profile'))
            
              
          .catch(error => 
              console.log(credentialRdx.credentials.token)
          );
  }
console.log(profile, "lalalal")

return (

  <div className='Reg'>
      <Container className='boody'>
          <Form>

              <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <InputPage
                      className={'InputBasic'}
                      type={'name'}
                      name={'name'}
                      placeholder={credentialRdx.credentials.usuario.name}
                      changeFunction={(e) => inputHandler(e)}
                      blurFunction={(e) => checkError(e)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSurname">
                  <Form.Label>Surname</Form.Label>
                  <InputPage
                      className={'InputBasic'}
                      type={'text'}
                      name={'surname'}
                      placeholder={credentialRdx.credentials.usuario.surname}
                      changeFunction={(e) => inputHandler(e)}
                      blurFunction={(e) => checkError(e)} />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <InputPage
                      className={'InputBasic'}
                      type={'text'}
                      name={'email'}
                      placeholder={credentialRdx.credentials.usuario.email}
                      changeFunction={(e) => inputHandler(e)}
                      blurFunction={(e) => checkError(e)} />
              </Form.Group> */}

              <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Phone</Form.Label>
                  <InputPage
                      className={'InputBasic'}
                      type={'text'}
                      name={'phone'}
                      placeholder={credentialRdx.credentials.usuario.phone}
                      changeFunction={(e) => inputHandler(e)}
                      blurFunction={(e) => checkError(e)} />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>New password</Form.Label>
                  <InputPage
                      className={'InputBasic'}
                      type={'password'}
                      name={'password'}
                      placeholder={''}
                      changeFunction={(e) => inputHandler(e)}
                      blurFunction={(e) => checkError(e)} />
              </Form.Group>  */}


              <div className='button2'>
                  <Button
                      onClick={buttonUp} variant="primary">
                      Submit
                  </Button>
              </div>
          </Form>
      </Container>
  </div>

);
}

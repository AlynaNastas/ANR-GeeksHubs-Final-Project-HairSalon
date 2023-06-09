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


    const [profile, setProfile] = useState({
        id: credentialRdx.credentials.usuario.userId,
        name: "",
        surname: "",
        birth_date: "",
        phone: ""
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

    return (


        <Container className='simpleFont mt-5 m-b5 '>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <InputPage
                        className={'InputBasic'}
                        type={'name'}
                        name={'name'}
                        placeholder={credentialRdx.credentials.usuario.name}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                        maxLength={60} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSurname">
                    <Form.Label>Surname</Form.Label>
                    <InputPage
                        className={'InputBasic'}
                        type={'text'}
                        name={'surname'}
                        placeholder={credentialRdx.credentials.usuario.surname}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                        maxLength={100} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSurname">
                    <Form.Label>Birth date</Form.Label>
                    <InputPage
                        className={'InputBasic'}
                        type={'date'}
                        name={'birth_date'}
                        placeholder={credentialRdx.credentials.usuario.birth_date}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <InputPage
                        className={'InputBasic'}
                        type={'text'}
                        name={'phone'}
                        placeholder={credentialRdx.credentials.usuario.phone}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                        maxLength={15} />
                </Form.Group>


                <div className='button2'>
                    <Button
                        onClick={buttonUp} variant="dark">
                        Submit
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

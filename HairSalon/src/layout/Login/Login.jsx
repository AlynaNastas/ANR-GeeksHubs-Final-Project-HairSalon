import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { InputPage } from '../../components/Input/InputPage';
import { useEffect, useState } from 'react';
import { validation } from '../../helpers/Validations';
import { logMe } from '../../services/apiCalls';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, userData } from '../../userSlice';
import { decodeToken } from "react-jwt";
import './Login.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';






export const Login = () => {

    const credentialsRdx = useSelector(userData);
    console.log(credentialsRdx)

    const navigate = useNavigate();

    const dispatch = useDispatch();


    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })


    const inputHandler = (e) => {
        setCredentials((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value,
        }));
    }



    const [credentialsError, setCredentialsError] = useState({
        emailError: '',
        passwordError: '',
    });


    const [validatedCredentials, setValidationCredentials] = useState({
        emailValidated: false,
        passwordValidated: false,
    })



    const [loginAct, setLoginAct] = useState(false);


    const [welcome, setWelcome] = useState("");



    useEffect(() => {

        console.log(credentials)
        for (let error in credentialsError) {
            if (credentialsError[error] !== "") {
                setLoginAct(false);
                return;
            }
        }

        for (let nothing in credentials) {
            if (credentials[nothing] === "") {
                setLoginAct(false);
                return;
            }
        }

        for (let validation in validatedCredentials) {
            if (validatedCredentials[validation] === false) {
                setLoginAct(false);
                return;
            }
        }

        setLoginAct(true);
    });


    useEffect(() => {
        if (credentialsRdx.credentials.token) {
            navigate("/login");
        }
    }, []);

    const checkError = (e) => {

        let error = "";

        const validat = validation(
            e.target.name,
            e.target.value,
            e.target.required
        );

        error = validat.message;



        setValidationCredentials((previousState) => ({
            ...previousState,
            [e.target.name + "Validated"]: validat.validation,
        }));


        setCredentialsError((previouState) => ({
            ...previouState,
            [e.target.name + "Error"]: error,
        }));
    };


    const logmee = () => {

        logMe(credentials)
            .then(
                respuesta => {
                    let decodificado = decodeToken(respuesta.data)
                    console.log(respuesta.data, 'hey hey')
                    let datosBackend = {
                        token: respuesta.data,
                        usuario: decodificado

                    }


                    dispatch(login({ credentials: datosBackend }));


                    setWelcome(`Hi, there! ${datosBackend.usuario.name}`);



                    setTimeout(() => {
                        navigate("/home");
                    }, 3000);
                }
            )
            .catch(error => console.log(error))

    };
    return (
        <div className="logDesign">
            {welcome !== "" ? (
                <div>{welcome}</div>
            ) : (

                <div className='Main'>
                
                    <Container className='simpleFont'>
                    <Row className='justify-content-center' >
                    <Col xs={12} sm={8} lg={4} >
                        <div>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>

                                    <InputPage
                                        className={'InputBasic'}
                                        type={"email"}
                                        name={'email'}
                                        placeholder={"Enter email"}
                                        changeFunction={(e) => inputHandler(e)}
                                        blurFunction={(e) => checkError(e)} />

                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                    <div className='RedError'>{credentialsError.emailError}</div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <InputPage
                                        className={'InputBasic'}
                                        type={'password'}
                                        name={'password'}
                                        placeholder={'Introduce your password'}
                                        changeFunction={(e) => inputHandler(e)}
                                        blurFunction={(e) => checkError(e)} />
                                    <div className='RedError'>{credentialsError.passwordError} </div>
                                </Form.Group>
                                <div className='button2'>
                                <Button 
                                        onClick={loginAct ? () => { logmee(); } : () => { }} variant="dark">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </div>
                        </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </div>
    );
};
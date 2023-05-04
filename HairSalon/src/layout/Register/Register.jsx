import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { InputPage } from '../../components/Input/InputPage';
import { validation } from '../../helpers/Validations';
import { registUser } from '../../services/apiCalls';
import './Register.css';



export const Register = () => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        birth_date: '',
        phone: '',

    })

    const inputHandler = (e) => {
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const [credentialsError, setCredentialsError] = useState({
        nameError: '',
        surnameError: '',
        emailError: '',
        passwordError: '',
        birth_dateError: '',
        phoneError: '',

    });

    const [validatedCredentials, setValidationCredentials] = useState({
        nameValidated: '',
        surnameValidated: '',
        emailValidated: '',
        passwordValidated: '',
        birth_dateValidated: '',
        phoneValidated: '',

    });

    const [registerAct, setRegisterAct] = useState(false);





    useEffect(() => {

        for (let error in credentialsError) {
            if (credentialsError[error] !== "") {
                setRegisterAct(false);
                return;
            }
        }

        for (let nothing in credentials) {
            if (credentials[nothing] === "") {
                setRegisterAct(false);
                return;
            }
        }

        for (let validation in validatedCredentials) {
            if (validatedCredentials[validation] === false) {
                setRegisterAct(false);
                return;
            }
        }


        setRegisterAct(true);
    });


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

    const registerMe = () => {

        registUser(credentials)
            .then((results) => {
                console.log(results)
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <Container className='simpleFont mt-5 mb-5'>
                <Row className='justify-content-center' >
                    <Col xs={12} sm={10} lg={8} >
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <InputPage
                                    className={'inputBasic'}
                                    type={"text"}
                                    name={'name'}
                                    placeholder={"Enter Name"}
                                    changeFunction={(e) => inputHandler(e)}
                                    blurFunction={(e) => checkError(e)}
                                    maxLength={100} />
                                <Form.Text className="text-muted">
                                    We'll never share your private information with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <div className='RedError'>{credentialsError.nameError}</div>

                            <Form.Group className="mb-3" controlId="formBasicSurname">
                                <Form.Label>Surname</Form.Label>
                                <InputPage
                                    className={'inputBasic'}
                                    type={"text"}
                                    name={'surname'}
                                    placeholder={"Enter Surname"}
                                    changeFunction={(e) => inputHandler(e)}
                                    blurFunction={(e) => checkError(e)}
                                    maxLength={110} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <div className='RedError'>{credentialsError.surnameError}</div>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email adress</Form.Label>
                                <InputPage
                                    className={'inputBasic'}
                                    type={"email"}
                                    name={'email'}
                                    placeholder={"Enter email"}
                                    changeFunction={(e) => inputHandler(e)}
                                    blurFunction={(e) => checkError(e)}
                                    required={true}
                                    maxLength={50}
                                />

                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                                <div className='RedError'>{credentialsError.emailError}</div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <InputPage
                                    className={'inputBasic'}
                                    type={'password'}
                                    name={'password'}
                                    placeholder={'Introduce your password'}
                                    changeFunction={(e) => inputHandler(e)}
                                    blurFunction={(e) => checkError(e)}
                                    required={true}
                                    maxLength={30}
                                />
                            </Form.Group>
                            <div className='RedError'>{credentialsError.passwordError}</div>

                            <Form.Group className="mb-3" controlId="formBasicBirth">
                                <Form.Label>Birth Date</Form.Label>
                                <InputPage
                                    className={'inputBasic'}
                                    type={"date"}
                                    name={'birth_date'}
                                    placeholder={"Enter your date of birth"}
                                    changeFunction={(e) => inputHandler(e)}
                                    blurFunction={(e) => checkError(e)}
                                    required={true}
                                />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <div className='RedError'>{credentialsError.birth_dateError}</div>

                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label>Phone</Form.Label>
                                <InputPage
                                    className={'inputBasic'}
                                    type={"text"}
                                    name={'phone'}
                                    placeholder={"Enter your phone number"}
                                    changeFunction={(e) => inputHandler(e)}
                                    blurFunction={(e) => checkError(e)}
                                    required={true}
                                    maxLength={15}
                                />
                                <Form.Text className="text-muted">
                                    Phone number must include country code ex. (+00)
                                </Form.Text>
                                <div className='RedError'>{credentialsError.phoneError}</div>
                            </Form.Group>
                            <Button onClick={() => registerMe()} variant="dark"> Submit </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

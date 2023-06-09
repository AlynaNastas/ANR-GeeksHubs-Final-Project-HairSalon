import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/Container';
import { useState } from "react";
import { useSelector } from "react-redux";
import { createAppointment, getServices } from "../../services/apiCalls";
import { userData } from "../../userSlice";
import { InputPage } from '../../components/Input/InputPage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export const CreateAppoint = () => {
    const credentialsRdx = useSelector(userData);


    const navigate = useNavigate();

    const [stylists, setStylists] = useState([
        {
            id: 1,
            stylistname: "Alyna Nastas Romaniuc"
        },
        {
            id: 2,
            stylistname: "Giota Chamakioti"
        }
    ]);


    const [appointments, setAppointments] = useState({

        stylist_id: "",
        service_id: "",
        date: "",
        comments: ""
    });

    
    const [services, setServices] = useState([

    ]);


    const inputHandler = (e) => {
        setAppointments((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value,
        }));
    }

    const checkError = (e) => { };


    useEffect(() => {
        if (services.length === 0) {


            getServices(credentialsRdx.credentials?.token)
                .then(result => {
                    setServices(result.data)
                }
                )
                .catch(error => console.log(error));
        }
    }, [services])


    const buttonApp = () => {

        createAppointment(appointments, credentialsRdx.credentials.token)
            .then(result => {
                setAppointments(result.data)
            }).catch(error => { setAppointments(error.message) })

        setTimeout(() => {
            navigate("/appointments");
        }, 250)
    }



    return (

        <div>
            <Container className='simpleFont mt-5 mb-5'>
                <Row className='justify-content-center' >
                    <Col xs={12} sm={10} lg={8} >
                        <Form>
                            <Form.Label>Stylist:</Form.Label>
                            <Form.Select name={"stylist_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                <option>Choose</option>
                                {stylists.map((style) => {
                                    return (
                                        <option key={style.id} value={style.id}>{style.stylistname}</option>
                                    )
                                })}
                            </Form.Select>
                            <Form.Label>Services:</Form.Label>
                            <Form.Select name={"service_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                <option>Choose</option>
                                {services.map((treatment) => {
                                    return (
                                        <option key={treatment.id} value={treatment.id}>{treatment.name}</option>
                                    )
                                })}
                            </Form.Select>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Time slot</Form.Label>
                                <InputPage
                                    className={'InputBasic'}
                                    type={'date'}
                                    name={'date'}
                                    placeholder={''}
                                    changeFunction={(e) => inputHandler(e)}
                                    blurFunction={(e) => checkError(e)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Reason for you visit</Form.Label>
                                <InputPage
                                    className={'InputBasic'}
                                    type={'text'}
                                    name={'comments'}
                                    placeholder={''}
                                    changeFunction={(e) => inputHandler(e)}
                                    blurFunction={(e) => checkError(e)} />
                            </Form.Group>

                            <div className='button2'>
                                <Button
                                    onClick={buttonApp} variant="dark">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}






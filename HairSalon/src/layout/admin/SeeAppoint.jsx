import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAppointAdmin, viewAdminapp } from "../../services/apiCalls";
import { userData } from "../../userSlice";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";
import "./SeeAppoint.css"




export const SeeAppoint = () => {

    const credentialRdx = useSelector(userData)

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const [appointments, setAppointments] = useState([]);


    useEffect(() => {
    if(appointments.length === 0) {   
        viewAdminapp(credentialRdx.credentials?.token)
            .then( result => {
                    setAppointments(result.data)
                }
            )
            .catch(error => console.log(error));
        }
    }, [appointments])
    console.log(appointments)

    const selected = (app2) => {
console.log(app2)
        deleteAppointAdmin(app2.id, credentialRdx.credentials.token)

              //setWelcome(`deleted correctly`);

    
}

    return (
                <div>
                    {appointments.length > 0 ? (
                        <div>
                            {
                                appointments.map(
                                    app => {
                                        return (
                                <>
                                    <Container className="blackFont container-fluid mt-5 mb-5 text-center">
                                        
                                        <Card>
                                        <Row>
                                            <Card.Body className="colour"
                                                key={app.id} >
                                                <Card.Title>Name:&nbsp; {app?.Client?.User?.name} </Card.Title>
                                                <Card.Title>Surname:&nbsp; {app?.Client?.User?.surname} </Card.Title>
                                                <Card.Title>Stylist:&nbsp; {app.stylist_id} </Card.Title>
                                                <Card.Title>Service:&nbsp; {app?.Service?.name} </Card.Title>
                                                <Card.Title>Price:&nbsp; {app?.Service?.price} £ </Card.Title>
                                                <Card.Title>Date:&nbsp; {app.date} </Card.Title>
                                                <Card.Title>Comments:&nbsp; {app.comments}</Card.Title>
                                                <Button onClick={()=>selected(app)} variant="light">Delete</Button>{' '}
                                                </Card.Body>
                                                </Row>
                                            </Card>
                                            
                                    </Container>
                                </>
                                        );
                                    }
                                )
                            }
                        </div>
                    ) : (
                        <Spinner animation="border" />
                    )}
            </div>
    
    )
}

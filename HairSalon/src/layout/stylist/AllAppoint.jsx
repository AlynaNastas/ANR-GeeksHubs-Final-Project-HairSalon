import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { viewAppointments } from "../../services/apiCalls";
import { userData } from "../../userSlice";


export const AllAppoint = () => {

    const credentialRdx = useSelector(userData)


    const [appointments, setAppointments] = useState([]);


    useEffect(() => {
        if (appointments.length === 0) {
            viewAppointments(credentialRdx.credentials?.token)
                .then(result => {
                    setAppointments(result.data)
                }
                )
                .catch(error => console.log(error));
        }
    }, [appointments])

    return (
        <div className="Center">
            {appointments.length > 0 ? (
                <div>
                    {
                        appointments.map(
                            app => {
                                return (
                                    <>
                                        <Container className="blackFont container-fluid mt-5 mb-5 text-center">
                                            <Card>
                                                <Card.Body className='colour'
                                                    onClick={() => selected(app)}
                                                    key={app.id} >
                                                    <Card.Title>Name:&nbsp; {app?.Client?.User?.name} </Card.Title>
                                                    <Card.Title>Surname:&nbsp; {app?.Client?.User?.surname} </Card.Title>
                                                    <Card.Title>Stylist:&nbsp; {app.stylist_id} </Card.Title>
                                                    <Card.Title>Service:&nbsp; {app?.Service?.name} </Card.Title>
                                                    <Card.Title>Price:&nbsp; {app?.Service?.price} £ </Card.Title>
                                                    <Card.Title>Date:&nbsp; {app.date} </Card.Title>
                                                    <Card.Title>Comments:&nbsp; {app.comments}</Card.Title>
                                                </Card.Body>
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
    );
}

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { viewAdminapp } from "../../services/apiCalls";
import { userData } from "../../userSlice";
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';


export const SeeAppoint = () => {

    const credentialRdx = useSelector(userData)


    const [appointments, setAppointments] = useState([]);


    useEffect(() => {
    if(appointments.length === 0) {   
        viewAdminapp(credentialRdx.credentials?.token)
            .then( result => {
                    setAppointments(result.data)
                    console.log(result.data)
                }
            )
            .catch(error => console.log(error));
        }
    }, [appointments])
    console.log(appointments)

    return (
                <div className="Center">
                    {appointments.length > 0 ? (
                        <div>
                            {
                                appointments.map(
                                    app => {
                                        return (
                                <>
                                    <Container className='Center' >
                                        <Card>
                                            <Card.Body
                                                onClick={() => selected(app)}
                                                key={app.id} >
                                                <Card.Title>Name:&nbsp; {app?.Client?.User?.name} </Card.Title>
                                                <Card.Title>Surname:&nbsp; {app?.Client?.User?.surname} </Card.Title>
                                                <Card.Title>Stylist:&nbsp; {app.stylist_id} </Card.Title>
                                                <Card.Title>Service:&nbsp; {app?.Service?.name} </Card.Title>
                                                <Card.Title>Price:&nbsp; {app?.Service?.price} </Card.Title>
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
                        <div>coming ... </div>
                    )}
               </div>
    
    )
}
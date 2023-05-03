import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAppoint, UserAppointments } from "../../services/apiCalls";
import { userData } from "../../userSlice";
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';
import Button from "react-bootstrap/esm/Button";


export const UserAppoint = () => {

    const [user, setUser] = useState([]);

    const RdxCredentials = useSelector(userData);


    const navigate = useNavigate();


    useEffect(() => {

        if (user.length === 0) {
            UserAppointments(RdxCredentials.credentials.token)
                .then(
                    result => {
                        setUser(result.data)
                    }
                )
                .catch(error => console.log(error))
        }

    }, [])


    const selected = (unique) => {

        deleteAppoint(unique.id, RdxCredentials.credentials.token)

        setTimeout(() => {
            navigate("/");
        }, 250)
    }
    return (
        <div>
            <Container className="simpleFont">
                {user.length > 0 ?
                    (<div>
                        {
                            user.map(
                                unique => {
                                    return (
                                        <>
                                            <Container className="blackFont container-fluid mt-5 mb-5 text-center">
                                                <Card>
                                                    <Card.Body className="colour"
                                                        key={unique.id} >
                                                        <Card.Title>Name:&nbsp; {unique?.Client?.User.name} </Card.Title>
                                                        <Card.Title>Surname:&nbsp; {unique?.Client?.User.surname} </Card.Title>
                                                        <Card.Title>Date:&nbsp; {unique?.date} </Card.Title>
                                                        <Card.Title>Treatment name:&nbsp; {unique?.Service?.name} </Card.Title>
                                                        <Card.Title>Price:&nbsp; {unique?.Service?.price} £ </Card.Title>
                                                        <Button onClick={() => selected(unique)} variant="light">Delete</Button>{' '}
                                                    </Card.Body>
                                                </Card>
                                            </Container>
                                        </>
                                    )
                                }
                            )
                        }
                    </div>)
                    :
                    (<div className="blackFont">Appointments not found</div>)
                }
            </Container>
        </div>
    );
}

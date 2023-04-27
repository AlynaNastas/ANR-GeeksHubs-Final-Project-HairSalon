import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAppoint, UserAppointments } from "../../services/apiCalls";
import { userData } from "../../userSlice";
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';
import Button from "react-bootstrap/esm/Button";

export const UserAppoint = () => {

    const [user, setUser] = useState([]);

    const RdxCredentials = useSelector(userData);




    const dispatch = useDispatch();
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
            <Container>

                {user.length > 0 ?

                    (<div>
                        {
                            user.map(
                                unique => {

                                    return (

                                        <>
                                            <Container >
                                                <Card className='midiumCard'>
                                                    <Card.Body
                                                        key={unique.id} >
                                                        <Card.Title>Name:&nbsp; {unique?.Client?.User.name} </Card.Title>
                                                        <Card.Title>Surname:&nbsp; {unique?.Client?.User.surname} </Card.Title>
                                                        <Card.Title>Date:&nbsp; {unique?.date} </Card.Title>
                                                        <Card.Title>Treatment name:&nbsp; {unique?.Service?.name} </Card.Title>
                                                        <Card.Title>Price:&nbsp; {unique?.Service?.price} £ </Card.Title>
                                                        <Button onClick={()=>selected(unique)} variant="light">Delete</Button>{' '}
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

                    (<div>Appointments not found</div>)

                }

            </Container>
        </div>
    )
}

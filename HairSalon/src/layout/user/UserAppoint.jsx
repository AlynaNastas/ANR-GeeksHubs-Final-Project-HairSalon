import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addChoosen } from "../../detailSlice";
import { UserAppointments } from "../../services/apiCalls";
import { userData } from "../../userSlice";
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';

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

    }, [user])
    console.log(user)

    const selected = (choosen) => {

        dispatch(addChoosen({ choosenObject: choosen }))

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
                                            <Container className='Center' >
                                                <Card>
                                                    <Card.Body
                                                        onClick={() => selected(unique)}
                                                        key={unique.id} >
                                                        <Card.Title>Name:&nbsp; {unique?.Client?.User.name} </Card.Title>
                                                        <Card.Title>Surname:&nbsp; {unique?.Client?.User.surname} </Card.Title>
                                                        <Card.Title>Date:&nbsp; {unique?.date} </Card.Title>
                                                        <Card.Title>Treatment name:&nbsp; {unique?.Service?.name} </Card.Title>
                                                        <Card.Title>Price:&nbsp; {unique?.Service?.price} </Card.Title>
                                                        <Card.Title>Stylist:&nbsp; {unique?.stylist_id} </Card.Title>
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

                    (<div>coming...</div>)

                }

            </Container>
        </div>
  )
}

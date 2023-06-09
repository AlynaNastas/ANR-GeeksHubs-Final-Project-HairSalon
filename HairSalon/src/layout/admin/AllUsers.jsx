import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bringUsers } from "../../services/apiCalls";
import { userData } from "../../userSlice";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import "./AllUsers.css"


export const AllUsers = () => {

    const [user, setUser] = useState([]);

    const RdxCredentials = useSelector(userData);


    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {

        if (user.length === 0) {
            bringUsers(RdxCredentials.credentials.token)
                .then(
                    result => {
                        setUser(result.data)
                    }
                )
                .catch(error => console.log(error))
        }

    }, [user])

    const selected = () => {
        setTimeout(() => {
            navigate("/appointments");
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
                                            <Container className="blackFont container-fluid mt-5 mb-5 text-center"> 
                                                <Card>
                                                    <Card.Body className="colour"
                                                        onClick={() => selected()}
                                                        key={unique.id} >
                                                        <Card.Title>Name:&nbsp; {unique.name} </Card.Title>
                                                        <Card.Title>Surname:&nbsp; {unique.surname} </Card.Title>
                                                        <Card.Title>Email:&nbsp; {unique.email} </Card.Title>
                                                        <Card.Title>Phone:&nbsp; {unique.phone} </Card.Title>
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
                    (<Spinner animation="border" />)
                }
            </Container>
        </div>
    );
}

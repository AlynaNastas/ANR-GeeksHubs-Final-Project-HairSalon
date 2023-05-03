import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData } from "../../userSlice";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { UsersByStylist } from "../../services/apiCalls";


export const SeeUsers = () => {

    const [user, setUser] = useState([]);

    const RdxCredentials = useSelector(userData);


    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {

        if (user.length === 0) {
            UsersByStylist(RdxCredentials.credentials.token)
                .then(
                    result => {
                        setUser(result.data)
                    }
                )
                .catch(error => console.log(error))
        }

    }, [user])

    const selected = (byProfessional) => {

        dispatch(addChoosen({ choosenObject: byProfessional }))

        setTimeout(() => {
            navigate("/roles");
        }, 250)
    }
    return (
        <div>
            <Container>

                {user.length > 0 ?

                    (<div>
                        {
                            user.map(
                                pro => {
                                    return (

                                        <>
                                            <Container className="blackFont container-fluid mt-5 mb-5 text-center">
                                                <Card>
                                                    <Card.Body className="colour"
                                                        onClick={() => selected(pro)}
                                                        key={pro.id} >
                                                        <Card.Title>Name:&nbsp; {pro.name} </Card.Title>
                                                        <Card.Title>Surname:&nbsp; {pro.surname} </Card.Title>
                                                        <Card.Title>Email:&nbsp; {pro.email} </Card.Title>
                                                        <Card.Title>Phone:&nbsp; {pro.phone} </Card.Title>
                                                        <Card.Title>Birth date:&nbsp; {pro.birth_date} </Card.Title>
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
  )
}

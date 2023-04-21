import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUserProfile } from '../../services/apiCalls';
import { userData } from '../../userSlice';


export const UniqueProfile = () => {

    const credentialsRdx = useSelector(userData);

    const [user, setUser] = useState({
        name: "",
        surname: "",
        birth_date: "",
        email: "",
        phone: ""
    });

    useEffect(() => {


        if (user.name === "") {
            getUserProfile(credentialsRdx?.credentials?.token)

                .then((result) => {

                    setUser({

                        name: result.data.name,
                        surname: result.data.surname,
                        birth_date: result.data.birth_date,
                        email: result.data.email,
                        phone: result.data.phone,
                    });
                })
                .catch((error) => console.log(error));
        }

    }, []);
    return (

        <>

            <Container className='Center' >
                <Card>
                    <Card.Body>
                        <Card.Title>Name:&nbsp; {user.name} </Card.Title>
                        <Card.Title>Surname:&nbsp; {user.surname} </Card.Title>
                        <Card.Title>Birth date:&nbsp; {user.birth_date} </Card.Title>
                        <Card.Title>Email:&nbsp; {user.email} </Card.Title>
                        <Card.Title>Phone:&nbsp; {user.phone} </Card.Title>
                    </Card.Body>
                </Card>
            </Container>

        </>
    )
}

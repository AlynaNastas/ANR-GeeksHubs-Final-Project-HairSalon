import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { viewRoles } from "../../services/apiCalls";
import { userData } from "../../userSlice";
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';


export const ViewUserRole = () => {

    const credentialRdx = useSelector(userData)


    const [roles, setRoles] = useState([]);


    useEffect(() => {
    if(roles.length === 0) {   
        viewRoles(credentialRdx.credentials?.token)
            .then( result => {
                    setRoles(result)
                    console.log(result)
                }
            )
            .catch(error => console.log(error));
        }
    }, [roles])
    console.log(roles)

    return (
                <div className="Center">
                    {roles.length > 0 ? (
                        <div>
                            {
                                roles.map(
                                    role => {
                                        return (
                                <>
                                    <Container className='Center' >
                                        <Card>
                                            <Card.Body
                                                onClick={() => selected(role)}
                                                key={role.id} >
                                                <Card.Title>Name:&nbsp; {role?.Client?.User?.name} </Card.Title>
                                                <Card.Title>Surname:&nbsp; {role?.Client?.User?.surname} </Card.Title>
                                                <Card.Title>Email:&nbsp; {role.stylist_id} </Card.Title>
                                                <Card.Title>Birth date:&nbsp; {role?.Service?.name} </Card.Title>
                                                <Card.Title>Phone:&nbsp; {role?.Service?.price} </Card.Title>
                                                <Card.Title>Role:&nbsp; {role?.Usuraio?.Role} </Card.Title>
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

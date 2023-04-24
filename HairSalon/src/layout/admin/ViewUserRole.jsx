import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewRoles } from "../../services/apiCalls";
import { userData } from "../../userSlice";
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';
import { detailData } from "../../detailSlice";



export const ViewUserRole = () => {

    const credentialRdx = useSelector(userData)
    const credRdx = useSelector(detailData)
 

    const [roles, setRoles] = useState([]);

    const params = credRdx.choosenObject.id
    console.log(params)


    useEffect(() => {
    if(roles.length === 0) {   
        viewRoles(params,credentialRdx.credentials?.token)
            .then( result => {
                    setRoles(result.data)
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
                                    params => {
                                        return (
                                <>
                                    <Container className='Center' >
                                        <Card>
                                            <Card.Body
                                                onClick={() => selected(params)}
                                                key={params.id} >
                                                <Card.Title>Roles:&nbsp; {params?.Roles?.privilege} </Card.Title>
                                                <Card.Title>Name:&nbsp; {params?.Roles?.name} </Card.Title>
                                                <Card.Title>Surname:&nbsp; {params.Roles?.surname} </Card.Title>
                                                <Card.Title>Birth date:&nbsp; {params?.Roles?.birth_date} </Card.Title>
                                                <Card.Title>Phone:&nbsp; {params?.Roles?.phone} </Card.Title>
                                                <Card.Title>Email:&nbsp; {params?.Roles?.email} </Card.Title>
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

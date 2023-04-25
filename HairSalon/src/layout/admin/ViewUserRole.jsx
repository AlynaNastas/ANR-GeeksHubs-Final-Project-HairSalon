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
    console.log(roles, "jjj")

    return (
                <div className="Center">
                    {roles.length > 0 ? (
                        <div>
                            {
                                roles.map(
                                    privilege => {
                                        return (
                                <>
                                    <Container className='Center' >
                                        <Card>
                                            <Card.Body
                                                onClick={() => selected(pro)}
                                                key={privilege.id} >
                                    
                                                <Card.Title>Name:&nbsp; {privilege?.name} </Card.Title>
                                            
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

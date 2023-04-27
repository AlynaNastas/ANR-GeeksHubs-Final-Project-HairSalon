import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewRoles } from "../../services/apiCalls";
import { userData } from "../../userSlice";
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';
import Form from 'react-bootstrap/Form';
import { detailData } from "../../detailSlice";
import { InputPage } from "../../components/Input/InputPage";
import Button from "react-bootstrap/esm/Button";



export const ViewUserRole = () => {

    const credentialRdx = useSelector(userData)
    const credRdx = useSelector(detailData)


    const [roles, setRoles] = useState({ role: "" });

    const [user, setUser] = useState([]);


    const params = roles
    console.log(params)


    const inputHandler = (e) => {
        setRoles((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }
    const checkError = (e) => { }

    const selected = () => {


        viewRoles(params, credentialRdx.credentials?.token)
            .then(result => {
                setUser(result.data)
                console.log(result)
            }
            )
            .catch(error => console.log(error));
    };

    console.log(roles, "jjj")
    console.log(user, "user")


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
                                                    onClick={() => (privilege)}
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
                <div>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Role</Form.Label>
                            <InputPage
                                className={'InputBasic'}
                                type={'text'}
                                name={'role'}
                                placeholder={'Introduce id'}
                                changeFunction={(e) => inputHandler(e)}
                                blurFunction={() => checkError()} />
                            <Button onClick={selected}>view</Button>
                        </Form.Group>
                    </Form>
                </div>
            )}
        </div>
    )

}
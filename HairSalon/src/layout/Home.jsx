import A1 from "../assets/A1.jpg"
import A2 from "../assets/A2.jpg"
import A3 from "../assets/A3.jpg"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export const Home = () => {
  return ( 

    <Container>
    <Row>
      <Col xs={6} md={4}>
        <Image src={A1} rounded />
      </Col>
      <Col xs={6} md={4}>
        <Image src={A3} roundedCircle />
      </Col>
      <Col xs={6} md={2}>
        <Image src={A2} rounded />
      </Col>
    </Row>
  </Container>
);
}

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import B1 from '../assets/B1.png'
import A25 from '../assets/A25.jpeg'


export const Ourhistry = () => {
    return (


        <Container className="container-fluid mt-5" fluid="sm">
            <Row>
                <Col xs="12" lg="6">
                    <Figure>
                        <Figure.Image
                            width={500}
                            height={180}
                            alt="300x300"
                            src={B1}
                        />
                    </Figure>
                    <Figure.Caption>
                        L´oreal Colour Trophy 2019
                    </Figure.Caption>
                </Col>
                <Col className="simpleFont mt-5" xs="12" lg="6">
                    <h1>Art&Beauty AN</h1>
                    <h3 className="blackFont"> Celebrating 11 years of hair history </h3>
                    <p>International award-winning hair salon Art&Beauty AN celebrates its 11th year since opening their flagship salon in the heart of London.</p>
                    <p>As well as our unique creations, we work ethic and skills are continuously
                        transferred to all our team by our vigorous ‘vardering’ training process and final test that absolutely every stylist and technician who works for the company must pass. It’s this process, level of standards and our personality that means that everyone who works at Art&Beauty AN past & present has the right level of authenticity and passion.

                    </p>
                </Col>
            </Row>

            <div className="container-fluid mt-5 mb-5">


                <Row>
                    <Col xs="12" lg="6">
                        <Figure>
                            <Figure.Image
                                width={500}
                                height={180}
                                alt="300x300"
                                src={A25}
                            />
                        </Figure>
                        <Figure.Caption>
                            L´oreal Colour Trophy 2019
                        </Figure.Caption>
                    </Col>
                    <Col className="simpleFont mt-5 mb-5" xs="12" lg="6">
                        <h1>History and Collection</h1>
                        <h3 className="blackFont"> The Chroma</h3>
                        <p>The company has also won numerous awards, including Artistic Team of the Year, and not forgetting Wella Trend Vision 2018 of the Year a record number of four times. As Art&Beauty AN now focuses on his MyNewHair charity, and the salon team now lead the way in exceptional standards and innovative creations and
                            ideas giving exceptional levels of service and creativity in the salon and beyond.</p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

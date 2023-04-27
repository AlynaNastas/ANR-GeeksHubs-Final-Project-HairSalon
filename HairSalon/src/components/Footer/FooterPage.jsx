import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Footer/FooterPage.css';

export const FooterPage = () => {
  return (
    <>
    <div className="fontStyle" >
        <Container >
    <Row>
            <Col className='margin mt-2'>  
            <h4>NORTH AUDLEY</h4>
            <p> <i className="bi bi-geo-alt"></i> 28 North Audley St </p>
            <p> <i className="bi bi-globe-europe-africa"></i> London, W1K 6WX</p>
            </Col>
        <Col className='margin mt-2'>
            <h4>CONTACT</h4>
            <p> <i className="bi bi-telephone"></i> +44 111 222 444 </p>
            <p> <i className="bi bi-envelope-open-heart"></i> salon@art&beauty.com </p>
            </Col>
        <Col className='margin mt-2'>
                <h4>Opening Hours</h4>
                <p><i className="bi bi-clock"></i> Monday - Saturday</p>
                <p> 9:00am to 18:30pm </p>
            </Col>
        <Row>
                <Col className='W1 mt-3 mb-1'><h3><i className="bi bi-whatsapp"></i></h3></Col>
                <Col className='W2 mt-3 mb-1'><h3><i className="bi bi-facebook"></i></h3></Col>
                <Col className='W3 mt-3 mb-1'><h3><i className="bi bi-instagram"></i></h3></Col>
        </Row>
        <Row>
            <Col className='Copy mt-2'>
                <p>&copy;{new Date().getFullYear()} City Guide App - All Rights Reserved </p>
                </Col>
        </Row>
    </Row>
        </Container>
    </div>
        </>
  )
}

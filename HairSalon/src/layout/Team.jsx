import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import Figure from 'react-bootstrap/Figure';
import A19 from "../assets/A19.jpeg"
import A20 from "../assets/A20.jpeg"
import A21 from "../assets/A21.jpg"
import A23 from "../assets/A23.jpeg"
import A24 from "../assets/A24.jpeg"
import A29 from "../assets/A29.jpg"
import A36 from "../assets/A36.jpg"
import A32 from "../assets/A32.jpeg"
import A33 from "../assets/A33.jpg"
import A18 from "../assets/A18.png"
import A28 from "../assets/A28.jpg"
import Team1 from "../assets/Team1.jpg"
import A37 from "../assets/A37.jpg"
import A10 from "../assets/A10.jpg"
import A38 from "../assets/A38.jpg"
import A39 from "../assets/A39.png"
import A27 from "../assets/A27.jpeg"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';



export const Team = () => {
  return (
    <>
      <Container className=' justify-content-md blackFont mt-5' >






        <CardGroup className='simpleFont'>
          <Card>
            <Card.Img variant="top" src={A27} />
            <Card.Body>
              <Col className="simpleFont mt-5" xs="12" lg="12">
                <h1> Collaboration delivers the results</h1>
                <h3 className="blackFont">Official Partner of London Fashion Week </h3>
                <p>Most importantly, the association brings LFW editorial and backstage looks to our salons globally.</p>
              </Col>
            </Card.Body>

          </Card>
          <Card>
            <Card.Img variant="top" src={Team1} />
            <Card.Body>
              <Col className="simpleFont mt-4" xs="12" lg="12">
                <h1>More than just hair shows</h1>
                <h3 className="blackFont">Working together to create inspiring content around fashion magazines </h3>
                <p>Our creative team have been working hard to push the boundaries of originality and creativity to show the latest innovations in haircutting and colour
                </p>
              </Col>
            </Card.Body>

          </Card>
          <Card>
            <Card.Img variant="top" src={A28} />
            <Card.Body>
              <Col className="simpleFont mt-5" xs="12" lg="12">
                <h1> We love fashion industry </h1>
                <h3 className="blackFont">BEST EXPERIENCE </h3>
                <p>Travelling to over 20 countries annually, working on all major fashion industry events, we try to bring diverse global inspiration to our work, pushing the boundaries of hair and inspiring hairdressers as well as clients.</p>
              </Col>
            </Card.Body>

          </Card>
        </CardGroup>


        <div className='d-flex gap-2 mt-5'>

          <Figure>
            <Figure.Image
              width={600}
              height={180}
              alt="300x300"
              src={A20}
            />
            <Figure.Caption >
              Lóreal color trophy 2019
            </Figure.Caption>
          </Figure>

          <Figure>
            <Figure.Image
              width={600}
              height={180}
              alt="300x300"
              src={A21}
            />
            <Figure.Caption>
              Shoot Color Tropy 2019
            </Figure.Caption>
          </Figure>

          <Figure>
            <Figure.Image
              width={600}
              height={180}
              alt="300x300"
              src={A23}
            />
            <Figure.Caption>
              L´oreal Color Trophy 2020
            </Figure.Caption>
          </Figure>

          <Figure>
            <Figure.Image
              width={600}
              height={180}
              alt="300x300"
              src={A24}
            />
            <Figure.Caption>
              Shoot Color Trophy 2020
            </Figure.Caption>
          </Figure>
        </div>

        {/* <Figure>
          <Figure.Image
            width={300}
            height={70}
            alt="300x70"
            src={A18}
          />
          <Figure.Caption>
            Fashion Salon collection
          </Figure.Caption>
        </Figure> */}
        <Row className='justify-content-md-center mt-5 '>
          <Figure>
            <Figure.Image
              width={500}
              height={200}
              alt="300x70"
              src={A32}
            />
            <Figure.Caption>
              Velsvoir collection <p>Mens London Fashion Week</p>
            </Figure.Caption>
            <Col className="simpleFont mt-5" xs="12" lg="6">
              <h1> British GQ </h1>
              <h3 className="blackFont">Men's Style, Fashion & Culture </h3>
              <p>Taking place twice a year in February and September London Fashion Week showcases over 250 designers to a global audience.</p>
            </Col>
          </Figure>

          <Figure>
            <Figure.Image
              width={500}
              height={70}
              alt="300x70"
              src={A33}
            />
            <Figure.Caption>
              British GQ Magazine 2021
            </Figure.Caption>
          </Figure>
        </Row>


        <Figure>
          <Figure.Image
            width={300}
            height={70}
            alt="300x70"
            src={A29}
          />
          <Figure.Caption>
            Catwalk L´oreal Color Tropy 2020
          </Figure.Caption>
        </Figure>


        <Figure>
          <Figure.Image
            width={300}
            height={70}
            alt="300x70"
            src={A38}
          />
          <Figure.Caption>
            Back Stage Wella Color Vision
          </Figure.Caption>
        </Figure>

        <Figure>
          <Figure.Image
            width={300}
            height={70}
            alt="300x70"
            src={A10}
          />
          <Figure.Caption>
            Make-up Wella Color Vision 2020
          </Figure.Caption>
        </Figure>

        <Figure>
          <Figure.Image
            width={300}
            height={70}
            alt="300x70"
            src={A39}
          />
          <Figure.Caption>
            Catwalk Wella Color Vision 2020
          </Figure.Caption>
        </Figure>


        <Figure>
          <Figure.Image
            width={300}
            height={70}
            alt="300x70"
            src={A19}
          />
          <Figure.Caption>
            Fashion Salon Collection
          </Figure.Caption>
        </Figure>


        {/* <Figure>
          <Figure.Image
            width={300}
            height={180}
            alt="300x300"
            src={A36}
          />
          <Figure.Caption>
           Semi-Finals Color Tropy 2020
          </Figure.Caption>
        </Figure> */}

      </Container>

    </>
  );
}





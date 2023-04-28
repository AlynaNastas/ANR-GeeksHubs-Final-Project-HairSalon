
import A2 from "../assets/A2.jpg"
import A11 from "../assets/A11.png"
import A13 from "../assets/A13.png"

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export const Home = () => {
  return (

    <Container>
      <Row className="justify-content-md-center">
        <Col xs="12" lg="6">
          <Image src={A2} rounded />
        </Col>
        <Col className="simpleFont mt-5" xs="12" lg="6">
          <h1><b> You, In Colour… </b></h1>
          <h3><b> An authentic, personalised approach to your
            hair salon experience. </b></h3>
          <p>Book now with our award-winning team and enjoy beautiful hair.</p>
        </Col>
      </Row>


      <Row>
        <Col className="simpleFont mt-5" xs="6" lg="6">
          <h1>Our Artistry</h1>
          <h4>Pushing the boundaries of creativity.</h4>
          <p>As editors of artistic taste, our Art Team lead the way in creating beautiful, avant-garde work that is shown and revered throughout the world and industry.
            Our team are often sort after for shows and editorial shoots with big players in the fashion and beauty worlds,
            whilst also maintaining a busy column with their guests in the salon.


          </p>
          <p>Not only is this taste level expressed in the industry but our team bring this every day to the salon floor,
            ensuring every single guest leaves looking authentically beautiful.</p>
          <Image src={A11} rounded />
        </Col>

        <Col className="simpleFont mt-5" xs="6" lg="6">
          <h1>Enhance your shiny hair with shine boosting products</h1>
          <p>Following your visit to our award-winning salon, maintain a glossy mane with shine enhancing products at home. There are a variety of professional products which will help your tresses gleam with health, lock in hydration, nourish your strands and boost colour brilliance. Investing in a professional shampoo and conditioner suited to your hair type will help retain hydration levels,
            not strip the hair of natural oils and keep any hair colour staying vibrant.
            If you have naturally frizzy hair or hair prone to humidity this can impact shine so look for smoothing products to de-frizz and smooth the cuticle. </p>
          <Image src={A13} rounded />
        </Col>
        {/* <Col xs="5" lg="5">3 of 3
  <Image src={A12}  rounded />
  </Col> */}
      </Row>


    </Container>


  );
}


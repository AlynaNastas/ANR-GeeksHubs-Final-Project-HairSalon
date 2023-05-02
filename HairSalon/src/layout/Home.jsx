
import A2 from "../assets/A2.jpg"
import A4 from "../assets/A4.png"
import A11 from "../assets/A11.png"
import A13 from "../assets/A13.png"
import A15 from "../assets/A15.jpeg"
import A16 from "../assets/A16.jpeg"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export const Home = () => {
  return (

    <Container  className="mt-3" fluid="md">
      <Row className="justify-content-md-center">
        <Col xs="12" lg="6">
          <Image src={A2} rounded />
        </Col>
        <Col className="simpleFont mt-5" xs="12" lg="6">
          <h1> You, In Colour…</h1>
          <h3 className="blackFont">An authentic, personalised approach to your
            hair salon experience. </h3>
          <p>Book now with our award-winning team and enjoy beautiful hair.</p>
        </Col>
      </Row>


      <Row>
        <Col className="simpleFont mt-5" xs="12" lg="6">
          <h1 className="blackFont">Our Artistry</h1>
          <h4>Pushing the boundaries of creativity.</h4>
          <p>As editors of artistic taste, our Art Team lead the way in creating beautiful, avant-garde work that is shown and revered throughout the world and industry.
            Our team are often sort after for shows and editorial shoots with big players in the fashion and beauty worlds,
            whilst also maintaining a busy column with their guests in the salon.
          </p>
          <p>Not only is this taste level expressed in the industry but our team bring this every day to the salon floor,
            ensuring every single guest leaves looking authentically beautiful.</p>
          <Image src={A11} rounded />
        </Col>

        <Col className="simpleFont mt-5" xs="12" lg="6">
          <h1>Enhance your shiny hair with shine boosting products</h1>
          <p>Following your visit to our award-winning salon, maintain a glossy mane with shine enhancing products at home. There are a variety of professional products which will help your tresses gleam with health, lock in hydration, nourish your strands and boost colour brilliance. Investing in a professional shampoo and conditioner suited to your hair type will help retain hydration levels,
            not strip the hair of natural oils and keep any hair colour staying vibrant.
            If you have naturally frizzy hair or hair prone to humidity this can impact shine so look for smoothing products to de-frizz and smooth the cuticle. </p>
          <Image src={A13} rounded />
        </Col>
      </Row>

      <Row>
        <Col className="simpleFont mt-5" xs="12" lg="6">
          <h1>Expert Hairdressing Team that Deliver</h1>
        
          <p>We are proud to announce that our unique approach to hairdressing has earned us numerous accolades, including the prestigious L’Oreal Colour Trophy. Our team of experts travels the world to host seminars for thousands of attendees, teaching the art of cutting, coloring,
            and creativity, all while staying true to the “Art&Beauty AN way.”
          </p>
          <p>Our team of professionals will provide you with exceptional styles, timeless services, and an unforgettable experience. Trust us to bring your hair dreams to life.</p>
          <Image src={A15} rounded />
        </Col>

        <Col className="simpleFont mt-5" xs="12" lg="6">
          <h1 className="blackFont">AUBURN RED</h1>
          <h3>Our Hair Colour Trend Predictions for 2023</h3>
          <p>“Something else I’m starting to see requested a lot in the salon is Auburn Red shades! From reddish to copper – more from guests who have previously had balayage in the summer but now in colder months want richer and warmer tones. There is definitely lots more going on with red and guests experimenting with these shades, especially 
            after Kendall Jenner went copper a couple of months ago which went viral on TikTok!”</p>
            <p>It’s this time of year when we start to think about what we could do with our hair the following year! Enter Creative Director, Giota Chiamakioti!</p>
          <Image src={A16} rounded />
        </Col>
      </Row>
      <Row className="simpleFont mt-5 mb-5">
        <Col>
        <h2 className="mb-5">Choosing a hairstyle to suit your face shape</h2>
        <Image src={A4} rounded />
        </Col>
        <Col className="mt-5 " md="auto"> Experts in creating beautiful hair and client confidence.
        <h4 className="blackFont mt-3">Our team will help you to choose your new style.</h4>
         </Col>
        <Col className="mt-3" xs lg="7">
        We believe in making the ordinary extraordinary. As editors of artistic taste, we believe every guest deserves to look as beautiful as they are.
        </Col>
      </Row>
    </Container>


  );
}


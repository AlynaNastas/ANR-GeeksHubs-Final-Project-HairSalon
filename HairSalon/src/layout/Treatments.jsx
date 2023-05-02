import Col from "react-bootstrap/esm/Col";
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/esm/Container";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/esm/Row";
import T1 from "../assets/T1.jpg";
import T2 from "../assets/T2.jpg";
import T3 from "../assets/T3.jpg";
import T4 from "../assets/T4.jpeg";
import K18 from "../assets/K18.jpeg"
import plex from "../assets/plex.jpeg"
import Kera from "../assets/Kera.jpeg"

export const Treatments = () => {
    return (
        <>
            <div className="blackFont mt-5">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto"
                            src={Kera}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Fusio Dose</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto"
                            src={K18}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>K-18</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto"
                            src={plex}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Olaplex</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>




            <Container className="mt-5">
                <Row>
                    <Col className="simpleFont mt-5">
                        <h1>Hair Salon Treatments</h1>
                        <h3 className="blackFont">
                            All Treatments include a relaxing scalp massage and hair spa{" "}
                        </h3>
                        <p>
                            Our hair salon treatments are tailored to the individual needs of
                            each guest, using only the highest-quality products and techniques
                            to ensure that your hair looks and feels its absolute best. Our team
                            of highly trained and experienced hairdressers offer a wide range of
                            hair salon treatments such as our K-18 Rejuvenating Treatment,
                            Olaplex treatment to restore your hair bonds, and Fusio Dose
                            treatment to add shine or hydration. Treatments range from £15 to
                            £55, and can take anywhere from no extra time to 30 minutes.
                        </p>
                    </Col>

                </Row>

                <div className=" d-flex gap-5  mt-5">
                    <Figure>
                        <Figure.Image width={600} height={180} src={T4} />
                        <Col className="simpleFont mt-5">
                            <h1>K 18 (The Rejuventor)</h1>
                            <h3>
                                Price £35 | No Extra Time
                            </h3>
                            <p>
                                Introducing the K18 Rejuvenator – a game-changing hair treatment that requires no extra time during your salon service. This treatment delivers a powerful boost of strength and health to your hair, effectively repairing any damage. The K18 Rejuvenator is the perfect complement to your colour appointment,
                                as it targets the keratin chains and bonds in your hair, utilizing its patented peptide treatment to work its magic even as your hair is being coloured. With K18 Rejuvenator, you can achieve healthier, more vibrant hair in no time.
                            </p>
                            <ul>
                                <li>Restores strength</li>
                                <li>Pre colour and post colour treatment</li>
                                <li>Targets the keratin chains and bonds</li>
                                <li>Patented peptide treatment that works whilst colouring</li>
                            </ul>

                        </Col>
                    </Figure>

                    <Figure>
                        <Figure.Image width={569} height={180} src={T3} />
                        <Col className="simpleFont mt-5">
                            <h1>K Fix (The Booster)</h1>
                            <h3>
                                Price £15 | No Extra Time
                            </h3>
                            <p>
                                K-Fix ‘The Booster’ is a salon hair treatment offered by us that is designed to improve the quality and strength of hair. This patented peptide treatment is packed with amino acids that work to restructure the hair from within, resulting in stronger,
                                healthier hair that is more resistant to damage. The treatment is suitable for all hair types and can be customized to address specific concerns.
                                One of the key benefits of K-Fix ‘The Booster’ is its ability to improve the overall quality of hair. The amino acids in the treatment work to restructure the core of the hair, resulting in smoother, more manageable hair that is less prone to breakage.
                            </p>
                            <ul>
                                <li>Hair is stronger</li>
                                <li>Hair quality is improved</li>
                                <li>Amino acids help to restructure the core of the hair</li>
                                <li>Patented peptide treatment</li>
                            </ul>
                        </Col>
                    </Figure>
                </div>


                <div className=" d-flex gap-5  mt-5 mb-5">
                    <Figure>
                        <Figure.Image width={550} height={180} src={T1} />
                        <Col className="simpleFont mt-5">
                            <h1>Metal Detox (The Reset & Protect)</h1>
                            <h3>
                                Price £15 | No Extra Time
                            </h3>
                            <p>
                                Say goodbye to compromised hair colour results with “Metal Detox”. This innovative treatment is designed to reset and protect coloured hair, ensuring 100% reliable hair colour results, every time. The “Metal Detox” treatment effectively neutralizes any metals present in your hair before colouring, resulting in more even, consistent colour application. This service is particularly effective for clearing yellow undertones from blonding. Moreover, with 87% less breakage risk, your hair is left stronger and healthier, with a gorgeous, long-lasting colour. The “Metal Detox” service is suitable for all coloured hair types,
                                and is the perfect way to ensure optimal hair colour results every time.
                            </p>
                            <ul>
                                <li>For all coloured hair</li>
                                <li>100% reliable hair colour results</li>
                                <li>Neutralises metals from the hair before colouring</li>
                                <li>Clears yellow undertones from blonding</li>
                                <li>87% less breakage risk</li>
                            </ul>

                        </Col>
                    </Figure>

                    <Figure>
                        <Figure.Image width={569} height={180} src={T2} />
                        <Col className="simpleFont mt-5">
                            <h1>Olaplex Treatment</h1>
                            <h3>
                                Price £35 | Takes 15 Mins
                            </h3>
                            <p>
                                Discover the revolutionary Olaplex hair treatment, which has transformed the way we repair and strengthen damaged, brittle hair. This unique treatment harnesses special molecules to expertly bond broken hair strands, resulting in restored hair health, strength and vibrancy. Unlike traditional hair treatments that merely coat the surface of hair shafts, Olaplex works on a deeper level, rebuilding the internal structure of hair to deliver long-lasting results.
                                Experience the difference that Olaplex can make for your hair.
                            </p>
                            <ul>
                                <li>Hair is stronger</li>
                                <li>Hair is smoother</li>
                                <li>Patented technology which protects during the colour process</li>
                                <li>Targets bonds in the hair</li>
                            </ul>
                        </Col>
                    </Figure>
                </div>
            </Container>
        </>
    );
};

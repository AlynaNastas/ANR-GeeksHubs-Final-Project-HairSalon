import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/esm/Row";
import T1 from "../assets/T1.jpg";
import T2 from "../assets/T2.jpg";
import T3 from "../assets/T3.jpg";
import T4 from "../assets/T4.jpeg";

export const Treatments = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Figure>
                    <Figure.Image width={600} height={180} src={T1} />
                </Figure>
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


            
        </Container>
    );
};

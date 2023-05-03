import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';

import R1 from "../assets/R1.png"
import R2 from "../assets/R2.png"
import RG1 from "../assets/RG1.png"
import RG2 from "../assets/RG2.png"
import RG3 from "../assets/RG3.png"
import R4 from "../assets/R4.png"



export const Reviews = () => {
    return (
        <>
            <Container className="container-fluid mt-5 mb-5">
                <div className='mb-5 mt-5'>
                    <Figure>
                        <Figure.Image
                            width={800}
                            height={300}
                            src={RG3}
                        />
                    </Figure>
                </div>
                <div className='mb-5 mt-5'>
                    <Figure>
                        <Figure.Image
                            width={800}
                            height={300}
                            src={RG1}
                        />
                    </Figure>
                </div>
                <div className='mb-5 mt-5'>
                    <Figure>
                        <Figure.Image
                            width={800}
                            height={300}
                            src={RG2}
                        />
                    </Figure>
                </div>
                <Figure>
                    <Figure.Image
                        width={800}
                        height={300}
                        src={R4}
                    />
                </Figure>
                <div className='mb-5 mt-5'>
                    <Figure>
                        <Figure.Image
                            width={800}
                            height={300}
                            src={R2}
                        />
                    </Figure>
                </div>
                <div className='mb-5 mt-5'>
                    <Figure>
                        <Figure.Image
                            width={800}
                            height={300}
                            src={R1}
                        />
                    </Figure>
                </div>
            </Container>

        </>
    )
};

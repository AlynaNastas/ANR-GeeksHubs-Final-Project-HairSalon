import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

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
                    <Image src={RG3} style={{ objectFit: 'none' }} />
                </div>
                <div className='mb-5 mt-5'>
                    <Image  src={RG1} style={{ objectFit: 'none' }} />
                </div>
                <div className='mb-5 mt-5'>
                    <Image src={RG2} style={{ objectFit: 'none' }} />
                </div>
                <Image src={R4} style={{ objectFit: 'none' }} />
                <div className='mb-5 mt-5'>
                    <Image src={R2} style={{ objectFit: 'none' }} />
                </div>
                <div className='mb-5 mt-5'>
                    <Image src={R1} style={{ objectFit: 'none' }} />
                </div>
            </Container>

        </>
    )
};

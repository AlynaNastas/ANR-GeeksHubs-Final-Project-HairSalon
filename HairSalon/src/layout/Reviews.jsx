import Image from 'react-bootstrap/Image';

import R1 from "../assets/R1.png"
import R2 from "../assets/R2.png"
import RG1 from "../assets/RG1.png"
import RG2 from "../assets/RG2.png"
import RG3 from "../assets/RG3.png"
import R4 from "../assets/R4.png"



export const Reviews = () => {
    return (
        <>
            <div className='fixed-panel'>
                <div className='container-fluid mb-5 mt-5'>
                    <Image className='d-block mx-auto' src={RG3} style={{ objectFit: 'none' }} />
                </div>
                <div className='container-fluid'>
                    <Image className='d-block mx-auto' src={RG1} style={{ objectFit: 'none' }} />
                </div>
                <div className='container-fluid'>
                    <Image className='d-block mx-auto' src={RG2} style={{ objectFit: 'none' }} />
                </div>
                <Image className='d-block mx-auto' src={R4} style={{ objectFit: 'none' }} />
                <div className='container-fluid'>
                    <Image responsive className='d-block mx-auto' src={R2} style={{ objectFit: 'none' }} />
                </div>
                <div className='container-fluid'>
                    <Image className='d-block mx-auto' src={R1} style={{ objectFit: 'none' }} />
                </div>
            </div>

        </>
    )
};

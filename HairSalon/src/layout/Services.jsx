import Table from 'react-bootstrap/Table';

export const Services = () => {
  return (
    <>
      <div className=' mt-5 mb-5'>
        <Table striped bordered hover variant="dark" className='simpleFont text-center'>
          <thead>
            <tr className='blackFont'>
              <th>Service</th>
              <th>Senior Director</th>
              <th>Senior Technician</th>
              <th>Director</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='blackFont'>Ultimate Blonde</td>
              <td>220.90 £</td>
              <td>220.90 £</td>
              <td>250 £</td>
            </tr>
            <tr>
              <td className='blackFont'>Global Colour</td>
              <td>110 £</td>
              <td>110 £</td>
              <td>125 £</td>
            </tr>
            <tr>
              <td className='blackFont'>Root Colour</td>
              <td>55 £</td>
              <td>55 £</td>
              <td>60 £</td>
            </tr>
          </tbody>
        </Table>

        <Table striped bordered hover variant="dark" className='simpleFont mt-5 mb-5 text-center'>
          <thead>
            <tr>
              <th className='blackFont'>Consultation</th>
              <th>Free of charge</th>
              <th>Free of charge</th>
              <th>Free of charge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='blackFont'>Women Cut</td>
              <td>55 £</td>
              <td>55 £</td>
              <td>65 £</td>
            </tr>
            <tr>
              <td className='blackFont'>Gent Cut</td>
              <td>45 £</td>
              <td>45 £</td>
              <td>55 £</td>
            </tr>
            <tr>
              <td className='blackFont'>Kids Cut</td>
              <td>20 £</td>
              <td>20 £</td>
              <td>25 £</td>
            </tr>
          </tbody>
        </Table>

        <Table striped bordered hover variant="dark" className='simpleFont mt-5 mb-5 text-center'>
          <thead>
            <tr>
              <th className='blackFont'>Hair Up</th>
              <th>35 £</th>
              <th>35 £</th>
              <th>40 £</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='blackFont'>Blow Dry</td>
              <td>30 £</td>
              <td>30 £</td>
              <td>40 £</td>
            </tr>
            <tr>
              <td className='blackFont'>Wedding Hair</td>
              <td>90 £</td>
              <td>90 £</td>
              <td>110 £</td>
            </tr>
            <tr>
              <td className='blackFont'>Perm</td>
              <td>85 £</td>
              <td>85 £</td>
              <td>90 £</td>
            </tr>
            <tr>
              <td className='blackFont'>Keratin Smooth</td>
              <td>150 £</td>
              <td>150 £</td>
              <td>170 £</td>
            </tr>
            <tr>
              <td className='blackFont'>Relax</td>
              <td>95 £</td>
              <td>95 £</td>
              <td>100 £</td>
            </tr>

          </tbody>
        </Table>
      </div>

    <div>
      <h3 className='simpleFont'>SKIN COLOUR TEST</h3>
      <p className='blackFont'>If you’re new to colour at Trevor Sorbie or haven’t had colour with us within the last 6 months,
        please contact the salon to arrange a colour skin test. This must be atleast 48 hours before your appointment.</p>
    </div>

  <div className='simpleFont mb-5'>
    <h3>CANCELLATION POLICY</h3>
    <p>You can cancel your appointment up to 24 hours before your service time.
      If you do cancel or fail to turn up after 24 hours you will be charged 100% of the fee.</p>
  </div>
    </>
  );
}



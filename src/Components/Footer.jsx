import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';


function Footer() {
  return (
    <div>
      <MDBFooter className='text-white text-center text-lg-left bg-primary'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Media-Player</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam sint vitae, nesciunt voluptatibus temporibus accusantium ipsa. Dicta officiis veniam delectus! Consequatur maxime, ipsam porro illo nam reiciendis odit neque nobis.
              Voluptate sapiente laborum quis perspiciatis cumque distinctio voluptatum eveniet odit illo unde, ratione velit quas ipsam itaque accusamus sequi quia nesciunt ipsum! Provident exercitationem quidem dolorem quas nihil atque fuga.
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  LandingPage
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Home
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Watch-History
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Reviews
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>References</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  React Bootstrap
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  MDB bootstrap
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  BootSwatch
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Back to top
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='/'>
          MediaPlayer.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
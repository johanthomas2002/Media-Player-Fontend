import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { MDBBtn } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function LandingPage() {                     //Landing page has nothing but only the basic intro to the project
  

  const navByUrl = useNavigate();  // The useNavigate hook returns a function that lets you navigate programmatically

  return (
    <>
      <Row className='d-flex align-items-center mt-5 mb-5'>
          <Col></Col>

          <Col lg={5}>
            <h1 style={{fontSize:'40px'}}>Welcome to <span>Media Player</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro delectus autem veniam accusamus necessitatibus tempore ratione est beatae iste aliquid. Ad unde consequuntur consectetur ipsa laboriosam aperiam accusamus perferendis est!
            Aliquid praesentium illo fugiat, in quasi reprehenderit adipisci perferendis, deleniti sint necessitatibus iusto natus quam! Amet voluptatum, repellat eveniet veniam, sint quas a harum voluptas magnam vel assumenda optio error!</p>
            <MDBBtn color='info' onClick={()=>navByUrl('/home')}>
              Get Started
            </MDBBtn>
          </Col>

          <Col lg={5}>
            <img src="https://i.pinimg.com/originals/ec/36/db/ec36db6a368fcc32d99ccfa383a4f52a.gif" alt="" style={{width:'540px', height:'350px',borderRadius:'10px'}} />
          </Col>

          <Col></Col>
      </Row>

      <div className='container mb-5 d-flex align-items-center justify-content-center flex-column'>
        <h3>Features</h3>

        <div className="cards mt-4">
          <Row>
            <Col>
              <MDBCard>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
                <MDBCardBody>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>

            <Col>
              <MDBCard>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
                <MDBCardBody>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>

            <Col>
              <MDBCard>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
                <MDBCardBody>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>

            <Col>
              <MDBCard>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
                <MDBCardBody>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>
          </Row>
        </div>
      </div>

      <div className='container  border rounded p-5 mt-5 border-light mb-5 d-flex align-items-center justify-content-between w-100'>
        <div className="col-lg-5">
          <h4 className='text-warning'>Simple,Powerful & fast</h4>
          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything :</span>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Eius sed aliquam consequatur rem a? Natus labore, ipsum sequi ipsa nisi quis facere fugit eum eius accusamus 
          aperiam minima at a!</h6>

          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Categorize videos :</span>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Eius sed aliquam consequatur rem a? Natus labore, ipsum sequi ipsa nisi quis facere fugit eum eius accusamus 
          aperiam minima at a!</h6>

          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Managing videos :</span>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Eius sed aliquam consequatur rem a? Natus labore, ipsum sequi ipsa nisi quis facere fugit eum eius accusamus 
          aperiam minima at a!</h6>
        </div>

        <div className="col-lg-5">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/GV3HUDMQ-F8?si=SPnfM0lmAawOv8ge" 
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

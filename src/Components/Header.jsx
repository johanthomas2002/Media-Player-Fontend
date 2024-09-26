import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <Navbar className="bg-primary bg-primary">
        <Container>
          <Navbar.Brand href="#home" className='text-danger'>
            
            {/* << setting a hyperlink using <Link> tag from react-router-dom Library  */}
            <Link to={'/'} style={{textDecoration:"none",color:"red"}}>
              <i class="fa-solid fa-play fa-beat me-3 fs-5"></i>
              Media-Player
            </Link>
            {/* setting a hyperlink >>  */}

          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

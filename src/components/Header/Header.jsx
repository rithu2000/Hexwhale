import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CompanyLogo from '../../assets/image-17.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="main-nav">
      <div className="container navContainer">
        <Navbar expand="lg" className="bg-body-tertiary container ">
          <Container fluid>
            <img src={CompanyLogo} alt=""/>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavDropdown title="Home" id="navbarScrollingDropdown"/>
                <NavDropdown title="Shop" id="navbarScrollingDropdown"/>
                <NavDropdown title="Blog" id="navbarScrollingDropdown"/>
                <NavDropdown title="pages" id="navbarScrollingDropdown"/>
                <Nav.Link href="#action2">Contact</Nav.Link>
              </Nav>
              <FontAwesomeIcon className='faIcons' icon={faMagnifyingGlass} />
              <Nav.Link className='' href="#action2">Search</Nav.Link>
              <FontAwesomeIcon className='faIcons' icon={faBagShopping} />
              <Nav.Link className='' href="#action2">Cart (3)</Nav.Link>
              <NavDropdown title={<FontAwesomeIcon className='faIcons' icon={faBars} />} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default Header;
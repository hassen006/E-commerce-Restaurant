import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbarSite.css'
import logo from './../../assets/food-to-love.svg'

export default function NavbarSite() {
  return (
    <Navbar expand="lg" className='fixed-top'>
    <Container>
      <Navbar.Brand>
        <img src={logo} alt='Logo Food' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="./about">About us</Nav.Link>
          <Nav.Link href="#explore">Explorer food</Nav.Link>
          <Nav.Link href="#review">Review</Nav.Link>
          <Nav.Link href="#faq">faq</Nav.Link>
          
        </Nav>
        <Nav>
        <Nav.Link id='lastnav'>(+216)-55667788</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

import React from 'react'

import {Navbar ,Container,Nav} from "react-bootstrap"
const NavBar = () => {
  return (
    <div><Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/contactlist">Contactlist</Nav.Link>
        <Nav.Link href="/add">Add Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default NavBar
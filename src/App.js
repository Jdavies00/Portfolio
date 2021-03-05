import React, { useState } from 'react';
import {
  Col, Row, Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, Jumbotron
} from "reactstrap"
import './App.css';
import Cards from './component/cards';



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <div>
      <Navbar color="dark" light expand="md">
        {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://jdaviesblog-a14a2.web.app/" target ="_blank">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Jdavies00" target ="_blank">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://linkedin.com/in/jdavies00" target ="_blank">Linkedin</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    <Jumbotron>
      <img style={{ width: 400, height: 250, borderRadius: 400 / 2 }} src="headShot.jpg" alt="JdaviesheadShot.jpg" />
      <h1 className="display-4">Hello!
          <br /> Welcome to my portfolio</h1>
    </Jumbotron>
    <Jumbotron>
      <h1 className="display-4">Below are some of my projects,<br />Take a look!</h1>
    </Jumbotron>
    <Cards id="CardDeck" />
    <Row>
      <Col>
        <footer style={{ backgroundColor: "#A9A9A9", height: "100%" }} className="sticky-bottom text-center">
          <a href="https://jdaviesblog-a14a2.firebaseapp.com/">
            <i className="fas fa-blog"> Blog</i></a>
          <br />
          <a href="https://github.com/Jdavies00">
            <i className="fab fa-github"> Github</i></a>
        </footer>
      </Col>
    </Row>
    </>
  );
}

export default App;

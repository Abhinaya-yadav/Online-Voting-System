import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Container,Button} from "react-bootstrap"
import "./home.css"
import { Link } from "react-router-dom";
// import logo from"./logo1.jpg"
function HomePage(){
    return (
        <div className="main">
        <Navbar  expand="lg" variant="dark">
      <Container >
        <h1 className="text">Online Voting </h1>
          <Nav className="me-auto">
            <Button variant="light"className="btn" ><Link to='/'>Home</Link></Button>
            <Button variant="light"className="btn" ><Link to='/user'>User</Link></Button>
            <Button variant="light" className="btn"><Link to='/register'>Register</Link></Button>
            <Button variant="light" className="btn"><Link to='/admin'>Admin</Link></Button>
          </Nav>
      </Container>
    </Navbar>
    </div>
    )
}

export default HomePage
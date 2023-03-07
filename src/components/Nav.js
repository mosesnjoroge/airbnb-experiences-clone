import React from "react";
// import logo from './components/airbnblogo.jpeg'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function Nav () {

  return (

    <Navbar bg = 'light'>
      <Container>
        <Navbar.Brand href='#home'>AirBnb</Navbar.Brand>
      </Container>
    </Navbar>

  )

}

import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import { WiSunrise } from "weather-icons-react";

export function Footer() {
  return (
    <>
      <Container fluid className="fixed-bottom bg-dark">
       <p className="text-light text-center font-italic m-1">Clima Actual - 2024</p>
      </Container>
    
    </>
  );
}

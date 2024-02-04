import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { WiSunrise } from "weather-icons-react";

export function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="text-primary-emphasis bg-primary-subtle border-bottom border-primary-subtle">
      <Container>
        <Navbar.Brand className="mx-auto"><WiSunrise size={30}/> Clima Actual</Navbar.Brand>
      </Container>
    </Navbar>
    </>
  );
}

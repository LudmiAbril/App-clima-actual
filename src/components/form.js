import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
export function CityForm({ cityChange }) {
  const [inputCity, setInputCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    cityChange(inputCity);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="d-flex m-3 justify-content-center">
        <Form.Control
          type="text"
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Ingresa el nombre de la ciudad..."
          style={{ width: "500px", marginRight: "5px" }}
        />
        <Button type="submit"variant="dark" >
          Buscar
        </Button>
      </Form>
    </>
  );
}

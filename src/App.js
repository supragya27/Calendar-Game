import React from "react";
import Heading from "./components/Heading";
import Body from "./components/Body";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Heading />
        <Body />
      </Container>
    </div>
  );
}

export default App;

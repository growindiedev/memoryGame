import React from "react";
import {
  Container,
  Title,
  Status,
  Text,
  CardContainer,
  Button,
} from "./Components/styledComponents";
import Card from "./Components/Card";

function App() {
  return (
    <Container>
      <Title>Memory Game</Title>
      <Status>
        <Text>High Score: 100</Text>
        <Text>Current Score: 0</Text>
      </Status>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
      <Button>Reset</Button>
    </Container>
  );
}

export default App;

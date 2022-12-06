import React, { useState } from "react";
import {
  Container,
  Title,
  Status,
  Text,
  CardContainer,
  Button,
} from "./Components/styledComponents";
import Card from "./Components/Card";
import pokemonsArray from "./utils/pokemonData";

function App() {
  const [pokemons, setPokemons] = useState([...pokemonsArray]);
  console.log(pokemons);

  let cards = pokemons.map((pokemon) => (
    <Card key={pokemon.num} {...pokemon} />
  ));

  return (
    <Container>
      <Title>Memory Game</Title>
      <Status>
        <Text>High Score: 100</Text>
        <Text>Current Score: 0</Text>
      </Status>
      <CardContainer>{cards}</CardContainer>
      <Button>Reset</Button>
    </Container>
  );
}

export default App;

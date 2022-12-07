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
  const [pokemons, setPokemons] = useState(pokemonsArray);
  const [highScore, setHighScore] = useState(0);

  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const calculateScore = () => {
    let score = 0;
    pokemons.forEach((poke) => {
      if (poke.isSelected) {
        score++;
      }
    });
    return score;
  };

  const resetScore = () => {
    setPokemons(shuffleArray(pokemonsArray));
    setHighScore(0);
  };

  const cards = shuffleArray(pokemons).map((pokemon) => (
    <Card
      //key={pokemon.num}
      pokemon={pokemon}
      setPokemons={setPokemons}
      currentScore={calculateScore()}
      setHighScore={setHighScore}
      shuffleArray={shuffleArray}
    />
  ));

  return (
    <Container>
      <Title>Memory Game</Title>
      <Status>
        <Text>High Score: {highScore}</Text>
        <Text>Current Score: {calculateScore()}</Text>
      </Status>
      <CardContainer>{cards}</CardContainer>
      <Button onClick={resetScore}>Reset</Button>
    </Container>
  );
}

export default App;

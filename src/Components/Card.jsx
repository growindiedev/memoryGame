import React from "react";
import styled from "styled-components";
import "animate.css";

const Wrapper = styled.div`
  cursor: pointer;
  background-color: #fff;
  min-height: 30px;

  img {
    max-height: 90%;
  }

  box-shadow: -10px -8px 0px rgb(167 243 208);
  :focus {
    animation: flip; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 0.7s; /* don't forget to set a duration! */
  }
  :active {
    animation: none;
  }
`;

const Card = () => {
  return (
    <Wrapper tabIndex={0}>
      <img src={require("../utils/pokemon/ivysaur.png")} alt="" />
    </Wrapper>
  );
};

export default Card;

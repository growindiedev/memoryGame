import React from "react";
import styled from "styled-components";
import "animate.css";

const Wrapper = styled.div`
  cursor: pointer;
  background-color: #fff;
  min-height: 30px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-height: 80%;
    max-width: 80%;
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

const Card = ({ url, name }) => {
  return (
    <Wrapper tabIndex={0}>
      <img src={url} alt="" />
      <p>{name}</p>
    </Wrapper>
  );
};

export default Card;

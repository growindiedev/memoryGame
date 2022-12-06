import styled from "styled-components";
import React from "react";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  color: aliceblue;
  background-color: #222831;
  grid-template-rows: 1.5fr 2fr 6fr 2fr 1fr;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-family: "Press Start 2P", cursive;
  font-size: 2rem;
  text-align: center;
  color: pink;
  background-color: #111720;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Status = styled.div`
  min-height: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Text = styled.div`
  font-family: "Press Start 2P", cursive;
  text-align: center;
  font-size: 1.2rem;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 12rem);
  grid-template-columns: repeat(4, 10rem);
  justify-content: center;
  gap: 1.8rem;
`;

export const Button = styled.button`
  align-self: center;
  justify-self: center;
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow, transform;
  background: radial-gradient(100% 100% at 100% 0%, #89e5ff 0%, #5468ff 100%);
  box-shadow: 0px 2px 4px rgb(45 35 66 / 40%),
    0px 7px 13px -3px rgb(45 35 66 / 30%),
    inset 0px -3px 0px rgb(58 65 111 / 50%);
  padding: 0 32px;
  border-radius: 6px;
  color: #fff;
  height: 48px;
  font-size: 18px;
  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
  transition: box-shadow 0.15s ease, transform 0.15s ease;

  :hover {
    box-shadow: 0px 4px 8px rgb(45 35 66 / 40%),
      0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #3c4fe0;
    transform: translateY(-2px);
  }

  :active {
    box-shadow: inset 0px 3px 7px #3c4fe0;
    transform: translateY(2px);
  }
`;

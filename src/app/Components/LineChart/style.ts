import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

export const Title = styled.h1`
  font-family: CoreSans55Medium;
  font-size: 44px;
  background: linear-gradient(-90deg, #47af73 0%, #86bf6e 47.92%, #bad367 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  text-shadow: none;
`;

export const Text = styled.p`
  font-family: CoreSans35Light;
  font-size: 20px;
  color: #1b344a;
  text-align: center;
  margin-top: -10px;
`;

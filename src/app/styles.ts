import styled, { keyframes } from "styled-components";

export const Main = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 60px;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 40px;
  font-family: CoreSans55Medium;
  text-align: center;
  color: #1b344a;
  margin-top: 0px;
`;

export const TitleBold = styled.span`
  font-family: CoreSans55Medium;
  font-size: 30px;
  color: #1b344a;
`;

export const Infos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const InfosCarbon = styled.div`
  width: 49%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  padding-right: 60px;
  padding-left: 70px;
`;

export const Separator = styled.div`
  width: 2.5px;
  height: 300px;
  background-image: linear-gradient(
    rgba(186, 211, 103, 0),
    rgb(186, 211, 103),
    rgba(186, 211, 103, 0)
  );
`;

export const InfosSteel = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;
  padding-left: 60px;
  padding-right: 70px;
`;

export const CounterSteel = styled.h1`
  font-family: DinCondensedBold;
  letter-spacing: -2px;
  font-size: 100px;
  margin-top: 0px;
  padding: 0px;
  text-align: right;

  background: linear-gradient(90deg, #47af73 0%, #86bf6e 47.92%, #bad367 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  text-shadow: none;
`;

export const CounterSteelSub = styled.span`
  width: 100%;
  font-size: 20px;
  font-family: DinCondensedLight;
  color: #9e7a63;
  margin-top: -80px;
`;

export const CounterSteelText = styled.p`
  width: 100%;
  font-size: 34px;
  font-family: CoreSans45Regular;
  text-align: right;
  margin-top: -80px;
`;

export const CounterCarbonText = styled.p`
  width: 100%;
  font-size: 34px;
  font-family: CoreSans45Regular;
  text-align: left;
  margin-top: 0px;
`;

export const CounterSteelSeparator = styled.div`
  width: 300px;
  height: 1.5px;
  background-image: linear-gradient(
    270deg,
    rgba(186, 211, 103, 0),
    #9e7a63 100%
  );
  margin-top: 20px;
`;

export const CounterCarbonSeparator = styled.div`
  width: 300px;
  height: 1.5px;
  background-image: linear-gradient(270deg, #9e7a63, rgba(186, 211, 103, 0));
  margin-top: 20px;
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: start;
  margin-top: 30px;
`;

const animate = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-100%) rotate(360deg);
  }
`;

export const BoxFull = styled.div`
  position: relative;
  background: linear-gradient(-90deg, #47af73 0%, #86bf6e 47.92%, #bad367 100%);
  border: 0.08rem solid #1b344a;
  border-radius: 10px;
  box-sizing: border-box;
  height: 6rem;
  width: 4rem;
  outline: 0;
  overflow: hidden;

  &::before {
    color: #1b344a;
    font-size: 1.6rem;
    content: "CO2";
    font-family: DinCondensedLight;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // &::after {
  //   content: "";
  //   position: absolute;
  //   bottom: -50%;
  //   left: -50%;
  //   height: 200%;
  //   width: 200%;
  //   box-sizing: border-box;
  //   background-color: #f9fbf1;
  //   border-radius: 40%;
  //   animation: ${animate} 10s linear infinite;
  // }
`;

export const Box = styled.div`
  position: relative;
  background: linear-gradient(-90deg, #47af73 0%, #86bf6e 47.92%, #bad367 100%);
  border: 0.08rem solid #1b344a;
  border-radius: 10px;
  box-sizing: border-box;
  height: 6rem;
  width: 4rem;
  outline: 0;
  overflow: hidden;

  &::before {
    color: #1b344a;
    font-size: 1.6rem;
    content: "CO2";
    font-family: DinCondensedLight;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: -50%;
    height: 200%;
    width: 200%;
    box-sizing: border-box;
    background-color: #f9fbf1;
    border-radius: 40%;
    animation: ${animate} 10s linear infinite;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

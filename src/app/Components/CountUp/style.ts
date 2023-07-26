import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColumnDays = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: DinCondensedBold;
`;

export const CounterDigit = styled.span`
  letter-spacing: -1px;
  font-size: 130px;

  background: linear-gradient(360deg, #47af73 0%, #86bf6e 47.92%, #bad367 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  text-shadow: none;
`;

export const CounterSeparator = styled.span`
  letter-spacing: -5px;
  font-size: 130px;
  font-family: DinCondensedBold;
  margin-bottom: 50px;

  padding-left: 35px;
  padding-right: 35px;

  background: linear-gradient(360deg, #47af73 0%, #86bf6e 47.92%, #bad367 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  text-shadow: none;
`;

export const CounterSub = styled.span`
  margin-top: -25px;
  color: #86bf6e;
  font-size: 30px;
`;

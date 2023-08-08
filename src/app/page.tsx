"use client";

import * as S from "./styles";
import background from "./img/ecobg.png";
import CountUp from "./Components/CountUp";
import { useEffect, useState } from "react";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import LineChart from "./Components/LineChart";

export default function Home() {
  const [running, setRunning] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [items, setItems] = useState([]);

  Chart.register(CategoryScale);

  useEffect(() => {
    const fixedDate = new Date(2023, 8, 8, 0, 0, 0);

    let interval;
    if (running) {
      interval = setInterval(() => {
        let date = new Date();

        let newDate = date.getTime() - fixedDate.getTime();
        let newTime = new Date(newDate);

        let hoursDiff = Math.round(
          (date.getTime() - fixedDate.getTime()) / (1000 * 3600)
        );

        let num = Math.round(hoursDiff / 10);

        let values = [];
        for (let i = 0; i < num; i++) {
          values.push({
            id: i,
            type: "full",
          });
        }
        setItems(values);

        setSeconds(newTime.getSeconds());
        setMinutes(newTime.getMinutes());
        setHours(newTime.getUTCHours());
        setDays(date.getDate() - fixedDate.getDate());
      }, 1000);
    }
  }, [running]);

  return (
    <S.Main
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <S.LogoContainer>
        <img
          style={{
            width: 160,
            height: 43,
          }}
          src="./img/logooncrets.png"
        />
      </S.LogoContainer>
      <S.Content>
        <CountUp />
        <S.Title>Durante esse tempo de feira</S.Title>
        <S.Infos>
          <S.InfosSteel>
            <S.CounterSteel>
              {Math.round(
                (days * 86400 + hours * 3600 + minutes * 60 + seconds) * 0.5
              ).toLocaleString("pt-BR") + "KG"}
            </S.CounterSteel>
            <S.CounterSteelText>
              de aço, foram protendidos no Brasil
            </S.CounterSteelText>
          </S.InfosSteel>

          <S.Separator />

          <S.InfosCarbon>
            <S.BoxContainer>
              {items.length > 0
                ? items.map((box, i) =>
                    i === items.length - 1 ? (
                      <S.Box key={box.id} />
                    ) : (
                      <S.BoxFull key={box.id} />
                    )
                  )
                : null}
            </S.BoxContainer>
            <S.CounterCarbonText>
              e com a Oncrets o potencial é reduzir {items.length - 1}m³ de CO2
              durante esse tempo.
            </S.CounterCarbonText>
          </S.InfosCarbon>
        </S.Infos>
      </S.Content>
    </S.Main>
  );
}

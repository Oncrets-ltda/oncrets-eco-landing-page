"use client";

import * as S from "./style";
import { useEffect, useState } from "react";

export default function CountUp() {
  const [running, setRunning] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const fixedDate = new Date(2023, 8, 8, 0, 0, 0);

    let interval;
    if (running) {
      interval = setInterval(() => {
        let date = new Date();

        let newDate = date.getTime() - fixedDate.getTime();
        let newTime = new Date(newDate);

        setSeconds(newTime.getSeconds());
        setMinutes(newTime.getMinutes());
        setHours(newTime.getUTCHours());
        setDays(date.getDate() - fixedDate.getDate());
      }, 1000);
    }
  }, [running]);

  return (
    <S.Container>
      <S.ColumnDays>
        <S.CounterDigit> {days < 10 ? "0" + days : days}</S.CounterDigit>
        <S.CounterSub>dias</S.CounterSub>
      </S.ColumnDays>
      <S.CounterSeparator>:</S.CounterSeparator>
      <S.ColumnDays>
        <S.CounterDigit> {hours < 10 ? "0" + hours : hours}</S.CounterDigit>
        <S.CounterSub>horas</S.CounterSub>
      </S.ColumnDays>
      <S.CounterSeparator>:</S.CounterSeparator>
      <S.ColumnDays>
        <S.CounterDigit>
          {" "}
          {minutes < 10 ? "0" + minutes : minutes}
        </S.CounterDigit>
        <S.CounterSub>minutos</S.CounterSub>
      </S.ColumnDays>
      <S.CounterSeparator>:</S.CounterSeparator>
      <S.ColumnDays>
        <S.CounterDigit>
          {" "}
          {seconds < 10 ? "0" + seconds : seconds}
        </S.CounterDigit>
        <S.CounterSub>segundos</S.CounterSub>
      </S.ColumnDays>
    </S.Container>
  );
}

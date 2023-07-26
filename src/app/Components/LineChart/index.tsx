"use client";

import * as S from "./style";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
  ],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65, 70, 75, 68, 82],
      fill: true,
      backgroundColor: "rgba(105,211,103,0.2)",
      borderColor: "#86bf6e",
    },
  ],
};

export default function LineChart() {
  return (
    <S.Wrapper>
      <S.Title>
        Lorem ipsum dolor <span>sit amet</span>
      </S.Title>
      <S.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </S.Text>
      <Line data={data} />
    </S.Wrapper>
  );
}

import React from "react";

export interface ITemperature {
  temperature: number;
  id: number;
  increase: React.Dispatch<number>;
  decrease: React.Dispatch<number>;
}

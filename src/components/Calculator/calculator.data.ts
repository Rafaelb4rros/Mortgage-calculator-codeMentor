import { CalculatorDataType } from "./calculator.types";

export const data: CalculatorDataType[] = [
  {
    type: "currency",
    name: "purchase_price",
    label: "Purchase price",
    maxValue: 1000000,
    minValue: 0,
  },
  {
    type: "currency",
    name: "down_payment",
    label: "Down payment",
    maxValue: 1000000,
    minValue: 0,
  },
  {
    type: "time",
    name: "repayment_time",
    label: "Repayment time",
    maxValue: 30,
    minValue: 0,
  },
  {
    type: "percentage",
    name: "interest_rate",
    label: "Interest rate",
    maxValue: 100,
    minValue: 0,
  },
];

export type MortgageData = {
  purchase_price: number;
  down_payment: number;
  repayment_time: number;
  interest_rate: number;
};

export type CalculatorDataType = {
  name: keyof MortgageData;
  label: string;
  maxValue: number;
  minValue: number;
  type: string;
};

export type MortgageCalculatorProps = {
  setValue: (value: MortgageData) => void;
  value: MortgageData;
};

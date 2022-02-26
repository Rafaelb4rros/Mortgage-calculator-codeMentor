import { formatter } from "../../utils/formatter";
import { Input } from "../Input";
import { data } from "./calculator.data";
import styles from "./calculator.styles.module.scss";

import {
  CalculatorDataType,
  MortgageCalculatorProps,
} from "./calculator.types";

const MortgageCalculator = ({ value, setValue }: MortgageCalculatorProps) => {
  return (
    <main className={styles.wrapper}>
      {data.map(
        ({ type, name, label, maxValue, minValue }: CalculatorDataType) => {
          let display = "error";

          if (type === "currency") {
            display = formatter.format_currency({
              value: value[name],
            });
          } else if (type === "percentage") {
            display = `${value[name]}%`;
          } else {
            display = `${value[name]} years`;
          }

          return (
            <div key={name} className={styles.container}>
              <label htmlFor={name}>{label}</label>
              <Input
                id={name}
                name={name}
                type={"range"}
                value={value[name]}
                onChange={(e) =>
                  setValue({
                    ...value,
                    [name]: Number(e.target.value),
                  })
                }
                min={minValue}
                max={maxValue}
              />

              <div>
                <strong>{display}</strong>
              </div>
            </div>
          );
        }
      )}
    </main>
  );
};

export default MortgageCalculator;

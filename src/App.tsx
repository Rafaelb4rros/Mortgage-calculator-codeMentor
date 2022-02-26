import { useState } from "react";
import { MortgageCalculator } from "./components/Calculator";
import { MortgageData } from "./components/Calculator/calculator.types";
import { formatter } from "./utils/formatter";
import styles from "./styles/home.styles.module.scss";

const Calculator = () => {
  const [value, setValue] = useState<MortgageData>({
    purchase_price: 450000,
    down_payment: 135000,
    repayment_time: 25,
    interest_rate: 3,
  });

  const MortgageCalc = () => {
    let loanAmt = value.purchase_price - value.down_payment;
    let monthlyMortgagePayment = value.interest_rate / 100 / 12;
    let repaid = value.repayment_time * 12;
    let factor = Math.pow(monthlyMortgagePayment + 1, repaid);
    let numerator = monthlyMortgagePayment * factor;
    let denominator = factor - 1;
    let quotient = numerator / denominator;
    let payment = loanAmt * quotient;
    let monthlyPayments =
      !isNaN(payment) &&
      payment !== Number.POSITIVE_INFINITY &&
      payment !== Number.NEGATIVE_INFINITY
        ? Math.ceil(payment)
        : 0;

    return [monthlyPayments, loanAmt];
  };

  const [estimate, loan] = MortgageCalc();

  return (
    <section className={styles.wrapper}>
      <MortgageCalculator value={value} setValue={setValue} />

      <div className={styles.container}>
        <div>
          <span>
            Loan amount: <br />
          </span>
          <strong>
            {formatter.format_currency({
              value: loan,
            })}
          </strong>
        </div>

        <div>
          <span>
            Estimated pr. month: <br />
          </span>
          <strong>
            {formatter.format_currency({
              value: estimate,
            })}
          </strong>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

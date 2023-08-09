import { useState, useEffect } from "react";

import { setAmountCurrency, setPayments } from "./helpers";
import { PaymentDeadlineOptionInterface } from "./interface";
import {
  Buttons,
  Header,
  PaymentDeadline,
  PaymentSummary,
  SetAmount
} from "./components";


function App() {
  const minLoan         : number            = 100;
  const maxLoan         : number            = 30000;
  const step            : number            = 100;
  const initialLoan     : number            = 10000;

  const [loanAmount, setLoanAmount]         = useState<number>(initialLoan);
  const [deadline, setDeadline]             = useState<PaymentDeadlineOptionInterface>({ value: "", optionText: "" });
  const [totalPayment, setTotalPayment]     = useState<number>(0);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0)
  const [loading, setLoading]               = useState<boolean>(false);

  const onClickBtn = (isDecrement : boolean) => {
    if (isDecrement && loanAmount > minLoan) {
      setLoanAmount(loanAmount - step);
      return;
    }

    if (!isDecrement && loanAmount  < maxLoan) {
      setLoanAmount(loanAmount + step);
    }
  };

  const onChangeRange = (e : any) => {
    setLoanAmount(Number(e.target.value));
  };

  useEffect(() => {
    setLoading(true);
    
    const payment = setPayments(loanAmount, Number(deadline.value));

    if (payment) {
      setTotalPayment(payment.fullPayment);
      setMonthlyPayment(payment.monthlyPayment);
      setLoading(false);
    }
  }, [loanAmount, deadline]);

  return (
    <div className="bg-white shadow p-[10px] rounded-[10px] w-full">
      <Header />

      <SetAmount
        amount={loanAmount}
        min={minLoan}
        max={maxLoan}
        step={step}
        setAmountCurrency={setAmountCurrency}
        onChangeFunction={onChangeRange}
      />

      <div className="flex justify-between py-5">
        <Buttons clickFunction={onClickBtn} btnText="-" IsDecrement={true} />
        <Buttons clickFunction={onClickBtn} btnText="+" IsDecrement={false} />
      </div>

      <PaymentDeadline deadlineSelected={deadline} setDeadlineSelected={setDeadline} />

      <PaymentSummary payment={totalPayment} monthlyPayment={monthlyPayment} isLoading={loading} selectedPeriod={deadline.optionText} />
    </div>
  )
}

export default App
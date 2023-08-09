import { PaymentDeadlineInterface } from "../interface";
import { deadlineOptions } from "../constant";

const PaymentDeadline = (props : PaymentDeadlineInterface) => {
  const { deadlineSelected, setDeadlineSelected } = props;

  return (
    <div className="pb-5">
      <select
        className="p-2  w-1/2 shadow bg-white border border-gray-300 rounded-lg text-gray-500 sm:text-xl text-lg font-bold text-center"
        value={deadlineSelected.value}
        onChange={(e : any) => 
          setDeadlineSelected({ value: Number(e.target.value), optionText: e.target?.selectedOptions[0]?.innerText })
        }
      >
        {deadlineOptions.map((option, index) => (
          <option key={index} value={option.value}>{ option.optionText }</option>
        ))}
      </select>
    </div>
  );
};

export default PaymentDeadline;
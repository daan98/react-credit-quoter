import { PaymentSummaryInterface } from "../interface";

const PaymentSummary = (props : PaymentSummaryInterface) => {
  const { payment, monthlyPayment, isLoading, selectedPeriod } = props;
  return (
    <div className="p-4 sm:w-3/5 w-full sm:m-auto bg-lime-100 rounded-lg">
      <h1 className="text-gray-500 font-bold text-2xl pb-1">Payment <span className="text-purple-600">summary</span></h1>

      { isLoading ? 
          <h1 className="text-purple-600 font-bold text-lg pb-1">Loading...</h1>/* text-purple-600 */
        : selectedPeriod ? 
          <>
            <p
              className="text-gray-500 font-bold text-lg md:text-left flex flex-col text-center md:block"
            >
              Selected period: &nbsp;
              <span className="text-purple-600">{ selectedPeriod ? selectedPeriod : ''}</span>
            </p>
            <p
              className="text-gray-500 font-bold text-lg md:text-left flex flex-col text-center md:block"
            >
              Total payment: &nbsp;
              <span className="text-purple-600">{ payment ? payment : '' }</span>
            </p>
            <p
              className="text-gray-500 font-bold text-lg md:text-left flex flex-col text-center md:block"
            >
              monthly payment: &nbsp;
              <span className="text-purple-600">{ monthlyPayment ? monthlyPayment : '' }</span>
            </p>
          </>
        :
          <>
            <h1 className="text-purple-600 font-bold text-lg pb-1">Select a period to start</h1>
          </>
      }
    </div>
  );
};

export default PaymentSummary
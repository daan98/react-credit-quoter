import { SetAmountInterface } from "../interface";

function SetAmount(props : SetAmountInterface) {
  const {
    amount,
    min,
    max,
    step,
    setAmountCurrency,
    onChangeFunction
  } = props;

  return (
    <div className='pt-5'>
      <p className="text-center text-purple-600 text-4xl font-extrabold pb-[10px]">{ setAmountCurrency(amount) }</p>
      
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        value={amount}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChangeFunction(e)}
      />
    </div>
  );
};

export default SetAmount;
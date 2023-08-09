import { ButtonInterface } from "../interface";

const Buttons = (props : ButtonInterface) => {
  const { btnText, clickFunction, IsDecrement } = props;
  return (
    <button
      className=" bg-lime-300 rounded-full w-10 h-10 font-bold duration-300 transition-all ease-in-out hover:bg-lime-700 
      hover:text-white hover:duration-300 hover:transition-all hover:ease-out"
      onClick={() => clickFunction(IsDecrement)}
    >
      { btnText }
    </button>
  );
};

export default Buttons;
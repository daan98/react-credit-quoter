export default interface SetAmountInterface {
    setAmountCurrency : Function;
    onChangeFunction  : Function;
    amount            : number;
    min               : number;
    max               : number;
    step              : number;
};
import { PaymentDeadlineOptionInterface } from ".";

export default interface PaymentDeadlineInterface {
    deadlineSelected        : PaymentDeadlineOptionInterface;
    setDeadlineSelected     : Function;
};
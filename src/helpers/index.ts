const setAmountCurrency = (amount : number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return formatter.format(amount);
};

const setPayments = (amount : number, months : number) => {
    let totalPayment;

    switch (months) {
        case 6:
            totalPayment = amount + (amount * 0.15);
            break;

        case 12:
            totalPayment = amount + (amount * 0.25);
            break;

        case 24:
            totalPayment = amount + (amount * 0.35);
            break;
    
        default:
            totalPayment = amount + (amount * 1.5)
            break;
    }

    return {
        fullPayment: Number(totalPayment.toFixed(2)),
        monthlyPayment: Number((totalPayment / months).toFixed(2))
    };
};

export {
    setAmountCurrency,
    setPayments
 };
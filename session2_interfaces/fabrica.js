function paymentProcess(pagamento) {
    switch (pagamento.paymethod) {
        case "card":
            console.log("Payment by card");
            break;
        case "mbway":
            console.log("Payment by mbway");
            break;
        case "paypal":
            console.log("Payment by paypal");
            break;
    }
}
const processPayment = (p) => {
    return `This purchase was made with ${p.paymethod}`;
};
const compra = { value: 10, paymethod: "mbway", details: "Approved" };
paymentProcess(compra);
processPayment(compra);
let bolinhasconfig = { brand: "peugeot", year: 1999, };
let bolinhas = bolinhasconfig;
// console.log(bolinhas)

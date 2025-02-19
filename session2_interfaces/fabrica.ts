interface carro {
    brand: string;
    year: number;
    color?: string;
    underwarranty?: boolean;
    doors?: 3 | 5;
}

type paymentMethod = "card" | "mbway" | "paypal"

interface Payment {
    value: number;
    paymethod: paymentMethod;
    details: string;
    car: carro;
}

function paymentProcess(pagamento:Payment) {
    switch(pagamento.paymethod){
        case "card":
            console.log("Payment by card (Switch case)")
            break;
        case "mbway":
            console.log("Payment by mbway (Switch case)")
            break;
        case "paypal":
            console.log("Payment by paypal (Switch case)")
            break;
    }
}

const processPayment = (p:Payment): string => {
    return `This purchase was made with ${p.paymethod}`
}

let bolinhasconfig = {brand: "peugeot", year: 1999, }
let bolinhas: carro = bolinhasconfig

const compra: Payment = {value: 10, paymethod: "mbway", details: "Approved", car: bolinhas}

paymentProcess(compra)

console.log(processPayment(compra))




// console.log(bolinhas)
class Veiculo {
    marca: string
    modelo: string
    ano: number

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    speedup(speed: number) {
        speed < 60 ? console.log ("zoom") : console.log("zoom zoom")
    }

    description(): string {
        return `Vehicle Description Log ---> Brand: ${this.marca} - Model: ${this.modelo} - Year: ${this.ano}`
    }
}

class Carro extends Veiculo {
    portas: number

    constructor(marca: string, modelo: string, ano: number, portas: number) {
        super(marca, modelo, ano)
        this.portas = portas
    }

    toUnlock() {
        console.log("beep beep")
    }

    description(): string {
        return super.description() + ` - Doors: ${this.portas}`
    }
}

const mercedes = new Carro ( "mercedes", "R445HY", 2039, 1 )

console.log(mercedes)

mercedes.toUnlock()

mercedes.speedup(100)
mercedes.speedup(40)

console.log(mercedes.description())


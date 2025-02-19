// Player Utility Types Exercise

type Player = {
    name: string
    age: number
    game: string
}

const Player1: Partial<Player> = {name: "Tony", age: 10}

const Player2: Readonly<Player> = {name: "Unchangeable", age: 9, game: "StubbornGoose"}

const Player3: Pick<Player, "age" > = { age: 2}

const Player4: Omit<Player, "age"> = {name: "Omiciozinho", game: "tick-tack-toe"}


// console.log(`\n Player1: ${JSON.stringify(Player1)},\n \n Player2: ${JSON.stringify(Player2)},\n \n Player3: ${JSON.stringify(Player3)},\n \n Player4: ${JSON.stringify(Player4)} \n`)

// ListHandler GenericType Exercise

class ListHandler<T> {
    
    list: T[] = []

    add(param: T) {
        this.list.push(param)
        return `Added ${param} | type: ${typeof param} `

    }
    remove(param: T) {
        return this.list.includes(param) 
            ? (this.list = this.list.filter(item => item !== param), `Removed ${param} | type: ${typeof param}`) 
            : `Error: (Removal) ${param} is not on the list`;
    }
    getAll(): string {
        return `Current list: \n` + this.list
    }

}

const lists = new ListHandler();

console.log(lists.add("a"))
console.log(lists.add("b"))
console.log(lists.add("c"))
console.log(lists.remove("a"))
console.log(lists.remove(12))
console.log(lists.getAll())

type Product = {
    id: number
    name: string
    price: number
}

class CreateProduct implements Product{
    id: number
    name: string
    price: number

    constructor(id: number, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }

    readProduct() {
        return `id: ${this.id}, name: ${this.name}, price: ${this.price}`
    }
}


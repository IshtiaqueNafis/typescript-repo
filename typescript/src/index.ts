let age = 10;

function render(document: any) {
    console.log(document)
}

let numbers: number[] = [];
numbers.forEach(n => n.toFixed());

//tuples

let user: [number, string] = [1, "nafis"]


//enums
enum Sizes {Small = 1, Medium, Large}

let mySize: Sizes = Sizes.Medium;
console.log(mySize)

//functions
function CaluclateTax(income: number): number {
    if (income < 50_000) {
        return income * 1.2;
    }
    return income * 1.3
}

//objects

let employee: {
    id: number,
    name: string
    retire: (date: Date) => void
} = {id: 1, name: "nafis", retire: (date: Date) => console.log(date)};

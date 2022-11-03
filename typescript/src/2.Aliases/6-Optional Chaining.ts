type Customer = {
    birthday?: Date;
}

function getCustomer(id: number): Customer | null |undefined{
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(1);

console.log(customer?.birthday?.getFullYear())

//optional element acess Operators

//customers?[0]

let log: any = null;
log?.('a');

let speed: number | null = null;
let ride = {
    speed: speed ?? 30,
    


}
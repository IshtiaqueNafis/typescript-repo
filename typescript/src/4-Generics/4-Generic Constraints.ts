interface Person{
    name:string
}
class Person1{
    constructor(public name:string) {
    }
}


function echo<T extends number|string|Person|Person1>(value: T):T{
    return value;
}

echo(1);


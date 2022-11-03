// Convert the function below to a generic function

//function echo(arg) { return arg; }

function arg<T>(arg: T): T {
    return arg
}

//When compiling the following piece of code, we get an error saying ‘Property name does not exist on type T’.
// function printName<T>(obj:T) {console.log(obj.name);}

function printName<T extends { name: string }>(obj: T) {
    console.log(obj.name);
}
//Given the following interface, what does keyof User return?
interface Users { userId:number; username:string;}


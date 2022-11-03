interface Products {
    name: string;
    price: number;
}

type ReadOnlyProduct = {
    //Index signeature
    //key of operators
    [K in keyof Products]: Products[K]
}

type ReadOnlys<T> = {
    readonly [K in keyof T]: T[K]
};
type Optinal<T> ={
    readonly [K in keyof T]?: T[K]
}
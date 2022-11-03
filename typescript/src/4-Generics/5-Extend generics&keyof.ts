interface Product {
    name: String
    price: number
}

class Store<T> {
    object: T[] = []

    add(obj: T): void {
        this.object.push(obj);
    }
}

let store = new Store<Product>();
store.object = [];

//extending
class CompressibleStore<T> extends Store<T> {
    compress() {
    }
}

let store1 = new CompressibleStore<Product>();
store1.compress();

class SearchStore<T extends { name: string }> extends Store<T> {
    find(name: string): T | undefined {
        return this.object.find(obj => obj.name === name);
    }

    find1(property: keyof T, value: unknown): T | undefined {
        return this.object.find(obj => obj[property] === value);

    }
}
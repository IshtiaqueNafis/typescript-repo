function WrapInArray(value: number) {
    return [value];
}

let n1 = WrapInArray(1);

class ArrayUtils {
    WrapInArray<T>(value: T) {
        return [value]
    }
}

let utils = new ArrayUtils();
utils.WrapInArray(1);
function greet(name: String|null|undefined) {
    if(name)
    console.log(name.toUpperCase());
    else {
        console.log("hola")
    }
}
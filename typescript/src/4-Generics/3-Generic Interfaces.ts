interface Result<T>{
    data: T|null
    error:string |null
}

function fetch<T>(url:string):Result<T>{
    console.log(url)
    return {data:null,error:null}
}

interface User1{
    username:string
}

interface Product {
    title:string
}

fetch<User1>("nafis");
fetch<Product>("nafis");
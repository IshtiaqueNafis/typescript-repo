const data ={
    hats:{
        data:[
            {id:1},
            {id:2}
        ]
    }
}
Object.keys(data).map(key=>console.log(data[key].data))
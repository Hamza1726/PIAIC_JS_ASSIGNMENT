function car({...params}) {
    let data = {};
    let keys = Object.keys(params);
    keys.map((item,index) => {
        data[`${item}`] = params[keys[index]]
    })
    return data;
    }

let carManufacturer = car({
        color: "black",
        brakes: "Antilock brakes",
        control:"Electronic stability control",
})
console.log(carManufacturer)
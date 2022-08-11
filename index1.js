let carVar ="color";
let myCar ={
    make: "Ford",
    model: "Explorer",
    year: 2008,
    color: "red",
    fuel: "gas",
    mpg: 18,
    is_Available: true,
    name :carVar
};
console.log(myCar.model, myCar.make);
myCar['name']= 'black';
myCar.name ='forsale';
myCar['name']= 'true';
console.log(myCar.name);
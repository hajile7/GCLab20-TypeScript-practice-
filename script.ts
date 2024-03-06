export {}

interface Mountain {
    name:string;
    height:number;
}

let mountains: Mountain[] = [
    {name:"Kilimanjaro", height: 19341},
    {name:"Everest", height: 29029},
    {name:"Denali", height: 20310}
];

function findNameOfTallestMountain(mountains:Mountain[]):string {
    let tallMountain:Mountain = mountains.reduce((prev, current) => (current.height > prev.height) ? current : prev);
    return tallMountain.name;
}

console.log(findNameOfTallestMountain(mountains)); //checked

interface Product {
    name:string;
    price:number;
}

let products:Product[] = [
    {name: "Celeste", price: 14.99},
    {name: "Hollow Knight", price: 14.99},
    {name: "Elden Ring", price: 59.99},
];

function calcAverageProductPrice(list:Product[]):number {
    let runningTotal:number = 0;
    list.forEach(product => {
        runningTotal += product.price;
    });
    return (runningTotal / list.length)
}

console.log(calcAverageProductPrice(products)); //checked

interface InventoryItem {
    product:Product;
    quantity:number;
}

let inventory:any[] = [
    {product: {
        name: "motor",
        price: 10.00
    }, quantity: 10},
    {product: {
        name: "sensor",
        price: 12.50
    }, quantity: 4},
    {product: {
        name: "LED",
        price: 1.00
    }, quantity: 20}
];

function calcInventoryValue(stock:InventoryItem[]):number {
    let runningTotal:number = 0;
    stock.forEach(item => {
        runningTotal += (item.product.price * item.quantity)
    });
    return(runningTotal);
}

console.log(calcInventoryValue(inventory));
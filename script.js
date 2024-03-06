"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(mountains) {
    var tallMountain = mountains.reduce(function (prev, current) { return (current.height > prev.height) ? current : prev; });
    return tallMountain.name;
}
console.log(findNameOfTallestMountain(mountains)); //checked
var products = [
    { name: "Celeste", price: 14.99 },
    { name: "Hollow Knight", price: 14.99 },
    { name: "Elden Ring", price: 59.99 },
];
function calcAverageProductPrice(list) {
    var runningTotal = 0;
    list.forEach(function (product) {
        runningTotal += product.price;
    });
    return (runningTotal / list.length);
}
console.log(calcAverageProductPrice(products)); //checked
var inventory = [
    { product: {
            name: "motor",
            price: 10.00
        }, quantity: 10 },
    { product: {
            name: "sensor",
            price: 12.50
        }, quantity: 4 },
    { product: {
            name: "LED",
            price: 1.00
        }, quantity: 20 }
];
function calcInventoryValue(stock) {
    var runningTotal = 0;
    stock.forEach(function (item) {
        runningTotal += (item.product.price * item.quantity);
    });
    return (runningTotal);
}
console.log(calcInventoryValue(inventory));

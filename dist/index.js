"use strict";
// const b = 'hello'
// console.log(b);
// console.log(' in the log');
class Product {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.id = Math.floor(Math.random() * 100);
    }
    get getId() {
        return this.id;
    }
    set setId(id) {
        this.id = id; //they are assigned values
    }
}
const Abhi = new Product('Abhi', 168, 57);
console.log(Abhi.weight);
console.log(Abhi.getId);
Abhi.setId = 66;
console.log(Abhi.getId);
// Type Assertion
const form = document.getElementById('myform');
const myinput = document.querySelector('form > input');
form.onsubmit = (e) => {
    e.preventDefault();
    // console.log(myinput.value);
    const value = Number(myinput.value);
    const h2 = document.createElement("h2");
    const body = document.querySelector("body");
    h2.textContent = String(value + 20);
    body.appendChild(h2);
};
const myObj = {
    name: 'Abhishek',
    email: 'Abhi@gmail.com'
};
const getData = (key) => {
    return myObj['email'];
};
// console.log(getData());
console.log(getData('name'));
//Lets suppose we dont know whats in Person interface
let key = 'name';
myObj[key];

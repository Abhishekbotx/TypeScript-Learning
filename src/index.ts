// const b = 'hello'
// console.log(b);
// console.log(' in the log');

// const c:string='hello bey be'
// console.log(c);

// const d=<number>43
// console.log(d);


// type userName=number | string

// let a:userName=45

// console.log(a);

// type check =(n:number,m:number)=> number;
// const fun:check=(n,m)=>{
//     return n*m
// }
// console.log('product of two numbers:',fun(5,6));

// const arr:number[]=[0,45,64]
// console.log(arr);

// const arr2:Array<string>=['vivek','abhishek','mohit']




//Objects

// type Obj={
//     height:number,
//     width:number,
//     gender?:boolean

// }
// const obj:Obj={
//     height:43,
//     width:64,
//     gender:true
// }

// type functype=(n:number,m:number)=>void

// interface Obj {
//     height:number,
//     width:number,
//     gender:boolean
// }

// interface Obj2 extends Obj{
//     color:string
//     func:functype
// }

// const abhi:Obj2={
//     height:43, //koi bhi defined property tum chhor nhi skte
//     width:45,
//     color:'brown',
//     gender:true,
//     func:(n,m)=>{
//         console.log(n*m);

//     },
// }

// abhi.func(10,10)

// //Rest Operator

// type restFuncType=(...m:Array<number>)=>number[]

// const funcX:restFuncType=(...m)=>{
//     return m
// }

// funcX(25,26,14,25,)
// console.log(funcX.length);



//Function with Objects 🍁

// With Type 🍁🌟
// type getDataType=(product:{
//     name:string,
//     height:number,
//     weight:number,
//     price:number,
//     photo:string
// })=>void

//With Interface 🍁🌟

// interface Product {
//     name: string,
//     height: number,
//     weight: number,
//     price: number,
//     photo: string,
//     readonly id: string
// }
// // Pehle humne  Product ka object ke keys aur uke type ko define kiya,
// // Then hume ek function bnana tha jisme ki hume arguments mein object chhiye tha jisme ki humne 
// // Defined Product interface/type ko use kiya
// type getDataType = (product: Product) => void

// const getData: getDataType = (prod) => {
//     console.log(prod);
//     prod.height
//     prod.weight
//     prod.id
//     console.log(prod.photo)

// }


// const prod1: Product = {
//     name: 'Abhi',
//     height: 168,
//     weight: 60,
//     price: 0,
//     photo: 'abhi.png',
//     id: 'asahjdduklnl'
// }

// const prod2: Product = {
//     name: 'abhisek',
//     height: 167,
//     weight: 64,
//     price: 0,
//     photo: 'abhi.jpg',
//     id: 'asahjdduklnl'


// }

// getData(prod1)
// getData(prod2)


// interface ProductType {
//     name: string,
//     height: number,
//     weight: number,
//     mass: number

// }


// type functionType = (prod: ProductType) => void;

// const TestFunc: functionType = (prod) => {
//     console.log('height:', prod.height);
//     console.log('weight:', prod.weight);
//     console.log('name:', prod.name); // Added to ensure all fields are printed
// };

// const TProduct: ProductType = {
//     name: "AbhishekX",
//     height: 172,
//     weight: 57,
//     mass: 10.8
// };

// // Call the function to print the product details
// TestFunc(TProduct);



// //Never type

// const errorHandler1 = () => {
//     throw new Error() //throw krwaenge toh never return hoga
// }
// const errorHandler2 = () => {
//     return new Error() // return error krwayenge to error return hoga
// }


// // type themeMode= 'light' | 'dark'
// // const mode:themeMode="dark"

// class Player {
//     public readonly id:string
//     constructor(
//         private height: number,
//         public weight: number,
//         protected age: number,

//     ) {
//         this.id=String(Math.floor(Math.random()*100))
//     }
//     getMyHeight = () => this.height
// }


// class Player2 extends Player {
//     special
//     constructor(
//         height: number,
//         weight: number,
//         age: number,
//         special?: boolean

//     ) {
//         super(height, weight, age)
//         this.age=age
//         this.special = special
//     }
//     getAge = () => this.age;

// }

// const playerExample = new Player2(168, 57 ,27,true)
// console.log( 
//             playerExample.getMyHeight(),
//             playerExample.special,
//             playerExample.weight,
//             playerExample.getAge(),
//             playerExample.id
//         );


interface ProductType {
    name: string,
    height: number,
    weight: number,

}

class Product implements ProductType {
    private id: number = Math.floor(Math.random() * 100)
    constructor(
        public name: string,
        public height: number,
        public weight: number

    ) { }
    get getId(): number { //getter are not called like methods used like properties
        return this.id
    }

    set setId(id: number) {  //setter are not called like methods used like properties 
        this.id = id        //they are assigned values
    }

}

const Abhi = new Product('Abhi', 168, 57)
console.log(Abhi.weight);
console.log(Abhi.getId);
Abhi.setId = 66;
console.log(Abhi.getId);



// Type Assertion


const form=document.getElementById('myform') as HTMLFormElement;
const myinput=document.querySelector('form > input') as HTMLInputElement

form.onsubmit=(e:SubmitEvent)=>{
    e.preventDefault();
    // console.log(myinput.value);
    const value=Number(myinput.value);
    const h2=document.createElement("h2")
    const body=document.querySelector("body")!
    
    h2.textContent=String(value+20)
    body.appendChild(h2)
    
}



// Keyof & Index Signature

// interface Person {
//     // [key: string]: string;
//   name: string;
//   email: string;
// }

// const myobj: Person = {
//   name: "Abhi",
//   email: "abhI@gmail.com",
// };

// let key="name";

// myobj[key as keyof typeof myobj]

// const getName = (): string => {
//   return myobj["name"];
// };
// const getEmail = (): string => {
//   return myobj["email"];
// };

// const getData = (key: keyof Person ): string => {
//   return myobj[key];
// };

// getData("name")


interface Personk{
    name:string;
    email:string;
}

const myObj:Personk={
    name:'Abhishek',
    email:'Abhi@gmail.com'
}

const getData=(key: keyof Personk):string =>{
 return myObj['email']
}

// console.log(getData());
console.log(getData('name'));

//Lets suppose we dont know whats in Person interface

let key='name'

myObj[key as keyof typeof myObj]



// Generics

// const func = <T>(n: T): T => {

//   return n;
// };

// const ans1 = func(20);
// const ans2 = func("20");
// const ans3 = func(true);

type Personz = {
  name: string;
  age: number;
};

// const func = <T>(n: T): T => {
//   return n;
// };

// const person1: Person = {
//   name: "Abhi",
//   age: 109,
// };

// const ans = func<Person>(person1);

const func1 = <T, U>(n: T, o: U): { n:T, o:U } => {
  return { n, o };
};

const ans11 = func1<number,string>(20,"Lol");

type Personx = {
  name: string;
  age: number;
};

type Person2 = {
  name: string;
  age: number;
  email: string;
};

const user: Person = {
  name: "abhi",
  age: 109,
};

const user2: Person2 = {
  name: "abhi",
  age: 109,
  email: "asd@gmail.com",
};

const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
  return { n, o };
};

const ans = func<Person, Person2>(user, user2);

type Person = {
  name: string;
  age: number;
};

const users: Person[] = [
  {
    name: "abhi",
    age: 109,
  },
  {
    name: "Nahar",
    age: 109,
  },
  {
    name: "Levi",
    age: 52,
  },

  {
    name: "Random",
    age: 2,
  },
];

const filterByPeoples = <T, U extends keyof T>(
  arr: T[],
  property: U,
  value: T[U]
): T[] => {
  return arr.filter((item) => item[property] === value);
};

const filteredPeopleByName = filterByPeoples(users, "name", "Nahar");
const filteredPeopleByAge = filterByPeoples(users, "age", 109);
console.log(filteredPeopleByAge);






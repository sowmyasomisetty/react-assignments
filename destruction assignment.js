// 1. Destructure the following object to extract its properties `name` and `age`.
// const person = { name: 'John', age: 30 };

const person={
    name:"john",
    age:30
}
const {name,age}=person
console.log("Nmae: ",name)
console.log("Age: ",age)


// 2. Swap the values of variables `a` and `b` using destructuring.
// let a = 10, b = 20;



// 3. Destructure the following nested object to extract the properties `name` and `city`.
//  const user = {
//  name: 'Alice',
//  address: {
//  city: 'New York',
//  country: 'USA'
//  }
//  };

const user = {
    name1: 'Alice',
    address: {
        city: 'New York',
        country: 'USA'
    }
};
const {name1,address:{city}}=user
console.log("name of user: ",name1)
console.log("city: ",city)


// 4. Destructure the following array to extract the first two elements.
// const numbers = [10, 20, 30, 40];

const numbers = [10, 20, 30, 40];
const [a,b]=numbers
console.log("first val:",a)
console.log("second val:",b)


// 5.  Use destructuring to extract and print `name` and `age` from the following object with default values in case they are missing.
// const person = { name: 'John' };

const per = { name2: 'John' };
const{name2,age1=24}=per
console.log("name2: ",name2)
console.log("age: ",age1)



// Medium Level Questions

// 1. Destructure the following nested object to extract `name`, `age`, and `city`.
// const user = {
// details: {
// name: 'Alice',
// age: 25,
// address: {
// city: 'New York',
// country: 'USA'
// }
// }
// };

const user3 = {
    details: {
        name3: 'Alice',
        age3: 25,
        address3: {
            city3: 'New York',
            country3: 'USA'
        }
    }
};
const {details:{name3,age3,address3:{city3}}}=user3
console.log("name3: ",name3)
console.log("age3: ",age3)
console.log("city3: ", city3)


// 2. Destructure the following array of objects to extract the `name` property from each object.
// const users = [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 35 }
// ];

const users = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];




                        // Basic level

// 1. Transform Elements with `.map()`
// You have an array of names. Convert all names to uppercase.
// **Input:**
// const names = ["alice", "bob", "charlie"];
// **Expected Output:**
// ["ALICE", "BOB", "CHARLIE"]

const names=["alice","bob","charlie"]
const res=names.map((ele)=>ele.toUpperCase())
console.log(res)


// 2. Filter Items with `.filter()`**
// You have an array of numbers. Filter out all numbers less than 10.
// **Input:**
// const numbers = [5, 12, 8, 20, 3];
// **Expected Output:**
// [12, 20]

const numbers = [5, 12, 8, 20, 3]
const res2=numbers.filter(ele=>ele>10)
console.log(res2)


// 3. Calculate Total with `.reduce()`
// Find the sum of all elements in an array.
// **Input:**
// const expenses = [100, 200, 50, 300];
// **Expected Output:**
// 650

const expenses = [100, 200, 50, 300]
let res3=expenses.reduce((prev,cur)=>prev+cur,0)
console.log(res3)


// 4. Find an Item with `.find()`
// You have a list of tasks. Find the first task that is marked as `completed`.
// **Input:**
// const tasks = [
// { name: "Task 1", completed: false }
// { name: "Task 2", completed: true },
// { name: "Task 3", completed: false }
// ];
// **Expected Output:**
// { name: "Task 2", completed: true }

const tasks = [
    { name: "Task 1", completed: false },
    { name: "Task 2", completed: true },
    { name: "Task 3", completed: false }
]
let res4=tasks.find(ele=>ele.completed==true)
console.log(res4)


// Sort Items with `.sort()`
// Sort an array of numbers in ascending order.
// **Input:**
// const scores = [45, 10, 85, 30]
// **Expected Output:**
// [10, 30, 45, 85]

const scores = [45, 10, 85, 30];
const res5=scores.sort()
console.log(res5)



                            // Medium Level

// 1. Chain Methods
// Filter numbers greater than 10, then double them using `.map()`.
// **Input:**
// const numbers = [5, 12, 8, 20, 3];
// **Expected Output:**
// [24, 40]

const numbers1 = [5, 12, 8, 20, 3]
const res6=numbers.filter(ele=>ele>10).map((ele)=>ele*2)
console.log(res6)


// 2. Find Total Stock
// Calculate the total stock from an array of products using `.reduce()`.
// **Input:**
// const products = [
//  { name: "Laptop", stock: 10 },
//  { name: "Phone", stock: 5 },
//  { name: "Tablet", stock: 8 }
// ]
// Expected Output:**
// 23

const products = [
    { name: "Laptop", stock: 10 },
    { name: "Phone", stock: 5 },
    { name: "Tablet", stock: 8 }
]
let res7=products.reduce((prev,cur)=>prev+cur.stock,0)
console.log(res7)


// 3. Validate Data with `.every()`
// Check if all users in an array are verified.
// **Input:**
// const users = [
//  { name: "Alice", verified: true },
//  { name: "Bob", verified: true },
//  { name: "Charlie", verified: false }
// ];
// **Expected Output:**
// false

const users = [
    { name: "Alice", verified: true },
    { name: "Bob", verified: true },
    { name: "Charlie", verified: false }
];
const res8=users.every(ele=>ele.verify==true)
console.log(res8)


// 4. Identify Urgent Tasks with `.some()`
// Check if there are any urgent tasks in the list.
// **Input:**
// const tasks = [
//  { name: "Task 1", urgent: false },
//  { name: "Task 2", urgent: true },
//  { name: "Task 3", urgent: false }
// ];
// **Expected Output:**
// true

const tasks1 = [
    { name: "Task 1", urgent: false },
    { name: "Task 2", urgent: true },
    { name: "Task 3", urgent: false }
];
let res9=tasks1.some(ele=>ele.urgent==true)
console.log(res9)


// 5. Custom Sorting
// Sort an array of objects by age in descending order.
// **Input:**
// const people = [
//  { name: "Alice", age: 25 },
//  { name: "Bob", age: 30 },
//  { name: "Charlie", age: 20 }
// ];
// **Expected Output:**
// [
//  { name: "Bob", age: 30 },
//  { name: "Alice", age: 25 },
//  { name: "Charlie", age: 20 }
// ]

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
];
const res10=people.sort((a,b)=>(b.age-a.age)) 
console.log(res10)


                            // Advanced Level

// 1. Group Items by Category**
// Group products by their category using `.reduce()`.
// **Input:**
// const products = [
//     { name: "Laptop", category: "Electronics" },
//     { name: "Shirt", category: "Clothing" },
//     { name: "Phone", category: "Electronics" },
//     { name: "Pants", category: "Clothing" }
// ];
// Expected Output:
// {
//  Electronics: [
//  { name: "Laptop", category: "Electronics" },
//  { name: "Phone", category: "Electronics" }
//  ],
//  Clothing: [
//  { name: "Shirt", category: "Clothing" },
//  { name: "Pants", category: "Clothing" }
//  ]
// }                           

const products1 = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Phone", category: "Electronics" },
    { name: "Pants", category: "Clothing" }
];


// 2. Chain Multiple Methods
// Filter products in stock, then map their names, and sort alphabetically.
// **Input:**
// const products = [
//  { name: "Laptop", stock: 10 },
//  { name: "Phone", stock: 0 },
//  { name: "Tablet", stock: 5 }
// ];
// Expected Output:**
// ["Laptop", "Tablet"]

const products2 = [
    { name: "Laptop", stock: 10 },
    { name: "Phone", stock: 0 },
    { name: "Tablet", stock: 5 }
];
let res12=products2.filter(ele=>ele.stock>0).map(ele=>ele.name).sort((a,b)=>{a.name-b.name})
console.log(res12)


// 3. Advanced Search with `.find()` and `.filter()`
// Find the first product in a specific category that is in stock.
// **Input:**
// const products = [
//  { name: "Laptop", category: "Electronics", stock: 0 },
//  { name: "Shirt", category: "Clothing", stock: 5 },
//  { name: "Phone", category: "Electronics", stock: 10 }
// ];
// *Expected Output:
// { name: "Phone", category: "Electronics", stock: 10 }

const products3 = [
    { name: "Laptop", category: "Electronics", stock: 0 },
    { name: "Shirt", category: "Clothing", stock: 5 },
    { name: "Phone", category: "Electronics", stock: 10 }
];
const res13=products3.filter(ele=>ele.category=="Electronics" && ele.stock>0).find(ele=>ele.stock>0)
console.log(res13)


// 4. Nested Data Transformation
// Flatten and extract unique tags from a list of posts.
// **Input:**
// const posts = [
//  { id: 1, tags: ["javascript", "web"] },
//  { id: 2, tags: ["javascript", "react"] },
//  { id: 3, tags: ["web", "css"] }
// ];
// Expected Output:
// ["javascript", "web", "react", "css"]

const posts = [
    { id: 1, tags: ["javascript", "web"] },
    { id: 2, tags: ["javascript", "react"] },
    { id: 3, tags: ["web", "css"] }
];


// 5. Implement Custom Methods
// Write your own version of `.map()` as a function.
// **Input:**
// const numbers = [1, 2, 3];
// const double = customMap(numbers, num => num * 2);
// Expected Output:
// [2, 4, 6]

function customMap(a,callback){
    const res15=numbers2.map(ele=>ele*2)
    return res15
}
const numbers2 = [1, 2, 3];
const double = customMap(numbers2, num => num * 2);
console.log(double)

  

// advance 1 , 4

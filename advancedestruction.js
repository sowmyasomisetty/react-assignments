// Question 1: Extract Data from Nested Arrays

const numbers = [1, [2, 3, [4, 5]]];
function extractNumbers([first,[second,,nested]]) {
    console.log(`First: ${first}, Second: ${second}, Nested: ${nested}`);
}
extractNumbers(numbers);


// Question 2: Pass Destructured Parameters

const developer = { name: 'Eve', skills: ['HTML', 'CSS', 'JavaScript'] };
function listSkills({name,skills}) {
    console.log(`${name}'s skills:`);
    skills.forEach(skill => console.log(skill));
}
listSkills(developer);


// Question 3: Extract Multiple Levels of Data

const user = {
    id: 1,
    personalInfo: {
    name: 'Frank',
    email: 'frank@example.com',
    address: { city: 'Paris', country: 'France' },
    },
};
function getUserInfo({id,personalInfo:{name,email,address:{city}}}) {
    console.log(`Name: ${name}, Email: ${email}, City: ${city}`);
}
getUserInfo(user);
   

// Question 4: Rename and Use Defaults

const user1 = { name: 'Grace' };
function displayUserInfo({name:userName,age=25}) {
    console.log(`User: ${userName}, Age: ${age}`);
}
displayUserInfo(user1);


// Question 5: Extract and Reconstruct

const user2 = { name: 'Hank', email: 'hank@example.com', age: 40 };
function createUserObject({name,email}) {
    return ({name,email});
}
console.log(createUserObject(user2));


// Question 7: Combine Rest with Default Values

const person = { name: 'Ivy', country: 'USA', city: 'Seattle' };
function displayPerson({name,age=30,...details}) {
    console.log(`Name: ${name}, Age: ${age}, Details:`, details);
}
displayPerson(person);


// Question 8: Extract and Map Object Keys

const person1 = { firstName: 'Jack', lastName: 'Smith', age: 28 };
function logProperties({firstName,lastName,age}) {
    Object.keys(person1).forEach(key => console.log(`${key}: ${person1[key]}`));
}
logProperties(person1);


// Question 9: Destructure Function Return Values

function getData() {
    return { id: 123, name: 'Kate', role: 'Developer' };
}
const {id,name,role} = getData();
console.log(`ID: ${id}, Name: ${name}, Role: ${role}`);


// Question 10: Use Array Destructuring for Multiple Return Values

function getScores() {
    return [85, 90, 95];
}
const [math,science,english] = getScores();
console.log(`Math: ${math}, Science: ${science}, English: ${english}`);


// Question 11: Destructure in Loops

const books = [
    { title: 'Book A', author: 'Author A' },
    { title: 'Book B', author: 'Author B' },
];
function logBooks([{title,author},{title:t,author:a}]) {
    books.forEach(book=>console.log(book));
}
logBooks(books);


// Question 12: Dynamic Nested Destructuring

const data = { user: { id: 1, name: 'Liam' }, meta: { role: 'Admin' } };
function dynamicExtract({user:{},meta:{role:value}}) {
    console.log(`Value: ${value}`);
}
dynamicExtract(data, 'role');





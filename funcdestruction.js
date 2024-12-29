// 1. Extract User Details

const user = { name: 'Alice', email: 'alice@example.com' };
function displayUser({name,email}){
    console.log(`Name:${name},Email:${email}`)
}
displayUser(user);


// 2. Process Product Data

const product = { name1: 'Laptop' };
function displayProduct({name1,price=500}){
    console.log(`${name1} costs $${500}`)
}
displayProduct(product)


// 3. Handle API Response

const apiResponse = { status: 200, data: { id: 101, title: 'Learn JavaScript' } };
function handleResponse({status,data}){
    console.log(`Status:${status}, Data:`, data)
}
handleResponse(apiResponse);


//  4. Update Settings

const settings4 = { theme: 'dark' };
function updateSettings({theme,notification='true'}){
    console.log(`Theme: ${theme}, Notifications: ${notification}`)
}
updateSettings(settings4);


// 5. Filter Search Parameters

const searchParams = { query: 'JavaScript', page: 1 };
function filterSearch({query,page}){
    console.log(`Query: ${query}, Page ${page}`)
}
filterSearch(searchParams);


// 6. Log Task Details

const task = { id: 1, title: 'Do homework', completed: false };
function logTaskDetails({id,completed}){
    console.log(`Task ID: ${id}, Completed: ${completed}`)
}
logTaskDetails(task);


//  7. Extract Nested Profile Information

const profile7 = { name: 'Bob', location: { city: 'Berlin', country: 'Germany' } };
function showProfile({name,location:{city}}){
    console.log(`${name} lives in ${city}`)
}
showProfile(profile7);


// 8. Map Over Users

const users8 = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
];
function logUsers(userArray){
    userArray.forEach(({name,email})=>{
        console.log(`Name: ${name}, Email: ${email}`)
    });
}
logUsers(users8);


// 9. Combine Properties Using Rest

const user9 = { name: 'Charlie', age: 30, country: 'USA' };
function extractUserDetails({name,...details}){
    console.log(`Name: ${name}, Details: `,details)
}
extractUserDetails(user9);


// 10. Handle Dynamic Destructuring

const user10 = { name: 'Dave', age: 35, email: 'dave@example.com' };
function getDynamicValue({email}){
    return email;
}
console.log(getDynamicValue(user10, 'email'));


// 11. Extract Nested Properties with Default Values

const config = { database: { host: 'localhost', port: 5432 } };
function displayConfig({database:{host,port,user="admin"}}){
    console.log(`Host: ${host}, Port: ${port}, User: ${user}`)
}
displayConfig(config);


// 12. Swap Variables Using Destructuring

// let a = 1, b = 2;


// 13. Handle Missing Keys Gracefully

const data = { id: 42 };
function processData({id,name="Unknown"}){
    console.log(`ID: ${id}, Name: ${name}`)
}
processData(data);


// 14. Merge Objects with Rest and Destructuring

const user1 = { name: 'Eve', age: 28 };
const user2 = { country: 'France' };
function mergeUsers(user1,user2){
    const mergedUser={...user1,...user2};
    console.log(mergedUser)
}
mergeUsers({...user1,...user2 });


// 15. Extract Coordinates from Object

const point = { x: 10, y: 20, z: 30 };
function extractCoordinates({x,y}){
    console.log(`X: ${x}, Y: ${y}`)
}
extractCoordinates(point);


// 16. Destructure Array Elements

const numbers = [100, 200, 300];
function logFirstTwo([a,b]){
    console.log(`First: ${a}, Second: ${b}`)
}
logFirstTwo(numbers);


// 17. Extract Values with Aliases

const user17 = { userId: 7, userName: 'John' };
function logUser({userId:id,userName:name}){
    console.log(`ID: ${id}, Name: ${name}`)
}
logUser(user17);


// 18. Flatten Nested Objects

const data18 = { user: { id: 1, profile: { name: 'Anna', age: 25 } } };
function flattenObject({user:{id,profile:{name,age}}}){
    console.log(`ID: ${id}, Name: ${name}, Age: ${age}`)
}
flattenObject(data18);


// 19. Destructure Function Parameters with Defaults

// logRole({ name: 'Ella' });


// 20. Destructure Arrays with Rest

const items = [1, 2, 3, 4];
function extractRest([a,...b]){
    console.log(`First: ${a}, Rest: `,b)
}
extractRest(items);


// 21. Dynamic Nested Destructuring

// const obj = { details: { address: { city: 'Paris' } } };
// function getNestedValue({details:{address:{city}}}){
//     console.log(getNestedValue(obj, 'address.city'));
// }
// getNestedValue(obj)


//  22. Validate and Destructure

const settings = { theme: 'light' };
function validateAndLog(){
    console.log()
}
validateAndLog(settings);



// 23. Partial Destructuring

const bigObject = { id: 1, name: 'Test', extra: 'Ignore me' };
function extractImportant({name}){
    console.log(name)
}
extractImportant(bigObject);


// 24. Multi-Level Destructuring in Function Arguments

const data24 = { user24: { profile: { username: 'Max' } } };
function displayUsername({user24:{profile:{username}}}){
    console.log(username)
}
displayUsername(data24);


// 12, 19, 21



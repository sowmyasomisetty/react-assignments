// Basic level

// 1. Create a function `getGreeting` that takes a boolean `isMorning` as input and returns:
//  - "Good morning" if `isMorning` is true.
//  - "Good evening" otherwise.
// Example:
// const getGreeting = (isMorning) => {
//  // Your code here
// };
// console.log(getGreeting(true)); // "Good morning"
// console.log(getGreeting(false)); // "Good evening"

const getGreeting = (isMorning) => {
    // Your code here
    return isMorning?"Good morning":"Good evening"
};
console.log(getGreeting(true)); 
console.log(getGreeting(false)); 


// 2. Rewrite the following `if-else` block using a ternary operator:
// let message;
// if (status === "loading") {
//  message = "Loading...";
// } else {
//  message = "Loaded!";
// }

const status="loading"
const message=(status=="loading")?"Loading...":"Loaded!"
console.log(message)


// 3. Use optional chaining to retrieve the `email` of a user safely without causing an error:
// const user = {
//  profile: {
//  email: "john.doe@example.com",
//  },
// };
// console.log(user.profile?.email); // "john.doe@example.com"
// console.log(user.account?.email); // undefined

const user = {
    profile: {
    email: "john.doe@example.com",
    },
};
console.log(user.profile?.email); 
console.log(user.account?.email); 


//  4. Write a function `getUserCity` that takes a `user` object and returns the `city` from `address`
// safely. If `address` or `city` is missing, return "Unknown".
// Example:
// const user = { name: "Alice" }; // No address property
// const getUserCity = (user) => {
//  // Your code here
// };
// console.log(getUserCity(user)); // "Unknown"

const user1 = { name: "Alice" }; 
const getUserCity = (user1) => {
    // Your code here
    return user1.address?.city||"Unknown"
};
console.log(getUserCity(user1));









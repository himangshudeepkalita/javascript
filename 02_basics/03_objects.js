// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Himangshu",
    "full name": "Himangshu Deep Kalita",
    [mySym]: "mykey1",
    age: 20,
    location: "Bangalore",
    email: "himangshu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "himangshu@chatgpt.com"
// Object.freeze(JsUser);
JsUser.email = "himangshu@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello js user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
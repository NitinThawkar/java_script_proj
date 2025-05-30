// Call, Apply, Bind
// Call, Apply, Bind are used to call a function with a given this value and arguments.
// Call and Apply are pretty interchangeable. The only difference is the way we pass arguments.
// In Call, we pass arguments as a comma-separated list.
// In Apply, we pass arguments as an array.
// Bind returns a new function, allowing you to pass any number of arguments.
// Call and Apply are used to invoke the function immediately.
// Bind is used to create a copy of the function.
// Call and Apply are used to borrow methods from other objects.
// Bind is used to borrow methods from other objects and set the this keyword in methods.
// Call and Apply are used to set the this keyword and invoke the function at the same time.
// Bind is used to set the this keyword and invoke the function later.
// Call and Apply are used to pass arguments to the function.
// Bind is used to pass arguments to the function later.
// Call and Apply are used to execute the function immediately.
// Bind is used to execute the function later.
// Call and Apply are used to set the this keyword and invoke the function immediately.
// Bind is used to set the this keyword and invoke the function later.
// Call and Apply are used to pass arguments to the function.
// Bind is used to pass arguments to the function later.
// Call and Apply are used to execute the function immediately.
// Bind is used to execute the function later.

//************************************************************************************************* */

// Call way 1

let name = {
  firstName: "Sachin",
  lastName: "Tendulkar",
  fullname: function () {
    console.log(this.firstName + " " + this.lastName); // Calling
  },
};

let name2 = {
  firstName: "Rahul",
  lastName: "Dravid",
};

// AKA function borrowing
name.fullname.call(name2); // Rahul Dravid

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Call way 2 1

let name3 = {
  city: "nagpur",
  Area: "dow",
};

let name4 = {
  city: "rooki",
  Area: "rimi",
};

let fullname5 = function (home, work) {
  console.log(
    this.city + " " + this.Area + " home # " + home + " work #" + work
  ); // Calling
};

// AKA function borrowing
fullname5.call(name3, "maharashretra", "pune"); // Rahul Dravid

//apply
fullname5.apply(name3, ["maharashretra", "pune"]);

//bind  it returns a new function and does not call the function
//bind is used to create a copy of the function and we can call it later
let binded = fullname5.bind(name3, "maharashretra", "pune");
console.log(binded);

binded();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

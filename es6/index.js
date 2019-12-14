var nums = [1,2,3,4,5];


// var nums2 = nums.map(i =>i *2); //ES6 style

var nums2 = nums.map(function(i){//all array value return

	return i *2;
});

// var nums3 = nums.filter(i =>!(i%2)); // ES6 style

var nums3 = nums.filter(function(i){

	return !(i%2);
});

console.log(nums);
console.log(nums2);
console.log(nums3);

//array spread
var nums4 = [23,45,66];
var result = [...nums4, 222];

//obj spread
var person = {name : 'Tom', age: 23, };//no have last variable but , accept
var {name,age} = person;

console.log(result);
console.log(name);

//when same property value and index
var name = "Bob";
var age = 22;
// var user = {name: name,age: age}; //old style
var user = {name,age};

console.log(user);

//Old

function add(a,b){
	return a+b;
}

var sub = function(a,b){
	return a-b;
}


//ES6
//new

var mul = (a,b) => {
	return a*b;
}

var div = (a,b) => a/b;

console.log(div(8,2));
console.log(mul(2,3));
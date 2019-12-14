//ES 6

class User{
	constructor(name){
		this.name = name;

	}

	say(){
		console.log("Hello, my name is " + this.name);
	}
}

class Student extends User{

}

var tom = new Student('Tom');
tom.say();
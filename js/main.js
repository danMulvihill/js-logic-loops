console.log("Js Logic Loops");
var output = document.getElementById("output");
console.log(output);

if('foo' === 'foo'){
    console.log("The foos are equal!");
    
    
}

if(5>10){
    console.log("It can't be true!");
}else{
    console.log("it's false, of course.")
}

//write a statement that checks if a num
//is greter than 100

var num = 75;

console.log("Is "+num+" greater than 100?");

if(num>100){
    console.log("yep!")
}else{
    console.log(num+" is not greater than 100")
}

//string

var myStr = "boo";
if(myStr =="foo"){
    console.log("hey, here you are!");
}else{
    console.log("You are in the else");
}

//the else if statement
var nums = [4,5,6]
if (nums[1]<4){
    console.log("You will not end up here");
}else if (5>=5){
    console.log("You'll be here")
}else{
    console.log("you wil not end up here either")    
}

// a function that returns something
function topSpeed(){
    var speed = 75
    return speed+5;
}

console.log(topSpeed());

//a function that accepts args


function addNums(num1 = 1, num2=2){

    return (num1 + num2);
}

console.log(addNums(100,3000))

if(addNums(-3, 2)){
    console.log("Congrats!! The total is "+addNums())
}else{
    console.log("fail");
}

function fullName(fName, lName){
    alert(fName+" "+lName);
    output.innerHTML = fName;
}

//fullName("Dan", "M");

//create a function and store it in a variable

var myGreatFunc = function(){
    console.log('function stored in var');
};

myGreatFunc();


var openDoor = function(door){
    if(door === "yellow"){
        output.innerHTML = "You win the grand prize: A new car!";
    }else if(door === "green"){
        console.log("You win a consolation prize: a toaster");
    }else{
        console.log("You win...nothing. Sorry");
    }
}


//openDoor('yellow');


var foo = {
    color: "crimson"
}

console.log(typeof foo);

var cartoons = ["Tom", "Jerry", "Woodstock", "Snoopy"];
console.log(cartoons.length)
